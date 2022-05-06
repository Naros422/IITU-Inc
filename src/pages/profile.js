import React from 'react';
import './profile.css';
import "bootswatch/dist/simplex/bootstrap.min.css";
  
const Profile = () => {
  return (
    <div className="Main">
        <div className='line'></div>
        <div className='line2'></div>
        <div className='line3'></div>
        <div className='Myname'>Nursat Temirkhan</div>
            <div className='Info'>I am Student of IITU</div>
                <div className='About'>
                    <p>I study at one of the leading universities in our country. 
                    This is an international university of information technologies. 
                    I am in my second year of bachelor's degree. And my profession is network security (SIS).
                    </p>
                    <p>My hobbies are sports, music, and self-development</p>
                </div>
            <div className='logo'></div>
            <div className='Contact'>
              <header>Contact</header>
              <input className='name-txt' type="text" placeholder="ENTER YOUR NAME"></input>
              <input className='mail-txt' type="text" placeholder="ENTER YOUR MAIL"></input>
              <textarea className='area-txt' type="text" placeholder="Write"></textarea>
              <button className='Button'>CONTACT</button>
            </div>

    </div>
  );
};
  
export default Profile;