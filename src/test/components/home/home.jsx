// import React from 'react';

// const Home = () => (
//   <div className="container">
//       <h1>It's the Home page of simple SPA</h1>
//   </div>
// );

// export default Home;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.sass';

class Home extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({
          data
        })
      })
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <h1>Main page</h1>
        <ul className="post_list">
          {data.map(({ id, title, username, body }) =>
            <li key={id}>
            	<Link to={`/posts/${id}`}>{title}</Link>
            	<div>{username}</div>
            	<div>{body}</div>
            </li>
          )}
        </ul>
      </div>
    );
  }
};

export default Home;