import Image from "next/image";
import introImage from '../../assets/images/intro.png'

export default function Banner() {
    return (
        <div className=" banner gradient d-flex justify-content-between align-items-center p-5">
            <div className="d-flex flex-column">
                <h1>
                    Build a website for your organization to make your internet profile
                </h1>
                <p>
                    (Always stand behind you to get touch in with your problem)
                </p>
                <div className="button d-flex justify-content-center align-items-center gap-3">
                    <button className="contained">
                        Go To Portfolio
                    </button>
                    <button className="outlined">
                        Know More...
                    </button>

                </div>


            </div>
            <div className="Image container">
                <Image src={introImage} alt='Not found' width={300} height={300}></Image>

            </div>


        </div>
    )
}