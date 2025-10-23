import { Button } from "@/components/ui/button";
import { Phone, Instagram, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  const whatsappNumber = "5532988062082";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma visita à Granja Primavera.");

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende uma visita e conheça pessoalmente nosso espaço
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-1">Telefone / WhatsApp</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    +55 32 8806-2082
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-1">Instagram</p>
                  <a 
                    href="https://instagram.com/granjasprimavera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    @granjasprimavera
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-1">Endereço</p>
                  <p className="text-muted-foreground">Rua Padre José Irany de Oliveira, 10</p>
                  <p className="text-muted-foreground">Granjas Primavera, Vila Ideal</p>
                  <p className="text-muted-foreground">Juiz de Fora - MG</p>
                  <p className="text-sm text-muted-foreground/80 mt-1">10 minutos do centro</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-1">Disponibilidade</p>
                  <p className="text-muted-foreground">Entre em contato para consultar disponibilidade</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Agende uma Visita</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Venha conhecer a Granja Primavera pessoalmente! Entre em contato conosco pelo WhatsApp 
              para agendar uma visita e descobrir como podemos tornar seu evento inesquecível.
            </p>
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full mt-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-lg py-6"
              onClick={() => window.open('https://instagram.com/granjasprimavera', '_blank')}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Seguir no Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
