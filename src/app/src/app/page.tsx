import Image from "next/image";
import Header from "./componets/header";
import Hero from "./componets/hero";
import { url } from "inspector";
import Project from "./componets/project";
import Skills from "./componets/skills";
import About from "./componets/about";
import Contact from "./componets/contact";
import Footer from "./componets/footer";





Hero


export default function Home() {
  return (

<div>

  
    
    
  <Header/>
  <Hero/>
  <Project/>
  <Skills/>
  <About/>
  <Contact/>
  <Footer/>
  
   </div>
  );
}
