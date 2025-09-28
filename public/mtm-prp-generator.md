# Meet the Moment Product Requirements Prompt (PRP) Generator

## Overview
A streamlined framework for defining product requirements for nonprofit web applications using Meet the Moment's standard tech stack.

---

## Introduction Script

Hey! Let's map out your product vision together. I'll ask focused questions to understand what you're building and who it serves.

Since we're using our standard MTM tech stack (GitHub, Netlify, Supabase), we can skip the technical debates and focus on making something that actually works for your mission.

Ready? Let's build something meaningful.

---

## Interview Questions

### 1. Mission & Problem Context
- What problem are you solving?
- Who's most affected by this problem?
- How does this advance your mission?
- What's broken about the current approach?

### 2. Users & Access
- Who are your primary users? (staff, beneficiaries, volunteers, donors?)
- Will this be internal-only or public-facing?
- What's their tech comfort level (1-10)?
- Any accessibility requirements we should know about?

### 3. Core User Journey
- How does someone first find/access this tool?
- What's the main thing they need to accomplish?
- How do they know they've succeeded?
- What happens next (retention/follow-up)?

### 4. Features (MVP Focus)

**MUST-HAVE for launch:**
- [ ] What data do users need to input?
- [ ] What do they need to see/retrieve?
- [ ] Any automated processes needed?
- [ ] Reporting/export requirements?

**NICE-TO-HAVE (Phase 2):**
- [ ] What would make this delightful vs. just functional?
- [ ] Future automation opportunities?

### 5. Data & Content
- What information will the system store?
- Any sensitive/PII data? (affects our approach)
- Who can see what? (access levels needed?)
- Data retention needs? (how long to keep records?)
- Any compliance requirements? (HIPAA, FERPA, etc.)

### 6. Authentication Needs

**Pick one:**
- [ ] Public (no auth needed)
- [ ] Simple password (one password for all users)
- [ ] Basic user accounts (if absolutely necessary)

**If auth is needed:**
- How many users roughly?
- Do different users need different permissions?

### 7. Design & Experience

**Visual style (pick closest):**
- [ ] Clean & minimal (MTM default)
- [ ] Warm & approachable
- [ ] Professional & institutional
- [ ] Playful & engaging

**Brand assets:**
- Logo files available? (PNG/SVG preferred)
- Brand colors? (or use MTM defaults)
- Any specific fonts? (or use system fonts)

### 8. Content Management
- Who will update content after launch?
- How often will content change?
- Need a simple admin interface?
- Or comfortable updating via GitHub?

### 9. Success & Metrics
- What does success look like in 3 months?
- What metrics matter? (usage, outcomes, or both?)
- How will you know if this isn't working?
- Reporting needs for board/funders?

### 10. Timeline & Resources
- When do you need this live? (be honest)
- Who's the main point person?
- Who else needs to be involved?
- Budget range for initial build?
- Monthly budget for maintenance? (hosting ~$20/month)

---

## PRP Output Template

```markdown
# Product Requirements Prompt

## Executive Summary
**Product:** [Name]
**Purpose:** [One sentence - what it does]
**Users:** [Who uses it]
**Impact:** [What changes]

## Problem & Solution
**Current State:** [What's broken]
**Future State:** [How this fixes it]
**Success Metric:** [One key measure]

## User Flow
1. User arrives at [URL]
2. They [primary action]
3. System [response]
4. Result: [outcome]

## MVP Features

### Week 1-2 Build
- [ ] Feature 1: [description]
- [ ] Feature 2: [description]
- [ ] Feature 3: [description]

### Post-Launch Additions
- [ ] Enhancement 1: [timeline]
- [ ] Enhancement 2: [timeline]

## Technical Requirements

### Standard MTM Stack
- **Frontend:** React on Netlify
- **Repository:** GitHub (private/public TBD)
- **Database:** [None needed] OR [Supabase for: _______]
- **Auth:** [None] OR [Password: _______] OR [User accounts for: _______]
- **Domain:** [client-provided] OR [use Netlify subdomain]

### Data Schema (if applicable)
```javascript
// Example structure
{
  users: {
    id, email, role, created_at
  },
  [main_entity]: {
    id, name, data_fields, created_at, updated_at
  }
}
```

## Design Specifications
**Style:** [Selected from options]
**Colors:** [MTM defaults OR custom: _______]
**Logo:** [Provided OR text-only]
**Mobile:** Responsive, desktop-optimized

## Content Management
**Update Frequency:** [Daily/Weekly/Monthly/Rarely]
**Update Method:** [GitHub PR/Simple CMS/Admin panel]
**Content Owner:** [Name/role]

## Launch Plan

### Pre-Launch Checklist
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Password/auth tested
- [ ] Initial content loaded
- [ ] Tested on mobile
- [ ] Accessibility check
- [ ] Backup plan documented

### Week 1: Foundation
- Set up GitHub repo
- Configure Netlify deployment
- Create basic UI structure
- Implement core feature

### Week 2: Features
- Add remaining MVP features
- Set up Supabase (if needed)
- Implement auth (if needed)
- Initial testing

### Week 3: Polish
- User testing with 3-5 people
- Fix critical issues
- Add analytics
- Documentation

### Week 4: Launch
- Soft launch to small group
- Gather feedback
- Final adjustments
- Full launch

## Ongoing Needs
**Hosting Cost:** ~$20/month (Netlify Pro + Supabase if needed)
**Maintenance:** ~2-4 hours/month
**Point Person:** [Name]
**Backup Contact:** [Name]

## Risk Factors
**Biggest Risk:** [What could kill this project]
**Mitigation:** [How we prevent/handle it]

## Success Criteria (3 months)
- [ ] Metric 1: [Specific number/outcome]
- [ ] Metric 2: [Specific number/outcome]
- [ ] Learning Goal: [What we'll know]

---
*Built with Meet the Moment's standard stack*
*Ready for development: ✅*
```

---

## Usage Instructions

### For Interviewers

1. **Start with context:** Explain this is a collaborative process to ensure we build the right thing.

2. **Take notes during conversation:** Don't make it feel like a formal questionnaire.

3. **Skip irrelevant sections:** Not every project needs every question answered.

4. **Focus on outcomes:** Keep bringing conversation back to impact and user value.

5. **Be realistic about timelines:** Most MVPs can launch in 3-4 weeks with focused scope.

### For Developers

1. **Review before starting:** Make sure all critical questions are answered.

2. **Flag gaps early:** If something crucial is missing, ask before building.

3. **Use standard stack:** Don't deviate from GitHub/Netlify/Supabase without good reason.

4. **Follow MTM style guide:** Reference mtm-style-guide.md for all design decisions.

5. **Document as you build:** Update the PRP with any significant changes.

### For Clients

1. **Be honest about resources:** Better to know constraints upfront.

2. **Focus on MVP:** We can always add features after launch.

3. **Identify your champion:** Someone needs to own this internally.

4. **Plan for maintenance:** Even simple apps need occasional updates.

5. **Define success clearly:** Vague goals lead to disappointed stakeholders.

---

## Common Patterns & Solutions

### Pattern: Simple Data Collection
**Need:** Collect information from users
**Solution:** Form → Supabase → Admin dashboard
**Timeline:** 1-2 weeks

### Pattern: Resource Library
**Need:** Share documents/resources with users
**Solution:** Searchable/filterable content site
**Timeline:** 1 week

### Pattern: Application/Registration System
**Need:** Accept and review applications
**Solution:** Multi-step form → Review interface → Email notifications
**Timeline:** 2-3 weeks

### Pattern: Simple Dashboard
**Need:** Display metrics/KPIs
**Solution:** Data visualization with scheduled updates
**Timeline:** 2 weeks

### Pattern: Community Directory
**Need:** Searchable database of people/orgs
**Solution:** Profile cards with filters/search
**Timeline:** 2 weeks

---

## Tech Stack Details

### Always Included
- **GitHub:** Version control and collaboration
- **Netlify:** Hosting, CI/CD, and edge functions
- **React:** UI framework
- **Tailwind CSS:** Styling (using MTM color palette)

### When Needed
- **Supabase:** When you need a database, auth beyond password protection, or file storage
- **EmailJS:** For sending notification emails
- **Google Sheets API:** When client wants spreadsheet-based data management
- **Stripe:** For payment processing (rare in nonprofit context)

### Never Used (Keep It Simple)
- Complex authentication systems
- Multiple database providers
- Container orchestration
- Microservices architecture
- Native mobile apps (PWA instead)

---

## Red Flags to Watch For

🚩 **"We need it to do everything"** → Focus on ONE core problem first

🚩 **"Can we make it like Facebook/Amazon/etc?"** → Reference simpler alternatives

🚩 **"We don't know who will use it"** → Need user research first

🚩 **"The board wants AI"** → Define specific use case, not just "AI"

🚩 **"We need it next week"** → Set realistic expectations

🚩 **"Multiple departments have different needs"** → Start with one department's MVP

🚩 **"We'll figure out maintenance later"** → Address sustainability upfront

---

## Closing Statement for PRPs

This PRP represents our shared understanding of [Product Name]. It's a living document that will guide development while remaining flexible enough to accommodate learning and iteration.

Our approach prioritizes:
1. **Mission impact** over feature count
2. **User success** over technical complexity
3. **Sustainability** over perfection
4. **Learning** over assumptions

Next steps:
1. Review and approve this PRP
2. Set up project repository and infrastructure
3. Begin Week 1 development
4. Schedule weekly check-ins

Questions? Reach out to:
- Joshua Peskay: joshua@mtm.now
- Kim Snyder: kim@mtm.now

---

*Last Updated: [Date]*
*Version: 1.0*
*© Meet the Moment - Building technology that serves your mission*