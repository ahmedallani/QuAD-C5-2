import React, { Component } from 'react';
import axios from 'axios'

import AddPost from './AddPost';
import Post from './Posts/Post.js'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            company : {},
            companyDescription : {},
            jobs :[],
            applications :[]
        }
    }

    componentDidMount(){
        console.log('Home mounted')
        axios.get('http://127.0.0.1:3008/jobs')
        .then(res => {
            console.log('job offers ===>', res.data)
            this.setState({jobs : res.data})
        })
        .catch(err => console.log('client side catch error ===>' , err))
    }
    render() {
        return (
            <div>
            <AddPost company={this.props.company}/>
            <Post company={this.props.company} offers={this.state.jobs}/>
            </div>
        );
    }
}

export default Home;