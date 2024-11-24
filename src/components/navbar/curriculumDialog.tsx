import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { previewCurriculumLink } from "@/constants/curriculum";
import { DictionaryType } from "@/models/translate";
import { handleDownloadCurriculum } from "@/utils/downloadCurriculum";
import { Download, Eye } from "lucide-react";
import { useState } from "react";
import { Loader } from "../loader";

type CurriculumDialogProps = {
  dictionary: DictionaryType;
};

export function CurriculumDialog({ dictionary }: CurriculumDialogProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog
      onOpenChange={() => {
        setIsLoading(true);
      }}
    >
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 p-5 border-foreground" variant="outline">
          <Eye size={20} />
          {dictionary.navbar["resume-download-button"]}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Meu Currículo</DialogTitle>
          <DialogDescription>
            Visualize meu currículo e faça o download se desejar.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center items-center relative aspect-[4/3] w-full">
          {isLoading && <Loader />}
          <iframe
            src={previewCurriculumLink}
            className={isLoading ? "size-0" : "w-full h-full"}
            allow="autoplay"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        <Button
          onClick={() => handleDownloadCurriculum()}
          variant="secondary"
          className="w-full mt-4 border"
        >
          <Download className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </DialogContent>
    </Dialog>
  );
}
