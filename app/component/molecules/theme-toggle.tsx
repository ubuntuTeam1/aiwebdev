"use client";
 
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
 
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
 
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:scale-0 transition-all dark:-rotate-90 " />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:scale-100 transition-all dark:rotate-0 " />
    </Button>
  );
}


// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = React.useState(false);

//   // This ensures the component only renders on the client to prevent hydration errors
//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return <div className="w-9 h-9" />; // Placeholder with same dimensions as the button
//   }

//   const isDark = theme === "dark";

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={() => setTheme(isDark ? "light" : "dark")}
//       className="rounded-full relative w-9 h-9 flex items-center justify-center transition-colors"
//       aria-label="Toggle theme"
//     >
//       {/* Sun Icon: Visible in Light Mode, hidden in Dark Mode */}
//       <Sun 
//         className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
//           isDark 
//             ? "rotate-90 scale-0 opacity-0" 
//             : "rotate-0 scale-100 opacity-100"
//         }`} 
//       />
      
//       {/* Moon Icon: Hidden in Light Mode, visible in Dark Mode */}
//       <Moon 
//         className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
//           isDark 
//             ? "rotate-0 scale-100 opacity-100" 
//             : "-rotate-90 scale-0 opacity-0"
//         }`} 
//       />
//     </Button>
//   );
// }