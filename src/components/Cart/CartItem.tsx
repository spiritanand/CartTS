import React from "react";
import {CartItemWrapper} from "./Cart.styles";
import {CartItemType} from "../../App";
import {Button} from "@material-ui/core";

interface Props {
  item: CartItemType,
  addToCart: (item: CartItemType) => void
  removeFromCart: (itemId: number) => void
}

const CartItem = ({
					item,
					addToCart,
					removeFromCart
				  }: Props) => {
  return (
	<CartItemWrapper>
	  <div>
		<h3>
		  {item.title}
		</h3>
		<div className = "info">
		  <p>
			Price:${item.price}
		  </p>
		  <p>Total:${(
			item.amount * item.price
		  ).toFixed(2)}</p>
		</div>
		<div className = "amount">
		  <Button size = {"small"}
				  disableElevation
				  variant = {"contained"}
				  onClick = {() => removeFromCart(item.id)}
		  >
			-
		  </Button>
		  <p>
			{item.amount}
		  </p>
		  <Button size = {"small"}
				  disableElevation
				  variant = {"contained"}
				  onClick = {() => addToCart(item)}
		  >
			+
		  </Button>
		</div>
	  </div>
	  <img src = {item.image}
		   alt = {item.title}
	  />
	</CartItemWrapper>
  );
};

export default CartItem;
