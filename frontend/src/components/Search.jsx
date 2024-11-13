import { useState } from "react";
import PropTypes from 'prop-types'
import searchData from "../API/search";
import StoryCard from "./StoryCard";
import '../css/search.css'

const SearchInput = ({ setResults, searchTerm, setSearchTerm }) => {
  return (
   <div className="input-container">
    <input type="text" value={searchTerm} placeholder="Search A Story" onInput={(e) => {
      setSearchTerm(e.target.value)
    }} onKeyDown={(e) => {
      if (e.key === 'Enter') {
        const makeSearch = async () => {
          const data = await searchData(searchTerm);
          setResults(data['contentBased']);
        };
        makeSearch();
      }
    }} />
 </div>
  )
}
SearchInput.propTypes = {
  setResults: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

const SearchResults = ({ results, searchTerm }) => {
  if (results.length === 0 && searchTerm)
    return <div className="default-serach-output">Searching {searchTerm}</div>
  return (
    <div className="search-results">
      {results.map((storyData, i) =>
        <StoryCard key={i}
          storyData={storyData}
          username={storyData['author']}
          userAvatar={`https://avatars.githubusercontent.com/u/${storyData['author_id']}?v=4`}
          userId={storyData['author_id']} />)}
    </div>
  )
}
SearchResults.propTypes = {
  results: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired
}

const Search = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <SearchInput setResults={setResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchResults results={results} searchTerm={searchTerm} />
    </>)
}

export default Search