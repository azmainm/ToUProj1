import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
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

        // Append feedback to Google Sheet
        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEETS_ID,
          range: 'Sheet1!A:C', // 3 columns: Timestamp, Score, Feedback
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[
              new Date(validatedData.timestamp).toLocaleString(),
              validatedData.score || 'N/A',
              validatedData.feedback
            ]],
          },
        });

        console.log('✅ Feedback saved to Google Sheets');
      } catch (sheetsError) {
        console.error('Google Sheets error:', sheetsError);
        // Continue even if Sheets fails
      }
    } else {
      // Fallback: Log to console if Google Sheets not configured
      console.log('📝 User Feedback Received:', {
        feedback: validatedData.feedback,
        score: validatedData.score,
        timestamp: validatedData.timestamp,
      });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Feedback received successfully'
    });

  } catch (error) {
    console.error('Error processing feedback:', error);
    
    // Always return success to ensure good UX
    return NextResponse.json({ 
      success: true,
      message: 'Feedback received successfully'
    });
  }
}

