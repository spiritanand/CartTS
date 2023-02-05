import styled from "styled-components";

export const CartWrapper = styled.aside`
  width: 60vw;
  margin: 0.5rem;
`

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  flex-direction: column;
  border-bottom: 3px solid lightblue;
  
  div{
	flex: 1;
    margin: 1rem;
  }
  
  .info, .amount{
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
  }
  
  .info{
	flex-direction: column;
  }
  
  img{
	max-width: 100%;
  }

  @media (min-width: 768px) {
	flex-direction: row;
	
	.info{
      flex-direction: row;
	}
	
	img{
	  max-width: 100px;
	  object-fit: cover;
	}
  }
`
