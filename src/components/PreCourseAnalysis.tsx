import React from 'react';
import {
  preCourseData,
  getAIRelationshipDistribution,
  getMostCommonGoals,
  getMostUsedTools,
  getRoleCategories,
  getAIHelpNeeds
} from '../data/preCourseData';

const PreCourseAnalysis: React.FC = () => {
  const aiRelationships = getAIRelationshipDistribution();
  const commonGoals = getMostCommonGoals();
  const usedTools = getMostUsedTools();
  const roleCategories = getRoleCategories();
  const aiHelpNeeds = getAIHelpNeeds();

  const totalParticipants = preCourseData.length;

  // Calculate percentages for AI relationships
  const relationshipPercentages = Object.entries(aiRelationships).map(([key, value]) => ({
    label: key,
    count: value,
    percentage: ((value / totalParticipants) * 100).toFixed(1)
  })).sort((a, b) => b.count - a.count);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Pre-Course Analysis</h1>
        <p className="mt-2 text-gray-600">
          Understanding participant backgrounds, expectations, and AI readiness
        </p>
        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-sm text-blue-700">
            <span className="font-semibold">Total Enrolled Participants:</span> {totalParticipants}
          </p>
        </div>
      </div>

      {/* AI Relationship Distribution */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Current AI Relationship Levels</h2>
        <div className="space-y-3">
          {relationshipPercentages.map(({ label, count, percentage }) => (
            <div key={label} className="flex items-center">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                  <span className="text-sm text-gray-500">{count} ({percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-600">
            <strong>Key Insight:</strong> Most participants are in exploratory phases ("Testing the waters" and "Curious, but cautious"),
            indicating a need for foundational AI education and careful guidance.
          </p>
        </div>
      </div>

      {/* Top Learning Goals */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Top 5 Learning Goals</h2>
        <div className="space-y-2">
          {commonGoals.map(([goal, count], index) => (
            <div key={goal} className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm font-medium">
                {index + 1}
              </span>
              <div className="ml-3 flex-1">
                <p className="text-gray-900">{goal}</p>
                <p className="text-sm text-gray-500">{count} participants ({((count / totalParticipants) * 100).toFixed(0)}%)</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tools Experience */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Previous AI Tool Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Most Used Tools</h3>
            <div className="space-y-2">
              {usedTools.map(([tool, count]) => (
                <div key={tool} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{tool}</span>
                  <span className="text-sm font-medium text-gray-900">{count} users</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">AI Help Interest</h3>
            <div className="space-y-2">
              {Object.entries(aiHelpNeeds).map(([need, count]) => (
                <div key={need} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{need}</span>
                  <span className="text-sm font-medium text-gray-900">
                    {count} ({((count / totalParticipants) * 100).toFixed(0)}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Role Distribution */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Participant Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(roleCategories).map(([category, roles]) => (
            <div key={category} className="border rounded-lg p-3">
              <h3 className="font-medium text-gray-900 mb-2">{category}</h3>
              <p className="text-2xl font-bold text-primary">{roles.length}</p>
              <p className="text-sm text-gray-500">participants</p>
            </div>
          ))}
        </div>
      </div>

      {/* Common AI Use Cases */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Desired AI Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">Administrative & Operations</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Scheduling and calendar management</li>
              <li>Process automation</li>
              <li>Report generation</li>
              <li>Data organization</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">Fundraising & Development</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Grant writing and research</li>
              <li>Donor communications</li>
              <li>Prospect research</li>
              <li>Fundraising strategy</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">Communications & Marketing</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Content creation</li>
              <li>Social media strategy</li>
              <li>Email campaigns</li>
              <li>Marketing analytics</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">Program Management</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Client service delivery</li>
              <li>Project management</li>
              <li>Impact measurement</li>
              <li>Training and support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Vision Themes */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Three-Month Success Vision Themes</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-medium text-gray-900">Policy & Governance</h3>
            <p className="text-sm text-gray-600">
              Establishing AI policies, ethical guidelines, and governance frameworks for responsible use
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-900">Efficiency & Productivity</h3>
            <p className="text-sm text-gray-600">
              Streamlining workflows, automating repetitive tasks, and improving operational efficiency
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-medium text-gray-900">Staff Empowerment</h3>
            <p className="text-sm text-gray-600">
              Training teams, building confidence, and enabling organization-wide AI adoption
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-medium text-gray-900">Understanding & Clarity</h3>
            <p className="text-sm text-gray-600">
              Gaining clarity on AI capabilities, limitations, and appropriate use cases
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreCourseAnalysis;