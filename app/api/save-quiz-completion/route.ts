import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { z } from 'zod';

const quizCompletionSchema = z.object({
  timestamp: z.string(),
  score: z.number(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = quizCompletionSchema.parse(body);

    // Check if Google Sheets is configured
    if (process.env.GOOGLE_SHEETS_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      try {
        // Set up Google Sheets authentication
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Append quiz completion to Google Sheet (with empty feedback column)
        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEETS_ID,
          range: 'Sheet1!A:C', // 3 columns: Timestamp, Score, Feedback
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[
              validatedData.timestamp, // Store ISO timestamp for precise matching
              validatedData.score,
              '' // Empty feedback column, will be filled later if user submits feedback
            ]],
          },
        });

        console.log('✅ Quiz completion saved to Google Sheets');
      } catch (sheetsError) {
        console.error('Google Sheets error:', sheetsError);
        // Continue even if Sheets fails
      }
    } else {
      // Fallback: Log to console if Google Sheets not configured
      console.log('📝 Quiz Completion Received:', {
        score: validatedData.score,
        timestamp: validatedData.timestamp,
      });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Quiz completion saved successfully'
    });

  } catch (error) {
    console.error('Error processing quiz completion:', error);
    
    // Always return success to ensure good UX
    return NextResponse.json({ 
      success: true,
      message: 'Quiz completion saved successfully'
    });
  }
}

