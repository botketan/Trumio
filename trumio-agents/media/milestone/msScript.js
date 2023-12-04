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
        
        projects.forEach(project => {
            if (project.title == projectName){
                return project.milestones;
            }
        });

    }).
    catch(error => {
        console.log("Error", error);
        return [];
    });
}

document.addEventListener('DOMContentLoaded',async () => {

    const projectBtn = document.getElementById('project');
    // const milestoneList = document.querySelector('.milestone-list');

    console.log('DOM loaded');

    let projects = await getProjects();
    console.log(projects);

    const handleProjects = () => {

        if (projects.length == 0){
            return;
        }

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

    const handleMilestones = async () => {
        const projectName = projectBtn.value;
        let milestones = await getMilestones(projectName);

        if (milestones.length == 0){
            return;
        }

        milestones.forEach(milestone => { // Each milestone is an onject.
            // Create a new option element
            const li = document.createElement('li');
            li.classList.add("milestone");

            const details = document.createElement('details');
            const summary = document.createElement('summary');
            summary.textContent = milestone.title;
            details.append(summary);

            const span1 = document.createElement('span');
            span1.textContent = "3/4 tasks";

            const span2 = document.createElement('span');
            span2.textContent = "ON TRACK";
            span2.classList.add("on-track");

            li.append(details);
            li.append(span1);
            li.append(span2);
            
            // Append the option to the select button
            milestoneList.appendChild(li);
        });

        milestones = [];
    }

    projectBtn.addEventListener("click", handleProjects);
    // projectBtn.addEventListener('change', handleMilestones);
});
