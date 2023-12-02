import { Button, InsetNativeSelect } from '@heathmont/moon-core-tw';
import React, { useState } from 'react';
import MileStoneAccordion from './MileStoneAccordion';

const MileStones = (props) => {
    const projects = props.projects;
    const [selectedProject, setSelectedProject] = useState(projects[0].title);
    const handleProgress = (project) => {
        console.log(project);
        const totalTasks = project.milestones.reduce((total, milestone) => total + milestone.tasks.length, 0);
        const completedTasks = project.milestones.reduce((milestoneTotal, milestone) => {
                return milestoneTotal + milestone.tasks.filter(task => task.isCompleted).length;
            }, 0);

        const completionPercentage = (completedTasks / totalTasks) * 100;
        return completionPercentage;
    }
  return (
    <div className='w-[416px] h-[318px] relative bg-white rounded-xl shadow border border-neutral-200 overflow-scroll'>
        <div className='mt-4 w-96 h-8 pl-2 justify-between items-center inline-flex'>
            <div class="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">
            Milestone Tracker
            </div>
            <Button size="sm" variant='fill' className="w-[76px] h-8 px-3 py-1 bg-blue-600 bg-opacity-10 rounded-xl">
            <div class="text-center text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">
                View All
            </div> 
            </Button>
        </div>
        <div className='mt-4 ml-4 w-96 h-[66px] justify-start items-center gap-2 inline-flex'>
            <div className='grow shrink basis-0 h-[66px] px-4 py-3 bg-white rounded border border-neutral-200 justify-between items-center flex'>
                <InsetNativeSelect onChange={e => {setSelectedProject(e.target.value)}} label="Project" className='[&_select]:text-black [&_select]:font-semibold text-zinc-600'>
                    {projects.map((project) => {
                        return <option key={project.title}>{project.title}</option>
                    })}
                </InsetNativeSelect>
            </div>
            <div class="w-36 h-[66px] px-4 py-3 bg-white rounded border border-neutral-200 justify-start items-center gap-[94px] inline-flex">
                <div class="flex-col justify-start items-start gap-0.5 inline-flex">
                    <div class="text-zinc-600 text-xs font-normal font-['DM Sans'] leading-none">Progress</div>
                    <div class="text-black text-sm font-bold font-['DM Sans'] leading-normal">
                        {
                            handleProgress(projects[projects.findIndex(project => project.title === selectedProject)])
                        }%
                    </div>
                </div>
            </div>
        </div>
        <div className=' overflow-hidden'>
            <MileStoneAccordion project={projects[projects.findIndex(project => project.title === selectedProject)]}/>
        </div>
        
    </div>

  );
};

export default MileStones;
