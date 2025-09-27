# Product Requirements Prompt

## Executive Summary
**Product:** TechSoup AI Course Continuous Feedback Dashboard  
**Purpose:** Visualize and analyze course feedback transparently while demonstrating AI-powered data analysis capabilities to nonprofit learners  
**Users:** 250 course learners (150 weekly active), instructors (Joshua & Kim), TechSoup staff  
**Impact:** Increase feedback participation from ~40% to 67%+ by showing learners their input creates visible community value

## Problem & Solution
**Current State:** Feedback exists in CSV files but learners can't see peer experiences or trends. Low visibility reduces engagement and misses teaching opportunity about AI-powered analytics.

**Future State:** Public dashboard shows real-time feedback trends, sentiment analysis, and week-over-week comparisons. Serves dual purpose: improves course through transparency AND demonstrates practical AI application building.

**Success Metric:** Feedback submission rate increases to 67%+ within 3 weeks of launch

## User Flow
1. User arrives at public dashboard URL (shared in course platform)
2. They view main page with orientation and aggregate feedback trends
3. User explores specific weekly sections or overall trends
4. System displays ratings, comments with sentiment analysis, and visualizations
5. Interested users click "How We Built This" to learn methodology
6. Result: Learners gain insights from peer feedback and see AI capabilities in action

## MVP Features

### Week 1-2 Build
- [ ] **Main Dashboard Page**
  - Overall course rating trends (1-4 scale)
  - Response rate percentage tracker
  - Aggregate sentiment analysis
  - Week-over-week comparison charts
  - Navigation to individual weeks
  
- [ ] **6 Weekly Section Pages**
  - Quantitative ratings distribution
  - All qualitative comments displayed
  - Sentiment analysis per comment
  - Key themes extracted
  - Response rate for that week
  
- [ ] **Data Processing**
  - CSV upload interface (admin only)
  - PII detection and anonymization
  - Sentiment analysis using LLM
  - Trend calculation algorithms
  
- [ ] **"How We Built This" Section**
  - Step-by-step methodology
  - Link to this PRP document
  - Tech stack explanation
  - Code repository link

### Post-Launch Additions
- [ ] Benchmark comparisons with other nonprofit courses (Week 3)
- [ ] Interactive tutorial version of methodology (Week 4)
- [ ] Automated weekly email summaries (Week 5)
- [ ] Predictive insights for future sessions (Week 6)

## Technical Requirements

### Standard MTM Stack
- **Frontend:** React on Netlify
- **Repository:** GitHub (public to showcase methodology)
- **Database:** Supabase for:
  - Storing processed feedback data
  - Caching sentiment analysis results
  - Tracking response rates over time
- **Auth:** None for public viewing, simple password for CSV upload admin
- **Domain:** Use Netlify subdomain initially (feedback-dashboard.netlify.app)

### Data Schema
```javascript
{
  sessions: {
    id, week_number, date, total_attendees, total_responses, created_at
  },
  feedback: {
    id, session_id, rating, comment, sentiment_score, sentiment_label, created_at
  },
  sentiment_themes: {
    id, session_id, theme, frequency, examples, created_at
  },
  benchmarks: {
    id, organization, course_type, avg_rating, response_rate, created_at
  }
}
```

### AI Integration Requirements
- **LLM for Sentiment Analysis:** Process comments to extract sentiment (positive/neutral/negative) and confidence scores
- **Theme Extraction:** Identify recurring topics across feedback
- **Trend Analysis:** Calculate and visualize patterns across weeks
- **Natural Language Summaries:** Generate weekly insight summaries

## Design Specifications
**Style:** Clean and minimal with thoughtful color accents for data visualization  
**Colors:** MTM defaults with added data viz palette (green for positive, amber for neutral, red for concerns)  
**Typography:** System fonts for fast loading, clear hierarchy for data  
**Mobile:** Responsive, but optimized for desktop viewing  
**Visualizations:** 
- Line charts for trends
- Bar charts for distributions
- Word clouds for common themes
- Progress rings for response rates

## Content Management
**Update Frequency:** Weekly after each session  
**Update Method:** Manual CSV upload through admin interface  
**Content Owner:** Joshua Peskay  
**Backup Contact:** Kim Snyder

## Launch Plan

### Pre-Launch Checklist
- [ ] Sample data from Sessions 1-2 loaded
- [ ] Sentiment analysis tested on existing comments
- [ ] PII detection verified on test data
- [ ] Visualizations render correctly
- [ ] Mobile responsive check
- [ ] "How We Built This" content complete
- [ ] Share link tested in course platform

### Week 1: Foundation
- Set up GitHub repo (public)
- Configure Netlify deployment
- Create React app structure
- Implement CSV upload interface
- Set up Supabase tables
- Basic routing between pages

### Week 2: Features & AI Integration
- Integrate LLM for sentiment analysis
- Build visualization components
- Implement data processing pipeline
- Create weekly section pages
- Add trend calculations
- Write "How We Built This" content

### Week 3: Polish & Launch
- Test with Sessions 1-2 data
- Refine visualizations
- Add loading states
- Optimize performance
- Soft launch to instructors
- Full launch to learners

### Week 4-6: Iterations
- Add benchmark comparisons
- Enhance based on learner feedback
- Document learnings
- Create video walkthrough

## Ongoing Needs
**Hosting Cost:** ~$20/month (Netlify Pro + Supabase)  
**Maintenance:** 2-3 hours/week during course (CSV uploads, monitoring)  
**Point Person:** Joshua Peskay  
**Technical Support:** Meet the Moment team as needed

## Risk Factors
**Biggest Risk:** Low-quality or sparse feedback makes dashboard less valuable  
**Mitigation:** Actively promote dashboard in sessions, show examples of insights gained

**Secondary Risk:** PII accidentally displayed in comments  
**Mitigation:** Automated scanning before display, manual review of flagged content

## Success Criteria (3 months)
- [ ] **Metric 1:** Feedback response rate increases to 67%+ (from ~40%)
- [ ] **Metric 2:** At least 10 learners inquire about building similar dashboards
- [ ] **Learning Goal:** Document which visualizations learners find most valuable
- [ ] **Bonus:** Another organization adopts this approach for their training

## Special Considerations for AI Course Context

### Meta-Learning Opportunities
This dashboard serves as a live demonstration of concepts taught in the course:
- **Exploratory Data Analysis:** Using LLMs to understand feedback patterns
- **Data Visualization:** Creating meaningful charts from raw data
- **Prompt Engineering:** Crafting effective prompts for sentiment analysis
- **Full-Stack Development:** Building and deploying a complete application
- **Open Source Contribution:** Sharing methodology for community benefit

### Teaching Integration
- Reference dashboard examples during sessions on data analysis
- Use actual sentiment analysis prompts as teaching examples
- Show code snippets during technical deep-dives
- Encourage learners to fork and modify for their organizations

### Benchmark Data Sources (Research Needed)
- TechSoup historical course ratings
- NTEN training feedback averages
- Nonprofit learning platform standards
- Industry reports on online training engagement

## Technical Implementation Notes

### CSV Format Expected
```csv
"Overall, how was your experience today?_[uuid]","Do you have any comments regarding today's session?_[uuid]"
4,"Great session with practical examples"
3,"Pace was a bit fast but good content"
```

### Sentiment Analysis Approach
1. Process each comment through LLM
2. Extract: sentiment label, confidence score, key topics
3. Store results to avoid reprocessing
4. Aggregate for session-level insights

### Visualization Priority
1. **Response rate tracker** - Most important for engagement goal
2. **Rating distribution** - Shows overall satisfaction
3. **Sentiment timeline** - Tracks emotional journey
4. **Theme clouds** - Surfaces common topics
5. **Comparison charts** - Shows improvement areas

---
*Built with Meet the Moment's standard stack*  
*Demonstrates AI-powered analytics for nonprofit capacity building*  
*Ready for development: ✅*

---

## Appendix: Sample LLM Prompts for Development

### Sentiment Analysis Prompt
```
Analyze this course feedback comment and provide:
1. Sentiment: positive, neutral, or negative
2. Confidence: 0-100%
3. Key topics mentioned (max 3)
4. Actionable insight if present

Comment: [INSERT COMMENT]

Return as JSON.
```

### Theme Extraction Prompt
```
Review these feedback comments from a nonprofit AI training session.
Identify the top 5 themes mentioned across all feedback.
For each theme, provide:
1. Theme name (2-3 words)
2. Frequency count
3. Representative quote

Comments: [INSERT ALL COMMENTS]
```

---

*Last Updated: January 2025*  
*Version: 1.0*  
*© Meet the Moment - Building technology that serves your mission*