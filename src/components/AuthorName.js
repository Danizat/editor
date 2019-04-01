import React, { Component } from 'react';


class AuthorName extends Component {
  render() {
    return (
      <div>
        <label htmlFor="AuthorName ">Author Name</label>
        <input type="text" className="AuthorName w-100" placeholder = "Author name" 
      onChange = {this.props.changeFirstName}/>		
      </div>
      								
    );
  }
}

export default AuthorName;
