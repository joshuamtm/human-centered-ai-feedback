import React from 'react';

const RecommendationsSection: React.FC = () => {
  const recommendations = [
    {
      priority: 'High',
      category: 'Pacing & Accessibility',
      title: 'Implement Differentiated Learning Paths',
      description: 'Create beginner and advanced tracks or provide pre-session primers for newcomers to AI',
      actions: [
        'Develop a 15-minute "AI Basics" pre-course module',
        'Offer optional office hours for beginners before each session',
        'Create a glossary of key terms with simple explanations',
        'Record short supplementary videos for complex concepts'
      ],
      impact: 'Addresses concerns from 30% of participants struggling with pace'
    },
    {
      priority: 'High',
      category: 'Session Structure',
      title: 'Extend Session Duration',
      description: 'Consider moving to 75-90 minute sessions to allow for deeper exploration',
      actions: [
        'Poll participants about preferred session length',
        'Test 75-minute format for Sessions 3-4',
        'Build in 5-minute breaks for longer sessions',
        'Adjust content density based on new timing'
      ],
      impact: 'Multiple participants explicitly requested longer sessions'
    },
    {
      priority: 'Medium',
      category: 'Interactive Elements',
      title: 'Optimize Chat Management',
      description: 'Balance real-time engagement with presentation flow',
      actions: [
        'Designate specific Q&A segments (every 15 minutes)',
        'Have a co-facilitator manage chat questions',
        'Use a question parking lot for complex queries',
        'Provide written FAQ after each session'
      ],
      impact: 'Reduces disruption while maintaining engagement'
    },
    {
      priority: 'Medium',
      category: 'Content Delivery',
      title: 'Enhance Demo Pacing',
      description: 'Slow down technical demonstrations, especially for prompt engineering',
      actions: [
        'Pre-record complex demos for clearer viewing',
        'Provide step-by-step written guides alongside demos',
        'Use larger screen sharing views for code/prompts',
        'Offer practice exercises between sessions'
      ],
      impact: 'Multiple requests to slow down CRAFT and meta prompt demos'
    },
    {
      priority: 'Medium',
      category: 'Security & Ethics',
      title: 'Deepen Confidentiality Discussion',
      description: 'Address nonprofit-specific data privacy and ethical AI use concerns',
      actions: [
        'Dedicate 20 minutes in Session 3 to data security',
        'Create nonprofit AI ethics framework document',
        'Share case studies of confidentiality best practices',
        'Invite legal/compliance expert for Q&A'
      ],
      impact: 'Critical for nonprofit organizations handling sensitive data'
    },
    {
      priority: 'Low',
      category: 'Resources',
      title: 'Improve Resource Organization',
      description: 'Make it easier for participants to capture and access shared materials',
      actions: [
        'Create a centralized resource hub webpage',
        'Send pre-session emails with all links',
        'Provide downloadable resource packets',
        'Build a searchable knowledge base'
      ],
      impact: 'Reduces stress about missing important information'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-300';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Recommendations for Course Improvement</h1>
          <p className="text-lg text-gray-600">
            Data-driven recommendations based on participant feedback
          </p>
        </header>

        {/* Priority Summary */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Priority Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">2</div>
              <p className="text-sm text-gray-600">High Priority</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">3</div>
              <p className="text-sm text-gray-600">Medium Priority</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">1</div>
              <p className="text-sm text-gray-600">Low Priority</p>
            </div>
          </div>
        </section>

        {/* Recommendations List */}
        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(rec.priority)}`}>
                      {rec.priority} Priority
                    </span>
                    <span className="ml-3 text-sm text-gray-500">{rec.category}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{rec.title}</h3>
                <p className="text-gray-700 mb-4">{rec.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Recommended Actions:</h4>
                  <ul className="space-y-1">
                    {rec.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start">
                        <span className="text-primary mr-2">→</span>
                        <span className="text-sm text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 -mx-6 -mb-6 px-6 py-3">
                  <p className="text-sm text-gray-600">
                    <strong>Expected Impact:</strong> {rec.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Timeline */}
        <section className="bg-white rounded-lg shadow p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Suggested Implementation Timeline</h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-32 font-semibold text-right pr-4">Before Session 3</div>
              <div className="flex-1 bg-red-100 rounded p-3">
                <ul className="text-sm space-y-1">
                  <li>• Create and share AI basics primer</li>
                  <li>• Poll participants about session length preference</li>
                  <li>• Organize resource hub</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-32 font-semibold text-right pr-4">Sessions 3-4</div>
              <div className="flex-1 bg-yellow-100 rounded p-3">
                <ul className="text-sm space-y-1">
                  <li>• Test extended session format</li>
                  <li>• Implement structured Q&A segments</li>
                  <li>• Include dedicated security/ethics discussion</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-32 font-semibold text-right pr-4">Sessions 5-6</div>
              <div className="flex-1 bg-green-100 rounded p-3">
                <ul className="text-sm space-y-1">
                  <li>• Refine based on mid-course feedback</li>
                  <li>• Launch supplementary video content</li>
                  <li>• Evaluate effectiveness of changes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <p className="mb-4">
            Based on the feedback analysis, we recommend prioritizing the pacing and session length
            adjustments first, as these address the most frequently mentioned concerns.
          </p>
          <p className="font-semibold">
            Key Success Metric: Increase feedback response rate to 67%+ by Session 4 through
            implementation of these improvements.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RecommendationsSection;