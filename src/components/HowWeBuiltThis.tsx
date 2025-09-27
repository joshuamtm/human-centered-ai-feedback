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
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              This dashboard demonstrates practical AI application for nonprofit organizations. We built it to showcase
              real-time feedback analysis while teaching AI concepts through implementation.
            </p>
            <p className="text-gray-700">
              The dashboard serves dual purposes: improving course quality through transparency and demonstrating
              AI-powered analytics capabilities to our learners.
            </p>
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
                <a href="https://github.com/your-repo/feedback-dashboard"
                   className="text-primary hover:underline">
                  GitHub Repository (Coming Soon)
                </a>
              </li>
              <li>
                <a href="/feedback-dashboard-prd.md"
                   className="text-primary hover:underline">
                  Product Requirements Document
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