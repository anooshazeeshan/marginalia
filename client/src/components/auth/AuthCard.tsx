import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "@/services/auth.service";

interface AuthCardProps {
  mode: "login" | "signup";
}

export default function AuthCard({ mode }: AuthCardProps) {
  const isSignup = mode === "signup";

  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (!isSignup) {
      return;
    }

    try {
      setLoading(true);

      await signup({
        displayName,
        username,
        email,
        password,
      });

      navigate("/feed");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ??
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md rounded-3xl border bg-white p-10 shadow-sm">
      <h1 className="text-4xl font-serif">
        {isSignup ? "Join Marginalia" : "Welcome Back"}
      </h1>

      <p className="mt-4 text-gray-600 leading-7">
        {isSignup
          ? "Create your literary home."
          : "Continue your conversation with the books you love."}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-5"
      >
        {isSignup && (
          <>
            <input
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) =>
                setDisplayName(e.target.value)
              }
              className="w-full rounded-2xl border px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full rounded-2xl border px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-2xl border px-5 py-4 outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full rounded-2xl border px-5 py-4 outline-none focus:ring-2 focus:ring-black"
        />

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-black text-white py-4 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
        >
          {loading
            ? "Creating..."
            : isSignup
            ? "Create Account"
            : "Sign In"}
        </button>
      </form>

      <p className="mt-8 text-center text-gray-500">
        {isSignup
          ? "Already have an account?"
          : "New to Marginalia?"}{" "}
        <Link
          to={isSignup ? "/login" : "/signup"}
          className="font-medium text-black"
        >
          {isSignup
            ? "Sign In"
            : "Create an account"}
        </Link>
      </p>
    </div>
  );
}