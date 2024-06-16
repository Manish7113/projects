import { Icon } from "@iconify/react";

export default function Skills(){
    return(
      <div className=" skills d-flex justify-content-center align-items-center flex-column my-5 gap-5 container">
        
        <div className="d-flex justify-content-center align-items-start flex-column  gap-2">
         <h1 className="componenetHeading">Skills</h1>
         <p className="description">In almost any job, you'll need some combination of skills to be successful.  These can be technical skills, like coding or data analysis, or softer skills, like communication and teamwork</p>

        </div>
          <div className=" skills d-flex justify-content-center align-items-center gap-5 flex-wrap " >
           
           <div className="circuluarContainer  ">
           <Icon icon="fa-brands:html5" />
           </div>
           <div className="circuluarContainer  ">
           <Icon icon="fa6-brands:node-js" />
           </div>
           <div className="circuluarContainer  ">
           <Icon icon="akar-icons:react-fill" />
           </div>
           <div className="circuluarContainer  ">
           <Icon icon="teenyicons:nextjs-outline" />
           </div>
           <div className="circuluarContainer  ">
           <Icon icon="tabler:brand-nuxt" />
           </div>
           <div className="circuluarContainer  ">
           <Icon icon="streamline:css-three" />
           </div>
           <div className="circuluarContainer  ">
           <Icon icon="bi:bootstrap" />
           </div>

       </div>
      </div>
    )
}