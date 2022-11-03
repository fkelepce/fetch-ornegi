import React from "react";

const SearchForum = (props) => {

    
    return (
    <form> 
        <input name="search"
         placeholder="search countries" 
         value={props.search} 
         onChange= {props.onSearchChange}
         /> 
    </form>
    );
};


export default SearchForum;