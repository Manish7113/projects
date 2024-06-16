import { Icon } from "@iconify/react";

export default function Projects(){
    return(
        <div className=" projects d-flex justify-content-center align-items-center flex-column my-5 gap-5 container">
        
        <div className="d-flex justify-content-center align-items-start flex-column  gap-2">
         <h1 className="componenetHeading">Projects</h1>
         <p className="description">Learning by Doing: Projects provide a hands-on way to learn and apply knowledge.  Instead of just memorizing facts, you get to see how things work in practice, which can make learning more engaging and effective </p>

        </div>
          <div className=" projects d-flex justify-content-center align-items-center gap-5 flex-wrap " >
            <div className="projectCard d-flex flex-column justify-content-start align-items-evenly gap-2">
           <div className="iconParent d-flex justify-content-center align-items-center ">
           <Icon icon="solar:star-circle-linear" className="icon" />
           </div>
            <div className="d-flex flex-column justify-content-start align-items-evenly gap-2 container mb-2">
            <div className="d-flex justify-content-between align-items-center">
            <p className="projectName m-0">Project Name </p>
            <p className="projetRaiting m-0">4.8</p>
            </div>
            <p className="projectDescription">Working on projects helps you develop these transferable skills, which will benefit you throughout your life</p>
            <div className="d-flex justify-content-between align-items-center">
                <button className="outlined">Know More</button>
                <button className="contained">View </button>

            </div>
            </div>

            </div>
            <div className="projectCard d-flex flex-column justify-content-start align-items-evenly gap-2">
           <div className="iconParent d-flex justify-content-center align-items-center ">
           <Icon icon="solar:star-circle-linear" className="icon" />
           </div>
            <div className="d-flex flex-column justify-content-start align-items-evenly gap-2 container mb-2">
            <div className="d-flex justify-content-between align-items-center">
            <p className="projectName m-0">Project Name </p>
            <p className="projetRaiting m-0">4.8</p>
            </div>
            <p className="projectDescription">Working on projects helps you develop these transferable skills, which will benefit you throughout your life</p>
            <div className="d-flex justify-content-between align-items-center">
                <button className="outlined">Know More</button>
                <button className="contained">View </button>

            </div>
            </div>

            </div>
            <div className="projectCard d-flex flex-column justify-content-start align-items-evenly gap-2">
           <div className="iconParent d-flex justify-content-center align-items-center ">
           <Icon icon="solar:star-circle-linear" className="icon" />
           </div>
            <div className="d-flex flex-column justify-content-start align-items-evenly gap-2 container mb-2">
            <div className="d-flex justify-content-between align-items-center">
            <p className="projectName m-0">Project Name </p>
            <p className="projetRaiting m-0">4.8</p>
            </div>
            <p className="projectDescription">Working on projects helps you develop these transferable skills, which will benefit you throughout your life</p>
            <div className="d-flex justify-content-between align-items-center">
                <button className="outlined">Know More</button>
                <button className="contained">View </button>

            </div>
            </div>

            </div>
           
           
          

       </div>
      </div>
    )
}