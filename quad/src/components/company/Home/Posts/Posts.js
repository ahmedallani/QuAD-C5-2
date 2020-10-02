import React, { Component } from 'react';
import Post from './Post.js'
class Posts extends Component {
    render(props) {
        // const comaonyPosts = this.props.post;
        // const postsLists = comaonyPosts.map((post, index) => {
        //     <div key={i}>
        //       <post post={this.props.post} />
        //     </div>;
        // }) 
        return (
          <div>
            <Post />
          </div>
        );
    }
}

export default Posts;