
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Products from "./pages/Products";
import HuxAuraRing from "./pages/HuxAuraRing";
import DynamicBackground from "@/components/DynamicBackground";
import Navbar from "@/components/Navbar";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import "./App.css";

// Create a new query client with appropriate settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevent refetching when window regains focus
      retry: 1, // Only retry failed requests once
      staleTime: 5 * 60 * 1000, // Data considered fresh for 5 minutes
    },
  },
});

const AppShell = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />
      {isHome && <EnhancedHeroSection />}
      <main id="main" className="min-h-screen relative">
        <DynamicBackground />
        <Outlet />
      </main>
    </>
  );
};

// Create router using the recommended createBrowserRouter API
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Index /> },
      { path: "features", element: <Features /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "products/hux-aura-ring", element: <HuxAuraRing /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RouterProvider router={router} />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
