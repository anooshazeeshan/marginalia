import AuthCard from "@/components/auth/AuthCard";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-paper flex items-center justify-center px-6">
      <AuthCard mode="signup" />
    </main>
  );
}