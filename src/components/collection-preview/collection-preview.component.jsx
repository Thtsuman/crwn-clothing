import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import Fade from 'react-reveal/Fade';

import './collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <Fade bottom opposite>
            <h1 className='title'>{title.toUpperCase()}</h1>
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

export default CollectionPreview;