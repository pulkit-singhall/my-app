import { Resend } from 'resend';
import EmailTemplate from '../../email/emailTemplate';
import ApiResponse from '@/types/response';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
    email: string,
    name: string,
    content: string
): Promise<ApiResponse> => {
    try {
        const data = await resend.emails.send(
            {
                from: 'Pulkit Singhal <onboarding@resend.dev>',
                to: email,
                subject: 'Response Collected',
                react: EmailTemplate(
                    name,
                    email,
                    content,
                )
            }
        );
        if (data) {
            return new ApiResponse(
                200,
                true,
                "email sent",
                {
                    data
                }
            )
        }
        return new ApiResponse(
            500,
            false,
            "email not sent",
            {},
        )
    }
    catch (error) {
        return new ApiResponse(
            500,
            false,
            "email not sent",
            {},
            error
        )
    }
}