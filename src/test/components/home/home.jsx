import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
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
      <div>
      	  <div className="main-content">
			  <div className="view-block container">
			    <div className="tc">
			  	  	<h1>React app</h1>
			  	  	<h4>There are you can find some collection with posts</h4>
		  	  	</div>
		  	  	<div className="bottom_scroll">
			        <div class="line-scroll scroll scroll_2">
			            <span class="line active"></span>
			        </div>
			        <h5>Just scroll down</h5>
		        </div>
		  	  </div>
      	  </div>
      	  <div className="post-content">
		      <div className="container">
		        <ul className="post_list">
		          {data.map(({ id, title, body }) =>
		            <li key={id}>
		            	<Link className="more_info" to={`/posts/${id}`}>
		            	    <div className="main_info_post">
				            	<div className="title_post">{title}</div>
				            	<div className="about_post">{body}</div>
		            	    </div>
		            	    <div className="read_more">
		            	    	<span>Read more</span>
		            	    </div>
		            	</Link>
		            </li>
		          )}
		        </ul>
		      </div>
	      </div>
	  </div>
    );
  }
};

export default Home;