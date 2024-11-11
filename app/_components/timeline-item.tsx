import { CalendarIcon } from "lucide-react";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
  duration: string;
};

export const TimelineItem: FC<Props> = ({ title, description, duration }) => {
  return (
    <div className="flex gap-2 mt-3">
      <div className="flex justify-center flex-col items-center ">
        <div className="size-2.5 min-w-2.5 min-h-2.5 max-w-2.5 max-h-2.5 bg-primary rounded-full"></div>
        <div className="w-[1px] h-full bg-gray-300"></div>
      </div>

      <div className="flex flex-col -mt-2">
        <p className="text-lg font-semibold text-gray-700 ">{title}</p>
        <p className="text-gray-600">{description}</p>

        <div className="flex gap-1 items-center text-primary mt-2">
          <CalendarIcon className="size-5" />
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};
