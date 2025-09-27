import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { allFeedbackData, calculateSentiment } from '../data/sessionData';

const Dashboard: React.FC = () => {
  // Process data with sentiment
  const processedData = allFeedbackData.map(calculateSentiment);

  // Calculate metrics for Session 1
  const session1Entries = processedData.filter(d => d.session === 1);
  const session1ResponseRate = (session1Entries.length / 150) * 100; // Assuming 150 total attendees
  const session1AvgRating = session1Entries.reduce((sum, entry) => sum + entry.rating, 0) / session1Entries.length;

  // Calculate metrics for Session 2
  const session2Entries = processedData.filter(d => d.session === 2);
  const session2ResponseRate = (session2Entries.length / 150) * 100;
  const session2AvgRating = session2Entries.reduce((sum, entry) => sum + entry.rating, 0) / session2Entries.length;

  // Rating distribution data
  const getRatingDistribution = (sessionNum: number) => {
    const entries = processedData.filter(d => d.session === sessionNum);
    const distribution = [
      { rating: '1', count: entries.filter(e => e.rating === 1).length },
      { rating: '2', count: entries.filter(e => e.rating === 2).length },
      { rating: '3', count: entries.filter(e => e.rating === 3).length },
      { rating: '4', count: entries.filter(e => e.rating === 4).length },
    ];
    return distribution;
  };

  // Sentiment distribution
  const getSentimentDistribution = (sessionNum: number) => {
    const entries = processedData.filter(d => d.session === sessionNum);
    return [
      { name: 'Positive', value: entries.filter(e => e.sentiment === 'positive').length, color: '#10b981' },
      { name: 'Neutral', value: entries.filter(e => e.sentiment === 'neutral').length, color: '#f59e0b' },
      { name: 'Negative', value: entries.filter(e => e.sentiment === 'negative').length, color: '#ef4444' },
    ];
  };

  // Week over week comparison
  const weekComparison = [
    { week: 'Session 1', avgRating: session1AvgRating, responseRate: session1ResponseRate },
    { week: 'Session 2', avgRating: session2AvgRating, responseRate: session2ResponseRate },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Human-Centered AI Course Feedback Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Real-time insights from our learning community
          </p>
        </header>

        {/* Dashboard Explainer */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Welcome to Your Feedback Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What You'll Find Here</h3>
              <p className="text-sm text-gray-700 mb-3">
                This dashboard transforms course evaluation data into actionable insights using AI-powered analysis.
                Explore feedback from your peers, track course improvements, and discover learning patterns.
              </p>

              <h3 className="font-semibold text-gray-800 mb-2">How to Navigate</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Dashboard (You are here):</strong> Overview of ratings, response rates, and trends</li>
                <li>• <strong>Comments:</strong> Browse all participant feedback with sentiment filters</li>
                <li>• <strong>Insights:</strong> Discover key themes and patterns from qualitative analysis</li>
                <li>• <strong>Recommendations:</strong> View prioritized improvements based on feedback</li>
                <li>• <strong>How We Built This:</strong> Learn about the AI technology behind this dashboard</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick Start Guide</h3>
              <ol className="text-sm text-gray-700 space-y-2">
                <li><span className="font-semibold text-primary">1.</span> Review the metrics below for overall course health</li>
                <li><span className="font-semibold text-primary">2.</span> Scroll down to see session-specific breakdowns</li>
                <li><span className="font-semibold text-primary">3.</span> Click "Comments" to read detailed feedback</li>
                <li><span className="font-semibold text-primary">4.</span> Visit "Insights" for AI-generated analysis</li>
                <li><span className="font-semibold text-primary">5.</span> Check "Recommendations" for improvement ideas</li>
              </ol>

              <div className="mt-3 p-3 bg-white rounded border border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong>💡 Tip:</strong> Charts are interactive! Hover over data points for details.
                  This dashboard updates after each session to show the latest feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overall Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Overall Response Rate</h3>
            <p className="text-3xl font-bold text-primary">
              {((processedData.length / 300) * 100).toFixed(1)}%
            </p>
            <p className="text-xs text-gray-500 mt-1">{processedData.length} of ~300 total</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Average Rating</h3>
            <p className="text-3xl font-bold text-accent">
              {(processedData.reduce((sum, e) => sum + e.rating, 0) / processedData.length).toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Out of 4.0</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Responses</h3>
            <p className="text-3xl font-bold text-blue-600">{processedData.length}</p>
            <p className="text-xs text-gray-500 mt-1">Across 2 sessions</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Comments Provided</h3>
            <p className="text-3xl font-bold text-purple-600">
              {processedData.filter(e => e.comment.length > 0).length}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {((processedData.filter(e => e.comment.length > 0).length / processedData.length) * 100).toFixed(0)}% with comments
            </p>
          </div>
        </div>

        {/* Week over Week Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Rating Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weekComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[1, 4]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="avgRating" stroke="#1ab1d2" strokeWidth={2} name="Average Rating" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Response Rate Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weekComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="responseRate" stroke="#f18f38" strokeWidth={2} name="Response Rate %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Session Details */}
        <div className="space-y-12">
          {/* Session 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Session 1: Introduction & Context</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Rating Distribution</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={getRatingDistribution(1)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rating" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#1ab1d2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Sentiment Analysis</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={getSentimentDistribution(1)}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label
                    >
                      {getSentimentDistribution(1).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Response Rate</p>
                    <p className="text-2xl font-bold text-primary">{session1ResponseRate.toFixed(1)}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Average Rating</p>
                    <p className="text-2xl font-bold text-accent">{session1AvgRating.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Responses</p>
                    <p className="text-2xl font-bold text-blue-600">{session1Entries.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Session 2 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Session 2: Practical Application</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Rating Distribution</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={getRatingDistribution(2)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rating" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#1ab1d2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Sentiment Analysis</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={getSentimentDistribution(2)}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label
                    >
                      {getSentimentDistribution(2).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Response Rate</p>
                    <p className="text-2xl font-bold text-primary">{session2ResponseRate.toFixed(1)}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Average Rating</p>
                    <p className="text-2xl font-bold text-accent">{session2AvgRating.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Responses</p>
                    <p className="text-2xl font-bold text-blue-600">{session2Entries.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;