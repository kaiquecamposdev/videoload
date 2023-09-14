import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

import { Button } from "./components/ui/button";
import { Github } from "lucide-react";
import { Label } from "./components/ui/label";
import { PromptSelect } from "./components/prompt-select";
import { Separator } from "./components/ui/separator";
import { Slider } from "./components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { VideoInputForm } from "./components/video-input-form";
import { Wand2 } from "lucide-react";
import { useCompletion } from "ai/react"
import { useState } from "react";

export function App() {
const [temperature, setTemperature] = useState(0.5)
const [videoId, setVideoId] = useState<String | null>(null)

const { input, setInput, handleInputChange, handleSubmit, completion, isLoading} = useCompletion({
  api: "http://localhost:8000/ai/complete",
  body: {
    videoId,
    temperature,
  },
  headers: {
    "Content-Type": "application/json",
  }
})

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-between border-b px-6 py-3">
        <h1 className="text-xl font-bold">videoload.ia</h1>
        <div className="flex items-center gap-3 ">
          <span className="text-small text-muted-foreground">
            Desenvolvido com 💜 por Kaique.
          </span>
          <Separator orientation="vertical" className="h-6" />
          <a href="https://github.com/kaiquecamposdev">
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </a>
        </div>
      </div>
      <main className="flex flex-1 gap-6 p-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid flex-1 grid-rows-2 gap-4">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
              value={input}
              onChange={handleInputChange}
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              value={completion}
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável{" "}
            <code className="text-violet-400">{"{transcription}"}</code> no seu
            prompt para adicionar o conteúdo da transcrição do vídeo
            selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <VideoInputForm onVideoUploaded={setVideoId}/>

          <Separator />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <PromptSelect onPromptSelected={setInput} />
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs italic text-muted-foreground">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider 
                min={0} 
                max={1} 
                step={0.1} 
                value={[temperature]}
                onValueChange={(value) => setTemperature(value[0])}
              />
              <span className="block text-xs italic leading-relaxed text-muted-foreground">
                valores mais altos tendem a deixar os resultados mais criativos
                e com possíveis erros.
              </span>
            </div>

            <Separator />

            <Button disabled={isLoading} type="submit" className="w-full gap-2">
              Executar
              <Wand2 className="wl-2 h-4 w-4" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
