"use client";

interface ProjectItemProps {
  name: string;
  fileExtension: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function ProjectItem({ name, fileExtension, isSelected, onClick }: ProjectItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
        isSelected
          ? "bg-[#242424] text-white border border-[#2a2a2a]"
          : "bg-transparent text-white/70 hover:bg-[#1a1a1a] hover:text-white border border-transparent"
      }`}
    >
      <span className="text-medium font-semibold">{name}</span>
    </button>
  );
}
