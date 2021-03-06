import React, { Component } from 'react';
import Toc from './components/Toc';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'welcome', desc: 'Hello, React!!'},
      contents:[
      {id:1, title:'HTML', desc:'HTML is HyperText Markup Language.'},
      {id:2, title:'CSS', desc:'CSS is for design'},
      {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
          >
          </Subject>
        <header>
              <h1><a href="/" onClick={function(e) {
                console.log(e);
                e.preventDefault();
                //this.state.mode = 'welcome'; : 두가지의 문제를 품고있음
                this.setState({
                  mode : 'welcome'
                });
              }.bind(this)}>{this.state.subject.title}</a></h1>
              {this.state.subject.sub}
        </header>
        <Toc 
          onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
