import React, { Component } from 'react';
import PropTypes from "prop-types";



class ArticleBody extends Component {
  render() {
		const {changeText} = this.props
    return (
			<div>
				<label htmlFor="ArticleBody ">Article Body
				</label>
			
				<	textarea className="ArticleBody w-100"  
				onChange = {changeText}/>
			</div>									
    );
  }
}

ArticleBody.propTypes = {
	changeText:  PropTypes.func.isRequired
}

export default ArticleBody;
