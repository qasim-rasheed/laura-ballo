'use server';

/**
 * @fileOverview AI chatbot powered by OpenAI API to answer visitor questions about leadership.
 *
 * - leadershipChatbot - A function that handles the chatbot interactions.
 * - LeadershipChatbotInput - The input type for the leadershipChatbot function.
 * - LeadershipChatbotOutput - The return type for the leadershipChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LeadershipChatbotInputSchema = z.object({
  query: z.string().describe('The query from the user about leadership.'),
});
export type LeadershipChatbotInput = z.infer<typeof LeadershipChatbotInputSchema>;

const LeadershipChatbotOutputSchema = z.object({
  response: z.string().describe('The response from the AI leadership coach.'),
});
export type LeadershipChatbotOutput = z.infer<typeof LeadershipChatbotOutputSchema>;

export async function leadershipChatbot(input: LeadershipChatbotInput): Promise<LeadershipChatbotOutput> {
  return leadershipChatbotFlow(input);
}

const leadershipChatbotPrompt = ai.definePrompt({
  name: 'leadershipChatbotPrompt',
  input: {schema: LeadershipChatbotInputSchema},
  output: {schema: LeadershipChatbotOutputSchema},
  prompt: `You are an AI Leadership Coach providing guidance and insights on leadership.

  User Query: {{{query}}}
  Response: `,
});

const leadershipChatbotFlow = ai.defineFlow(
  {
    name: 'leadershipChatbotFlow',
    inputSchema: LeadershipChatbotInputSchema,
    outputSchema: LeadershipChatbotOutputSchema,
  },
  async input => {
    const {output} = await leadershipChatbotPrompt(input);
    return output!;
  }
);
