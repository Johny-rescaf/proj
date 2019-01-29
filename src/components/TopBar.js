import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SmallImage from './SmallImage';

class TopBar extends Component {
  render() {
    render(
      <div className="TopBar">
        <header className="TopBar-header">
          <img src={logo} className="TopBar-logo" alt="logo" />
          <SearchBar />
          <div className="right-side">
            <button className="btn btn-lg btn-success">
              <i className="fas fa-plus"></i>
              New Project
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default TopBar;