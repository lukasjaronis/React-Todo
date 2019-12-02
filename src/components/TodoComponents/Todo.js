import React from 'react';
import styled from 'styled-components';

const ItemStyles = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 100%;

.completed {
  display: flex;
justify-content: center;
align-items: center;
  width: 100%;
  background: #05386B;
  color: #EDF5E1;
  text-decoration: line-through;
}

`;

const Item = props => {
    return (
      <ItemStyles>
      <div className={`${props.item.completed ? ' completed' : ''} `}>
        <p>{props.item.name}</p>
      </div>
      </ItemStyles>
    );
  };

export default Item;