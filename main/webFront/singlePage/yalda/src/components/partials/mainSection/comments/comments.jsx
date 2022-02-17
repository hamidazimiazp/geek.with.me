import React, { Component } from 'react'
import Comment from './comment';
import getComments from "../../../../services/comments";


class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        const comments = getComments();
        this.setState({
            comments
        });
    }

    render() {
        return (
            <section className="comments">
                <div className="comments-wrapper">
                    <div className="center-line">
                        <a href="#root" className="scroll-icon">
                            <i className="fa fa-caret-up"></i>
                        </a>
                    </div>
                    {
                        this.state.comments.map(comment => {
                            return (
                                <Comment
                                    key={comment.id}
                                    title={comment.title}
                                    icon={comment.icon}
                                    date={comment.date}
                                    message={comment.message}
                                    sender={comment.sender}
                                />
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Comments;