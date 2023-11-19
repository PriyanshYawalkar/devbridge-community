// components/Home.js
import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <h3>DevBridge</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita sint voluptates distinctio laborum. Aliquid aspernatur, mollitia doloremque quidem quae vitae sed distinctio consectetur officiis, explicabo debitis numquam eum accusamus.</p>
                </div>
                <div style={{ flex: 1 }}>
                    <h3>Column 2</h3>
                    <img src="path/to/your/logo.png" alt="Logo" />
                </div>
            </div>
        </div>
    );
};

export default Home;
