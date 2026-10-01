import type { Metadata } from "next";
import { LoginForm } from "../_components/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to access your ByteSpace account",
};

export default function LoginPage() {
  return <LoginForm />;
}
