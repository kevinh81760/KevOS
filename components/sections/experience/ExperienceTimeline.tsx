import type { Experience } from "@/lib/types";
import ExperienceItem from "./ExperienceItem";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </div>
  );
}
