import { useEffect, useState } from "react"
import './DashBoard.css'
import { useNavigate } from "react-router-dom"


const followAllUsers = async () => {
`56071561,"anil-muraleedharan","https://avatars2.githubusercontent.com/u/56071561?v=4"
58025056,"abhilashkasula","https://avatars0.githubusercontent.com/u/58025056?v=4"
58025419,"myultimatevision","https://avatars0.githubusercontent.com/u/58025419?v=4"
58026249,"venkybavisetti","https://avatars2.githubusercontent.com/u/58026249?v=4"
58026402,"naveen-kumar-vadla","https://avatars3.githubusercontent.com/u/58026402?v=4"
58028408,"photongupta","https://avatars0.githubusercontent.com/u/58028408?v=4"
11140683,"techburner","https://avatars.githubusercontent.com/u/11140683?v=4"
`
fetch('http://localhost:8000/user/follow', {
  method: 'POST',
  headers: {
     'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    authorId: 58026402,
  }),
  credentials: "include",
})
.then((data) => data.json())
.then((data) => {
  console.log(data)
})
}

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
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCoverPage = async () => {
      const response = await fetch('http://localhost:8000/coverImage/cover-image.png');

      setStoryData(storyData => ({
        ...storyData,
        image: response['url']
      }))
    }
    fetchCoverPage();
  }, []);
  return (
    <div className="story-component" onClick={() => {
      console.log(storyData)
      navigate('/homepage/storypage', {
        state : {
          currentStory : storyData,
        }
      })
    }}>
    
      <div className="author-details">
        <img src={''} alt="avatar" className="author-avatar" />
        <h4 className="author-name">Naveen Kumar</h4>
      </div>
      <div className="story-details">
        <h3 className="story-title">{'something'}</h3>
        <p className="story-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quisquam. Ducimus rem officia, molestias alias odio inventore repellat magni, possimus vel dolores quae natus quos, quisquam laborum sunt fugit. Culpa?</p>
        <img src={storyData['image']} alt="cover-image" className="story-cover-image" />
      </div>
      <div className="story-meta-data">
        <p className="published-time">Feb 30😑</p>
        <p className="story-claps"></p>
        <p className="story-responses"></p>
      </div>
    </div>
  )
}

const DashBoard = () => {
useEffect(() => {
  // followAllUsers()
}, [])

  return (
    <>
      <StoryComponent data={storyData} />
    </>
  )
}

export default DashBoard
