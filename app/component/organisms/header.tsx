'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 flex items-center justify-center rounded-sm">
            <Link href='/'>
            <span className="text-white text-sm font-bold">+</span>
            </Link>
            
          </div>
          <span className="font-semibold text-gray-800">
            Highland Medical Center
          </span>
          
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center gap-4">
          
          {/* Home */}
          <Link href="/" className="text-gray-700 hover:text-black text-sm">
            Home
          </Link>

          {/* Book Appointment Button */}
          <Link
                href="/#doctors"
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
         Book Appointment
        </Link>

          {/* Sign In */}
          <Link
            href="/login"
            className="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
