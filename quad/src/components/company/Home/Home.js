import React, { Component } from 'react';

import AddPost from './AddPost';
import Post from './Posts/Post.js'

class Home extends Component {
    render() {
        return (
            <div>
            <AddPost/>
            <Post/>
            </div>
        );
    }
}

export default Home;