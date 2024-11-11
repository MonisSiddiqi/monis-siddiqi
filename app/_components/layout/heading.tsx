import { FC } from "react";

type Props = {
  heading: string;
};

export const Heading: FC<Props> = ({ heading }) => {
  return (
    <h1 className="text-4xl font-bold text-center text-gray-800 ">{heading}</h1>
  );
};
