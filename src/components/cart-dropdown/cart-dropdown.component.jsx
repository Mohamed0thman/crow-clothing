import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomBotton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart-selector.js'
import { toggleCartHidden } from '../../redux/cart/cart-action'

import './cart-dropdown.style.scss'

const CartDropdown = ({cartItem, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

            {cartItem.length ? (
            cartItem.map(cartItem => (   
                <CartItem key={cartItem.id} item={cartItem} /> 
            ))
            ) : (
                <span className='empty-message'> Your cart is empty </span>
            )
        }
        </div>
        <CustomBotton onClick={
            () => { history.push('/checkout')
                dispatch(toggleCartHidden())
            }
            }> GO TO CHECKOUT </CustomBotton>
    </div>
)  

const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));