'use client'
import Image from "next/image";
import introImage from '../../assets/images/intro.png'


export default function Banner() {


    return (
        <div className=" banner  d-flex justify-content-around align-items-center flex-wrap-reverse p-3 py-5">
            <div className="d-flex flex-column headingBox">
                <h1>
                    Build a website for your organization to make your internet profile
                </h1>
                <p>
                    (Always stand behind you to get touch in with your problem)
                </p>
                <div className="button d-flex justify-content-center align-items-center flex-wrap gap-3">
                    <button className="contained">
                        Go To Portfolio
                    </button>
                    <button className="outlined">
                        Know More...
                    </button>

                </div>


            </div>
            <div >
                <Image src={introImage} alt='Not found' className="img-fluid image"></Image>

            </div>


        </div>
    )
}