import { Link } from "react-router-dom";
import K from "../constants";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="px-5 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <h1 className="text-white text-3xl font-bold mb-8 sm:text-4xl md:text-4xl lg:text-5xl">
        PROJECTS
      </h1>
      
      <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-12 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-12">
        {K.PROJECTS.map((project, index) => (
          <Link 
            to={project.path} 
            key={index}
            className="group relative block overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="relative h-full bg-gray-800 bg-opacity-40 border border-gray-700 rounded-xl p-5 sm:p-5 md:p-6 lg:p-6 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-opacity-60">
              {/* Project Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4 sm:mb-4 md:mb-5">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                />
              </div>
              
              {/* Project Info */}
              <div className="flex items-start justify-between gap-3 sm:gap-3 md:gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-white text-xl font-semibold mb-1 sm:text-xl md:text-xl lg:text-xl xl:text-xl break-words">
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="text-gray-400 text-sm sm:text-sm md:text-[0.95rem] lg:text-sm line-clamp-2">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                
                {/* Arrow Icon */}
                <div className="p-1.5 sm:p-1.5 md:p-2 rounded-full bg-orange-500 bg-opacity-20 group-hover:bg-opacity-100 transition-all duration-300 flex-shrink-0">
                  <ArrowUpRight className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                </div>
              </div>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;