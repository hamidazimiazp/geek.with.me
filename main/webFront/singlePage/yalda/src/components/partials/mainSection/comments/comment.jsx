import React from 'react';


const Comment = (props) => {
    return (
        <div className="line-row">
            <div className="section-icon">
                <i className="fa fa-comment"></i>
            </div>
            <section>
                <div className="header-detail">
                    <div className="title">
                        {props.title}
                    </div>
                    <span>{props.date}</span>
                </div>
                <p>
                    {props.message}
                </p>
                <div className="footer-detail">
                    <a href="/more">ادامه</a>
                    <i>{props.sender}</i>
                </div>
            </section>
        </div>
    );
}

export default Comment;