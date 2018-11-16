import React, { Component, Fragment } from 'react';
//import axios from 'axios';
import './post.sass';

class Post extends Component {
  state = {
    post: {},
    users: {},
  }

  componentDidMount() {
    const id = this.props.match.params.id || '';

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          post: data
        })
      })


     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        })
      })

  }

  render() {
    const { post, users, comments, data } = this.state;
    const { title, body, id } = post;
    const { name } = users;

    return (
      <Fragment>
        <div className="mono_post container">
          <h1><span>Post</span> #{id}</h1>
          <div>
            <h2 className="title_post">{ title }</h2>
            <p className="about_post">{ body }</p>
            <div><span className="state_post">Author:</span> { name }</div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default Post;