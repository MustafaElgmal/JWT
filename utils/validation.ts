import { FormType } from "./../types";
import { phone } from "phone";
export const formValidation = (body: FormType) => {
  const errors: { error: string }[] = [];
  const { firstName, lastName, email, phoneNumber, message } = body;

  if (!firstName) {
    errors.push({ error: "FirstName is required!" });
  }
  if (!lastName) {
    errors.push({ error: "lastName is required!" });
  }
  if (!email) {
    errors.push({ error: "email is required!" });
  }
  if (!phoneNumber) {
    errors.push({ error: "phone is required!" });
  } else {
    const { isValid } = phone(`+2${phoneNumber}`);
    if (!isValid) {
      errors.push({ error: "Phone is not vaild!" });
    }
  }
  if (!message) {
    errors.push({ error: "message is required!" });
  }
  return errors;
};
