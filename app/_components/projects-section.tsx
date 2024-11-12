import { Heading } from "./layout/heading";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const projectsData = [
  {
    id: "1",
    title: "Connect Plus",
    image: "https://placehold.co/600x400",
    description:
      "An application to allow users to connect with others and share our thoughts",
  },
  {
    id: "2",
    title: "Task Remember",
    image: "https://placehold.co/600x400",
    description:
      "An application to allow users to connect with others and share our thoughts",
  },
  {
    id: "3",
    title: "Task Remember",
    image: "https://placehold.co/600x400",
    description:
      "An application to allow users to connect with others and share our thoughts",
  },
  {
    id: "4",
    title: "Task Remember",
    image: "https://placehold.co/600x400",
    description:
      "An application to allow users to connect with others and share our thoughts",
  },
  {
    id: "5",
    title: "Task Remember",
    image: "https://placehold.co/600x400",
    description:
      "An application to allow users to connect with others and share our thoughts",
  },
  {
    id: "6",
    title: "Task Remember",
    image: "https://placehold.co/600x400",
    description:
      "An application to allow users to connect with others and share our thoughts",
  },
  {
    id: "7",
    title: "Task Remember",
    image: "https://placehold.co/600x400",
    description:
      "An application to allow users to connect with others and share our thoughts",
  },
];

export const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <Heading heading="Projects" className="text-start" />
          <p className=" text-gray-500">
            Explore a selection of my projects, showcasing a variety of web
            applications and solutions I{"'"}ve developed using modern
            technologies like React, Node.js, PostgreSQL, and more. These
            projects reflect my skills in frontend and backend development,
            database optimization, and responsive design, demonstrating my
            ability to solve complex problems and deliver impactful results.
            Some projects are available on GitHub with live demos, while others,
            completed for enterprise clients, remain confidential but highlight
            my experience in handling large-scale, secure, and data-driven
            applications.
          </p>

          <Button
            size={"lg"}
            className="gap-2 w-fit bg-gray-800 hover:bg-gray-900"
          >
            {" "}
            View All <ArrowRightIcon />{" "}
          </Button>
        </div>

        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="flex flex-col gap-10"
          >
            <CarouselContent>
              {projectsData.map((project) => {
                return (
                  <CarouselItem key={project.id} className="basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col gap-1 aspect-square items-center justify-center p-6">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <p>{project.title}</p>
                          <p>{project.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="w-full justify-center gap-2 flex">
              <CarouselPrevious className="static" />
              <CarouselNext className="static" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
