import React, { useState } from 'react';
import { Menu, Mail, Download } from 'lucide-react';
import './index.css';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="font-bold text-xl text-gray-800">Niraj Vishwakarma</span>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition duration-300">About</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900 transition duration-300">Education</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition duration-300">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#about" className="block py-2 text-gray-600 hover:bg-gray-100 px-4 rounded">About</a>
              <a href="#education" className="block py-2 text-gray-600 hover:bg-gray-100 px-4 rounded">Education</a>
              <a href="#skills" className="block py-2 text-gray-600 hover:bg-gray-100 px-4 rounded">Skills</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:bg-gray-100 px-4 rounded">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Hello, I'm Niraj Vishwakarma
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Information Technology Student | Future Software Engineer
          </p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center transition duration-300 transform hover:scale-105">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            <p className="mb-4">
              I am currently pursuing my Bachelor of Engineering in Information Technology
              at SLRTCE, Mira Bhayandar. I'm passionate about technology and software
              development, constantly learning and exploring new technologies to expand
              my skill set.
            </p>
            <p>
              My goal is to become a skilled software engineer and contribute to
              innovative projects that make a positive impact. I enjoy problem-solving
              and creating efficient solutions through code.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition duration-300 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering in Information Technology</h3>
            <p className="text-gray-600">SLRTCE, Mira Bhayandar</p>
            <p className="text-gray-500">2021 - Present</p>
            <div className="mt-4 text-gray-600">
              <p>Relevant Coursework:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Data Structures and Algorithms</li>
                <li>Database Management Systems</li>
                <li>Web Development</li>
                <li>Object-Oriented Programming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition duration-300">
              <h3 className="font-semibold mb-4 text-lg">Programming Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  JavaScript
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Python
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Java
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  C++
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition duration-300">
              <h3 className="font-semibold mb-4 text-lg">Web Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  React.js
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  HTML5 & CSS3
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Node.js
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition duration-300">
              <h3 className="font-semibold mb-4 text-lg">Tools & Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Git & GitHub
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  VS Code
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  MongoDB
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  MySQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <Github className="w-8 h-8" /> */}
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <Linkedin className="w-8 h-8" /> */}
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition duration-300"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Niraj Vishwakarma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;