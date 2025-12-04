import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Logout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Simulação de logout - você implementará a lógica real com Java posteriormente
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-gold border-primary/30 bg-secondary text-center">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/20 p-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-primary">Logout Realizado</CardTitle>
          <CardDescription className="text-primary/70">
            Você foi desconectado com sucesso do sistema.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-primary/70">
            Obrigado por usar nossa plataforma premium. Esperamos vê-lo novamente em breve!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild className="flex-1 bg-gradient-gold shadow-gold hover:shadow-lg transition-all">
              <Link to="/login">Fazer Login Novamente</Link>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className="flex-1 border-primary text-primary hover:bg-primary/10"
            >
              <Link to="/">Voltar ao Início</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logout;
