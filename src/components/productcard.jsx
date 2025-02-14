import React from 'react';
import ViewProductButton from './button';

const Productcard = () => {
    const productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHt9Uak7LvbCOe1u3rMm3X9unQm1HDNziog&s';
    const productName = 'PUMA PALERMO SNEAKERS';
    const price = '$99.99';

    const cardStyle = {
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
        padding: '16px',
        color: '#333',
        borderRadius: '8px',
        textAlign: 'center',
        width: '200px',
        margin: '20px auto'
    };

    const imgStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '16px'
    };

    return (
        <div className="product-card" style={cardStyle}>
            <img src={productImage} alt={productName} style={imgStyle} />
            <h2>{productName}</h2>
            <p>{price}</p>
            <ViewProductButton />
        </div>
    );
};

export default Productcard;