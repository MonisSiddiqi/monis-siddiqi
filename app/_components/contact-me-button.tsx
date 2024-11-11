import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

export const ContactMeButton = () => {
  return (
    <Button size={"lg"} className="gap-2">
      Contact Me <SendIcon />
    </Button>
  );
};
