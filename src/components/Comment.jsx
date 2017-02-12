import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {comment} = this.props;
        return (
            <li><strong>{comment.author}</strong>: {comment.body}</li>
        )
    }
}
