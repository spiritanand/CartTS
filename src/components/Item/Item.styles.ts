import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid lightblue;
  border-radius: 1rem;
  overflow: hidden;
  
  img{
	max-height: 250px;
	object-fit: cover;
	border-radius: 1rem;
  }
  
  div{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	gap: 1rem;
  }
  
  button{
	border-radius: 0.5rem;
  }
  
`