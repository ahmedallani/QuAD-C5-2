import React, { Component } from 'react';

import AddPost from './AddPost';
import Post from './Posts/Post.js'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            company : {},
            companyDescription : {},
            applications :[]
        }
    }
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