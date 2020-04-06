import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart-action'
import { selectCartItemCount } from '../../redux/cart/cart-selector'


import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg'

import './cart-icon.style.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);