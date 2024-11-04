const dashBoardData = [
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
  },
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
    "published_at": "2020-07-22 20:13:19",
    "author": "anil-muraleedharan",
    "author_id": 56071561,
    "tags": [
      "comic"
    ]
  }
]

const StoryComponent = ({ recentStory }) => {
  console.log(recentStory, null);
  return (
    <div className="story-component">
      <div className="author-details">
        <img src="" alt="avatar" className="author-avatar" />
        <h6 className="author-name">{recentStory['author']}</h6>
      </div>
      <div className="story-details">
        <h3 className="story-title">{recentStory['title']}</h3>
        <p className="story-description">{recentStory['content'][0]['data']['text']}</p>
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
console.log(dashBoardData)
  return (
    <>
      <h3>dash boradr</h3>
      {
        dashBoardData.map((recentStory,i) =>
          <StoryComponent data={recentStory} key={i} />)
      }
    </>
  )
}

export default DashBoard
