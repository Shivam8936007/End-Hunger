"use client"; // This is a client component 👈🏽
import {useState } from "react";
import Nav from "../components/nav";
import Footer from "@/components/footer";
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    { title: "Water is Life Clean Water in Urban Area", 
      content: "Some quick example text for card and make up the bulk of card content" },

    { title: "Water is Life Clean Water in Urban Area", 
        content: "Some quick example text for card and make up the bulk of card content" },
      
    { title: "Water is Life Clean Water in Urban Area", 
          content: "Some quick example text for card and make up the bulk of card content" },
  ];
  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardData.length - 1 : prevIndex - 1));
  };
  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cardData.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <>
      <Nav/> 
      <div className="container">
        <div className="left">
          <div> <h1>Served Over</h1> </div>
          <div> <p>1,321,345</p> </div>
          <div> <h2>Children in 150 Countries</h2></div>
          <button>View Our Program</button>
        </div>

        <div className="right">
          <div>
            <h1>Who Are We?</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <h4>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h4>
            <button>Learn More</button>
          </div>
        </div>
       
 
      </div>
      <div className="horizontal-line "></div>
      <div className="text">
   <div className="our-mission">
    <h1>Our Mission</h1>
    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    <button>Learn More</button>
    </div>

    <div className="our-mission">
    <h1>Make Donation</h1>
    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    <button>Learn More</button>
    </div>

    <div className="our-mission">
    <h1>We Need Volunteers</h1>
    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    <button>Learn More</button>
    </div>
 </div>

 <div className="Fundraisers">
  <h1>Latest Fundraisers</h1>
  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button>View All Fundraisers</button>
  

      <div className=" flex flexrow ">
      {cardData.map((card, index) => (
          <div key={index} className={`card ${index === currentIndex ? 'active' : ''}`}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <div className="arrow-buttons">
        <button onClick={moveLeft}>{"->"}</button>
        <button onClick={moveRight}>{"<-"}</button>
      </div>
      </div>
       
  <div className="Donation">
    <h1>Latest Donations</h1>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button>View All Donations</button>
  </div>
   
  <div className="text">
   <div className="our-mission">
    <h1>Jorge Smith</h1>
    <p>Donated Just Now</p>
    <p>Donated <span>$252</span></p>
    <p>For Water Is Life. Clean Water In Urban Area</p>
    </div>

    <div className="our-mission">
    <h1>Christine Charles</h1>
    <p>Donated Just Now</p>
    <p>Donated <span>$252</span></p>
    <p>For Water Is Life. Clean Water In Urban Area</p>
    </div>

    <div className="our-mission">
    <h1>Albert Sluyter</h1>
    <p>Donated 1 hour ago</p>
    <p>Donated <span>$252</span></p>
    <p>For Water Is Life. Clean Water In Urban Area</p>
    </div>
    <div className="our-mission">
    <h1>Albert peter</h1>
    <p>Donated 4 hour ago</p>
    <p>Donated <span>$252</span></p>
    <p>For Water Is Life. Clean Water In Urban Area</p>
    </div>
 </div>

 <div className="stories">
         <div className="stories-left">
              <h1>stories</h1>
         </div>
         <div className="stories-right">
            <h1>Success Stories</h1>
            <p>Water is Life. We Successfuly Provide Clean Water in South East Asia</p>
            <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h2>
            <h1>We have raised $100,000</h1>
            <button>READ THE FULL STORY</button>
         </div>
 </div>
 <div className="latest-news">
             <h2>Latest News</h2>
             <div className="text">
   <div className="our">
    <h1>Be A Volunteer Today</h1>
    <p>July 26, 2018</p>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
    <button>Learn More</button>
    </div>

    <div className="our">
    <h1>Children That Needs care</h1>
    <p>July 26, 2018</p>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
    <button>Learn More</button>
    </div>

    <div className="our">
    <h1>You May Save The Life of A Child</h1>
    <p>July 26, 2018</p>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
    <button>Learn More</button>
    </div>
 </div>
 </div>

 <div className="form">
         <div className="form-left">
              <h1>stories</h1>
         </div>
         <div className="form-right">
            <h1>Be A Volunteer Today</h1>
          
          <input type="text" id="fname" name="firstname" placeholder="Enter Your name"></input><br/>
          <input type="text" id="fname" name="firstname" placeholder="Enter Your Email"></input><br/>
          <input type="text" id="fname" name="firstname" placeholder="Message"></input><br/>
           
         </div>
 </div>

      <Footer/>
 
    </>
   
  
  );
}
