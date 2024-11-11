import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

export const DownloadCvButton = () => {
  return (
    <Button size={"lg"} className="gap-2 bg-gray-800 hover:bg-gray-900">
      Download Cv <DownloadIcon />
    </Button>
  );
};
