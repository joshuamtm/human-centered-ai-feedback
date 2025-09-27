import React, { useState } from 'react';
import { allFeedbackData, calculateSentiment, FeedbackEntry } from '../data/sessionData';

const CommentsSection: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<number | null>(null);
  const [sentimentFilter, setSentimentFilter] = useState<string>('all');

  // Process data with sentiment
  const processedData = allFeedbackData.map(calculateSentiment);
  const dataWithComments = processedData.filter(d => d.comment.length > 0);

  // Filter data based on selections
  let filteredData = dataWithComments;
  if (selectedSession) {
    filteredData = filteredData.filter(d => d.session === selectedSession);
  }
  if (sentimentFilter !== 'all') {
    filteredData = filteredData.filter(d => d.sentiment === sentimentFilter);
  }

  const getSentimentBadge = (sentiment: string | undefined) => {
    const classes = {
      positive: 'bg-green-100 text-green-800',
      neutral: 'bg-yellow-100 text-yellow-800',
      negative: 'bg-red-100 text-red-800',
    };
    return classes[sentiment as keyof typeof classes] || 'bg-gray-100 text-gray-800';
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-600';
    if (rating === 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Participant Feedback Comments</h1>
          <p className="text-lg text-gray-600">
            Detailed feedback from course participants with sentiment analysis
          </p>
        </header>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Session</label>
              <select
                value={selectedSession || ''}
                onChange={(e) => setSelectedSession(e.target.value ? Number(e.target.value) : null)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All Sessions</option>
                <option value="1">Session 1</option>
                <option value="2">Session 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sentiment</label>
              <select
                value={sentimentFilter}
                onChange={(e) => setSentimentFilter(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Sentiments</option>
                <option value="positive">Positive</option>
                <option value="neutral">Neutral</option>
                <option value="negative">Negative</option>
              </select>
            </div>
          </div>
        </div>

        {/* Comments Count */}
        <div className="mb-6">
          <p className="text-lg font-medium">
            Showing {filteredData.length} comments
          </p>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {filteredData.map((entry) => (
            <div key={entry.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3 items-center">
                  <span className="text-sm font-medium text-gray-500">Session {entry.session}</span>
                  <span className={`text-lg font-bold ${getRatingColor(entry.rating)}`}>
                    Rating: {entry.rating}/4
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSentimentBadge(entry.sentiment)}`}>
                    {entry.sentiment}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{entry.comment}</p>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-500">No comments match your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;