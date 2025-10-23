import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";
import heroImage from "@/assets/pool-night.jpg";

export const Hero = () => {
  const whatsappNumber = "5532988062082";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre o aluguel da Granja Primavera.");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Granja Primavera
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
          Seu refúgio perfeito para eventos inesquecíveis
        </p>
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
          A apenas 10 minutos do centro de Juiz de Fora
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
          >
            <Phone className="mr-2 h-5 w-5" />
            Entre em Contato
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-lg text-lg px-8 py-6"
            onClick={() => window.open('https://instagram.com/granjasprimavera', '_blank')}
          >
            <Instagram className="mr-2 h-5 w-5" />
            @granjasprimavera
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
