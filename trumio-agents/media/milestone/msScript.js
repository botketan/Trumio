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
};

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
    const dummy = document.getElementById('dummy');
    const progressBar = document.getElementById('progress-bar');
    var completedProjectTasks = 0;
    var totalProjectTasks = 0;
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
                    completedProjectTasks++; 
                    setMilestones(this.name,true);
                }
                else{
                    setTasks--;
                    completedProjectTasks--;
                    setMilestones(this.name,false);
                }
                progressBar.innerText = `Progress: ${(completedProjectTasks/totalProjectTasks*100).toFixed(0)}%`;
                span1.textContent = `${setTasks}/${totalTasks} tasks`;
                
            });
            
            label.append(box);
            label.append(document.createTextNode(task.title));
            ul.append(label);
        });
        
        details.append(summary);
        details.append(ul);
        
        span1.textContent = `${setTasks}/${totalTasks} tasks`;
        span1.classList.add("tasks");
        const span2 = document.createElement('span');
        span2.textContent = "ON TRACK";
        span2.classList.add("on-track");
        
        flex = document.createElement('div');
        flex.classList.add("flex-container");

        flex.append(details);
        flex.append(span1);
        flex.append(span2);
        li.append(flex);

        return li;
    }

    const handleMilestones = async () => {
        const projectName = projectBtn.value;
        console.log(projectName);
        let milestones = await getMilestones(projectName);
        console.log(milestones);

        completedProjectTasks = 0;
        totalProjectTasks = 0;
        
        if (milestones.length == 0){
            return;
        }
        milestoneList.innerHTML = '';
        
        milestones.forEach(milestone => { // Each milestone is an onject 
            milestone.task.forEach(task => {
                totalProjectTasks++;
                if (task.isCompleted){
                    completedProjectTasks++;
                }
            });
            li = createMilestone(projectName,milestone);
            milestoneList.appendChild(li);
        });
        progressBar.innerText = `Progress: ${(completedProjectTasks/totalProjectTasks*100).toFixed(0)}%`;
        milestones = [];
    }
    
    dummy.innerText = projects[0].title;     //Initialise the project button with the first project
    handleMilestones();
    projectBtn.addEventListener("click", handleProjects);
    projectBtn.addEventListener('change', handleMilestones);
});
