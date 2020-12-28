import React from "react";

const Header=(props)=>{
    return (
      <div className="ui inverted segment">
          <h2 className="ui inverted center aligned icon header">
            <i className="book icon"></i>
            {props.title}
          </h2>
      </div>
    );
};

export default Header;