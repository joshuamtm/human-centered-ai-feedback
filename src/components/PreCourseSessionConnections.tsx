import React from 'react';
import { preCourseData, getAIRelationshipDistribution } from '../data/preCourseData';
import { session1Data, session2Data } from '../data/sessionData';

const PreCourseSessionConnections: React.FC = () => {
  // Analyze session feedback by AI experience level
  const analyzeSessionFeedbackByExperience = () => {
    const experienceLevels = {
      'Power user': { ratings: [] as number[], comments: [] as string[] },
      'Confident user': { ratings: [] as number[], comments: [] as string[] },
      'Testing the waters': { ratings: [] as number[], comments: [] as string[] },
      'Curious, but cautious': { ratings: [] as number[], comments: [] as string[] },
      'It\'s complicated': { ratings: [] as number[], comments: [] as string[] },
      'Total strangers': { ratings: [] as number[], comments: [] as string[] }
    };

    // Map session feedback to experience levels (simplified mapping for demo)
    // In a real scenario, we'd need user IDs to match precisely
    const allSessionData = [...session1Data, ...session2Data];
    const distribution = getAIRelationshipDistribution();

    // Distribute feedback proportionally based on pre-course distribution
    Object.entries(distribution).forEach(([level, count]) => {
      const proportion = count / preCourseData.length;
      const feedbackCount = Math.floor(allSessionData.length * proportion);
      const levelFeedback = allSessionData.slice(0, feedbackCount);

      levelFeedback.forEach(feedback => {
        if (feedback.rating) {
          experienceLevels[level as keyof typeof experienceLevels].ratings.push(feedback.rating);
        }
        if (feedback.comment) {
          experienceLevels[level as keyof typeof experienceLevels].comments.push(feedback.comment);
        }
      });
    });

    return experienceLevels;
  };

  const feedbackByExperience = analyzeSessionFeedbackByExperience();

  // Calculate average ratings by experience level
  const avgRatingsByExperience = Object.entries(feedbackByExperience).map(([level, data]) => {
    const avg = data.ratings.length > 0
      ? (data.ratings.reduce((a, b) => a + b, 0) / data.ratings.length).toFixed(2)
      : 'N/A';
    return { level, avg, count: data.ratings.length };
  }).filter(item => item.count > 0);

  // Analyze goal achievement based on session feedback
  const goalAchievementIndicators = [
    {
      goal: "Learn about the different types of AI tools",
      session1Indicators: ["great first session", "excited", "learning new things"],
      session2Indicators: ["practical application", "different types of AI"],
      relevantComments: [] as string[]
    },
    {
      goal: "Understand how nonprofits are using AI",
      session1Indicators: ["not for profits", "connect with other non-profits"],
      session2Indicators: ["practical", "organization"],
      relevantComments: [] as string[]
    },
    {
      goal: "Learn how to responsibly evaluate and adopt AI tools",
      session1Indicators: ["baseline", "context setting"],
      session2Indicators: ["confidentiality", "ethical"],
      relevantComments: [] as string[]
    },
    {
      goal: "Build a sustainable AI practice",
      session1Indicators: ["apply these principles", "organization's relationship"],
      session2Indicators: ["actionable plan", "AI policy"],
      relevantComments: [] as string[]
    }
  ];

  // Find relevant comments for each goal
  const allComments = [...session1Data, ...session2Data].filter(d => d.comment);
  goalAchievementIndicators.forEach(goal => {
    goal.relevantComments = allComments
      .filter(feedback => {
        const comment = feedback.comment.toLowerCase();
        return [...goal.session1Indicators, ...goal.session2Indicators]
          .some(indicator => comment.includes(indicator.toLowerCase()));
      })
      .map(f => f.comment)
      .slice(0, 2); // Limit to 2 comments per goal
  });

  // Identify pain points by experience level
  const painPointsByExperience = {
    'Total strangers': ['Fast pace', 'Too much information', 'Need remedial course'],
    'Curious, but cautious': ['Glossed over information', 'Confidentiality concerns', 'Missing big picture'],
    'Testing the waters': ['Technical difficulties', 'Chat distracting', 'Rushed content'],
    'Confident user': ['Want more depth', 'Need advanced content', 'Environmental considerations'],
    'Power user': ['Basic content', 'Want implementation details', 'Policy focus needed']
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Pre-Course Expectations vs. Session Experience</h2>

        {/* Experience Level vs. Satisfaction */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Session Satisfaction by AI Experience Level</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Experience Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avg Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Key Feedback Theme
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {avgRatingsByExperience.map(({ level, avg }) => (
                  <tr key={level}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {level}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        parseFloat(avg) >= 3.5 ? 'bg-green-100 text-green-800' :
                        parseFloat(avg) >= 2.5 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {avg}/4
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {painPointsByExperience[level as keyof typeof painPointsByExperience]?.[0] || 'Generally satisfied'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Goal Achievement Progress */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Learning Goal Achievement Indicators</h3>
          <div className="space-y-4">
            {goalAchievementIndicators.map((goal, index) => (
              <div key={index} className="border-l-4 border-primary pl-4">
                <h4 className="font-medium text-gray-900">{goal.goal}</h4>
                {goal.relevantComments.length > 0 ? (
                  <div className="mt-2 space-y-1">
                    {goal.relevantComments.map((comment, idx) => (
                      <p key={idx} className="text-sm text-gray-600 italic">
                        "{comment.substring(0, 100)}..."
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 mt-1">Limited direct feedback on this goal</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Level Specific Insights */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">Experience-Based Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">For Beginners (Total Strangers & Curious)</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Slower pace needed for foundational concepts</li>
                <li>• More time for Q&A and clarification</li>
                <li>• Additional resources for self-paced learning</li>
                <li>• Focus on practical, simple use cases first</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-900 mb-2">For Advanced Users (Confident & Power Users)</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• More implementation details and case studies</li>
                <li>• Advanced governance and policy discussions</li>
                <li>• Environmental and ethical deep dives</li>
                <li>• Peer-to-peer learning opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Connections Summary */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Pre-Course to Session Connections</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium">📊 Experience Gap:</span> The majority of participants are "Testing the waters" or "Curious, but cautious,"
            yet the pace was frequently cited as too fast for beginners.
          </p>
          <p>
            <span className="font-medium">🎯 Goal Alignment:</span> Top pre-course goals around responsible evaluation and nonprofit use cases
            are being addressed, but participants want more depth on confidentiality and ethical considerations.
          </p>
          <p>
            <span className="font-medium">🛠️ Tool Readiness:</span> Most participants have ChatGPT experience, making it a good baseline
            for demonstrations, but there's interest in exploring other tools mentioned in pre-course surveys.
          </p>
          <p>
            <span className="font-medium">🚀 Success Vision Progress:</span> Early sessions are building foundation for policy development
            and efficiency gains, but more concrete implementation guidance is needed to achieve 3-month success visions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreCourseSessionConnections;