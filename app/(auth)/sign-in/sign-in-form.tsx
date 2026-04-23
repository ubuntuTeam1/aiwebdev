
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUsers, saveCurrentUser } from "../auth-storage";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate network delay to show the spinner
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const normalizedEmail = email.trim().toLowerCase();
    const user = getUsers().find(
      (storedUser) => storedUser.email === normalizedEmail && storedUser.password === password,
    );

    if (!user) {
      setError("Invalid email or password.");
      setIsSubmitting(false);
      return;
    }

    saveCurrentUser({ fullName: user.fullName, email: user.email });
    setSuccess("Signed in successfully. Redirecting...");
    setIsSubmitting(false);
    setTimeout(() => router.push("/"), 800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 border border-gray-200 rounded-3xl shadow-sm">
        
        {/* Header/Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-blue-500 text-white">
             <span className="text-3xl font-bold">+</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
          <p className="text-sm text-gray-400 mt-1">sign in to your account</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 placeholder:text-gray-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 placeholder:text-gray-300"
              placeholder="Enter your password"
            />
          </div>

          {/* Feedback Messages */}
          {error && <p className="text-sm text-center text-red-500">{error}</p>}
          {success && <p className="text-sm text-center text-emerald-600">{success}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 py-3 text-sm font-bold text-white transition hover:bg-blue-600 active:scale-[0.98] disabled:opacity-70"
          >
            {isSubmitting && (
              <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            {isSubmitting ? "Signing in..." : "Sign In with credentials"}
          </button>

          {/* Footer Link */}
          <div className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/sign-up" className="font-bold text-blue-500 hover:text-blue-600">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}