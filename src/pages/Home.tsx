  import { Link } from "react-router-dom";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent } from "@/components/ui/card";
  import { Star, Zap, Shield, Crown } from "lucide-react";
  import Navbar from "@/components/Navbar";
  import luxuryCar from "@/assets/luxury-car.jpg";

  const Home = () => {
    const features = [
      {
        icon: <Crown className="w-12 h-12 text-primary" />,
        title: "Premium",
        description: "Experiência exclusiva com design sofisticado e elegante.",
      },
      {
        icon: <Zap className="w-12 h-12 text-primary" />,
        title: "Performance",
        description: "Velocidade e eficiência em cada detalhe do sistema.",
      },
      {
        icon: <Shield className="w-12 h-12 text-primary" />,
        title: "Elite",
        description: "Segurança de nível superior para proteger seus dados.",
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-hero">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative container mx-auto px-4 pt-20 pb-20 md:pt-32 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center md:text-left">
                <div className="flex justify-center md:justify-start">
                  <Star className="w-20 h-20 text-primary fill-primary animate-pulse" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                  Bem-vindo ao
                  <span className="block bg-gradient-gold bg-clip-text text-transparent">
                    StarPark
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-primary/80 max-w-2xl">
                  Estacionamento premium com segurança e tecnologia para seu veículo de luxo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                  <Button size="lg" asChild className="bg-gradient-gold text-lg h-12 px-8 shadow-gold hover:shadow-lg transition-all">
                    <Link to="/cadastro">Começar Agora</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild 
                    className="text-lg h-12 px-8 border-primary text-primary hover:bg-primary/10"
                  >
                    <Link to="/sobre">Saiba Mais</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src={luxuryCar} 
                  alt="Carro de Luxo Premium" 
                  className="relative rounded-2xl shadow-gold w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-primary/30 bg-secondary hover:shadow-gold hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group"
              >
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                  <p className="text-primary/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    );
  };

  export default Home;
