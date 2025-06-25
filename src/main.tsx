
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Error handling for the entire app
const renderApp = () => {
  try {
    const root = document.getElementById("root");
    if (!root) throw new Error("Root element not found");
    
    createRoot(root).render(<App />);
  } catch (error) {
    console.error("Failed to render application:", error);
    // Display a fallback UI
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: white; background: #121212; padding: 20px;">
          <h1 style="font-size: 2rem; margin-bottom: 1rem;">Something went wrong</h1>
          <p style="font-size: 1rem; max-width: 500px; margin-bottom: 2rem;">We're having trouble loading the application. Please try refreshing the page.</p>
          <button onclick="window.location.reload()" style="background: #e11d48; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-weight: bold;">Refresh Page</button>
        </div>
      `;
    }
  }
};

renderApp();
