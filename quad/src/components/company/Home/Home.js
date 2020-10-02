import React, { Component } from 'react';

import AddPost from './AddPost';
import Posts from './Posts/Posts'

class Home extends Component {
    render() {
        return (
            <div>
            <AddPost/>
            <Posts/>
            </div>
        );
    }
}

export default Home;