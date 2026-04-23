// 'use client';

// import Link from 'next/link';
// import { ThemeToggle } from '../molecules/theme-toggle';

// export default function Header() {
//   return (
//     // <header className="w-full bg-gray-100 border-b border-gray-200">
//     //   <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//   <header className="w-full bg-background border-b border-border sticky top-0 z-50 transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
//         {/* Left: Logo + Title */}
//         <div className="flex items-center gap-2">
//           <div className="w-6 h-6 bg-blue-500 flex items-center justify-center rounded-sm">
//             <Link href='/'>
//             <span className="text-white text-sm font-bold">+</span>
//             </Link>
            
//           </div>
//           <span className="text-black font-semibold dark:text-white dark:font-bold tracking-tight">
//             Highland Medical Center
//           </span>
          
//         </div>

//         {/* Right: Navigation */}
//         <nav className="flex items-center gap-4">
          
//           {/* Theme Toggle Added Here */}
//             <ThemeToggle />
        
          
//           {/* Home */}
//           <Link href="/" className="text-black dark:text-white dark:font-bold text-sm font-medium hover:text-blue-600 transition-colors">
//             Home
//           </Link>

        //   {/* Book Appointment Button */}
        //   <Link
        //         href="/#doctors"
        //     className="bg-blue-600 text-white text-sm px-5 py-2 rounded-md hover:bg-blue-700 transition-all shadow-sm font-semibold"
        //     >
        //  Book Appointment
        // </Link>

//           {/* Sign In */}
//           <Link
//             href="/sign-in"
//             className="border border-black/10 dark:border-white/20 text-black dark:text-white dark:font-bold text-sm px-5 py-2 rounded-md hover:bg-accent transition-all "
//           >
//             Sign in
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }



'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '../molecules/theme-toggle';
import { clearCurrentUser, getCurrentUser, CurrentUser } from '../../(auth)/auth-storage';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [user, setUser] = React.useState<CurrentUser | null>(null);

  React.useEffect(() => {
    setMounted(true);
    // Fetch the actual user from your localStorage on mount
    setUser(getCurrentUser());
  }, []);

  const handleSignOut = () => {
    clearCurrentUser(); // Remove from localStorage
    setUser(null);      // Update local state so UI changes immediately
    router.push('/sign-in');
  };

  if (!mounted) return <header className="w-full h-16 bg-background border-b border-border" />;

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 flex items-center justify-center rounded-md">
            <span className="text-white text-lg font-bold">+</span>
          </div>
          <span className="text-black font-semibold dark:text-white dark:font-bold">
            Highland Medical Center
          </span>
        </Link>

        {/* Right: Navigation */}
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          
          <Link href="/" className="text-black dark:text-white dark:font-bold text-sm font-medium">
            Home
          </Link>

            {/* Book Appointment Button */}
          <Link
                href="/#doctors"
            className="bg-blue-600 text-white text-sm px-5 py-2 rounded-md hover:bg-blue-700 transition-all shadow-sm font-semibold"
            >
           Book Appointment
        </Link>

          {/* Logic: If user exists in localStorage, show Avatar. Else show Sign In */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="outline-none">
                  <Avatar className="h-9 w-9 border border-border cursor-pointer">
                    <AvatarFallback className="bg-slate-200 dark:bg-slate-800 font-medium text-black dark:text-white">
                      {user.fullName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent align="end" className="w-56 mt-2 bg-white dark:bg-slate-950">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-bold text-black dark:text-white">{user.fullName}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => router.push('/profile')} className="cursor-pointer dark:text-white dark:font-bold">
                  User Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onSelect={handleSignOut}
                  className="cursor-pointer text-red-600 focus:text-red-600 font-medium dark:font-bold"
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href="/sign-in"
              className="border border-black/10 dark:border-white/20 text-black dark:text-white dark:font-bold text-sm px-5 py-2 rounded-md hover:bg-accent transition-all"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}