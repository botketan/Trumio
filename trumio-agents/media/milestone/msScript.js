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

const setMilestones = async (action,state) => {
    const path = action.split('-');
    // console.log(path);

    const projectName = path[0];
    const milestoneName = path[1];
    const taskName = path[2];

    let projects = await getProjects();
    let changedProject = undefined
    
    for (project of projects) {
        if (project.title == projectName){
            for (ms of project.milestones) {
                if (ms.title == milestoneName){
                    for(tasks of ms.task){
                        if (tasks.title == taskName){
                            tasks.isCompleted = state;
                        }
                    }
                }
            };
            changedProject = project;
        }
    };

    axios.post('http://localhost:5000/project/updateProject', {projectId:changedProject._id,projectIncoming:changedProject}).
        then((response) => {
            console.log(response.data);
        }).
        catch((error) => {
            console.log(error);
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
            option.value = project.title 
            option.textContent = project.title; // Set the display text as the project name
    
            // Append the option to the select button
            projectBtn.appendChild(option);

        });

        projects = []
    }

    const createMilestone = (projectName,milestone) => {
        const li = document.createElement('li');
        li.classList.add("milestone");

        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = milestone.title;
        const ul = document.createElement('ul');
        ul.classList.add("subTasks");
        
        let totalTasks = 0;
        let setTasks = 0;

        const span1 = document.createElement('span');

        milestone.task.forEach(task => {
            totalTasks++;

            const label = document.createElement('label');
            const box = document.createElement('input');
            box.type = "checkbox";
            box.name = `${projectName}-${milestone.title}-${task.title}`;
            if (task.isCompleted){
                box.checked = true;
                setTasks++;
            }

            box.addEventListener('click', function() {
                // console.log('Checkbox clicked:', this.name);

                if (box.checked){
                    setTasks++;
                    setMilestones(this.name,true);
                }
                else{
                    setTasks--;
                    setMilestones(this.name,false);
                }
                span1.textContent = `${setTasks}/${totalTasks} tasks`;
                
            });

            label.append(box);
            label.append(document.createTextNode(task.title));
            ul.append(label);
        });

        details.append(summary);
        details.append(ul);

        span1.textContent = `${setTasks}/${totalTasks} tasks`;
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
            li = createMilestone(projectName,milestone);
            milestoneList.appendChild(li);
        });

        milestones = [];
    }

    projectBtn.addEventListener("click", handleProjects);
    projectBtn.addEventListener('change', handleMilestones);
});
