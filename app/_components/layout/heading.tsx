import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  heading: string;
  className?: string;
};

export const Heading: FC<Props> = ({ heading, className }) => {
  return (
    <h1
      className={cn("text-4xl font-bold text-center text-gray-800 ", className)}
    >
      {heading}
    </h1>
  );
};
