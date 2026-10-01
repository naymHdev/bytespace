import type { Metadata } from "next";
import { RegisterForm } from "../_components/register-form";

export const metadata: Metadata = {
  title: "Register",
  description: "Sign up and create your account on ByteSpace",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
