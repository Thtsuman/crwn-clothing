import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss'
import Fade from 'react-reveal/Fade';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <Fade bottom>
        <div className={`menu-item ${size}`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="background-image" style={{
                background: `url(${imageUrl}) center center/cover`
            }} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    </Fade>
);

export default withRouter(MenuItem);