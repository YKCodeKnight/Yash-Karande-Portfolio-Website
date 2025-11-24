import { Badge } from "./ui/badge";
import { Award } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  certificateLink?: string;
}

export function ExperienceCard({ title, subtitle, description, skills, certificateLink }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-3xl px-8 py-6 hover:shadow-[0_0_30px_rgba(0,31,84,0.4)] transition-shadow duration-300">
      <h4 className="text-black mb-2 text-[26px]" style={{ textAlign: 'justify' }}>{title}</h4>
      <p className="italic text-[18px] mb-3 text-gray-600" style={{ textAlign: 'justify' }}>{subtitle}</p>
      <p className="mb-4 text-gray-700 text-[20px]" style={{ textAlign: 'justify' }}>{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {skills.map((skill) => (
          <Badge key={skill} className="bg-[#001F54] text-[#F5F5DC] hover:bg-[#001F54]/90 rounded-full px-3 py-1 text-[14px]">
            {skill}
          </Badge>
        ))}
      </div>
      {certificateLink && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href={certificateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#001F54] hover:text-[#001F54]/80 transition-colors"
              >
                <Award className="w-5 h-5" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Certificate</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}