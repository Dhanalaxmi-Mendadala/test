import { useState, useEffect } from "react";
import "./css/yourStories.css"
import getStories from "./getStoriesApi";
import PropTypes from 'prop-types'

function YourStories({stories}) {
  const [stories, setStories] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getStoriesData = async () => {
      const data = await getStories();
      if (data === null) {
        setError(true);
      } else {
        setStories(data);
        setLoading(false);
      }
    };
    getStoriesData();
  }, []);
  if (error) {
    return (<div className="error">Error!Page not found,Page not found</div>);
  }
  if (!loading) {
    return (
      <>
        <Stories stories={stories} />
      </>
    )
  }
};

function Drafts({ drafts }) {
  console.log(drafts)
  return (
    <div className="drafts-container">
      {drafts.length === 0 ? <p>No Drafts yet,please created</p> :
        <div className="all-drafts-unit">
          {drafts.map((draft, i) =>
            <div className="draft-unit" key={i}>
              <p className="draft-title">{draft['title'] || 'no title provided'}</p>
              <button className="edit-draft-button">Edit</button>
            </div>
          )
          }
        </div>}
    </div>)
}

Drafts.propTypes = {
  drafts: PropTypes.array.isRequired
}

function Publish({ published }) {
  console.log(published)
  return (
    <div className="published-container">
      {published.length === 0 ? <p>No published stories yet,please create</p> :
        <div className="all-published-unit">
          {published.map((singleStory, i) =>
            <div className="singleStory-unit" key={i}>
              <p className="singleStory-title">{singleStory['title'] || 'no title provided'}</p>
            </div>
          )
          }
        </div>}
    </div>)
}

Publish.propTypes = {
  published: PropTypes.array.isRequired
}



const STORIES = {
  "drafts": [
    {
      "id": 3,
      "title": "9 Ways to Build Virality into your Product",
      "content": [
        {
          "type": "paragraph",
          "data": {
            "text": "I am a computer science student with a passion for design and all things aesthetic. I am also a minimalist and love keeping things extremely simple. I thought it would be nice to document my current computer setup and share how I organize my digital workspace."
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "am a computer science student with a passion for design and all things aesthetic. I am also a minimalist and love keeping things extremely simple. I thought it would be nice to document my current computer setup and share how I organize my digital workspace."
          }
        },
        {
          "type": "header",
          "data": {
            "text": "Workspace",
            "level": 2
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "am a computer science student with a passion for design and all things aesthetic. I am also a minimalist and love keeping things extremely simple. I thought it would be nice to document my current computer setup and share how I organize my digital workspace."
          }
        },
        {
          "type": "delimiter",
          "data": {}
        },
        {
          "type": "header",
          "data": {
            "text": "Workspace",
            "level": 2
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "am a computer science student with a passion for design and all things aesthetic. I am also a minimalist and love keeping things extremely simple. I thought it would be nice to document my current computer setup and share how I organize my digital workspace."
          }
        }
      ],
      "published_at": null,
      "author": "abhilashkasula",
      "author_id": 58025056,
      "tags": []
    }
  ],
  "published": [
    {
      "id": 1,
      "title": "9 Ways to Build Virality into your Product",
      "content": [
        {
          "type": "paragraph",
          "data": {
            "text": "I am a computer science student with a passion for design and all things aesthetic. I am also a minimalist and love keeping things extremely simple. I thought it would be nice to document my current computer setup and share how I organize my digital workspace."
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "am a computer science student with a passion for design and all things aesthetic. I am also a minimalist and love keeping things extremely simple. I thought it would be nice to document my current computer setup and share how I organize my digital workspace."
          }
        },
        {
          "type": "header",
          "data": {
            "text": "Workspace",
            "level": 2
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "am a computer science student with a passion for design and all things aesthetic. I am also a minimalist and love keeping things extremely simple. I thought it would be nice to document my current computer setup and share how I organize my digital workspace."
          }
        },
        {
          "type": "delimiter",
          "data": {}
        },
        {
          "type": "header",
          "data": {
            "text": "Workspace",
            "level": 2
          }
        },
        {
          "type": "paragraph",
          "data": {
            "text": "am a computer science student with a passion for design and all things aesthetic. I am also a minimalist and love keeping things extremely simple. I thought it would be nice to document my current computer setup and share how I organize my digital workspace."
          }
        }
      ],
      "published_at": "2020-07-22 20:13:19",
      "author": "abhilashkasula",
      "author_id": 58025056,
      "tags": [
        "technology",
        "maths",
        "science",
        "thriller",
        "sci-fi"
      ]
    }
  ]
};


function Stories({ stories }) {
  const [currentPage, setCurrentPage] = useState('draft');
  console.log(stories)
  return (
    <div id="yourStories">
      <h1>Your Stories</h1>
      <nav>
        <a className="draft" onClick={() => setCurrentPage("draft")}>Drafts</a>
        <a className="publish" onClick={() => setCurrentPage("publish")}>Published</a>
      </nav>
      {
        currentPage === "draft" && <Drafts drafts={STORIES.drafts} /> ||
        currentPage === "publish" && <Publish published={STORIES.published} />
      }
    </div>
  );
}

Stories.propTypes = {
  stories: PropTypes.array.isRequired
}

export default YourStories;
