import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";
import { ContactEmailProps } from "../../../types/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body: ContactEmailProps = await req.json();

  try {
    const data = await resend.emails.send({
      from: body.email,
      to: "bouchalirm7@gmail.com",
      subject: "Portfolio Interaction",
      react: EmailTemplate({ body }), 
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
