import React from "react";
import FeatureCard from "../components/FeatureCard";

function Collab() {
  return (
    <section className=" bg-secondary py-12">
      <div className=" container-wrapper">
      <h1 className="text-grad text-4xl font-work font-bold font-64 text-center py-3">
      Our Features
          </h1>
          <div className="bg-white h-[3px] w-[300px] mx-auto my-2"> </div>
        <div className=" flex justify-center ">
          <div className=" ">
            <FeatureCard
            className='w-[800px] '
              IconSrc="images/sate.png"
              Title="Gamefied VR/AR experience"
              Para="Fans can interact with their favourite creators and other users in our immersive VR world, play games, and attend events."
            />
          </div>
          <div >
            <FeatureCard
            className="w-[400px] "
              IconSrc="images/sate.png"
              Title="Gamefied VR/AR experience"
              Para="Fans can interact with their favourite creators and other users in our immersive VR world, play games, and attend events."
            />
          </div>
        </div>

        <div className=" flex justify-center ">
        <div >
            <FeatureCard
            className="w-[400px] h-full"
              IconSrc="images/sate.png"
              Title="Gamefied VR/AR experience"
              Para="Fans can interact with their favourite creators and other users in our immersive VR world, play games, and attend events."
            />
          </div>
          <div className=" ">
            <FeatureCard
            className='w-[800px] h-full'
              IconSrc="images/sate.png"
              Title="Gamefied VR/AR experience"
              Para="Fans can interact with their favourite creators and other users in our immersive VR world, play games, and attend events."
            />
          </div>
    
        </div>
        <div className=" flex justify-center ">
        <div className=" ">
            <FeatureCard
            className='w-[800px] h-full'
              IconSrc="images/sate.png"
              Title="Gamefied VR/AR experience"
              Para="Fans can interact with their favourite creators and other users in our immersive VR world, play games, and attend events."
            />
          </div>
    
        <div >
            <FeatureCard
            className="w-[400px] h-full"
              IconSrc="images/sate.png"
              Title="Gamefied VR/AR experience"
              Para="Fans can interact with their favourite creators and other users in our immersive VR world, play games, and attend events."
            />
          </div>
     
        </div>
        <div className=" flex justify-between w-full ">
        <div >
            <FeatureCard
            className=" h-full"
              IconSrc="images/sate.png"
              Title="Gamefied VR/AR experience"
              Para="Fans can interact with their favourite creators and other users in our immersive VR world, play games, and attend events."
            />
          </div>
          <div className=" ">
            <FeatureCard
            className=' h-full'
              IconSrc="images/sate.png"
              Title="Gamefied VR/AR experience"
              Para="Fans can interact with their favourite creators and other users in our immersive VR world, play games, and attend events."
            />
          </div>
      
       
    
        </div>
      </div>
    </section>
  );
}

export default Collab;
