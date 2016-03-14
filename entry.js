import React, { Component } from 'react';
import { render } from 'react-dom';

require('./styles/main.css');

class HelloMessage extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

class EpisodeRow extends Component {
  constructor(props) {
    super(props);
    this.state = {viewed: false};
  }

  handleClick() {
    this.setState({viewed: true});
  }

  render() {
    return (
      <tr>
          <td>{this.props.episode.title}</td>
          <td><a onClick={this.handleClick.bind(this)} href="#">view</a></td>
      </tr>
    );
  }
}

class EpisodeTable extends Component {
  render(){
    let rows = this.props.episodes.filter(episode =>{
      return episode.title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1
    })
    .map(function(episode){
        return <EpisodeRow key={episode.title} episode={episode} />;
    });
    return (
        <div className="row spacer">
          <div className="col-lg-4 col-lg-offset-4">
            <table width="100%">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
    );
  }
}

class SearchBar extends Component {
  handleChange(){
    this.props.onFilterInput(this.refs.filterTextInput.value)
  }
  render(){
    return (
        <div className="row ">
          <div className="col-lg-4 col-lg-offset-4">
              <input ref="filterTextInput" value={this.props.filterText} type="search" className="form-control" placeholder="Search for episode" onChange={this.handleChange.bind(this)} />
          </div>
        </div>
    );
  }
}

class FilterableEpisodeTable extends Component {
    constructor(props){
      super(props);
      this.state = {filterText: ''};
    }

    handleFilterInput(filterText){
      this.setState({filterText:filterText})
    }

    render(){
        return (
          <div className="spacer">
              <SearchBar filterText={this.state.filterText} onFilterInput={this.handleFilterInput.bind(this)}  />
              <EpisodeTable filterText={this.state.filterText} episodes={this.props.episodes} />
          </div>
      );
    }
}


let episodes = [{
      title : "Angular with Yeoman",
  },{
      title : "Using D3 with Rickshaw and Angular",
  },{
      title : "Canvas with paper.js",
  },{
      title : "Express.js middleware",
  },{
      title : "MEAN stack - episode 1",
  },{
    title: "ES6 Basic"
  }
];


// 加载组件到 DOM 元素 mountNode
render(<FilterableEpisodeTable episodes={episodes} />,  document.getElementById('app'));








// document.write('Hello,Workfont! The current time is:' + require('./displayTime')());
