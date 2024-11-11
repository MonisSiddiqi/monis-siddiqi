const skillsData = [
  {
    id: "1",
    title: "Languages",
    description: "Javascript, C/C++, SQL",
  },
  {
    id: "2",
    title: "Frontend",
    description: "React, Next.js, Redux, HTML, CSS, JavaScript",
  },
  {
    id: "3",
    title: "Backend",
    description: "Node.js, Nest.js, Express.js",
  },
  {
    id: "4",
    title: "Database",
    description: "PostgreSQL, MongoDB, MySQL",
  },
];

export const Skills = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <p className="text-2xl font-semibold text-gray-800">Skills</p>

      {skillsData.map(({ id, title, description }) => {
        return (
          <p key={id} className="text-gray-500">
            {title}: <span className="text-gray-700">{description}</span>
          </p>
        );
      })}
    </div>
  );
};
