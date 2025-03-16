// AnimatedTabsUI.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'humanity',
    title: 'HUMANITY',
    icon: '😊',
    content: 'This is our Story About how we can do that this kind of effect and make a amazing ..........'
  },
  {
    id: 'education',
    title: 'EDUCATION',
    icon: '✍️',
    content: 'Education is the foundation of progress and empowerment.'
  },
  {
    id: 'medical',
    title: 'MEDICAL',
    icon: '💓',
    content: 'Medical support helps people survive and thrive in hard times.'
  },
  {
    id: 'disaster',
    title: 'NATURAL DISASTER',
    icon: '🌋',
    content: 'Helping communities during natural disasters is vital.'
  }
];

const AnimatedTabsUI = () => {
  const [activeTab, setActiveTab] = useState('humanity');

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Our Story</h1>

      <div className="flex flex-row gap-4 w-full max-w-5xl">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <motion.div
              key={tab.id}
              layout
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer rounded-2xl color-red text-white flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out ${
                isActive ? 'w-[80%] h-auto' : 'w-[13%] h-[500px]'
              }`}
            >
              <div className="text-3xl mb-2">{tab.icon}</div>
              <motion.h2 layout className="text-lg font-semibold rotate-90 md:rotate-0">
                {tab.title}
              </motion.h2>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 text-sm text-white text-center"
                  >
                    {tab.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTabsUI;