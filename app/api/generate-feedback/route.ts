import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';

const feedbackRequestSchema = z.object({
  question: z.string(),
  options: z.array(z.object({
    text: z.string(),
    impact: z.enum(['low', 'medium', 'high'])
  })),
  selectedOption: z.object({
    text: z.string(),
    impact: z.enum(['low', 'medium', 'high'])
  })
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = feedbackRequestSchema.parse(body);
    const { question, options, selectedOption } = validatedData;

    // Generate feedback using GPT-4o-mini
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a friendly, encouraging sustainability expert providing feedback on Christmas holiday choices. 
Your feedback should be:
- Warm and positive in tone
- 2-3 sentences maximum
- Include relevant emojis
- Acknowledge their choice
- For LOW impact: Enthusiastically praise and reinforce the behavior
- For MEDIUM impact: Acknowledge the good effort and suggest one specific improvement
- For HIGH impact: Be constructive (not preachy), suggest sustainable alternatives

Format: Direct, conversational feedback without headers or bullet points.`
        },
        {
          role: "user",
          content: `Question: "${question}"

Available options:
${options.map((opt, i) => `${i + 1}. ${opt.text} (${opt.impact} impact)`).join('\n')}

User selected: "${selectedOption.text}" (${selectedOption.impact} impact)

Provide tailored feedback for this choice focusing on sustainability.`
        }
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    const generatedFeedback = completion.choices[0]?.message?.content?.trim();

    if (!generatedFeedback) {
      throw new Error('No feedback generated');
    }

    return NextResponse.json({ 
      feedback: generatedFeedback,
      source: 'ai'
    });

  } catch (error) {
    console.error('Error generating feedback:', error);
    
    // Return error so client can use hardcoded fallback
    return NextResponse.json(
      { 
        error: 'Failed to generate feedback',
        source: 'error'
      },
      { status: 500 }
    );
  }
}

