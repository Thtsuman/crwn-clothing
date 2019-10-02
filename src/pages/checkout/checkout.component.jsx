import React from 'react';
import Fade from 'react-reveal/Fade';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.style.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <Fade bottom opposite>
        <div className="checkout-page">

            <div className="checkout-header">
                <div className="header-block">
                    <span>Products</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItems.id} cartItem={cartItem} />
                ))
            }



            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    </Fade>
)

const mapStateToProps = () => createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);