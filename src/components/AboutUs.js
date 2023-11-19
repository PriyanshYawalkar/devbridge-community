// components/AboutUs.js
import React from 'react';

const AboutUs = () => {
    const backgroundStyle = {
        backgroundImage: 'url(path/to/your/background.jpg)',
        backgroundSize: 'cover',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    };

    return (
        <div>
            <h2>About Us</h2>
            <div style={backgroundStyle}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic quod ea esse tempora dolor quaerat distinctio praesentium cumque, reiciendis ab iusto assumenda quisquam minus veniam maiores itaque, blanditiis inventore.</p>
            </div>
        </div>
    );
};

export default AboutUs;
