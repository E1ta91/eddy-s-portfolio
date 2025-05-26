import React from 'react';

const Experience = () => {
  return (
    <div className="px-4 py-2 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="mb-10 md:mb-12">
        <h1 className="text-white text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          6+ YEARS OF
        </h1>
        <h1 className="text-[#353334] text-4xl pt-2 font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          EXPERIENCE
        </h1>
      </div>

      {/* Experience Items */}
      <div className="space-y-8 sm:space-y-10">
        {/* Experience Item 1 */}
        <div className="bg-[#1e1c1d] p-6 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
            <h2 className="text-white text-xl font-semibold sm:text-2xl">
              Senior CAD Engineer
            </h2>
            <p className="text-[#8d8082] whitespace-nowrap text-sm sm:text-base">
              AUG 2023 - NOV 2024
            </p>
          </div>
          <p className="text-[#afa3a5] mb-2 text-sm sm:text-base">
            Wahu Mobility, Accra-Ghana
          </p>
          <p className="text-[#8d8082] text-sm sm:text-base">
            Used SolidWorks to create 3D models, 2D drawings, and technical documentation for mechanical and electrical components, conducting simulations and FEA to evaluate functionality and cost-effectiveness. I collaborate with cross-functional teams to meet customer and regulatory requirements, update designs for improved performance and reduced costs, manage design documentation and version control, and stay current with industry advancements in CAD software and engineering practices.
          </p>
        </div>

        {/* Experience Item 2 */}
        <div className="bg-[#1e1c1d] p-6 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
            <h2 className="text-white text-xl font-semibold sm:text-2xl">
              EnergyLab Manager
            </h2>
            <p className="text-[#8d8082] whitespace-nowrap text-sm sm:text-base">
              FEB 2022 - AUG 2023
            </p>
          </div>
          <p className="text-[#afa3a5] mb-2 text-sm sm:text-base">
            Energy-Generation, Lome-Togo
          </p>
          <p className="text-[#8d8082] text-sm sm:text-base">
            Managed the EnergyLab's operations and inventory, ensure machines are fully functional, supervise daily activities, assist entrepreneurs with prototype development, oversee contractor prototype accuracy, lead technical training sessions, and report expenses and budget to the Technical Director.
          </p>
        </div>

        {/* Experience Item 3 */}
        <div className="bg-[#1e1c1d] p-6 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
            <h2 className="text-white text-xl font-semibold sm:text-2xl">
              Freelance
            </h2>
            <p className="text-[#8d8082] whitespace-nowrap text-sm sm:text-base">
              SEP 2020 - DEC 2021
            </p>
          </div>
          <p className="text-[#afa3a5] mb-2 text-sm sm:text-base">
            University of Energy and Natural Resources, Sunyani-Ghana
          </p>
          <p className="text-[#8d8082] text-sm sm:text-base">
            Provided CAD drafting services for students and lecturers, worked as an arc welder for the Mechanical Engineering department, and assisted as a lab technician.
          </p>
        </div>

        {/* Experience Item 4 */}
        <div className="bg-[#1e1c1d] p-6 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
            <h2 className="text-white text-xl font-semibold sm:text-2xl">
              Teaching Assistant
            </h2>
            <p className="text-[#8d8082] whitespace-nowrap text-sm sm:text-base">
              SEP 2019 - AUG 2020
            </p>
          </div>
          <p className="text-[#afa3a5] mb-2 text-sm sm:text-base">
            University of Energy and Natural Resources, Sunyani-Ghana
          </p>
          <p className="text-[#8d8082] text-sm sm:text-base">
            Assisted a senior lecturer in marking and recording student assessments, organized tutorials to help students improve their understanding of course material, and collaborated with final-year students to develop their project prototypes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;