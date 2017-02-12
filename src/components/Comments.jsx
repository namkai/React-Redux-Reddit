import React, {Component} from 'react';
import {connect} from 'react-redux';

import Comment from './Comment';

class Comments extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props, `I'm the props before the if statement`);
        if(this.props.data.comments.length === 0) {
            return (
                <h2>Loading...</h2>
            )
        }
        console.log(this.props, `i'm the props on the comments page yo`);
        let comments = this.props.data.comments[1].data.children;
        console.log(comments, `i'm the comments yo`);
        // console.log(comments,`i'm the comments`);
        let commentList = comments.map((comment) => {
            console.log(comment, `i'm the mapped comments`);
            return (
                <Comment comment={comment.data}/>
            )
        })
        return (
            <div>
                <ol>
                    {commentList}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(`i'm the mapStateToProps state`, state);
    return {data: state.data}
}

export default connect(mapStateToProps)(Comments);
