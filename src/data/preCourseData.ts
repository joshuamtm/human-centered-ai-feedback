export interface PreCourseEntry {
  id: string;
  userId: string;
  status: string;
  role: string;
  aiRelationship: 'Power user' | 'Confident user' | 'Testing the waters' | 'Curious, but cautious' | 'It\'s complicated' | 'Total strangers';
  goals: string[];
  toolsUsed: string[];
  wantsAIHelp: 'Yes' | 'No' | '';
  aiHelpDescription?: string;
  successVision?: string;
}

export const preCourseData: PreCourseEntry[] = [
  {
    id: "972f8a85-1de8-40aa-8f5a-5f28ba343373",
    userId: "f3ef0778-21f8-43d7-a667-26435e0b68d0",
    status: "enrolled",
    role: "Clinic Director",
    aiRelationship: "Confident user",
    goals: ["Understand how nonprofits are using AI", "Learn how to responsibly evaluate and adopt AI tools", "Explore how AI could solve real challenges in my organization", "Build a sustainable AI practice for my organization"],
    toolsUsed: ["ChatGPT (OpenAI)", "Google's Gemini", "Other"],
    wantsAIHelp: "Yes",
    aiHelpDescription: "Help with organizing schedules",
    successVision: "finding ways to stream administrative tasks that I do in AI to increase my workflow efficiency"
  },
  {
    id: "86596360-5977-4730-9cac-0878a0789265",
    userId: "c6defca3-9f84-435c-a557-c7533dbfc8af",
    status: "enrolled",
    role: "Database Archivist",
    aiRelationship: "Testing the waters",
    goals: ["Learn about the different types of AI tools", "Understand how nonprofits are using AI", "Learn how to responsibly evaluate and adopt AI tools", "Explore how AI could solve real challenges in my organization", "Learn how to train or support others in using AI", "Start or improve an AI policy or governance process", "Build a sustainable AI practice for my organization"],
    toolsUsed: ["ChatGPT (OpenAI)"],
    wantsAIHelp: "Yes",
    aiHelpDescription: "Help with grant research and applications",
    successVision: "Solidified a formal policy around ethical and responsible AI use within our organization and actively using it for grant research and applications"
  },
  {
    id: "841b6d0a-2d64-4982-94c9-930983db7e62",
    userId: "a336bf50-177c-454d-8ffb-314eb9ef9933",
    status: "enrolled",
    role: "IT leadership",
    aiRelationship: "Power user",
    goals: ["Learn how to train or support others in using AI", "Build a sustainable AI practice for my organization", "Explore how AI could solve real challenges in my organization", "Understand how nonprofits are using AI"],
    toolsUsed: ["ChatGPT (OpenAI)", "Microsoft Copilot", "Anthropic's Claude", "Google's Gemini", "Salesforce Einstein"],
    wantsAIHelp: "Yes",
    aiHelpDescription: "support mission critical work in events, training, grant-making, fundraising",
    successVision: "implementing change-management at my firm"
  },
  {
    id: "1cc80a41-c022-4c59-be2c-13007e7e886b",
    userId: "0543d66c-d68e-4270-9c8c-08fd938d8289",
    status: "enrolled",
    role: "communications and operations",
    aiRelationship: "Testing the waters",
    goals: ["Learn about the different types of AI tools", "Understand how nonprofits are using AI", "Learn how to responsibly evaluate and adopt AI tools", "Learn how to train or support others in using AI", "Other"],
    toolsUsed: ["ChatGPT (OpenAI)", "Anthropic's Claude"],
    wantsAIHelp: "No",
    successVision: "I will have skilled up and feel more confident in how to effectively and ethically apply AI at work"
  },
  {
    id: "551ddf27-846c-452a-bf88-d703b5f433b6",
    userId: "d5af3483-8da2-4010-b37b-d4b8f4707c30",
    status: "enrolled",
    role: "Director of Marketing and Communications",
    aiRelationship: "Testing the waters",
    goals: ["Learn about the different types of AI tools", "Understand how nonprofits are using AI", "Learn how to responsibly evaluate and adopt AI tools", "Explore how AI could solve real challenges in my organization", "Learn how to train or support others in using AI", "Start or improve an AI policy or governance process", "Build a sustainable AI practice for my organization"],
    toolsUsed: ["ChatGPT (OpenAI)", "Perplexity AI", "Google's Gemini"],
    wantsAIHelp: "Yes",
    aiHelpDescription: "Automating processes",
    successVision: "I'm honestly not sure. I think taking the course would help me answer this question. Right now, I don't know what I don't know."
  },
  {
    id: "76b08840-5501-423e-b9d9-947998806d22",
    userId: "61c6d9e2-88a7-4ee9-b90e-6b34bd2dd5f1",
    status: "enrolled",
    role: "Founder and CEO",
    aiRelationship: "Confident user",
    goals: ["Understand how nonprofits are using AI", "Learn how to responsibly evaluate and adopt AI tools", "Learn how to train or support others in using AI", "Start or improve an AI policy or governance process", "Build a sustainable AI practice for my organization"],
    toolsUsed: ["Anthropic's Claude", "Other", "Microsoft Copilot", "Google's Gemini"],
    wantsAIHelp: "Yes",
    aiHelpDescription: "Evidence-based research for housing",
    successVision: "To know that we are sharing information gathered with integrity and trust, and that our sources are ethical, verifiable, and measurable."
  }
];

// Analysis functions
export const getAIRelationshipDistribution = () => {
  const distribution: Record<string, number> = {};
  preCourseData.forEach(entry => {
    distribution[entry.aiRelationship] = (distribution[entry.aiRelationship] || 0) + 1;
  });
  return distribution;
};

export const getMostCommonGoals = () => {
  const goalCounts: Record<string, number> = {};
  preCourseData.forEach(entry => {
    entry.goals.forEach(goal => {
      goalCounts[goal] = (goalCounts[goal] || 0) + 1;
    });
  });
  return Object.entries(goalCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);
};

export const getMostUsedTools = () => {
  const toolCounts: Record<string, number> = {};
  preCourseData.forEach(entry => {
    entry.toolsUsed.forEach(tool => {
      if (tool !== "None") {
        toolCounts[tool] = (toolCounts[tool] || 0) + 1;
      }
    });
  });
  return Object.entries(toolCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);
};

export const getRoleCategories = () => {
  const categories: Record<string, string[]> = {
    'Executive Leadership': [],
    'IT/Technology': [],
    'Operations': [],
    'Communications/Marketing': [],
    'Program Management': [],
    'Other': []
  };

  preCourseData.forEach(entry => {
    const role = entry.role.toLowerCase();
    if (role.includes('ceo') || role.includes('executive') || role.includes('president') || role.includes('founder') || role.includes('director')) {
      categories['Executive Leadership'].push(entry.role);
    } else if (role.includes('it') || role.includes('technology') || role.includes('tech')) {
      categories['IT/Technology'].push(entry.role);
    } else if (role.includes('operations') || role.includes('manager')) {
      categories['Operations'].push(entry.role);
    } else if (role.includes('communication') || role.includes('marketing')) {
      categories['Communications/Marketing'].push(entry.role);
    } else if (role.includes('program')) {
      categories['Program Management'].push(entry.role);
    } else {
      categories['Other'].push(entry.role);
    }
  });

  return categories;
};

export const getAIHelpNeeds = () => {
  const needs: Record<string, number> = {
    'Yes': 0,
    'No': 0,
    'Not specified': 0
  };

  preCourseData.forEach(entry => {
    if (entry.wantsAIHelp === 'Yes') {
      needs['Yes']++;
    } else if (entry.wantsAIHelp === 'No') {
      needs['No']++;
    } else {
      needs['Not specified']++;
    }
  });

  return needs;
};