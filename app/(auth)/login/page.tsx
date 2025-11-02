import Image from "next/image";
import LoginForm from "@/components/auth/login-form";
import { AuthLayout } from "@/components/auth/auth-layout";

export default function LoginPage() {
  return (
    <AuthLayout title="LOGIN">
      {/* Login Form */}
      <LoginForm />
    </AuthLayout>
  );
}
