import "../assets/writeANewStory.css";
import { useState } from 'react';

function WriteANewStory() {
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleStoryChange = (e) => {
        setStory(e.target.value);
    };

    const handleSaveDraft = () => {
        console.log("Draft saved with title:", title);
        console.log("Story:", story);
    };

    return (
        <>
            <Header />
            <Body 
                title={title} 
                story={story} 
                onTitleChange={handleTitleChange} 
                onStoryChange={handleStoryChange} 
                onSaveDraft={handleSaveDraft} 
            />
        </>
    )
};

function Body({ title, story, onTitleChange, onStoryChange, onSaveDraft }) {
    return (
        <div id="storySpaces">
            <section>
                <input 
                    className="title" 
                    placeholder="Title" 
                    value={title} 
                    onChange={onTitleChange}
                /><br/>
                <textarea 
                    className="story" 
                    placeholder="Tell your story..." 
                    value={story} 
                    onChange={onStoryChange}
                ></textarea><br/>
                <button onClick={onSaveDraft}>Save Draft</button>
            </section>
        </div>
    )
}

function Header() {
    return (
        <header id="header">
            <div id="leftDiv">
                <h1>
                    <a href="#" id="headerTitle">Medium</a>
                </h1>
                <p>Draft in IDIOT</p>
            </div>
            <div id="rightDiv"></div>
        </header>
    )
}

export default WriteANewStory;
