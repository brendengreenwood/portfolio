import React from "react";
import { Mail, Linkedin, Dribbble, Instagram, Music } from "lucide-react";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold mb-6">Hey there.</h1>
        <p className="text-lg text-gray-700 mb-6">
          I'm Brenden, a product designer with over a decade of experience
          simplifying the complex. I've worked for big companies like Target,
          start-ups like Leadpages, and smaller agencies around Minneapolis.
          Outside of design, I love music production (even have a few releases),
          video games, film, art, and birdwatching.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Let's connect and see if we'd be a good fit.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:contact@example.com"
            className="text-gray-700 hover:text-black"
          >
            <Mail size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <Dribbble size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <Music size={24} />
          </a>
        </div>
      </div>
      <div className="w-72 h-72 rounded-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}
