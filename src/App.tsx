
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Products from "./pages/Products";
import HuxAuraRing from "./pages/HuxAuraRing";
import DynamicBackground from "@/components/DynamicBackground";
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

// Create router using the recommended createBrowserRouter API
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/hux-aura-ring",
    element: <HuxAuraRing />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-viveon-darker text-white relative overflow-hidden">
          <DynamicBackground />
          <RouterProvider router={router} />
          <Toaster />
          <Sonner />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
