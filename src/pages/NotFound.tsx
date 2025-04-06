
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const goHome = () => {
    // Navigate home without state to avoid potential issues
    navigate('/');
    // Manually scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-viveon-dark to-black">
      <div className="text-center p-8 rounded-lg border border-gray-700 backdrop-blur-md bg-black/30 shadow-xl">
        <h1 className="text-6xl font-bold mb-6 gradient-text bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Button
          onClick={goHome}
          className="bg-viveon-red hover:bg-viveon-red/80 text-white font-medium"
        >
          <Home className="mr-2" size={18} />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
