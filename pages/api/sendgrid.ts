import { formValidation } from "./../../utils/validation";
import { FormType } from "./../../types";
import type { NextApiRequest, NextApiResponse } from "next";
import sgmail from "@sendgrid/mail";
sgmail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const errors = formValidation(req.body);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }
      try {
        const { firstName, lastName, email, phoneNumber, message }: FormType =
          req.body;
         sgmail.send({
          to: "reviews6767@gmail.com",
          from: email,
          subject: "Contact Us",
          html: `<div> 
        <h3>Dear,JWT</h3>
        <p>${message}</p>
        <div>His/Her phone is:${phoneNumber}</div>
        <h4>Sincerely,</h4>
        <p>${firstName} ${lastName}</p>
        </div>`,
        });
        res.status(201).json({ message: "Email is send !" });
      } catch (e) {
        console.log(e)
        res.status(500).json({ error: "Server is down!" });
      }
      break;
    default:
      res.status(500).json({ error: "Api not found" });
  }
}
