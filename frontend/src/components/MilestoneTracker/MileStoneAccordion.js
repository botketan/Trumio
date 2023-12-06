import { Accordion, Checkbox, Tag } from '@heathmont/moon-core-tw';
import { ControlsChevronRightSmall } from '@heathmont/moon-icons-tw';
import React from 'react';

const MileStoneAccordion = ({project, setProject}) => {

    const handleChange = (index1, index) => {
        //backend stuff
        let project1= {...project}
        project1.milestones[index1].task[index].isCompleted=!(project1.milestones[index1].task[index].isCompleted)
        setProject(project1);
    }
  return (
    <div>
      <Accordion singleOpen className='ml-4 mt-2'>
        {
            project.milestones.map((milestone, index) => {
                let index1=index
                return (
                    <Accordion.Item value={index+1} key={index+1} className='w-[25.88vw] rounded-xl border border-neutral-200'> 
                        <Accordion.Header className='moon-open:[&_svg]:rotate-90'>
                            <Accordion.Button>
                                <ControlsChevronRightSmall className='className="text-trunks text-moon-24 transition duration-200 moon-open:text-bulma'/>
                                <div className= 'text-left text-moon-16 text-zinc-600 w-[14vw]'>Milestone {index+1} : {milestone.title}</div>
                                <div className="font-semibold font-dmsans w-[4vw]">
                                    {
                                        milestone.task.filter(Task => Task.isCompleted).length
                                    }/{milestone.task.length} tasks
                                </div>
                                <Tag className='text-green-700 bg-green-700 bg-opacity-10 w-[70px]'>ON TRACK</Tag>
                            </Accordion.Button>
                        </Accordion.Header>
                        <Accordion.Content className='flex-col border-t-0'>
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio culpa quidem, libero, eaque ullam quia ratione atque voluptatem blanditiis nulla officia aliquam. Assumenda amet minima tempore et alias consequuntur mollitia! */}
                            {
                                milestone.task.map((task,index) => {
                                    return (
                                        <div key={index+1} className=' ml-[6%] relative flex items-center gap-2 text-moon-16 text-bulma'>
                                            <input type="checkbox" className="cursor-pointer" label={task.title} defaultChecked={task.isCompleted} onChange={()=>handleChange(index1, index)}/>
                                            {/* <span class="absolute top-1 start-1 flex w-4 h-4 items-center justify-center shadow-[0_0_0_1px_inset] transition-colors text-moon-16 rounded-moon-s-xs shadow-trunks peer-checked:shadow-none text-goten bg-piccolo border rounded-sm" aria-hidden="true">
                                                <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-opacity opacity-100">
                                                    <path d="M7 14.9412L13.6667 22L25 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </span> */}
                                            <div className=' text-moon-16'>{task.title}</div>
                                            {/* <Checkbox  key={index+1} className="border rounded-sm" label={task.title} checked={task.isCompleted} onChange={handleChange}/> */}
                                            
                                        </div>
                                    )
                                })
                            }
                        </Accordion.Content>
                    </Accordion.Item>
                )
            })
        }
      </Accordion>
    </div>
  );
};

export default MileStoneAccordion;
