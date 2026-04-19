import React, {useEffect, useState} from "react";
import './index.css';

function App(){
  const [products,setProducts] = useState([]);

  useEffect(()=>{
     fetch("http://localhost:5000/products")
     .then(res=>res.json())
     .then(data=>setProducts(data))
     .catch(err => console.error("Error fetching products:", err));
  },[]);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Cloud<span>Zones</span></div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <h1 className="hero-title">Fresh Groceries, <br /><span className="gradient-text">Delivered Fast.</span></h1>
        <p className="hero-subtitle">Experience the best quality products at CloudZones Grocery Store. Handpicked just for you.</p>
      </header>

      {/* Products Section */}
      <main className="product-section" id="products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.length > 0 ? products.map((p,i)=>(
            <div className="product-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="product-image-placeholder">
                <span className="emoji">
                  {p.name.toLowerCase() === 'rice' ? '🍚' : 
                   p.name.toLowerCase() === 'milk' ? '🥛' : 
                   p.name.toLowerCase() === 'vegetables' ? '🥦' : '🛒'}
                </span>
              </div>
              <div className="product-info">
                <h3>{p.name}</h3>
                <div className="product-bottom">
                  <span className="price">₹{p.price}</span>
                  <button className="add-btn">+</button>
                </div>
              </div>
            </div>
          )) : (
            <div className="loading">Loading fresh items...</div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App;
