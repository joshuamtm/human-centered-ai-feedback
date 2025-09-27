# 📊 Human-Centered AI Course Feedback Dashboard

A real-time, AI-powered feedback analysis dashboard for nonprofit organizations participating in TechSoup's Human-Centered AI Course. This dashboard transforms course evaluation data into actionable insights, demonstrating practical AI application while improving course delivery through transparency and data-driven decision making.

🚀 **Live Dashboard:** [https://human-centered-ai-feedback-report-2.netlify.app](https://human-centered-ai-feedback-report-2.netlify.app)

## 🎯 Purpose & Impact

This dashboard serves dual purposes:
1. **Course Improvement**: Provides instructors with real-time feedback analysis to enhance course delivery
2. **AI Demonstration**: Shows learners practical AI application in action, using their own feedback as the dataset

### Key Achievements
- Transforms raw CSV feedback into interactive visualizations
- Performs sentiment analysis on qualitative comments
- Extracts actionable insights and recommendations
- Increases feedback participation through transparency
- Demonstrates AI capabilities to nonprofit learners

## ✨ Features

### 📈 Dashboard Overview
- Real-time response rate tracking
- Average rating calculations
- Session-by-session comparisons
- Interactive data visualizations

### 💬 Comments Section
- Browse all participant feedback
- Filter by session or sentiment
- Color-coded rating system
- Sentiment labels for each comment

### 🔍 AI-Powered Insights
- Automated theme extraction from comments
- Identification of strengths and improvement areas
- Cross-session trend analysis
- Representative quote selection

### 📋 Smart Recommendations
- Prioritized improvement suggestions (High/Medium/Low)
- Data-driven action items
- Implementation timelines
- Expected impact assessments

### 🛠️ How We Built This
- Transparent methodology documentation
- Step-by-step process explanation
- Learning resources for replication
- Open-source approach

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joshuamtm/human-centered-ai-feedback.git
cd human-centered-ai-feedback
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🏗️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Data Visualization**: Recharts
- **Routing**: React Router
- **Deployment**: Netlify
- **Build Tool**: Create React App

## 📁 Project Structure

```
human-centered-ai-feedback/
├── src/
│   ├── components/          # React components
│   │   ├── Dashboard.tsx    # Main dashboard view
│   │   ├── CommentsSection.tsx    # Feedback comments browser
│   │   ├── InsightsSection.tsx    # AI-generated insights
│   │   ├── RecommendationsSection.tsx    # Improvement recommendations
│   │   └── HowWeBuiltThis.tsx    # Methodology documentation
│   ├── data/
│   │   └── sessionData.ts   # Feedback data and processing
│   ├── App.tsx              # Main app component with routing
│   ├── index.tsx            # App entry point
│   └── index.css            # Global styles with Tailwind
├── public/                  # Static assets
├── build/                   # Production build (generated)
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── netlify.toml            # Netlify deployment configuration
```

## 📊 Data Processing

### Sentiment Analysis Algorithm
The dashboard uses a hybrid approach for sentiment analysis:

1. **Rating-based baseline**: Ratings of 4 = positive, 2 or below = negative, 3 = neutral
2. **Keyword analysis**: Scans for positive/negative indicator words
3. **Weighted scoring**: Combines rating and keyword analysis for final sentiment

### Data Flow
1. CSV files exported from course platform
2. Data parsed and loaded into React state
3. Sentiment analysis applied to each comment
4. Aggregations calculated for visualizations
5. Insights extracted from patterns

## 🎨 Customization

### Updating Course Data

1. Export new session data as CSV
2. Update `src/data/sessionData.ts` with new entries
3. Follow the existing data structure:

```typescript
{
  id: number,
  session: number,
  rating: number,
  comment: string
}
```

### Modifying Visualizations

Charts are built with Recharts and can be customized in the Dashboard component. Update colors in `tailwind.config.js`:

```javascript
colors: {
  primary: '#1ab1d2',  // Main brand color
  accent: '#f18f38',   // Secondary color
}
```

## 🚢 Deployment

### Deploying to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy using Netlify CLI:
```bash
npx netlify deploy --prod --dir=build
```

Or connect your GitHub repository to Netlify for automatic deployments.

### Environment Variables

No environment variables are required for the basic setup. For production enhancements, you may add:

- `REACT_APP_API_URL` - Backend API endpoint (if applicable)
- `REACT_APP_ANALYTICS_ID` - Analytics tracking ID

## 📚 Learning Resources

- [TechSoup Human-Centered AI Course](https://techsoup.course.tc/catalog/human-centered-ai-live-expert-led-course)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/)
- [Netlify Deployment Guide](https://docs.netlify.com/)

## 🤝 Contributing

We welcome contributions! This project is designed to be a learning resource for nonprofit organizations.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions

- Add more visualization types
- Enhance sentiment analysis accuracy
- Implement real-time data updates
- Add export functionality for reports
- Improve mobile responsiveness
- Add accessibility features

## 📄 License

This project is open source and available under the MIT License. See `LICENSE` file for more information.

## 🙏 Acknowledgments

- **TechSoup** for hosting the Human-Centered AI Course
- **Course Instructors**: Joshua Peskay & Kim Snyder
- **All Course Participants** who provided valuable feedback
- **Meet the Moment** for technical implementation support

## 💡 Use Cases for Nonprofits

This dashboard template can be adapted for various nonprofit needs:

- **Training Program Evaluation**: Analyze participant feedback from any training initiative
- **Event Feedback Analysis**: Process post-event surveys efficiently
- **Volunteer Satisfaction Tracking**: Monitor volunteer experience over time
- **Program Impact Assessment**: Visualize beneficiary feedback
- **Donor Sentiment Analysis**: Understand donor perspectives
- **Staff Engagement Surveys**: Track organizational health metrics

## 🔐 Privacy & Security

- No personally identifiable information (PII) is displayed
- All data is processed client-side
- Comments are anonymized before display
- No data is sent to external servers
- Fully GDPR compliant approach

## 📞 Support & Contact

For questions about:
- **The Dashboard**: Open an issue in this repository
- **The Course**: Contact through TechSoup's course platform
- **Implementation Help**: Reach out to the course instructors

## 🚀 Future Enhancements

Planned features for future versions:

- [ ] Backend API for dynamic data updates
- [ ] Advanced NLP for deeper sentiment analysis
- [ ] Comparative benchmarking with other courses
- [ ] Automated email reports
- [ ] Multi-language support
- [ ] Export to PDF/Excel functionality
- [ ] Real-time collaborative annotations
- [ ] Predictive analytics for course outcomes

---

**Built with ❤️ for the nonprofit community**

*Demonstrating that AI can be accessible, practical, and impactful for social good*

---

© 2025 Meet the Moment | Building technology that serves your mission