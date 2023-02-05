import React from "react";
import {CartItemType} from "../../App";
import {ItemWrapper} from "./Item.styles";
import {Button} from "@material-ui/core";

interface Props {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
}

const Item = ({
				item,
				handleAddToCart
			  }: Props) => {
  return (
	<ItemWrapper>
	  <img src = {item.image}
		   alt = {item.title}
	  />
	  <div>
		<h3>
		  {item.title}
		</h3>
		<p>
		  {item.description}
		</p>
		<h3>
		  ${item.price}
		</h3>
	  </div>
	  <Button onClick = {() => handleAddToCart(item)}>
		Add to Cart
	  </Button>
	</ItemWrapper>
  );
};

export default Item;
