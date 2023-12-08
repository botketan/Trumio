import { Button } from '@heathmont/moon-core-tw';
import { ChartFin, FilesFolderClosed, GenericSearch, GenericUser, GenericUsers } from '@heathmont/moon-icons-tw';
import React from 'react';

const MentorSearch = ({ mentors, filteredMentors, setFilteredMentors }) => {
    console.log(filteredMentors);
    const inputHandler = (e) => {
        const input = e.target.value;
        const filteredMentors = mentors.filter((mentor) => {
        // console.log(input);
        return (mentor.name.toLowerCase().includes(input.toLowerCase())
        ||mentor.company.toLowerCase().includes(input.toLowerCase())
        ||mentor.role.toLowerCase().includes(input.toLowerCase()));
        });
        setFilteredMentors(filteredMentors);
    };
  return (
      
    <div>
        <div className="flex flex-col justify-center px-16 gap-4">
            <div className="flex justify-center items-center gap-4 w-[27.5vw]">
                <Button iconLeft={<GenericUser className="text-moon-20"/>} className="button text-white font-semibold bg-blue-600 px-3 py-2 rounded-xl cursor-pointer ">Mentors</Button>
                <Button iconLeft={<GenericUsers className='text-moon-20'/>} className="button text-blue-600 font-semibold bg-blue-100 px-3 py-2 rounded-xl cursor-pointer ">Group Sessions</Button>
                <Button iconLeft={<FilesFolderClosed/>} className="button text-blue-600 font-semibold bg-blue-100 px-3 py-2 rounded-xl cursor-pointer ">Topics</Button>
            </div>
            <div className='flex'>
                <div className='flex border py-3 w-[33vw]'>
                    <GenericSearch className="ml-1 w-6 h-6"/>
                    <input  className=" focus:outline-none w-[100%] mr-3 text-moon-16 ml-2" type='text' placeholder='Search by name, company, role' onChange={inputHandler}></input>
                </div>
                <Button iconLeft={<ChartFin className="text-moon-20"/>} size='xl' className=" ml-4 button text-blue-600 font-semibold bg-blue-100 px-3 py-2 rounded-xl cursor-pointer ">Filters</Button>
            </div>
        </div>
    </div>
    
  );
};

export default MentorSearch;
