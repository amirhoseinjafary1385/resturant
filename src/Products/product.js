import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Product extends Component {

    clickHandler (id) {
        console.log(id);
    }

    render() {


        let {id, title, price, img } = this.props

        return(
            <div class='shop-item'>
                <span class='shop-item-title'>{title}</span>
                <img class='shop-item-image' src={img}/>
                <div class='shop-item-details'>
                    <span class='shop-item-price'>{price} IRT{"toman"}</span>
                    <button class='btn btn-primary shop-item-button' type='button' onClick={this.clickHandler.bind(this, id)}>Add-To-Cart</button>
                </div>
            </div>
        )
    }
}