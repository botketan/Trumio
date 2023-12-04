import { Button, InsetNativeSelect } from "@heathmont/moon-core-tw";
import React, { useState } from "react";
import MileStoneAccordion from "./MileStoneAccordion";

const MileStones = ({ projects }) => {
  console.log(projects);
  const [selectedProject, setSelectedProject] = useState(projects[0].title);
  const handleProgress = (project) => {
    console.log(project);
    const totalTasks = project.milestones.reduce(
      (total, milestone) => total + milestone.tasks.length,
      0
    );
    const completedTasks = project.milestones.reduce(
      (milestoneTotal, milestone) => {
        return (
          milestoneTotal +
          milestone.tasks.filter((task) => task.isCompleted).length
        );
      },
      0
    );

    const completionPercentage = (completedTasks / totalTasks) * 100;
    return completionPercentage;
  };
  return (
    <div className="w-[28.88vw] h-[318px] relative bg-white rounded-xl shadow-md border border-neutral-200 px-2">
      <div className="mt-4 w-[26.88vw] h-8 pl-4 justify-between items-center inline-flex">
        <div className="w-[25.88vw] h-8 pl-2 justify-between items-center inline-flex mt-[16px] mb-[10px]">
          <h1 className="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">
            Milestone Tracker
          </h1>
          <button className="ml-2 px-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center flex">
            <div className="text-center text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">
              View All
            </div>
          </button>
        </div>
      </div>
      <div className="mt-4 ml-4 w-[25.88vw] h-[66px] justify-start items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 h-[60px] px-1 pb-1 bg-white rounded border border-neutral-200 justify-start items-center flex">
          <InsetNativeSelect
            onChange={(e) => {
              setSelectedProject(e.target.value);
            }}
            label="Project"
            className="[&_select]:text-black [&_select]:font-semibold text-zinc-600"
          >
            {projects.map((project) => {
              return <option key={project.title}>{project.title}</option>;
            })}
          </InsetNativeSelect>
        </div>
        <div className="w-36 h-[60px] px-4 py-3 bg-white rounded border border-neutral-200 justify-start items-center gap-[94px] inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-zinc-600 text-xs font-normal font-['DM Sans'] leading-none">
              Progress
            </div>
            <div className="text-black text-sm font-bold font-['DM Sans'] leading-normal">
              {handleProgress(
                projects[
                  projects.findIndex(
                    (project) => project.title === selectedProject
                  )
                ]
              )}
              %
            </div>
          </div>
        </div>
      </div>
      <div className="h-44 overflow-x-hidden overflow-y-scroll">
        <MileStoneAccordion
          project={
            projects[
              projects.findIndex((project) => project.title === selectedProject)
            ]
          }
        />
      </div>
    </div>
  );
};

export default MileStones;
