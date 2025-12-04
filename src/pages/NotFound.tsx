import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">404</h1>
        <p className="mb-4 text-xl text-primary/70">Oops! Página não encontrada</p>
        <a href="/" className="text-primary hover:text-primary-glow underline transition-colors">
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
