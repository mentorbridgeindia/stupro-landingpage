import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
 

const DownloadCard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Card
        className="text-white"
        style={{ 
          width: '80%', 
          height: '300px', 
          display: 'flex', 
          flexDirection: 'row',
          background: 'linear-gradient(to right, #FFA726, #FF9800)',
          borderRadius: '20px',
          padding: '20px',
        }}
      >
        <div style={{ flex: 1, color: 'white', padding: '20px' }}>
          <h2 style={{ fontWeight: 'bold' }}>Manage your cash easily</h2>
          <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
            Download an app now and the various benefits you will get immediately.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="dark" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px' }}>
              <FaApple size={20} /> Download App
            </Button>
            <Button variant="dark" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px' }}>
              <FaGooglePlay size={20} /> Download App
            </Button>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="https://via.placeholder.com/200" 
            alt="App Preview"
            style={{ height: '250px', borderRadius: '20px' }}
          />
        </div>
      </Card>

      {/* Use the Footer Component */}
    </div>
  );
};

export default DownloadCard;
