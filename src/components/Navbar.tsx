import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Star } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/sobre", label: "Sobre" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/cadastro-veiculos", label: "Cadastro Veículos" },
    { path: "/tabela-precos", label: "Preços" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-secondary/95 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary-glow transition-colors">
            <Star className="w-7 h-7 fill-primary text-primary" />
            StarPark
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? "text-primary" : "text-primary/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2">
              <Button variant="ghost" asChild className="text-primary hover:text-primary-glow hover:bg-primary/10">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-gradient-gold shadow-gold hover:shadow-lg transition-shadow">
                <Link to="/cadastro">Cadastrar</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-primary/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.path) ? "text-primary" : "text-primary/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" asChild className="w-full text-primary hover:text-primary-glow hover:bg-primary/10">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild className="w-full bg-gradient-gold shadow-gold">
                <Link to="/cadastro" onClick={() => setIsOpen(false)}>
                  Cadastrar
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
