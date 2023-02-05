import React, {useState} from "react";
import {useQuery} from "react-query";
import {
  Badge,
  Drawer,
  Grid,
  LinearProgress
} from "@material-ui/core";
import {
  AppWrapper,
  StyledButton
} from "./App.styles";
import Item from "./components/Item/Item";
import {AddShoppingCart} from "@material-ui/icons";
import Cart from "./components/Cart/Cart";

export interface CartItemType {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  
  return data;
};

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  
  const {
		  data,
		  error,
		  isLoading
		} = useQuery<CartItemType[]>("products", getProducts);
  console.log(data);
  
  if (isLoading)
	return <LinearProgress/>;
  
  if (error)
	return (
	  <div>
		<p>
		  Something went wrong...
		</p>
	  </div>
	);
  
  function handleAddToCart(clickedItem: CartItemType): void {
	setCartItems(prevState => {
	  const isItemInCart = prevState.find(item => item.id === clickedItem.id);
	  
	  if (isItemInCart)
		return prevState.map(item => {
		  return item.id === clickedItem.id
				 ? {
			  ...item,
			  amount: item.amount + 1
			}
				 : item;
		});
	  
	  else {
		return [
		  ...prevState,
		  {
			...clickedItem,
			amount: 1
		  }
		];
	  }
	});
  };
  
  function handleRemoveFromCart(itemId: number) {
	setCartItems(prevState =>
	  prevState.reduce((acc: CartItemType[], item) => {
		if (item.id === itemId) {
		  if (item.amount === 1)
			return acc;
		  
		  return [
			...acc,
			{
			  ...item,
			  amount: item.amount - 1
			}
		  ];
		} else
		  return [...acc,{...item}];
		
	  }, [] as CartItemType[])
	);
  }
  
  function getTotalItems(items: CartItemType[]): number {
	return items.reduce((ack: number, item) => ack + item.amount, 0);
  }
  
  return (
	<AppWrapper>
	  <Drawer anchor = "right"
			  open = {isCartOpen}
			  onClose = {() => setIsCartOpen(false)}
	  >
		<Cart addToCart = {handleAddToCart}
			  cartItems = {cartItems}
			  removeFromCart = {handleRemoveFromCart}
		></Cart>
	  </Drawer>
	  <StyledButton onClick = {() => setIsCartOpen(prevState => !prevState)}
	  >
		<Badge badgeContent = {getTotalItems(cartItems)}
			   color = "secondary"
		>
		  <AddShoppingCart/>
		</Badge>
	  </StyledButton>
	  <Grid container
			spacing = {4}
	  >
		{data?.map(item => (
		  <Grid key = {item.id}
				item
				xs = {10}
				sm = {6}
				md = {4}
		  >
			<Item item = {item}
				  handleAddToCart = {handleAddToCart}
			></Item>
		  </Grid>
		))}
	  </Grid>
	</AppWrapper>
  );
};

export default App;
