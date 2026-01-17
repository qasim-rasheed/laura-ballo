'use server';

import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export type NewsletterState = {
  message: string;
  success: boolean;
};

export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const validatedFields = newsletterSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid email.',
      success: false,
    };
  }

  const { email } = validatedFields.data;

  // Here you would typically integrate with a service like ConvertKit.
  // For this example, we'll just log it to the console.
  console.log(`New newsletter subscription: ${email}`);
  
  // Simulate an API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: `Thank you for subscribing! A confirmation has been sent to ${email}.`,
    success: true,
  };
}
