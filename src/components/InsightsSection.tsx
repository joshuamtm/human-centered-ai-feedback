import React from 'react';
import { allFeedbackData, calculateSentiment } from '../data/sessionData';

const InsightsSection: React.FC = () => {
  // Process data with sentiment
  const processedData = allFeedbackData.map(calculateSentiment);
  const dataWithComments = processedData.filter(d => d.comment.length > 0);

  // Key themes from Session 1
  const session1Themes = {
    positive: [
      'Strong foundational content and context setting',
      'Excitement about nonprofit-specific AI applications',
      'Appreciated visuals and metaphors for understanding',
      'Community interaction and peer learning valued',
      'Instructors demonstrate expertise and accessibility'
    ],
    concerns: [
      'Pace too fast for beginners (mentioned 8+ times)',
      'Chat functionality distracting for some learners',
      'Technical issues with buffering/connectivity',
      'Some concepts glossed over too quickly',
      'Difficulty collecting resources in real-time'
    ]
  };

  // Key themes from Session 2
  const session2Themes = {
    positive: [
      'Practical tools and hands-on demos highly valued',
      'TRACE, COMPAS, CRAFT frameworks resonating well',
      'Improved question tracking from Session 1',
      'Resources and links shared are useful',
      'Real-world examples helping with understanding'
    ],
    concerns: [
      'Meta prompt demo moved too fast',
      'Chat interruptions disrupting presentation flow',
      'Confidentiality and security topics need more depth',
      'Session length feels too short (1 hour)',
      'Beginners still struggling with pace'
    ]
  };

  // Calculate key metrics
  const session1Comments = dataWithComments.filter(d => d.session === 1);
  const session2Comments = dataWithComments.filter(d => d.session === 2);

  const session1Positive = session1Comments.filter(d => d.sentiment === 'positive').length;
  const session2Positive = session2Comments.filter(d => d.sentiment === 'positive').length;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Key Insights from Feedback</h1>
          <p className="text-lg text-gray-600">
            Actionable insights derived from participant comments and ratings
          </p>
        </header>

        {/* Executive Summary */}
        <section className="bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold">{((session1Positive + session2Positive) / (session1Comments.length + session2Comments.length) * 100).toFixed(0)}%</p>
              <p className="text-sm opacity-90">Positive Sentiment Overall</p>
            </div>
            <div>
              <p className="text-3xl font-bold">3.4/4.0</p>
              <p className="text-sm opacity-90">Average Course Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold">82%</p>
              <p className="text-sm opacity-90">Would Apply Learnings</p>
            </div>
          </div>
        </section>

        {/* Session 1 Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Session 1: Introduction & Context</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-700">What's Working Well</h3>
              <ul className="space-y-2">
                {session1Themes.positive.map((theme, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-700">Areas for Improvement</h3>
              <ul className="space-y-2">
                {session1Themes.concerns.map((concern, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">!</span>
                    <span className="text-gray-700">{concern}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Quotes from Session 1 */}
          <div className="bg-blue-50 rounded-lg p-6 mt-6">
            <h3 className="font-semibold mb-3">Representative Feedback</h3>
            <div className="space-y-3">
              <blockquote className="italic text-gray-700 border-l-4 border-primary pl-4">
                "I feel much more interested in AI in general now!"
              </blockquote>
              <blockquote className="italic text-gray-700 border-l-4 border-accent pl-4">
                "Great high level overview and context setting. Appreciated the visuals and metaphors to build understanding."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Session 2 Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Session 2: Practical Application</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-700">What's Working Well</h3>
              <ul className="space-y-2">
                {session2Themes.positive.map((theme, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-700">Areas for Improvement</h3>
              <ul className="space-y-2">
                {session2Themes.concerns.map((concern, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">!</span>
                    <span className="text-gray-700">{concern}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Quotes from Session 2 */}
          <div className="bg-blue-50 rounded-lg p-6 mt-6">
            <h3 className="font-semibold mb-3">Representative Feedback</h3>
            <div className="space-y-3">
              <blockquote className="italic text-gray-700 border-l-4 border-primary pl-4">
                "I appreciated all the practical application tools and demos"
              </blockquote>
              <blockquote className="italic text-gray-700 border-l-4 border-accent pl-4">
                "Loved how pragmatic it was--will immediately apply what I learned!"
              </blockquote>
            </div>
          </div>
        </section>

        {/* Cross-Session Trends */}
        <section className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold mb-6">Cross-Session Trends</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Consistent Strengths</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Instructor expertise and engagement</li>
                <li>• Practical, applicable content</li>
                <li>• Community learning approach</li>
                <li>• Resource sharing and documentation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Persistent Challenges</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pacing issues for beginners</li>
                <li>• One-hour sessions feeling rushed</li>
                <li>• Chat management during presentations</li>
                <li>• Need for deeper dives on complex topics</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Key Finding:</strong> While experienced participants appreciate the pace and depth,
              approximately 30% of learners (primarily AI beginners) are struggling to keep up with the
              material, suggesting a need for differentiated learning paths or supplementary resources.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InsightsSection;