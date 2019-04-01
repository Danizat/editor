import React, { Component } from 'react';
import './App.css';

import {AuthorName,AuthorLastName,Article,Title, CreatedDate,ArticleBody}  from "./components";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      first_name: "",
      last_name:"",
      date: "" ,
      edit_text: ""
    }
this.changeTitle = this.changeTitle.bind(this);
this.changeLastName = this.changeLastName.bind(this);
this.changeFirstName = this.changeFirstName.bind(this);
this.changeDate = this.changeDate.bind(this);
this.changeText = this.changeText.bind(this);
  }

  changeFirstName(e) {
    this.setState({
      first_name: e.target.value
    })
  };
  changeTitle(e) {
    this.setState({
      title: e.target.value
    })
  };
  changeLastName(e) {
    this.setState({
      last_name: e.target.value
    })
  };
  changeDate(e) {
    this.setState({
      date: e.target.value
    })
  };
  changeText(e) {
    this.setState({
      edit_text: e.target.value
    })
  };
  
  
  
  render() {
    return (
      <div className="App container row">
        <div className ="col-6 text-center ">
        <Title changeTitle = {this.changeTitle} />
        <AuthorName changeFirstName = {this.changeFirstName} />
        <AuthorLastName changeLastName = {this.changeLastName} />
        <CreatedDate changeDate = {this.changeDate} />
        <ArticleBody changeText = {this.changeText} />
        </div>

        <Article
        title = {this.state.title} 
        firstName = {this.state.first_name}
        lastName = {this.state.last_name}
        createdDate = {this.state.date}
        articleBody = {this.state.edit_text}
        className ="col-6"/>
      </div>
    );
  }
}

export default App;
