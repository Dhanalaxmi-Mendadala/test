import { useState } from "react";
import PropTypes from 'prop-types'
import searchData from "../API/search";
import StoryCard from "./StoryCard";
import '../css/search.css'
import searchImage from '../components/svg/1.svg'

const SearchInput = ({ setResults, searchTerm, setSearchTerm }) => {
  return (
 <div className="input-main-container">
    <div className="input-container">
  <img src= {searchImage} style={{
      width: '20px',
      height: '20px'
    }}></img>
    <input type="text" value={searchTerm} placeholder="Search A Story" onInput={(e) => {
      setSearchTerm(e.target.value)
    }} onKeyDown ={(e) => {
      if (e.key === 'Enter') {
        const makeSearch = async () => {
          const data = await searchData(searchTerm);
          setResults(data['contentBased']);
        };
        makeSearch();
      }
    }} />
 </div>
 </div>
  )
}
SearchInput.propTypes = {
  setResults: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

const SearchResults = ({ results, searchTerm }) => {
  console.log(results)
  if (searchTerm) return (
    <div className="search-results">
      <div className="default-search-output">
        <span className="results-for">Searching..</span>
        <span className="content-searched"> {searchTerm}</span>
      </div>
      {
        results.length !== 0 ?
          results.map((storyData, i) =>
            <StoryCard key={i}
              storyData={storyData}
              username={storyData['author']}
              userAvatar={storyData['avatar_url']}
              userId={storyData['authorId']} />) :
          <div className="no-results-data-main-container">
            <div className="no-results-data-container">
              <p>Make sure all words are spelled correctly.</p>
              <p>Try different keywords.</p>
              <p>Try more general keywords.</p>
            </div>
          </div>
      }
    </div>
  )
}
SearchResults.propTypes = {
  results: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired
}

const Search = () => {
  const [results, setResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <SearchInput setResults={setResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {
        results && <SearchResults results={results} searchTerm={searchTerm} />
      }
    </>)
}

export default Search