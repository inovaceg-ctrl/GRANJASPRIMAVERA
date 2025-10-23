import { Waves, Flame, Utensils, ParkingCircle, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Piscina",
    description: "Piscina ampla e bem cuidada para você aproveitar",
  },
  {
    icon: Flame,
    title: "Churrasqueira",
    description: "Área gourmet completa com churrasqueira e espaço coberto",
  },
  {
    icon: Utensils,
    title: "Área de Refeições",
    description: "Espaço confortável para suas refeições e confraternizações",
  },
  {
    icon: Leaf,
    title: "Jardim Amplo",
    description: "Área verde extensa com paisagismo e muito espaço",
  },
  {
    icon: Users,
    title: "Eventos de Grande Porte",
    description: "Capacidade para receber seus convidados com conforto",
  },
  {
    icon: ParkingCircle,
    title: "Estacionamento",
    description: "Espaço amplo para estacionamento dos seus convidados",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comodidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para tornar seu evento ou estadia perfeitos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
