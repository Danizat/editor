import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';


import "./Article.css"



class Article extends Component {
  render() {

    return (
      <div className ="Article">
        <h1>{this.props.title}</h1>									
        <p>{this.props.firstName} {this.props.lastName}</p>				
        <p>{this.props.createdDate}</p>	
       
        <Markdown>{this.props.articleBody}</Markdown>		
      </div>							
    );
  }
}

export default Article;
