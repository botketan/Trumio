const axios = require('axios');

const getProjects = async() => {

    axios.post('http://localhost:5000/user/getUser', {userId: "65645f987aa073e675de9071"}).
    then(response => {
        projects = response.data.projects;
        console.log(projects);
        return projects;

    }).
    catch(error => {
        console.log("Error",error);
        return [];
    })
};

// getProjects();

document.addEventListener('DOMContentLoaded',async () => {

    const projectBtn = document.getElementById('project');
    const dropdown = document.querySelector(".project-list");

    console.log('DOM loaded');

    let projects = await getProjects();

    for (let i = 0;i<projects.length;i++){
        console.log(projects[i]);
    }

    // Loop through the projects array and create an option for each project

    const handleProjects = () =>{

        projects = [{"title":'abc'},{"title":'efg'}];

        projects.forEach(project => {
            // Create a new option element
            const option = document.createElement('option');
            option.value = project.title // Convert project name to a suitable value
            option.textContent = project.title; // Set the display text as the project name
    
            // Append the option to the dropdown
            dropdown.appendChild(option);
        });
    }

    projectBtn.addEventListener("click", handleProjects);
});
