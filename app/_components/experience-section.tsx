import {
  CloudIcon,
  Code2Icon,
  DatabaseIcon,
  LayersIcon,
  ServerIcon,
} from "lucide-react";
import { Heading } from "./layout/heading";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const servicesData = [
  {
    id: "4",
    icon: LayersIcon,
    title: "Full Stack Development",
    description:
      "Comprehensive end-to-end web solutions from frontend to backend, ensuring seamless integration and performance.",
    skills: [
      "MERN Stack",
      "React.js",
      "Next.js",
      "Node.js",
      "Nest.js",
      "API",
      "Authentication",
      "Testing & Debugging",
    ],
  },
  {
    id: "2",
    icon: Code2Icon,
    title: "Frontend Development",
    description:
      "Crafting responsive and interactive interfaces focused on user experience and modern design principles.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    id: "3",
    icon: DatabaseIcon,
    title: "Backend Development",
    description:
      "Developing scalable and secure server-side applications and RESTful APIs tailored to business needs.",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "RESTful APIs"],
  },
  {
    id: "5",
    icon: ServerIcon,
    title: "Database Architecture & Optimization",
    description:
      "Creating efficient database architectures for scalability, data consistency, and optimal performance.",
    skills: [
      "Schema Design",
      "Query Optimization",
      "Data Modeling",
      "Data Migration",
      "Backup & Recovery",
    ],
  },
  {
    id: "6",
    icon: CloudIcon,
    title: "Cloud Hosting",
    description:
      "Deploying, scaling, and managing web applications with cloud solutions and automated workflows.",
    skills: ["AWS", "Vercel", "Docker", "CI/CD Pipelines"],
  },
];

export const ServicesSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <Heading heading="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {servicesData.map(({ id, title, description, icon, skills }) => {
          const Icon = icon;

          return (
            <Card key={id} className="relative overflow-hidden ">
              <CardHeader className="space-y-2">
                <div className="flex items-center space-x-4">
                  <Icon className="size-10" />
                  <CardTitle className="text-xl">{title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <Badge
                      className="bg-purple-100 text-purple-900 hover:bg-purple-100"
                      key={skillIndex}
                      variant="secondary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
