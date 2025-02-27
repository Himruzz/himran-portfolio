import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-black">
        <Header />
        <div className="container mx-auto p-4">
          {/* Diagonal divided card with clip-path */}
          <div className="relative max-w-5xl mx-auto overflow-hidden">
            {/* Background shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600 opacity-20 rounded-full blur-xl"></div>

            <div className="flex flex-col md:flex-row">
              {/* Image section with hexagon clip path - left side */}
              <div className="md:w-2/5 relative">
                <div className="relative h-[400px] md:h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 opacity-30 "></div>
<div className="absolute inset-0 bg-black opacity-50 "></div>
<img
  src="/1.png"
  alt="Profile"
  className="w-full h-50 object-cover object-center z-10"
/>


                  {/* Accent lines overlay */}
                  <div className="absolute inset-0 z-20">
                    <div className="absolute top-[20%] left-0 w-full h-px bg-green-500 opacity-50"></div>
                    <div className="absolute top-[40%] left-0 w-full h-px bg-blue-500 opacity-50"></div>
                    <div className="absolute top-[60%] left-0 w-full h-px bg-green-500 opacity-50"></div>
                    <div className="absolute top-[80%] left-0 w-full h-px bg-blue-500 opacity-50"></div>
                  </div>

                  {/* Image overlay text */}
                  <div className="absolute bottom-6 left-6 z-30 text-white">
                    <h2 className="font-bold text-2xl tracking-wide">Ruzz</h2>
                    <p className="text-green-400 text-sm tracking-wider">DEVELOPER & DESIGNER</p>
                  </div>
                </div>
              </div>

              {/* Contact info - right side with custom design */}
              <div className="md:w-3/5 p-8 bg-gray-900 relative">
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-600 to-transparent"></div>

                <h1 className="text-4xl font-bold mb-8 text-white">
                  <span className="relative">
                    Connect
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-500"></span>
                  </span>
                  <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">With Me</span>
                </h1>

                <div className="space-y-8 text-gray-300">
                  <p className="leading-relaxed text-lg border-l-2 border-green-500 pl-4 italic">
                    Feel free to reach out to me for collaborations, opportunities, or just a friendly chat about your next big idea!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="group">
                      <div className="bg-gray-800 p-4 rounded-lg relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-full transform translate-x-4 -translate-y-4 transition-all duration-300"></div>
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-blue-600 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-green-400 font-medium mb-1">EMAIL</p>
                            <a href="mailto:hello@himruzz.me" className="text-white group-hover:text-green-300 transition-colors">
                              hello@himruzz.me
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <div className="bg-gray-800 p-4 rounded-lg relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-green-500 opacity-0 group-hover:opacity-10 rounded-full transform translate-x-4 -translate-y-4 transition-all duration-300"></div>
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-green-600 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-blue-400 font-medium mb-1">PHONE</p>
                            <a href="tel:+918848609372" className="text-white group-hover:text-blue-300 transition-colors">
                              +91 8848609372
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-xl font-medium text-white mb-4 flex items-center">
                      <span className="w-8 h-px bg-green-500 mr-3"></span>
                      Social Profiles
                      <span className="w-8 h-px bg-blue-500 ml-3"></span>
                    </h3>

                    <div className="flex flex-wrap gap-4">
                      <a href="#" className="group relative w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-blue-600 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                        <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="group relative w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-green-600 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                        <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="group relative w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-blue-700 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                        <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="group relative w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-blue-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                        <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Call to action button */}
                  <div className="pt-6">
                    <a href="#" className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg transform hover:translate-y-px transition-all duration-200 hover:shadow-lg">
                      Send Me a Message
                    </a>
                  </div>
                </div>

                {/* Decorative corner shapes */}
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500 opacity-10 rounded-full transform translate-x-16 translate-y-16"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}