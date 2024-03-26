import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className='AboutUs-background h-screen w-full mx-auto w-full md:w-[60%] md:left-72'>
      <div style={{ width: '60%' }}>
        <div className='font-large roboto '>
        <p>WELCOME TO PEACEPOD</p> </div>
        <div className=''>
            <p><span style={{ fontSize: '45px', fontFamily: 'Arial', fontWeight: 'bold' }}>Calm your mind. </span><span style={{ fontSize: '45px', fontFamily: 'Times New Roman', fontStyle: 'italic' }}>Change your life.</span></p>
          </div>
          <button className='custom-button' style={{ color: 'black', transition: 'color 0.3s', cursor: 'pointer' }}>What is Meditation?</button>
       <div className='text-white font-medium roboto'> <p>Meditation is a practice where an individual uses a technique 
        – such as mindfulness, or focusing the mind on a particular object, thought, or activity
         – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</p>
       </div>
       <button className='custom-button' style={{ color: 'black', transition: 'color 0.3s', cursor: 'pointer' }}>What Does Our Web App Provide?</button>
        <div className='text-white font-medium roboto'>
        <p>PeacePod is a meditation app designed to help individuals experience peace and tranquility through guided
           meditation sessions, soothing music, and serene scenes. Our app offers a variety of meditation techniques and 
           relaxation exercises to promote mental well-being and reduce stress.</p>
      </div>
      </div>
      <div style={{ width: '25%' }}>
      <img src="/images/woman-at-water.jpg" alt="Meditation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      </div>
    </div>
  );
}

export default AboutUs;
