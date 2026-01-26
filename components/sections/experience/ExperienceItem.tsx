import type { Experience } from "@/lib/types";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex flex-col justify-between md:flex-row md:items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {experience.role}
          </h3>
          <p className="text-lg font-semibold text-gray-700">
            {experience.company}
          </p>
        </div>
        <div className="mt-2 text-sm text-gray-500 md:mt-0 md:text-right">
          <span>{experience.period.start}</span>
          <span> - </span>
          <span>{experience.period.end}</span>
        </div>
      </div>
      <p className="mb-4 text-gray-700">{experience.description}</p>
      {experience.achievements && experience.achievements.length > 0 && (
        <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-600">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
