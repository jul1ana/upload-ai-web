import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <header className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold text-green-600">upload.ai</h1>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground mr-3">
          Desenvolvido por Juliana Dantas
        </span>

        <Separator orientation="vertical" className="h-6" />

        <Button variant="link">
          <Github className="w-4 h-4 mr-1" />
          Github
        </Button>
      </div>
    </header>
  );
}
