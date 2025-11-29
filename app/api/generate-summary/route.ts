import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';

const summaryRequestSchema = z.object({
  answers: z.array(z.object({
    question: z.string(),
    selectedOption: z.string(),
    impact: z.enum(['low', 'medium', 'high'])
  })),
  score: z.number(),
  lowImpact: z.number(),
  mediumImpact: z.number(),
  highImpact: z.number()
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = summaryRequestSchema.parse(body);
    const { answers, score, lowImpact, mediumImpact, highImpact } = validatedData;

    // Generate personalized summary using GPT-4o-mini
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an encouraging sustainability coach providing personalized feedback on Christmas holiday sustainability practices.

Your summary should follow this EXACT structure:
- Start with an acknowledgment of their overall performance
- Highlight 1-2 specific areas where they're doing WELL (mention specific choices)
- Suggest 1-2 specific areas for IMPROVEMENT (be constructive, not judgmental)
- End with an encouraging note about the significance of their efforts

Tone: Warm, personal, motivating, non-preachy
Length: 4-5 sentences (one paragraph)
Include: 1-2 relevant emojis maximum
Avoid: Bullet points, multiple paragraphs, generic advice`
        },
        {
          role: "user",
          content: `Sustainability Score: ${score}%
Low Impact Choices: ${lowImpact}
Medium Impact Choices: ${mediumImpact}
High Impact Choices: ${highImpact}

User's choices:
${answers.map((a, i) => `${i + 1}. ${a.question}
   Answer: ${a.selectedOption} (${a.impact} impact)`).join('\n\n')}

Provide a personalized sustainability summary for this user focusing on what they're doing well, areas to improve, and the significance of their choices.`
        }
      ],
      temperature: 0.8,
      max_tokens: 250,
    });

    const generatedSummary = completion.choices[0]?.message?.content?.trim();

    if (!generatedSummary) {
      throw new Error('No summary generated');
    }

    return NextResponse.json({ 
      summary: generatedSummary,
      source: 'ai'
    });

  } catch (error) {
    console.error('Error generating summary:', error);
    
    // Return error so client can use hardcoded fallback
    return NextResponse.json(
      { 
        error: 'Failed to generate summary',
        source: 'error'
      },
      { status: 500 }
    );
  }
}

