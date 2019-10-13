import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import Fade from 'react-reveal/Fade';

import './collection-preview.style.scss';

const CollectionPreview = ({ title, items, history, match }) => (
    <div className='collection-preview'>
        <Fade bottom opposite>
            <div className='menu'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <p
                    className='submenu'
                    onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
                >see more</p>

            </div>
            <div className='preview'>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </div>
        </Fade>
    </div>
)

export default withRouter(CollectionPreview);