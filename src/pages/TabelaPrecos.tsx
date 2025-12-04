import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import { Clock, Car, Sparkles } from "lucide-react";

const TabelaPrecos = () => {
  const precos = [
    { periodo: "Primeira hora", valor: "R$ 8,00", descricao: "Valor fixo" },
    { periodo: "Hora adicional", valor: "R$ 5,00", descricao: "Por hora extra" },
    { periodo: "Diária (até 12h)", valor: "R$ 45,00", descricao: "Período diurno" },
    { periodo: "Mensalista", valor: "R$ 280,00", descricao: "Acesso ilimitado" },
  ];

  const planos = [
    {
      titulo: "Básico",
      preco: "R$ 8",
      periodo: "/hora",
      icon: Clock,
      beneficios: [
        "Primeira hora",
        "Segurança 24h",
        "Área coberta",
        "Lavagem básica grátis"
      ]
    },
    {
      titulo: "Diária",
      preco: "R$ 45",
      periodo: "/dia",
      icon: Car,
      beneficios: [
        "Até 12 horas",
        "Segurança premium",
        "Área VIP",
        "Lavagem completa grátis",
        "Wi-Fi gratuito"
      ],
      destaque: true
    },
    {
      titulo: "Mensalista",
      preco: "R$ 280",
      periodo: "/mês",
      icon: Sparkles,
      beneficios: [
        "Acesso ilimitado",
        "Vaga fixa reservada",
        "Segurança premium",
        "Lavagens ilimitadas",
        "Manobrista incluso"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tabela de Preços
          </h1>
          <p className="text-primary/70 text-lg">
            Escolha o plano ideal para você
          </p>
        </div>

        {/* Planos em Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {planos.map((plano, index) => (
            <Card 
              key={index}
              className={`shadow-gold border-primary/30 bg-secondary hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                plano.destaque ? 'border-primary border-2' : ''
              }`}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                  <plano.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">{plano.titulo}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plano.preco}</span>
                  <span className="text-primary/70">{plano.periodo}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plano.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-center text-primary/80">
                      <span className="mr-2">✓</span>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabela Detalhada */}
        <Card className="shadow-gold border-primary/30 bg-secondary hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Tabela Detalhada</CardTitle>
            <CardDescription className="text-primary/70">
              Valores por período de utilização
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-primary/20 hover:bg-primary/5">
                  <TableHead className="text-primary font-bold">Período</TableHead>
                  <TableHead className="text-primary font-bold">Valor</TableHead>
                  <TableHead className="text-primary font-bold">Descrição</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {precos.map((item, index) => (
                  <TableRow 
                    key={index}
                    className="border-primary/20 hover:bg-primary/5 transition-colors"
                  >
                    <TableCell className="font-medium text-primary">{item.periodo}</TableCell>
                    <TableCell className="text-primary font-bold">{item.valor}</TableCell>
                    <TableCell className="text-primary/70">{item.descricao}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TabelaPrecos;
