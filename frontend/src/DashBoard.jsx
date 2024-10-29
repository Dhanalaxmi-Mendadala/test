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
return (
  <div className="story-component">
    <div className="author-details">
      <img src="" alt="avatar" className="author-avatar" />
      <h6 className="author-name"></h6>
    </div>
    <div className="story-details">
      <h3 className="story-title"></h3>
      <p className="story-description"></p>
      <img src="" alt="cover-image" className="story-cover-image" />
    </div>
    <div className="story-meta-data">
      <p className="published-time"></p>
      <p className="story-claps"></p>
      <p className="story-responses"></p>
    </div>
  </div>
)
}

const DashBoard = () => {

  return (
    <>
      <h3>dash boradr</h3>
      <StoryComponent data={storyData} />
    </>
    )
}

export default DashBoard
