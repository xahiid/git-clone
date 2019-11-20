import React, { Component } from 'react'

export default class Main extends Component {
    state={
        list: [
            'Repositories',
            'Projects',
            'Stars',
            'Followers',
            'Following']
    };
    
    render() {
        return (
            <div>
                Overview
    {this.state.list.map(list=><li className='li_main'>{list}</li>)}
    <hr/>
            </div>
        )
    }
}
