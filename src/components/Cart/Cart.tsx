import React from "react";
import {CartWrapper} from "./Cart.styles";
import {CartItemType} from "../../App";
import CartItem from "./CartItem";

interface Props {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (itemId: number) => void;
}

const Cart = ({
				cartItems,
				addToCart,
				removeFromCart
			  }: Props) => {
  const calculateTotal = (items: CartItemType[]) => items.reduce(
	(acc: number, item) => acc + (
	  item.amount * item.price
	), 0);
  
  return (
	<CartWrapper>
	  <h2>
		Your shopping cart
	  </h2>
	  {cartItems.length
	   ? (
		 <>
		   {cartItems?.map(item => (
			 <CartItem addToCart = {addToCart}
					   item = {item}
					   removeFromCart = {removeFromCart}
			 ></CartItem>
		   ))}
		   <h2 style = {{
			 marginTop: "2rem",
		   }}
		   >
			 Total:${calculateTotal(cartItems)
			 .toFixed(2)}
		   </h2>
		 </>
	   )
	   : (
		 <p>
		   Your cart is Empty.
		 </p>
	   )}
	</CartWrapper>
  );
};

export default Cart;
