import React, { Component } from 'react';

// Components
import Post from '../post/Post.jsx';


export default class Feed extends Component {
				render() {
								return (
												<div className="feed">
																{this.renderFeed()}
												</div>
								);
				}

				renderFeed() {
								let posts = ['1', '2', '3', '4'];
								let feed = [];

								posts.map((post, key) => {
												feed.push(<Post key={key} bodyContent={post}/>);
								});

								return feed;
				}
}
