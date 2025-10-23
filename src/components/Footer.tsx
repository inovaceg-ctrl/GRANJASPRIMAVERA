import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 text-card-foreground">Granja Primavera</h3>
          <p className="text-muted-foreground mb-4">
            Tornando seus momentos especiais inesquecíveis
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>em Juiz de Fora - MG</span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Granja Primavera. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
