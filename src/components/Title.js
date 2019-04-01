import React, { Component } from 'react';


class Title extends Component {
  render() {

    return (
      <div>
        <label htmlFor="Title">Article Title</label>
        <input type="text" className="Title w-100" placeholder = "Title" 
      onChange = {this.props.changeTitle}/>		
      </div>
     						
    );
  }
}

export default Title;
