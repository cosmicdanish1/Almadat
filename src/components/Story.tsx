import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ngo1 from '../assets/ngo1.jpg'
import ngo2 from '../assets/ngo2.jpg'
import ngo3 from '../assets/ngo3.jpg'
import ngo4 from '../assets/ngo4.jpg'

const tabs = [
  {
    id: 'humanity',
    title: 'HUMANITY',
    icon: '😊',
    content: 'This is our Story About how we can do that this kind of effect and make a amazing ..........',
    img: ngo1
  },
  {
    id: 'education',
    title: 'EDUCATION',
    icon: '✍️',
    content: 'Education is the foundation of progress and empowerment.',
    img: ngo2
  },
  {
    id: 'medical',
    title: 'MEDICAL',
    icon: '💓',
    content: 'Medical support helps people survive and thrive in hard times.',
    img: ngo3
  },
  {
    id: 'disaster',
    title: 'NATURAL DISASTER',
    icon: '🌋',
    content: 'Helping communities during natural disasters is vital.',
    img: ngo4
  }
];

const AnimatedTabsUI = () => {
  const [activeTab, setActiveTab] = useState('humanity');

  return (
    <div className="flex flex-col items-center p-6 mt-4 ">
      <h1 className="text-8xl font-light mb-6">Our Story</h1>

      <div className="flex flex-row gap-4 w-full max-w-6xl mt-12">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <motion.div
              key={tab.id}
              layout
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer rounded-2xl ${
                isActive ? 'bg-white' : 'color-red'
              } text-white flex flex-col items-center justify-start p-4 transition-all duration-500 ease-in-out ${
                isActive ? 'w-[80%] h-[400px]' : 'w-[13%] h-[400px]'
              }`}
            >
              {/* Show content + title only when active */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-white text-center mb-4"
                  >
                
                    
                    <h2 className="text-3xl font-semibold  mb-2 text-black">
                      {tab.title}
                    </h2>
                    <p className={`${isActive ? 'text-black' : ''}`}>{tab.content}</p>
                    <img src={tab.img} alt="ngo"  className='rounded-3xl w-full h-58 object-cover mt-4'/>    
                  </motion.div>
                )}
              </AnimatePresence>

                <div 
                
                 className={`text-3xl mb-2 transition-all duration-300 ${
                   isActive ? 'self-start -mt-85 ml-2 animate-ping' : 'self-center'
                 }`}
                
                >{tab.icon}</div>
                
              {/* Icon always visible */}

              {/* Title only for inactive tabs */}
              {!isActive && (
                <motion.h2
                  layout
                  className="text-lg font-semibold rotate-90 mt-[10rem]"
                >
                  {tab.title}
                </motion.h2>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTabsUI;
