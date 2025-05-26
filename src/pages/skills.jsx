import React from 'react'

const Skills = () => {
    const skills = [
        "CAD", "Mechanical Design", "Arc Welding", "3D Printing",
        "Soldering", "CNC Machining", "Laser Cutting", "PCB Design",
        "PCB Milling", "Power Tools Operation", "SolidWorks",
        "Altair Studio", "AutoCAD", "FlatCAM", "RD Works",
        "Lightburn", "MSC Adams", "Arduino"
    ];

    return (
        <div className="px-6 md:px-8 lg:px-12 ">
            {/* Title Section */}
            <div className="mb-10 md:mb-12 lg:mb-16">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    SKILLS
                </h1>
                <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
            </div>

            {/* Skills Grid - Optimized for md and lg screens */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="relative group overflow-hidden rounded-lg"
                    >
                        {/* Skill Card */}
                        <div className="relative z-10 h-full w-full bg-[#1a1a1a] border border-gray-700 text-white 
                            flex items-center justify-center p-4 text-center text-sm md:text-base lg:text-md
                            transition-all duration-300 group-hover:border-orange-500 group-hover:bg-[#252525]
                            group-hover:shadow-lg group-hover:shadow-orange-500/10">
                            {skill}
                        </div>
                        
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-orange-500 opacity-0 
                            group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills