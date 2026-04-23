
import SignInForm from "./sign-in-form";

export default function SignInPage() {
  return (
    // We use a light gray background to make the white card pop
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* We keep this wrapper minimal because the 
            SignInForm now contains the white card, 
            logo, and "Sign Up" footer links.
        */}
        <SignInForm />
      </div>
    </main>
  );
}