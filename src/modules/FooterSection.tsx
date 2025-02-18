import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', color: '#555', padding: '20px', textAlign: 'center' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start', paddingLeft: '20px' }}>
        <img
          src="https://via.placeholder.com/50" 
          alt="App Logo"
          style={{ height: '50px', borderRadius: '50%' }}
        />
        <h2 style={{ fontFamily: 'cursive', fontWeight: 'bold', margin: 0 }}>Stupro</h2>
        
      </div>

      <hr style={{ margin: '15px 0', border: 'none', borderTop: '2px solid black' }} />

     
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', fontSize: '14px' }}>
        <p style={{ margin: 0 }}>All rights reserved. &copy; 2024 by Tin Kolza</p>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#555' }}>Privacy Policy</a>
          <a href="#" style={{ textDecoration: 'none', color: '#555' }}>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
