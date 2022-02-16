import React from 'react';

const Menu = ({id, title, category, price,img, desc}) => {
    return (
    <section className='item' key={id}>        
        <div>
            <img src={img} alt={title} />
            <h5>{title}</h5>
            <h5>{price}</h5>
            <p>{desc}</p>
        </div>
    </section>
  );
};

export default Menu;