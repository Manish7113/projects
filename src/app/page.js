import Banner from "@/@core/componenet/banner";
import Footer from "@/@core/componenet/footer";
import Header from "@/@core/componenet/header";
import Projects from "@/@core/componenet/projects";
import Skills from "@/@core/componenet/skills";
import Image from "next/image";




export default function Home() {
  return (
    <main >
      <Header></Header>
      <Banner></Banner>
      <div className=" container divider w-100"></div>
      <Skills></Skills>
      <div className=" container divider w-100"></div>
      <Projects></Projects>
      <div className=" container divider w-100 mb-5 py-2"></div>
      <Footer></Footer>

     
    </main>
  );
}
