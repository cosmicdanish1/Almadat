import { motion } from "framer-motion";
import React from "react";
import who from '../assets/who.png';
import unep from '../assets/unep.png';
import faaotun from '../assets/faaootun.png';
import ecosoc from '../assets/ecosoc.png';

const OrganizationsSupport = () => {
  const organizationImages = [who, unep, faaotun, ecosoc];

  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      <h2 className="font-kaisei text-5xl text-center mt-6">ORGANIZATIONS THAT SUPPORT US</h2>
      <div className="container p-5 max-w-6xl">
        <h2 className="text-center text-xl text-gray-500 my-5">
          Trusted by the world's most innovative orgination
        </h2>

        <div className="relative overflow-hidden w-full">
           {/* Left gradient fade */}
           <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Group 1 */}
            <div className="flex gap-16">
              {organizationImages.map((img, index) => (
                <img
                  key={`img1-${index}`}
                  src={img}
                  alt={`org-${index}`}
                  className="h-40 w-auto flex-none object-contain"
                />
              ))}
            </div>

            {/* Group 2 - duplicate */}
            <div className="flex gap-16">
              {organizationImages.map((img, index) => (
                <img
                  key={`img2-${index}`}
                  src={img}
                  alt={`org-duplicate-${index}`}
                  className="h-40 w-auto flex-none object-contain"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsSupport;
