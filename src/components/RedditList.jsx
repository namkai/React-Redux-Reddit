import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setFrontPage} from '../API/index';
import Post from './Post';

export default class FrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            counter: 0,
            subreddit: "https://www.reddit.com/r/all/.json"
        };
        this.frontPage = this.frontPage.bind(this);
        this.frontPage();
    }
        async frontPage() {
        let {subreddit} = this.state;
        let load = await setFrontPage(subreddit)
        let page = load.data.children
        this.setState({posts: page})
        console.log(`these are the posts`, this.state.posts[0].data);
    }

    render() {
        let list = this.state.posts.map((ele) => {
            let {
                title,
                data,
                url,
                thumbnail,
                ups,
                permalink,
                id
            } = ele.data;
            // console.log(permalink);
            // this.setState({counter: ups}
            let {counter} = ups;

            if (thumbnail === "default" || thumbnail === "self" || thumbnail === "image") {
                thumbnail = `http://i.imgur.com/nqyB2SI.jpg`
            }
            if (thumbnail === "nsfw") {
                thumbnail = `http://i.imgur.com/rd6jDiP.gif`
            }
            // console.log(thumbnail);
            return (<Post title={title} key={id} data={data} url={url} thumbnail={thumbnail} ups={ups} permalink={permalink}/>)
        })
        if (this.state.posts.length === 0) {
            return (
                <div className="container">
                    <h5>Loading...</h5>
                </div>
            )
        }
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
