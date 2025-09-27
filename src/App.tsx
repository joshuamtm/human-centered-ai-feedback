import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InsightsSection from './components/InsightsSection';
import RecommendationsSection from './components/RecommendationsSection';
import HowWeBuiltThis from './components/HowWeBuiltThis';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-primary">AI Course Feedback</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/insights"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary"
                  >
                    Insights
                  </Link>
                  <Link
                    to="/recommendations"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary"
                  >
                    Recommendations
                  </Link>
                  <Link
                    to="/how-we-built-this"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary"
                  >
                    How We Built This
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="https://techsoup.course.tc/catalog/human-centered-ai-live-expert-led-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:text-primary"
                >
                  Course Page →
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/insights" element={<InsightsSection />} />
          <Route path="/recommendations" element={<RecommendationsSection />} />
          <Route path="/how-we-built-this" element={<HowWeBuiltThis />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              Built with AI • Powered by Meet the Moment • © 2025
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;