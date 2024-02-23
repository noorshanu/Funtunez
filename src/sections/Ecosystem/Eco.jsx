import React from 'react'
import CardGrid from '../../components/CardGrid'


const cards = [
    {
      image: 'https://i.imgur.com/oYiTqum.jpg',
      title: 'Jessica Parker',
      
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?dsfdsfdsfdfd l',
    },
    {
      image: 'https://i.imgur.com/oYiTqum.jpg',
      title: 'Jessica Parker',
      
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?dsfdsfdsfdfd l',
    },
    {
      image: 'https://i.imgur.com/oYiTqum.jpg',
      title: 'Jessica Parker',
      
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?dsfdsfdsfdfd l',
    },
    {
      image: 'https://i.imgur.com/2DhmtJ4.jpg',
      title: 'Kim Cattrall',
    
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
    },
    {
        image: 'https://i.imgur.com/2DhmtJ4.jpg',
        title: 'Kim Cattrall',
       
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?fdfd',
      },
      {
        image: 'https://i.imgur.com/2DhmtJ4.jpg',
        title: 'Kim Cattrall',
       
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
      },
    // Add more card objects as needed
  ];

function Eco() {
  return (
    <section className=" mt-8 relative bg-secondary pb-6 pt-12 ">
      <div>
        <h1 className=' text-center text-2xl sm:text-4xl font-work font-bold font-64 uppercase text-grad '>
        The Ecosystem
        </h1>
        <p className=' text-center max-w-xl mx-auto text-base text-white py-2'>
        The  ecosystem is composed of multiple dApps which strengthen and add value to the Creator token ecosystem.
        </p>
      </div>
    <img src="images/ring.png" alt=""  className=" h-full sm:h-[800px] absolute left-0 -top-[35%]"/>
    <div className=" max-w-[1250px] mx-auto relative z-20 px-2">
    <CardGrid cards={cards} />
    </div>
    </section>
  )
}

export default Eco