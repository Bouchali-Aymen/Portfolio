import { FC } from "react";
import { Calendar, Briefcase, MapPin } from "lucide-react";

interface ExperCardProps {
  position: string;
  location: string;
  description: string;
  date: string;
  index: number;
  isVisible: boolean;
  stack: string[];
}

const ExperCard: FC<ExperCardProps> = ({
  description,
  location,
  position,
  date,
  index,
  isVisible,
  stack,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center transition-all duration-700 delay-${index * 200} ${
        isVisible
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${isEven ? "-translate-x-10" : "translate-x-10"}`
      }`}
    >
      <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 z-10">
        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-theme-bg-primary shadow-lg">
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div
        className={`w-full md:w-5/12 ${isEven ? "md:pr-8 ml-12 md:ml-0" : "md:ml-auto md:pl-8 ml-12"}`}
      >
        <div className="group relative">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-theme-accent/20 backdrop-blur-sm border border-theme-accent/30 rounded-full text-sm font-medium text-theme-accent mb-4 ${isEven ? "" : "md:ml-auto md:flex"}`}
          >
            <Calendar className="w-4 h-4" />
            {date}
          </div>

          <div className="bg-theme-card-bg backdrop-blur-sm border border-theme-card-border rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-theme-accent/10 transition-all duration-300 group-hover:border-theme-accent/50">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 bg-theme-accent/20 rounded-lg">
                <Briefcase className="w-5 h-5 text-theme-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-theme-text-primary group-hover:text-theme-accent transition-colors duration-300">
                {position}
              </h3>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-theme-text-muted" />
              <p className="text-theme-text-secondary font-medium">{location}</p>
            </div>

            <p className="text-theme-text-muted leading-relaxed group-hover:text-theme-text-secondary transition-colors duration-300">
              {description}
            </p>

            <div className="absolute inset-0 bg-theme-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex gap-2 flex-wrap items-center w-full">
              {stack.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center mt-4 gap-2 px-4 py-2 bg-theme-accent/20 backdrop-blur-sm border border-theme-accent/30 rounded-full text-sm font-medium text-theme-accent`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperCard;
