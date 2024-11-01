import "../assets/writeANewStory.css";
import { useState } from 'react';

function WriteANewStory () {
    return (
        <>
        <Header/>
        <DynamicParagraphs/>
        <Body/>
        </>
    )
};

function Body () {
    return (<div  id="storySpaces">
        <section >
        <input className="title" placeholder="Title"></input> <br/>
        <textarea className="story" placeholder="Tell your story ..."></textarea>
        </section>
        </div>)
}

function Header() {
    return (<header id="header">
        <div id="leftDiv">
          <h1>  <a href="#" id="headerTitle">Medium</a> </h1>
          <p>Draft in IDIOT</p>
        </div>
        <div id="rightDiv">   
        </div>
    </header>)
}



const DynamicParagraphs = () => {
  const [paragraphs, setParagraphs] = useState([]);
  
};

// module.exports = {Body, DynamicParagraphs};

export default WriteANewStory;
