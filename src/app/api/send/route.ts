import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";
import { ContactEmailProps } from "../../../types/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body: ContactEmailProps = await req.json(); // Explicitly type the body

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bouchalirm7@gmail.com",
      subject: "Portfolio Interaction",
      react: EmailTemplate({ body }), // Ensure `body` type matches
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
