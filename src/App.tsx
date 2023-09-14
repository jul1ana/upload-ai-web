import { Github } from "lucide-react";
import { Button } from "./components/ui/button";

export function App() {
  return (
    <div>
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Desenvolvido por Juliana Dantas
          </span>
          <Button variant="link">
            <Github className="w-4 h-4 mr-1" />
            Github
          </Button>
        </div>
      </header>
    </div>
  );
}
