import { formValidation } from "./../../utils/validation";
import { FormType } from "./../../types";

import type { NextApiRequest, NextApiResponse } from "next";

import sgmail from "@sendgrid/mail";

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
        sendingConvermationEmail(
          email,
          `${firstName} ${lastName}`,
          message,
          phoneNumber
        );
        res.json({ message: "Email is send !" });
      } catch (e) {
        res.status(500).json({ error: "Server is down!" });
      }
      break;
    default:
      res.status(500).json({ error: "Api not found" });
  }
}

const sendingConvermationEmail = (
  email: string,
  name: string,
  message: string,
  phone: string
) => {
  sgmail.setApiKey('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');
  const mail = {
    to: "mostafaelgmal36@gmail.com",
    from: email,
    subject: "Contact Us",
    html: `<div> 
    <h3>Dear,JWT</h3>
    <p>${message}</p>
    <div>His/Her phone is:${phone}</div>
    <h4>Sincerely,</h4>
    <p>${name}</p>
    </div>`,
  };

  sgmail.send(mail);
};
