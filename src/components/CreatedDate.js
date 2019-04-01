import React, { Component } from 'react';
import PropTypes from "prop-types";


class CreatedDate extends Component {
  render() {
		const {changeDate} = this.props;
    return (
			<div>
				<label htmlFor="CreatedDate">Published At
				</label>
				<input type="date" className="CreatedDate w-100 "  
				onChange = {changeDate}/>
			</div>									
    );
  }
}

CreatedDate.propTypes = {
	changeDate:  PropTypes.func.isRequired
};

export default CreatedDate;
