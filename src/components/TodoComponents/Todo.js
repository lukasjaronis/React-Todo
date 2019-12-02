import React from 'react';

const Item = props => {
    return (
      <div className={`item${props.item.completed ? ' Completed' : ''}`}>
        <p>{props.item.name}</p>
      </div>
    );
  };

export default Item;