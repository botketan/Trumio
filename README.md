# TRUMIO
### AI Powered University Based Ecosystem
---

UniConnect is a standalone application built on Trumio's base platform to enhance its ecosystem, upskill student talent, and engage alumni.

---
### TruSpace
<img width="959" alt="image" src="https://github.com/botketan/Trumio/assets/133904823/01e2b95f-c906-4f22-97d6-5418901931fb">







## Main Features (Both web and app-based)
* **CIA**: Collective Intelligence Agents (CIAs) are LLMs trained upon specialized information, initiated with additional context prompts.CIAs can also be added as team members while creating a new team on Trumio. They can act as project managers, code reviewers, meeting assistants, etc.
  <img width="956" alt="image" src="https://github.com/botketan/Trumio/assets/133904823/0a0202c0-31b6-4ea5-b349-e9e61a8e379e">

 


* **Mentorship Availability**: Students can explore mentor profiles and view their availability. They can book sessions, connect for personalised guidance and rate their experiences for a transparent learning journey.
  <img width="950" alt="image" src="https://github.com/botketan/Trumio/assets/133904823/05f4db71-effb-4422-89b4-5c362f08d8d8">

* **Communities Page**: Connecting alumni and students through dynamic posts, chats, reactions, and comments, fostering engagement and nostalgia in global and club-specific communities.

  <img width="960" alt="image" src="https://github.com/botketan/Trumio/assets/133904823/19158cfe-bb62-4d55-842a-84a5c046f7f0">

 


* **TruNotes**: Create save and organize notes and according to permissions publish them to specific communities.
  <img width="581" alt="image" src="https://github.com/botketan/Trumio/assets/133904823/6d193403-94fc-4c0a-b52d-feb88aa499d6">
  ![image](https://github.com/botketan/Trumio/assets/133904823/8c3c9fab-8b62-48c5-8ff5-b9f83dd11143)




  
 

* **Gamification**: Users earn badges and sparks for their activity and achievements, and compete on the leaderboard for recognition. Tiers will be displayed on the student’s profile and will help clients become aware of their skill level.
 <img width="960" alt="image" src="https://github.com/botketan/Trumio/assets/133904823/999a748c-eaa1-4eef-b231-19de3aa23f3d">



* **Extensions**:
    * ChatBot
    * Milestone Tracker
    * Code Summarizer
 
      
  ![image](https://github.com/botketan/Trumio/assets/133904823/2a966de6-f5fc-486c-9346-58661e43e9b6)
  ![image](https://github.com/botketan/Trumio/assets/133904823/a1d1d0d5-6d9c-4d0a-a4e8-61fc039c0454)



### App View
| <img  alt="image" src="https://github.com/botketan/Trumio/assets/133904823/4d05a609-fbb4-4782-9b2a-4f823041bc25"> | <img alt="image" src="https://github.com/botketan/Trumio/assets/133904823/3838e016-3b8d-4b12-a080-8d23aa2123b7"> | <img  alt="image" src="https://github.com/botketan/Trumio/assets/133904823/a65ffe9a-2af4-4354-9840-58db879bd6c9"> | <img  alt="image" src="https://github.com/botketan/Trumio/assets/133904823/6dabb1e4-9ed6-4bd4-b4ee-b9252f15ba95">|
|:---:|:---:|:---:|:---:|




## Setting up the project in your local environment💻

### 1. Fork this repository.<br>
   OR <br>
   
   On GitHub.com, navigate to the [repository].<br>
         
   In the top-right corner of the page, click **Fork**.

### 2. Clone the **forked** repository:
   
   
   On GitHub.com, navigate to **your fork** of the repository.<br>
         
   Above the list of files, click `<> Code` . Copy the url mentioned. Go to the location where you want the cloned directory.<br>
         
   In the terminal Type -`git clone` , and then paste the URL you copied earlier. It will look like this, with your GitHub username instead of YOUR-USERNAME:<br>
         
   `git clone https://github.com/YOUR-USERNAME/<repo link> `<br>
   
   Press Enter. Your local clone will be created.
      

## Installation

### Prerequisites

1.  [Git](https://git-scm.com/downloads).
2.  [Node & npm](https://nodejs.org/en/download/) _(version 12 or greater)_.

Move to the clonned repository in your local environment

### Steps to Set up Backend
* Move to backend folder - `cd backend `
* Install the required nodes modules package - `npm i`
* Create a .env file as follows with the required APIs- MongoDB, Cloudinary, OpenAI
   
  ```
   PORT=5000
   MONGODB_URI=
   DB_NAME=
   ADMIN_EMAIL=
   ADMIN_PASS=
   SESSION_SECRET=
   CLOUD_NAME=
   API_KEY=
   API_SECRET=
   OPENAI_API_KEY=

  ```
  
* Start the development server - ` npm start `

### Steps to Set up Frontend
* Move to frontend folder -`cd frontend `
* Install the required nodes modules package - `npm i`
* Start the development server - ` npm start `
  
  > The model will be served on **http://localhost:3000/**

### Steps to run App
* Move to app folder -`cd app`
* Run `flutter pub get` to get the dependencies
* Run `flutter run`
 
           

## Directory Structure
```
├───.vscode
├───app
│   ├───android
│   │   ├───app
│   │   │   └───src
│   │   │       ├───debug
│   │   │       ├───main
│   │   │       │   ├───kotlin
│   │   │       │   │   └───com
│   │   │       │   │       └───example
│   │   │       │   │           └───app
│   │   │       │   └───res
│   │   │       │       ├───drawable
│   │   │       │       ├───drawable-v21
│   │   │       │       ├───mipmap-hdpi
│   │   │       │       ├───mipmap-mdpi
│   │   │       │       ├───mipmap-xhdpi
│   │   │       │       ├───mipmap-xxhdpi
│   │   │       │       ├───mipmap-xxxhdpi
│   │   │       │       ├───values
│   │   │       │       └───values-night
│   │   │       └───profile
│   │   └───gradle
│   │       └───wrapper
│   ├───assets
│   │   └───nav
│   ├───fonts
│   ├───ios
│   │   ├───Flutter
│   │   ├───Runner
│   │   │   ├───Assets.xcassets
│   │   │   │   ├───AppIcon.appiconset
│   │   │   │   └───LaunchImage.imageset
│   │   │   └───Base.lproj
│   │   ├───Runner.xcodeproj
│   │   │   ├───project.xcworkspace
│   │   │   │   └───xcshareddata
│   │   │   └───xcshareddata
│   │   │       └───xcschemes
│   │   ├───Runner.xcworkspace
│   │   │   └───xcshareddata
│   │   └───RunnerTests
│   ├───lib
│   │   ├───models
│   │   ├───requests
│   │   ├───screens
│   │   ├───utils
│   │   └───widgets
│   ├───test
│   └───web
│       └───icons
├───backend
│   ├───.adminbro
│   ├───config
│   ├───controllers
│   ├───models
│   └───routes
├───frontend
│   ├───public
│   └───src
│       ├───Assets
│       ├───components
│       │   ├───BookSession
│       │   ├───CIA
│       │   ├───Comments
│       │   ├───Crousel_Achievements
│       │   ├───Leaderboard
│       │   ├───Mentor
│       │   ├───MilestoneTracker
│       │   ├───noteList
│       │   └───NotesComponent
│       ├───hooks
│       └───pages
└───trumio-agents
    ├───.vscode
    ├───API
    ├───media
    │   ├───bot
    │   ├───milestone
    │   └───web
    └───test
        └───suite
 ```

