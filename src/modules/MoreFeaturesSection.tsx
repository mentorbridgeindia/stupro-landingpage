import React from 'react'
import { Card } from 'react-bootstrap'
import { FaGraduationCap } from 'react-icons/fa'

const MoreFeaturesSection = () => {
 
  const cardData = [
    { 
      title: 'Connect with Peers', 
      text: 'Engage with fellow students and share insights to enhance your learning journey with StuPro.' 
    },
    { 
      title: 'Collaborate on Projects', 
      text: 'Work seamlessly on group projects using StuPro’s integrated collaboration tools.' 
    },
    { 
      title: 'Access Learning Resources', 
      text: 'Explore a curated library of study materials, expert advice, and more.' 
    },
    { 
      title: 'Stay Informed', 
      text: 'Get the latest updates on educational trends and opportunities directly through StuPro.' 
    },
  ]

  
  const allCards = [...cardData, ...cardData]

  return (
    <div className="mt-5">
      <div style={{ marginLeft: "20px" }}>
        <h1>More Features</h1>
      </div>
      {/* Outer container to clip overflow */}
      <div style={{ overflow: 'hidden', marginTop: "80px", }}>
        {/* Scrolling container */}
        <div 
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'scroll 20s linear infinite'
          }}
        >
          {allCards.map((card, index) => (
            <Card 
              key={index} 
              style={{
                minWidth: '250px',  
                maxWidth: '400px',
                display: 'inline-block', 
                marginRight: '20px',
                wordWrap: 'break-word',
                overflow: 'hidden'
              }}
            >
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <div style={{ textAlign: 'center' }}>
                  {/* Icon above the title */}
                  <FaGraduationCap 
                    style={{ fontSize: '2rem', color: '#F3c431', marginBottom: '10px' }} 
                  />
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text 
                    style={{
                      fontSize: '0.9rem',  
                      color: 'black',
                      textOverflow: 'ellipsis', 
                      overflow: 'hidden',
                      whiteSpace: 'normal',  
                      height: '5.5rem',
                     
                    }}
                  >
                    {card.text}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      {/* Inline keyframes animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

export default MoreFeaturesSection
