import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import './directory.style.scss'


const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ title, id, imageUrl, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);