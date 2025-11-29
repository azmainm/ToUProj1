import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { z } from 'zod';

const feedbackSchema = z.object({
  feedback: z.string().min(1, "Feedback cannot be empty"),
  timestamp: z.string(),
  score: z.number().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = feedbackSchema.parse(body);

    // Path to store feedback
    const dataDir = join(process.cwd(), 'data');
    const filePath = join(dataDir, 'user-feedback.json');

    // Ensure data directory exists
    try {
      await mkdir(dataDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Read existing feedback or create new array
    let feedbackList = [];
    try {
      const fileContent = await readFile(filePath, 'utf-8');
      feedbackList = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      feedbackList = [];
    }

    // Add new feedback
    feedbackList.push(validatedData);

    // Write back to file
    await writeFile(filePath, JSON.stringify(feedbackList, null, 2));

    return NextResponse.json({ 
      success: true,
      message: 'Feedback saved successfully'
    });

  } catch (error) {
    console.error('Error saving feedback:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to save feedback',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

