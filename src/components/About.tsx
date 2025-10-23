import { Sparkles, Trees, Heart } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Um Lugar Especial
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Granja Primavera é o cenário perfeito para transformar seus sonhos em realidade. 
            Cercada pela natureza e com infraestrutura completa, oferecemos o ambiente ideal para 
            casamentos, celebrações e momentos de descanso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 animate-slide-up border border-border">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Eventos Memoráveis</h3>
            <p className="text-muted-foreground leading-relaxed">
              Espaço ideal para casamentos, festas de aniversário e celebrações especiais com toda estrutura necessária.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 animate-slide-up border border-border" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
              <Trees className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Natureza e Tranquilidade</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ambiente cercado por árvores, jardins bem cuidados e uma atmosfera de paz e serenidade.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 animate-slide-up border border-border" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Localização Privilegiada</h3>
            <p className="text-muted-foreground leading-relaxed">
              Apenas 10 minutos do centro de Juiz de Fora, unindo a comodidade da cidade com o charme do campo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
