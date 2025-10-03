import React from "react";

const RecommendationsSection: React.FC = () => {
  const recommendations = [
    {
      priority: "High",
      category: "Pacing & Accessibility",
      title: "Implement Differentiated Learning Paths",
      description:
        "Create beginner and advanced tracks or provide pre-session primers for newcomers to AI",
      actions: [
        'Develop a 15-minute "AI Basics" pre-course module',
        "Offer optional office hours for beginners before each session",
        "Create a glossary of key terms with simple explanations",
        "Record short supplementary videos for complex concepts",
      ],
      impact:
        "Addresses concerns from 30% of participants struggling with pace",
    },
    {
      priority: "High",
      category: "Session Structure",
      title: "Balance Content Depth with Time Constraints",
      description:
        "Ensure adequate time for topics participants want to explore while respecting 1-hour format",
      actions: [
        "Survey participants before sessions on priority topics",
        "Limit scope of each session to 2-3 key concepts",
        "Allocate specific time blocks for audience-requested topics",
        "Create follow-up resources for deeper dives",
      ],
      impact: "Session 3 feedback indicates topics didn't get adequate coverage",
    },
    {
      priority: "High",
      category: "Interactive Elements",
      title: "Continue Refined Chat Management Approach",
      description: "Session 3 approach (waiting until end) was highly appreciated - maintain this",
      actions: [
        "Continue holding questions until session end",
        "Reduce live chat lag by upgrading streaming setup",
        "Ensure all participant objectives shared in chat are acknowledged",
        "Create visual indicator when transitioning to Q&A time",
      ],
      impact: "Session 3: Multiple participants praised new chat management approach",
    },
    {
      priority: "Medium",
      category: "Content Delivery",
      title: "Enhance Demo Pacing",
      description:
        "Slow down technical demonstrations, especially for prompt engineering",
      actions: [
        "Pre-record complex demos for clearer viewing",
        "Provide step-by-step written guides alongside demos",
        "Use larger screen sharing views for code/prompts",
        "Offer practice exercises between sessions",
      ],
      impact: "Multiple requests to slow down CRAFT and meta prompt demos",
    },
    {
      priority: "Medium",
      category: "Ethics & Critical Thinking",
      title: "Expand Critical Perspectives on AI Ethics",
      description:
        "Some participants seeking deeper critical analysis of AI's societal implications",
      actions: [
        "Include diverse viewpoints on AI ethics (not just implementation)",
        "Discuss AI's environmental impact and mitigation strategies",
        "Explore power dynamics and equity issues in AI adoption",
        "Share critical scholarship on AI in nonprofit sector",
      ],
      impact: "Addresses Session 3 request for more critical perspectives",
    },
    {
      priority: "Medium",
      category: "Resources",
      title: "Consolidate and Clarify Resources",
      description:
        "Participants struggling with acronym/resource overload - simplify and organize",
      actions: [
        "Create single-page cheat sheet of all frameworks (TRACE, COMPAS, CRAFT, etc.)",
        "Reduce number of tools introduced per session",
        "Use consistent naming conventions across tools",
        "Build visual relationship map of how frameworks connect",
      ],
      impact: "Session 3: Confusion about multiple COMPAS-related acronyms",
    },
    {
      priority: "Low",
      category: "Practical Implementation",
      title: "Provide Step-by-Step Implementation Guides",
      description:
        "Some participants want more concrete how-to guidance for specific tasks",
      actions: [
        "Create tutorial: 'Building a Finance Report from Multiple Spreadsheets'",
        "Develop workflow diagrams for common nonprofit AI use cases",
        "Offer optional 'office hours' for implementation questions",
        "Share templates and starter prompts for specific tasks",
      ],
      impact: "Addresses Session 3 feedback about implementation confusion",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 border-red-300";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Low":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Recommendations for Course Improvement
          </h1>
          <p className="text-lg text-gray-600">
            Data-driven recommendations based on participant feedback
          </p>
        </header>

        {/* Priority Summary */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Priority Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">3</div>
              <p className="text-sm text-gray-600">High Priority</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">4</div>
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
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(rec.priority)}`}
                    >
                      {rec.priority} Priority
                    </span>
                    <span className="ml-3 text-sm text-gray-500">
                      {rec.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {rec.title}
                </h3>
                <p className="text-gray-700 mb-4">{rec.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">
                    Recommended Actions:
                  </h4>
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
          <h2 className="text-2xl font-bold mb-6">
            Suggested Implementation Timeline
          </h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-32 font-semibold text-right pr-4">
                Before Session 4
              </div>
              <div className="flex-1 bg-red-100 rounded p-3">
                <ul className="text-sm space-y-1">
                  <li>• Create consolidated framework cheat sheet</li>
                  <li>• Survey participants on priority topics</li>
                  <li>• Reduce streaming lag for chat</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-32 font-semibold text-right pr-4">
                Sessions 4-5
              </div>
              <div className="flex-1 bg-yellow-100 rounded p-3">
                <ul className="text-sm space-y-1">
                  <li>• Continue refined chat approach from Session 3</li>
                  <li>• Limit to 2-3 key concepts per session</li>
                  <li>• Include environmental/critical perspectives</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-32 font-semibold text-right pr-4">
                Session 6 & Beyond
              </div>
              <div className="flex-1 bg-green-100 rounded p-3">
                <ul className="text-sm space-y-1">
                  <li>• Launch step-by-step implementation guides</li>
                  <li>• Create AI basics primer for future cohorts</li>
                  <li>• Evaluate effectiveness of all changes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <p className="mb-4">
            Session 3 showed significant improvements in pacing and chat management.
            Continue these successful approaches while addressing new concerns about
            topic depth, resource consolidation, and practical implementation guidance.
          </p>
          <p className="font-semibold">
            Key Success Metrics: Maintain improved pacing satisfaction while ensuring
            audience-prioritized topics receive adequate time and reducing resource
            confusion.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RecommendationsSection;
