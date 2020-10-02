import React, { Component } from 'react';
import Feed from './Feed'

export default class Feeds extends Component {
    render(props) {
        const jobs = this.props.jobs;
        const listJobs = jobs.map((job, i) => 
            <div key={i}><Feed user={this.props.user} feed={job}/></div>
        )
        return (
            <div>
                {listJobs}
            </div>
        )
    }
}
