import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, TrendingUp, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const stats = [
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Atividades",
      value: "48",
      description: "Tarefas concluídas este mês",
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Usuários",
      value: "2,345",
      description: "Usuários ativos na plataforma",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Crescimento",
      value: "+12%",
      description: "Comparado ao mês anterior",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Dashboard</h1>
            <p className="text-primary/70 mt-1">Bem-vindo de volta! Aqui está um resumo das suas atividades.</p>
          </div>
          <Button 
            variant="outline" 
            asChild 
            className="flex gap-2 border-primary text-primary hover:bg-primary/10"
          >
            <Link to="/logout">
              <LogOut className="w-4 h-4" />
              Sair
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="border-primary/30 bg-secondary hover:shadow-gold transition-all"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-primary/70">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <p className="text-xs text-primary/60 mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activity Section */}
        <Card className="shadow-gold border-primary/30 bg-secondary">
          <CardHeader>
            <CardTitle className="text-primary">Atividades Recentes</CardTitle>
            <CardDescription className="text-primary/70">Suas últimas atividades no sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-4 rounded-lg border border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-sm" />
                    <div>
                      <p className="font-medium text-primary">Atividade {item}</p>
                      <p className="text-sm text-primary/60">
                        Realizada há {item} hora{item > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-glow hover:bg-primary/10"
                  >
                    Ver detalhes
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
