import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Music } from 'lucide-react';
import SocialButton from './SocialButton';

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: "mailto:brenden7@gmail.com",
      label: "Email",
      external: false,
      delay: 1.6
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/brendeng",
      label: "LinkedIn",
      delay: 1.7
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
      </svg>,
      href: "https://dribbble.com/brendeng",
      label: "Dribbble",
      delay: 1.8
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/",
      label: "Instagram",
      delay: 1.9
    },
    {
      icon: <Music size={20} />,
      href: "https://soundcloud.com/brendengreenwood",
      label: "SoundCloud",
      delay: 2.0
    }
  ];

  return (
    <div className="flex gap-2">
      {socialLinks.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6,
            delay: item.delay,
            type: "spring",
            stiffness: 100
          }}
        >
          <SocialButton 
            href={item.href} 
            label={item.label}
            external={item.external}
          >
            {item.icon}
          </SocialButton>
        </motion.div>
      ))}
    </div>
  );
}