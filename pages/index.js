import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import  code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from "react";

export default function Home() {
 const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>John Busayo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className=" min-h-screen">
      <nav className=" py-10 mb-12 flex justify-between">
       <h1 className=" text-xl font-burtons">developedbyjb-dev</h1>
      <ul className="flex items-center">
      <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=" cursor-pointer text-2xl"/></li>
      <li><a href="#" className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ">Resume</a></li>
      </ul>
      </nav>

      <div className=" text-center p-10">
        <h2 className=" text-5xl py-2 text-teal-600 font-medium">John Busayo</h2>
        <h3 className=" text-2xl py-2">Developer and designer.</h3>
        <p className=" text-md py-5 leading-8 text-gray-800">John Busayo is a professional frontend developer with good knowlegde in React and Next.js
        John Busayo is a professional frontend developer with good knowlegde in React and Next.js
        John Busayo is a professional frontend developer with good knowlegde in React and Next.js</p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-3 text py-3 text-gray-500">
        <AiFillTwitterCircle/>
        <AiFillLinkedin/>
        <AiFillYoutube/>
      </div>
      <div className=" relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
        <Image src={deved} layout="fill" objectFit="cover" />
      </div>
      </section> 


      <section>
        <div>
        <h3>Services I Offer</h3>
        <p className=" text-md py-2 leading-8">Since We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingly.</p>
        <p className=" text-md py-2 leading-8">Since We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingly.</p>
        <p className=" text-md py-2 leading-8">Since We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingly.</p>
        </div> 
        <div className="lg:flex gap-10">
          <div className=" text-center shadow-lg p-10 rounded-xl my-10">
          <Image src={design} width={100} height={100}/>
          <h3 className=" text-lg font-medium pt-8 pb-2"> Beautiful Design</h3>
          <p> <p className=" text-md py-2 leading-8">Since We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingly.</p></p>
         <h4 className="py-4 text-teal-600"> Design tools I use</h4>
         <p className=" text-gray-800 py-1">Photoshop</p>
         <p className=" text-gray-800 py-1">Illustrator</p>
         <p className=" text-gray-800 py-1">Figma</p>
          </div>
          <div className=" text-center shadow-lg p-10 rounded-xl my-10">
          <Image src={code} width={100} height={100}/>
          <h3 className=" text-lg font-medium pt-8 pb-2"> Beautiful Design</h3>
          <p> <p className=" text-md py-2 leading-8">Since We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingly.</p></p>
         <h4 className="py-4 text-teal-600"> Design tools I use</h4>
         <p className=" text-gray-800 py-1">Photoshop</p>
         <p className=" text-gray-800 py-1">Illustrator</p>
         <p className=" text-gray-800 py-1">Figma</p>
          </div>
          <div className=" text-center shadow-lg p-10 rounded-xl my-10">
          <Image src={consulting} width={100} height={100}/>
          <h3 className=" text-lg font-medium pt-8 pb-2"> Beautiful Design</h3>
          <p> <p className=" text-md py-2 leading-8">Since We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingly.</p></p>
         <h4 className="py-4 text-teal-600"> Design tools I use</h4>
         <p className=" text-gray-800 py-1">Photoshop</p>
         <p className=" text-gray-800 py-1">Illustrator</p>
         <p className=" text-gray-800 py-1">Figma</p>
          </div>
        </div>
      </section>
      <section>
        <div>
        <h3 className=" text-3xl py-1">Porfolio</h3>
        </div>
        <div>
          <div>
          <Image src={web1}/>
          </div>
          <div>
          <Image src={web2}/>
          </div>
          <div>
          <Image src={web3}/>
          </div>
          <div>
          <Image src={web4}/>
          </div>
          <div>
          <Image src={web5}/>
          </div>
          <div>
          <Image src={web6}/>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
} 
