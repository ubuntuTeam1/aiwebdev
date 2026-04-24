
"use client";

import { useEffect, useState } from "react";
import { getCurrentUser, CurrentUser } from "@/app/(auth)/auth-storage"; // Adjust path as needed
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = getCurrentUser();
    if (!loggedInUser) {
      router.push("/sign-in");
    } else {
      setUser(loggedInUser);
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-xl font-medium text-slate-600">
            {user.fullName.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl font-bold text-slate-900">{user.fullName}</h1>
        </div>

        {/* Personal Information Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold text-slate-900">Personal Information</h2>
            <button className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline">
              <span>✎</span> Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Full Name</p>
              <p className="text-slate-900 mt-1">{user.fullName}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email</p>
              <p className="text-slate-900 mt-1">{user.email}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Phone</p>
              <p className="text-slate-900 mt-1 text-sm">N/A</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Address</p>
              <p className="text-slate-900 mt-1 text-sm">N/A</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Date of Birth</p>
              <p className="text-slate-900 mt-1 text-sm">N/A</p>
            </div>
          </div>
        </div>

        {/* Appointments Card */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Appointments</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-12 shadow-sm flex flex-col items-center justify-center text-center">
             <p className="text-slate-500 mb-4 text-sm font-medium">No appointments found.</p>
             <Link 
               href="/#doctors"
               className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
             >
               Book an Appointment
             </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

