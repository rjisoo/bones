import React from 'react'
import { RaisedButton } from 'material-ui'
import Reviews from '../Reviews'
import { roundPrice, getStars } from '../../utils'

export default ({ product, buyClick }) => {

	if(!Object.keys(product).length) {
		return null
	}

  return (

    <div id="product" className="col-xs-12">
    	<div className="row">
    		<div className="product-image col-xs-12 col-sm-8" >

    		<img src={product.images[0]} alt="" />

    		</div>

    		<div className="product-details col-xs-12 col-sm-4" >

    			<h2>{product.name}</h2>
    			<p>{`$${roundPrice(product.price)}`}</p>
          {
						// TODO: Replace with real average rating
            getStars(3)
          }
    			{product.quantity ? <p> In-Stock </p> : <p> Out Of Stock </p> }
    			<RaisedButton onClick={buyClick} label='Buy'/>

    		</div>

    	</div>

    	<div className="row">
    		<div className="product-description col-xs-12" >
    			<p>{product.description}</p>
    		</div>
    	</div>

    	<div className="row">
    		<Reviews reviews={product.reviews} avgRating={4} />
    	</div>





    </div>

  	)
  };