import React from "react";

const SearchBar = (props) => {
  return (
    <div className="ui search" style={{ marginLeft: "20%" }}>
      <form>
        <div className="ui icon input" style={{ width: "40%", height: "50%" }}>
          <input
            value={props.defaultTitle}
            className="prompt"
            type="text"
            placeholder="Search Books..."
            onChange={props.handleChangeInput}
          />
          <i className="search icon"></i>
        </div>
        <select
          className="ui selection dropdown"
          style={{ marginLeft: "10px", width: "20%", height: "50%" }}
          onChange={props.handleChangeDropdown}
          value={props.defaultorder}
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="popular">Popular</option>
        </select>
        <button
          className="ui blue button"
          style={{ marginLeft: "10px" }}
          onClick={props.handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
