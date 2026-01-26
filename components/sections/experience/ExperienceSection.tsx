import { experiences } from "@/lib/data";
import ExperienceTimeline from "./ExperienceTimeline";

export default function ExperienceSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
        Experience
      </h2>
      <ExperienceTimeline experiences={experiences} />
    </section>
  );
}
