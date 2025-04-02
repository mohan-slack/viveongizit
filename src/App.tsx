
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Products from "./pages/Products";
import "./App.css";

const queryClient = new QueryClient();

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
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RouterProvider router={router} />
        <Toaster />
        <Sonner />
        
        {/* Global styles */}
        <style jsx global>{`
          .bg-noise {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E");
          }
          
          .bg-conic-gradient {
            background: conic-gradient(
              from 0deg,
              hsl(344, 100%, 50%),
              hsl(200, 100%, 50%),
              hsl(272, 100%, 65%),
              hsl(344, 100%, 50%)
            );
          }
        `}</style>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
