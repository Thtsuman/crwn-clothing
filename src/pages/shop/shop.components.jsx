import React from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import Fade from 'react-reveal/Fade';



class ShopPage extends React.Component {

    state = {
        collections: SHOP_DATA
    };

    render() {

        const { collections } = this.state;

        return (
            <Fade bottom opposite >
                <div className='shop-page'>
                    {
                        collections.map(({ id, ...otherCollectionProps }) => (
                            <CollectionPreview key={id} {...otherCollectionProps} />
                        ))
                    }
                </div>
            </Fade>
        )
    }
}

export default ShopPage;