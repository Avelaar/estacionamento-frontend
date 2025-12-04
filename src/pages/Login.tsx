import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de login - você implementará a integração com Java posteriormente
    if (email && password) {
      toast({
        title: "Login realizado!",
        description: "Redirecionando para o dashboard...",
      });
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      toast({
        variant: "destructive",
        title: "Erro no login",
        description: "Por favor, preencha todos os campos.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Card className="w-full max-w-md shadow-gold border-primary/30 bg-secondary">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-primary">Login</CardTitle>
            <CardDescription className="text-center text-primary/70">
              Entre com suas credenciais para acessar o sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-primary/30 bg-background text-foreground focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-primary">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-primary/30 bg-background text-foreground focus:border-primary"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-gold shadow-gold hover:shadow-lg transition-all">
                Entrar
              </Button>
            </form>
            <div className="mt-4 text-center text-sm text-primary/70">
              Não tem uma conta?{" "}
              <Link to="/cadastro" className="text-primary hover:text-primary-glow font-medium">
                Cadastre-se
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
