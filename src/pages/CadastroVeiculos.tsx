import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const CadastroVeiculos = () => {
  const [formData, setFormData] = useState({
    placa: "",
    modelo: "",
    entrada: "",
    saida: "",
    valor: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Veículo cadastrado!",
      description: "O veículo foi registrado com sucesso.",
    });
    
    setFormData({
      placa: "",
      modelo: "",
      entrada: "",
      saida: "",
      valor: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-2xl mx-auto shadow-gold border-primary/30 bg-secondary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center text-primary">
              Cadastro de Veículos
            </CardTitle>
            <CardDescription className="text-center text-primary/70">
              Registre a entrada e saída de veículos no estacionamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="placa" className="text-primary">Placa do Veículo</Label>
                  <Input
                    id="placa"
                    type="text"
                    placeholder="ABC-1234"
                    value={formData.placa}
                    onChange={handleChange}
                    className="border-primary/30 bg-background text-foreground focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modelo" className="text-primary">Modelo</Label>
                  <Input
                    id="modelo"
                    type="text"
                    placeholder="Ex: Honda Civic"
                    value={formData.modelo}
                    onChange={handleChange}
                    className="border-primary/30 bg-background text-foreground focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="entrada" className="text-primary">Data/Hora Entrada</Label>
                  <Input
                    id="entrada"
                    type="datetime-local"
                    value={formData.entrada}
                    onChange={handleChange}
                    className="border-primary/30 bg-background text-foreground focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="saida" className="text-primary">Data/Hora Saída</Label>
                  <Input
                    id="saida"
                    type="datetime-local"
                    value={formData.saida}
                    onChange={handleChange}
                    className="border-primary/30 bg-background text-foreground focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="valor" className="text-primary">Valor (R$)</Label>
                <Input
                  id="valor"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.valor}
                  onChange={handleChange}
                  className="border-primary/30 bg-background text-foreground focus:border-primary"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-gold shadow-gold hover:shadow-lg transition-all"
              >
                Cadastrar Veículo
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CadastroVeiculos;
