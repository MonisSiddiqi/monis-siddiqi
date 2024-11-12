import { BriefcaseBusinessIcon, GraduationCapIcon } from "lucide-react";
import { TimelineItem } from "./timeline-item";

const experienceData = [
  {
    id: "1",
    company: "Xcrino , Delhi",
    position: "Software Engineer",
    duration: "December 2023 - Present",
  },
  {
    id: "2",
    company: "Xcrino, Delhi",
    position: "Software Engineer Intern",
    duration: "June 2023 - November 2023",
  },
];

const educationData = [
  {
    id: "1",
    university: "MDU, Rohtak",
    course: "B.Tech (Computer Science and Engineering)",
    duration: "August 2019 - May 2023",
  },
];

export const Qualifications = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl text-gray-800 font-semibold">My Journey</p>

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center text-primary font-medium">
            <BriefcaseBusinessIcon /> Experience
          </div>

          {experienceData.map(({ id, company, position, duration }) => {
            return (
              <TimelineItem
                key={id}
                title={company}
                description={position}
                duration={duration}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center text-primary font-medium">
            <GraduationCapIcon /> Education
          </div>

          {educationData.map(({ id, university, course, duration }) => {
            return (
              <TimelineItem
                key={id}
                title={university}
                description={course}
                duration={duration}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
