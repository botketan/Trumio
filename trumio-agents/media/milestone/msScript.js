const getProjects = () => {

    return axios.post('http://localhost:5000/user/getUser', {userId: "65645f987aa073e675de9071"}).
    then(response => {
        return response.data.projects;
    }).
    catch(error => {
        console.log("Error", error);
        return [];
    });
};

const getMilestones = (projectName) => {
    return axios.post('http://localhost:5000/user/getUser', {userId: "65645f987aa073e675de9071"}).
    then(response => {
        let projects = response.data.projects;
        
        for (const project of projects) {
            if (project.title == projectName){
                return project.milestones;
            }
        };

        return [];

    }).
    catch(error => {
        console.log("Error", error);
        return [];
    });
}

document.addEventListener('DOMContentLoaded',async () => {

    const projectBtn = document.getElementById('project');
    const milestoneList = document.querySelector('.milestone-list');

    console.log('DOM loaded');

    let projects = await getProjects();
    // console.log(projects);

    const handleProjects = () => {

        if (projects.length == 0){
            return;
        }

        projectBtn.innerHTML = '';

        projects.forEach(project => {
            // Create a new option element
            const option = document.createElement('option');
            option.value = project.title // Convert project name to a suitable value
            option.textContent = project.title; // Set the display text as the project name
    
            // Append the option to the select button
            projectBtn.appendChild(option);

        });

        projects = []
    }

    const createMilestone = (milestone) => {
        const li = document.createElement('li');
        li.classList.add("milestone");

        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = milestone.title;
        const ul = document.createElement('ul');
        ul.classList.add("subTasks");
        
        milestone.task.forEach(task => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = "checkbox";
            input.name = task.title;
            label.append(input);
            label.append(document.createTextNode(task.title));
            ul.append(label);
        });

        details.append(summary);
        details.append(ul);

        const span1 = document.createElement('span');
        span1.textContent = "3/4 tasks";

        const span2 = document.createElement('span');
        span2.textContent = "ON TRACK";
        span2.classList.add("on-track");

        li.append(details);
        li.append(span1);
        li.append(span2);

        return li;
    }

    const handleMilestones = async () => {
        const projectName = projectBtn.value;
        console.log(projectName);
        let milestones = await getMilestones(projectName);

        console.log(milestones);

        if (milestones.length == 0){
            return;
        }
        milestoneList.innerHTML = '';

        milestones.forEach(milestone => { // Each milestone is an onject     
            li = createMilestone(milestone);
            milestoneList.appendChild(li);
        });

        milestones = [];
    }

    projectBtn.addEventListener("click", handleProjects);
    projectBtn.addEventListener('change', handleMilestones);
});
