import { Link } from "react-router-dom";
import K from "../constants";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="flex space-y-10 flex-col">
      {K.PROJECTS.map((project, index) => (
        <Link to={project.path} key={index}>
          <div className="relative flex items-center bg-transparent rounded-lg hover:bg-gray-400 hover:bg-opacity-5 p-4 transition duration-300 w-[40vw]">
            <div className="flex items-center  space-x-4 flex-grow">
              <img className="w-[12vw] rounded-xl" src={project.image} alt="image" />
              <h1 className="text-white w-24 text-[18px] font-semibold">{project.title}</h1>
            </div>
            <div className="absolute right-4 top-4">
              <ArrowUpRight className="text-orange-500" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
