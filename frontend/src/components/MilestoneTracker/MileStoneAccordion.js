import { Accordion, Checkbox, Tag } from '@heathmont/moon-core-tw';
import { ControlsChevronRightSmall } from '@heathmont/moon-icons-tw';
import React from 'react';

const MileStoneAccordion = (props) => {

    const project = props.project;
    const milestones = project.milestones;
    const handleChange = (e) => {
        console.log(e.target);
        //backend stuff
    }
  return (
    <div>
      <Accordion singleOpen className='ml-4 mt-2'>
        {
            milestones.map((milestone, index) => {
                return (
                    <Accordion.Item value={index+1} className='w-96 rounded border border-neutral-200'> 
                        <Accordion.Header className='moon-open:[&_svg]:rotate-90'>
                            <Accordion.Button>
                                <ControlsChevronRightSmall className='className="text-trunks text-moon-24 transition duration-200 moon-open:text-bulma'/>
                                <div className=' text-zinc-600'>Milestone {index+1} : {milestone.title}</div>
                                <div class="font-semibold font-['DM Sans']">
                                    {
                                        milestone.task.filter(Task => Task.isCompleted).length
                                    }/{milestone.task.length} tasks
                                </div>
                                <Tag className='text-green-700 bg-green-700 bg-opacity-10'>ON TRACK</Tag>
                            </Accordion.Button>
                        </Accordion.Header>
                        <Accordion.Content className='flex-col'>
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio culpa quidem, libero, eaque ullam quia ratione atque voluptatem blanditiis nulla officia aliquam. Assumenda amet minima tempore et alias consequuntur mollitia! */}
                            {
                                milestone.task.map((Task) => {
                                    return (
                                        <Checkbox label={Task.title} checked={Task.isCompleted} onChange={handleChange} className='border rounded-sm'/>
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
