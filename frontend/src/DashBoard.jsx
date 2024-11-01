import { useEffect, useState } from "react"
import './DashBoard.css'

async function fetching() {
  try {
    const response = await fetch('http://localhost:8000/user/dashboard', {
      method: 'GET', // HTTP method
      headers: { 'Content-Type': 'json' },
      mode: 'cors',
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch  {
    return null;
  }
};

const storyData = {
  "story": {
    "id": 1,
    "title": "9 Ways to Build Virality into your Product",
    "author": "naveen-kumar-vadla",
    "avatar_url": "https://avatars3.githubusercontent.com/u/58026402?v=4",
    "authorId": 58026402,
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
    "views": 0,
    "cover_image_name": "cover-image.png",
    "is_following": "false",
    "responsesCount": 4,
    "clapsCount": 3,
    "isClapped": 0,
    "tags": [
      "technology",
      "maths",
      "science",
      "thriller",
      "sci-fi"
    ],
    "isAuthor": false
  },
  "responses": [
    {
      "id": 58025419,
      "response": "Nice story",
      "responded_at": "2020-07-22 20:13:19",
      "username": "myultimatevision",
      "avatar_url": "https://avatars0.githubusercontent.com/u/58025419?v=4"
    },
    {
      "id": null,
      "response": "Thanks Naagu",
      "responded_at": "2020-07-22 20:13:19",
      "username": null,
      "avatar_url": null
    },
    {
      "id": 58028408,
      "response": "Our app",
      "responded_at": "2020-07-22 20:13:19",
      "username": "photongupta",
      "avatar_url": "https://avatars0.githubusercontent.com/u/58028408?v=4"
    },
    {
      "id": 58026249,
      "response": "Nice story",
      "responded_at": "2020-07-22 20:13:19",
      "username": "venkybavisetti",
      "avatar_url": "https://avatars2.githubusercontent.com/u/58026249?v=4"
    }
  ]
}

const StoryComponent = () => {
  const [storyData, setStoryData] = useState({});
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchCoverPage() {
      const response = await fetch('http://localhost:8000/coverImage/cover-image.png');

      setStoryData(storyData => ({
        ...storyData,
        image: response['url']
      }))
    }
    fetchCoverPage();
  }, []);
  useEffect(() => {
    const getUserData = async () => {
      const data = await fetching();
      if (data === null) {
        setError(true);
      } else {
        setUserData(data);
      }
    };
    getUserData();
  }, []);
  if (error) {
    return <h1 style={{ color: "red" }}>Error!404 Page Not FOUND..Connection Issue</h1>
  }
  console.log(userData);
  return (
    error != true && userData && <div className="story-component">
      <div className="author-details">
        <img src={userData.avatar_url} alt="avatar" className="author-avatar" />
        <h6 className="author-name"></h6>
      </div>
      {userData.stories.length != 0 ?<><div className="story-details">
        <h3 className="story-title">{userData.username}</h3>
        <p className="story-description"></p>
        <img src={storyData['image']} alt="cover-image" className="story-cover-image" />
      </div>
      <div className="story-meta-data">
        <p className="published-time"></p>
        <p className="story-claps"></p>
        <p className="story-responses"></p>
      </div></>:<h4>Their are no stories,written By {userData.username}</h4>}
    </div>
  )
}

const DashBoard = () => {

  return (
    <>
      <StoryComponent data={storyData} />
    </>
  )
}

export default DashBoard
