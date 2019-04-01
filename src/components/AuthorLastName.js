import React, { Component } from 'react';


class AuthorLastName extends Component {
  render() {
    return (
      <div>
        <label htmlFor="AuthorLastName ">Author Last Name</label>
        <input type="text" className="AuthorLastName w-100" placeholder = "Author Last name" 
      onChange = {this.props.changeLastName}/>
      </div>
     									
    );
  }
}

export default AuthorLastName;
