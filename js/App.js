import React from 'react'
import { render } from 'react-dom'

var EpisodeRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.episode.title}</td>
                <td><a href="#">view</a></td>
            </tr>
        );
    }
});

var EpisodeTable = React.createClass({
    render: function() {
      var props = this.props;
      var rows = props.episodes.map(function(episode){
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
});

var SearchBar = React.createClass({
    render: function() {
        return (
            <div className="row ">
              <div className="col-lg-4 col-lg-offset-4">
                  <input type="search" className="form-control" placeholder="Search for episode" />
              </div>
            </div>
        );
    }
});

var FilterableEpisodeTable = React.createClass({
  render: function() {
      return (
          <div className="spacer">
              <SearchBar   />
              <EpisodeTable episodes={this.props.episodes} />
          </div>
      );
  }
});


var episodes = [{
      title : "Angular with Yeoman",
  },{
      title : "Using D3 with Rickshaw and Angular",
  },{
      title : "Canvas with paper.js",
  },{
      title : "Express.js middleware",
  },{
      title : "MEAN stack - episode 1",
  }
];

render(<FilterableEpisodeTable episodes={episodes} />, document.getElementById('app'));
