import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Sobre o Projeto</h1>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              Uma plataforma premium desenvolvida com as melhores tecnologias para uma experiência exclusiva.
            </p>
          </div>

          {/* Main Content */}
          <Card className="shadow-gold border-primary/30 bg-secondary">
            <CardContent className="pt-8 pb-8 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-primary" />
                  Nossa Missão
                </h2>
                <p className="text-primary/70 leading-relaxed">
                  Criar uma plataforma de elite que oferece uma experiência premium e sofisticada,
                  combinando design luxuoso com funcionalidade de alto nível para usuários exigentes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  Tecnologias
                </h2>
                <p className="text-primary/70 leading-relaxed">
                  Sistema desenvolvido com React e TypeScript, garantindo performance superior e código de
                  qualidade profissional. Integração futura com backend Java para máxima robustez e escalabilidade.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  Valores Premium
                </h2>
                <ul className="space-y-2 text-primary/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">★</span>
                    <span>Experiência de usuário exclusiva e refinada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">★</span>
                    <span>Design sofisticado com atenção aos detalhes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">★</span>
                    <span>Performance de alto padrão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">★</span>
                    <span>Segurança e confiabilidade máximas</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/30 bg-secondary hover:shadow-gold transition-shadow">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Design Luxuoso</h3>
                <p className="text-primary/70">
                  Interface premium com tema dourado e preto, adaptada perfeitamente para todos os dispositivos
                  mantendo a elegância e sofisticação.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/30 bg-secondary hover:shadow-gold transition-shadow">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Integração Backend</h3>
                <p className="text-primary/70">
                  Preparado para integração com backend Java, garantindo armazenamento seguro de dados e
                  funcionalidades empresariais avançadas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
