import ApiResponse from "@/types/response";
import nodemailer from "nodemailer";
import { nodeMailerTemplate } from "../../email/nodeMailerTemplate";

const myEmail = process.env.EMAIL
const password = process.env.EMAIL_PASSWORD

const transport = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: myEmail,
            pass: password
        }
    }
)

export async function sendNodeMail(name: string, email: string): Promise<ApiResponse> {
    try {
        const mailOptions :any = {
            from: myEmail,
            to: email,
            subject: 'Response Collected',
            text: 'Thanks for your valuable input',
            html: nodeMailerTemplate(name),
        }
        await transport.sendMail(mailOptions)
        return new ApiResponse(
            200,
            true,
            "Mail sent",
            {}
        ) 
    } catch (error) {
        return new ApiResponse(
            500,
            false,
            "Mail sending failed",
            {}
        )
    }
}