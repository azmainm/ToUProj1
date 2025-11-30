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

        // Find the row with matching timestamp and score to update
        const timestampToFind = validatedData.timestamp;
        const scoreToFind = validatedData.score;

        // Get all rows to find the matching one
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.GOOGLE_SHEETS_ID,
          range: 'Sheet1!A:C',
        });

        const rows = response.data.values || [];
        let rowIndex = -1;

        // Find the row with matching timestamp and score (skip header row if exists)
        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          // Match timestamp (column A) and score (column B)
          if (row[0] === timestampToFind && row[1] == scoreToFind) {
            rowIndex = i + 1; // Google Sheets is 1-indexed
            break;
          }
        }

        if (rowIndex > 0) {
          // Update the feedback column (column C) for the found row
          await sheets.spreadsheets.values.update({
            spreadsheetId: process.env.GOOGLE_SHEETS_ID,
            range: `Sheet1!C${rowIndex}`, // Update only column C for this row
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [[validatedData.feedback]],
            },
          });

          console.log(`✅ Feedback updated in Google Sheets at row ${rowIndex}`);
        } else {
          // If no matching row found, append as fallback (shouldn't happen in normal flow)
          console.warn('⚠️ No matching row found, appending new row');
          await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_ID,
            range: 'Sheet1!A:C',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [[
                timestampToFind,
                scoreToFind,
                validatedData.feedback
              ]],
            },
          });
          console.log('✅ Feedback saved to Google Sheets (appended)');
        }
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

