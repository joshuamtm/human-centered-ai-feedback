import React from 'react';

const HowWeBuiltThis: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">How We Built This Dashboard</h1>
          <p className="text-lg text-gray-600">
            Learn how we used AI to analyze and visualize course feedback
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="bg-white rounded-lg shadow p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Built with "Vibe-Coding"</h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 mb-6">
              <p className="text-gray-800 mb-3">
                <strong>🚀 100% Built with VSCode + Claude Code</strong>
              </p>
              <p className="text-gray-700">
                This entire dashboard was created using "vibe-coding" - a revolutionary approach where AI and human
                developers collaborate seamlessly. No traditional coding was required; instead, we used natural
                language conversations with Claude Code directly in VSCode to build every feature.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              This dashboard demonstrates practical AI application for nonprofit organizations. We built it to showcase
              real-time feedback analysis while teaching AI concepts through implementation.
            </p>
            <p className="text-gray-700 mb-4">
              The dashboard serves dual purposes: improving course quality through transparency and demonstrating
              AI-powered analytics capabilities to our learners.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="text-sm text-gray-700">
                <strong>📄 Planning Document:</strong> View the complete{' '}
                <a href="/product-requirements-document.md" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Product Requirements Document
                </a>{' '}
                that guided this project from conception to implementation.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">The PRP Methodology</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
              <p className="text-gray-800 mb-3">
                <strong>📝 Product Requirements Prompt (PRP)</strong>
              </p>
              <p className="text-gray-700 mb-4">
                We didn't start with traditional technical specifications. Instead, we used a Product Requirements Prompt (PRP)
                - a conversational framework that walks through all the essential questions to understand what needs to be built
                and who it serves.
              </p>
              <p className="text-gray-700 mb-4">
                The PRP process guided us through:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
                <li>Mission & problem context</li>
                <li>User needs and access requirements</li>
                <li>Core user journey mapping</li>
                <li>MVP feature prioritization</li>
                <li>Data & content structure</li>
                <li>Success metrics definition</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This conversational approach transformed stakeholder discussions into a comprehensive Product Requirements
                Document (PRD), which then served as the blueprint for Claude Code to build the entire application.
              </p>
              <a
                href="/mtm-prp-generator.md"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the PRP Generator Framework →
              </a>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Technical Stack</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Frontend:</strong> React with TypeScript</li>
              <li><strong>Styling:</strong> Tailwind CSS for responsive design</li>
              <li><strong>Visualizations:</strong> Recharts for interactive charts</li>
              <li><strong>Hosting:</strong> Netlify for continuous deployment</li>
              <li><strong>AI Processing:</strong> LLM-based sentiment analysis</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Data Processing Pipeline</h2>
            <ol className="space-y-4 text-gray-700">
              <li>
                <strong>1. Data Collection:</strong> Export feedback from course platform as CSV files
              </li>
              <li>
                <strong>2. PII Detection:</strong> Scan comments for personally identifiable information
              </li>
              <li>
                <strong>3. Sentiment Analysis:</strong> Process each comment through AI to extract:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Sentiment label (positive/neutral/negative)</li>
                  <li>• Confidence score</li>
                  <li>• Key themes and topics</li>
                </ul>
              </li>
              <li>
                <strong>4. Visualization:</strong> Transform processed data into interactive charts
              </li>
              <li>
                <strong>5. Deployment:</strong> Publish updates after each course session
              </li>
            </ol>
          </section>

          <section className="bg-white rounded-lg shadow p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">AI Sentiment Analysis Approach</h2>
            <div className="bg-gray-100 rounded p-4 mb-4">
              <pre className="text-sm overflow-x-auto">
{`Analyze this course feedback comment and provide:
1. Sentiment: positive, neutral, or negative
2. Confidence: 0-100%
3. Key topics mentioned (max 3)
4. Actionable insight if present

Comment: [INSERT COMMENT]

Return as JSON.`}
              </pre>
            </div>
            <p className="text-gray-700">
              We use this prompt structure to ensure consistent analysis across all feedback. The AI evaluates both
              the emotional tone and constructive content of each comment.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Real-time Metrics:</strong> Response rates and average ratings update after each session
              </li>
              <li>
                <strong>Trend Analysis:</strong> Week-over-week comparisons show course improvement
              </li>
              <li>
                <strong>Comment Filtering:</strong> View feedback by session or sentiment type
              </li>
              <li>
                <strong>Visual Insights:</strong> Charts make patterns immediately apparent
              </li>
              <li>
                <strong>Transparency:</strong> All feedback visible to the learning community
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="https://techsoup.course.tc/catalog/human-centered-ai-live-expert-led-course"
                   className="text-primary hover:underline">
                  Human-Centered AI Course
                </a>
              </li>
              <li>
                <a href="https://github.com/joshuamtm/human-centered-ai-feedback"
                   className="text-primary hover:underline"
                   target="_blank"
                   rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="/product-requirements-document.md"
                   className="text-primary hover:underline"
                   target="_blank"
                   rel="noopener noreferrer">
                  Product Requirements Document
                </a>
              </li>
              <li>
                <a href="/mtm-prp-generator.md"
                   className="text-primary hover:underline"
                   target="_blank"
                   rel="noopener noreferrer">
                  PRP Generator Framework
                </a>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-4">Want to Build Something Similar?</h2>
            <p className="text-gray-700 mb-4">
              This dashboard is open source! You can fork our code and adapt it for your organization's training
              programs. We encourage nonprofits to use these tools for continuous improvement.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
              <p className="text-gray-700 mb-2">
                <strong>🎯 Start with the PRP Generator!</strong>
              </p>
              <p className="text-gray-700">
                Don't know where to begin? Use our Product Requirements Prompt (PRP) generator to walk through the
                essential questions, then feed the resulting PRD to Claude Code in VSCode. You'll be "vibe-coding"
                your own dashboard in no time!
              </p>
            </div>
            <p className="text-gray-700">
              If you have questions or want to share your implementation, reach out to the course instructors
              or post in our learning community.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowWeBuiltThis;