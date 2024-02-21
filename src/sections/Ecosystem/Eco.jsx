import React from 'react'
import CardGrid from '../../components/CardGrid'


const cards = [
    {
      image: 'https://i.imgur.com/oYiTqum.jpg',
      title: 'Jessica Parker',
      status: '1 hour ago',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
    },
    {
      image: 'https://i.imgur.com/2DhmtJ4.jpg',
      title: 'Kim Cattrall',
      status: '3 hours ago',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
    },
    {
        image: 'https://i.imgur.com/2DhmtJ4.jpg',
        title: 'Kim Cattrall',
        status: '3 hours ago',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
      },
      {
        image: 'https://i.imgur.com/2DhmtJ4.jpg',
        title: 'Kim Cattrall',
        status: '3 hours ago',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
      },
    // Add more card objects as needed
  ];

function Eco() {
  return (
    <section className=" mt-8 relative ">
    <img src="images/ring.png" alt=""  className=" h-full sm:h-[800px] absolute left-0 -top-[35%]"/>
    <div className=" max-w-[1250px] mx-auto relative z-20 px-2">
    <CardGrid cards={cards} />
    </div>
    </section>
  )
}

export default Eco