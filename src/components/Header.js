import React from "react";

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <img src={icon} className="icon"/>
                <h2>Keep</h2>
                <i class="material-icons">face</i>
          </div>
        );
    }
}

export default Header;