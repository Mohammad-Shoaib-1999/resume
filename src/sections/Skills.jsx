import {CheckBadgeIcon,CpuChipIcon} from "../icons";
import { skillsData } from "../data";

export default function Skills() {
  return (
    <>
      <div className="px-5 py-5 mx-auto">
        <div className="text-center mb-10">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            ASPIRING FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            <br/>
            ⚡ Develop highly interactive Front end / User Interfaces for your
            web and mobile applications 
            <br/>
    
            ⚡ Creating application backend using
            Node and Express
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skillsData.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center shadow-xl">
                {/* <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
                <img src={skill.icon} alt={skill.name} width="50" height="50" className="flex-shrink-0 mr-4" />

                <span className="title-font font-medium text-black">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
