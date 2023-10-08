const Search = ({ searchTxt, handleChange }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTxt} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Search;
