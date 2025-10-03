export interface FeedbackEntry {
  id: number;
  rating: number;
  comment: string;
  session: number;
  sentiment?: "positive" | "neutral" | "negative";
  sentimentScore?: number;
}

export const sessionTitles: Record<number, string> = {
  1: "The Current State of AI – Where We Are and How We Got Here",
  2: "What You Can Do with AI Right Now (No Expertise Required)",
  3: "Ethics, Implications, and Disruptions of AI",
  4: "Advanced Uses - AI Packages, Next Level Analysis and AI Efficiencies",
  5: "The Next Frontier is Here - Vibe Coding, AI Agents, Automation",
  6: "Building Continuous AI Capacity at Your Organization",
};

export const session1Data: FeedbackEntry[] = [
  {
    id: 1,
    session: 1,
    rating: 3,
    comment:
      "I thought it was a great first session. I am excited about how to apply these principles specifically to not for profits.",
  },
  {
    id: 2,
    session: 1,
    rating: 4,
    comment: "I feel much more interested in AI in general now!",
  },
  { id: 3, session: 1, rating: 4, comment: "" },
  {
    id: 4,
    session: 1,
    rating: 3,
    comment: "Lots of great information. Looking forward to the next class.",
  },
  { id: 5, session: 1, rating: 3, comment: "" },
  {
    id: 6,
    session: 1,
    rating: 4,
    comment:
      "I feel very excited to learn and connect with other non-profits that are AI friendly",
  },
  {
    id: 7,
    session: 1,
    rating: 4,
    comment:
      "Great high level overview and context setting. Appreciated the visuals and metaphors to build understanding. What could be improved: a better way to track and follow-up on questions in the live chat.",
  },
  {
    id: 8,
    session: 1,
    rating: 4,
    comment:
      "Super interesting and engaging so far. Can't wait to get into more detail!",
  },
  {
    id: 9,
    session: 1,
    rating: 4,
    comment:
      "It was helpful to start with a baseline and I'm happy you are encouraging community interaction as a learning tool!",
  },
  { id: 10, session: 1, rating: 4, comment: "" },
  { id: 11, session: 1, rating: 4, comment: "" },
  { id: 12, session: 1, rating: 4, comment: "" },
  { id: 13, session: 1, rating: 3, comment: "" },
  {
    id: 14,
    session: 1,
    rating: 4,
    comment:
      "The time went SO fast! You would've had my attention for a LOT longer, but I get that our time is in demand!",
  },
  { id: 15, session: 1, rating: 3, comment: "" },
  {
    id: 16,
    session: 1,
    rating: 3,
    comment: "It was great, I am learning new things.",
  },
  {
    id: 17,
    session: 1,
    rating: 3,
    comment:
      "I am excited to do some of the 'homework' and reflect more on my and my organization's relationship with AI. Also happy that a lot of people are on the same level as me, where we are experimenting but not necessarily pros.",
  },
  {
    id: 18,
    session: 1,
    rating: 3,
    comment:
      "It was probably just my connection, but I found that I struggled a bit with buffering both audio and video. This made it a bit frustrating to follow along, but having the presentation downloaded was helpful.",
  },
  { id: 19, session: 1, rating: 4, comment: "" },
  {
    id: 20,
    session: 1,
    rating: 3,
    comment:
      "As an AI newby you glossed over some info I would have liked more time to absorb. I, personally, would rather have the session go over time and not speed thru stuff. I feel like I definintly learned things!!",
  },
  {
    id: 21,
    session: 1,
    rating: 3,
    comment:
      "Great info - I'm very new to all of this, so it was pretty fast-paced. Instructors seem to really know subject as well as how to talk with a range of experience levels. Feel very positive so far.",
  },
  { id: 22, session: 1, rating: 4, comment: "" },
  {
    id: 23,
    session: 1,
    rating: 4,
    comment:
      "Excellente mise en situation! Efficace et concise, déjà beaucoup de ressources proposées!",
  },
  {
    id: 24,
    session: 1,
    rating: 3,
    comment:
      "I find the chat distracting from the lesson. Can people just raise their hand at the end? I am probably the only one though lol. Very old school.",
  },
  { id: 25, session: 1, rating: 4, comment: "Fast paced!" },
  { id: 26, session: 1, rating: 3, comment: "" },
  { id: 27, session: 1, rating: 3, comment: "" },
  { id: 28, session: 1, rating: 3, comment: "" },
  {
    id: 29,
    session: 1,
    rating: 4,
    comment:
      "Great start! Looking forward to getting into more of the specifics in the upcoming sessions!",
  },
  {
    id: 30,
    session: 1,
    rating: 1,
    comment:
      "1) A lot of time was spent on things that weren't particularly educational, like we could've spent a lot less time on the pond metaphor and more on AI security. 2- (and I put this in the chat) - For future sessions, would it be possible to make the slideshow larger and speakers smaller? There are graphs I can't read at all, so it is hard to engage with that material in the moment.",
  },
  { id: 31, session: 1, rating: 4, comment: "" },
  { id: 32, session: 1, rating: 4, comment: "" },
  { id: 33, session: 1, rating: 4, comment: "" },
  {
    id: 34,
    session: 1,
    rating: 4,
    comment:
      "Good start. The background was more useful than I thought it would be.",
  },
  {
    id: 35,
    session: 1,
    rating: 3,
    comment: "Great pacing and introductory info!",
  },
  {
    id: 36,
    session: 1,
    rating: 4,
    comment:
      "Thank you for a great first session. Looking forward to the next sessions.",
  },
  { id: 37, session: 1, rating: 3, comment: "" },
  { id: 38, session: 1, rating: 2, comment: "" },
  { id: 39, session: 1, rating: 4, comment: "" },
  {
    id: 40,
    session: 1,
    rating: 3,
    comment:
      "Feeling a little frantic about collecting all the links and other resources in real time because the course page / environment is unfamiliar and I don't want to lose anything.",
  },
  { id: 41, session: 1, rating: 4, comment: "" },
  { id: 42, session: 1, rating: 3, comment: "" },
  {
    id: 43,
    session: 1,
    rating: 3,
    comment:
      "I'm so far behind on AI, this was a LOT of information all at once. I need a remedial course! Or perhaps there is a one on one option for slower learners?",
  },
  { id: 44, session: 1, rating: 4, comment: "" },
  { id: 45, session: 1, rating: 4, comment: "" },
  {
    id: 46,
    session: 1,
    rating: 4,
    comment:
      "engaging, validating, meeting many needs, fast- but i could keep up even as a beginner",
  },
  {
    id: 47,
    session: 1,
    rating: 4,
    comment: 'Excited to do some of the "homework" over the next week.',
  },
  {
    id: 48,
    session: 1,
    rating: 4,
    comment: "great intro and highlighting a few tools that are secure",
  },
  { id: 49, session: 1, rating: 3, comment: "not yet" },
  {
    id: 50,
    session: 1,
    rating: 2,
    comment:
      "I love the two speakers, but they seemed unfamiliar with the slide order a bit.",
  },
  { id: 51, session: 1, rating: 3, comment: "" },
  { id: 52, session: 1, rating: 3, comment: "" },
  { id: 53, session: 1, rating: 3, comment: "" },
  { id: 54, session: 1, rating: 3, comment: "" },
  { id: 55, session: 1, rating: 4, comment: "" },
];

export const session2Data: FeedbackEntry[] = [
  {
    id: 56,
    session: 2,
    rating: 3,
    comment:
      "1) I'm appreciating using TRACE to identify pain points, COMPAS to frame the goal and CRAFT to write a prompt that helps us meet it. However, I think there's still a piece that's not quite clicking for me about how to understand what are the types of \"thinking\" that are a good fit for AI, and how to frame that to coworkers (for instance, I don't really understand \"probabalistic\"). I see that the Soup Starter pack includes warnings about double checking facts and not to trust AI with math. Those are two things I would have assumed are well within the capacities of a generative AI tool, so now I'm wondering what other of my assumptions may be wrong! The development director at my org would like to use AI to do research on prospective donors, but I'm wondering if that is too \"fact-based\" or just something where AI might not be good at distinguishing between our prospective donor and another person on the internet with the same name. But I don't see that type of consideration accounted for in TRACE or COMPAS? I also don't understand how I would double check facts in a response to a query like \"What are 5 current trends in youth mentoring programs I should know about?\" when presumably the response may be based on the AI's understanding of facts/stats about youth mentoring that aren't explicitly stated?  2) Towards the beginning of today's session, it was shared that the goal of using these tools is to reduce human labor and/or improve accuracy. I'm wondering if you have any examples or tools for us to help with the goal of greater disability inclusion? I have a rough sense of how some tools we're already discussing are used by disability communities (transcriptions to support people who are deaf or hard of hearing, meeting summaries and action items to support people with memory or processing impairments) but I'd love to learn about additional tools available focused on disability inclusion.",
  },
  {
    id: 57,
    session: 2,
    rating: 4,
    comment: "I appreciated all the practical application tools and demos",
  },
  {
    id: 58,
    session: 2,
    rating: 1,
    comment:
      "I find that when the presenters stop the presentation to answer questions from the chat very distracting so the flow of the presentation is all over the map.",
  },
  { id: 59, session: 2, rating: 3, comment: "" },
  { id: 60, session: 2, rating: 3, comment: "" },
  {
    id: 61,
    session: 2,
    rating: 3,
    comment:
      "It went a bit too fast for me today and I got a bit lost when Joshua presented his meta prompt, otherwise engaging content",
  },
  { id: 62, session: 2, rating: 2, comment: "" },
  {
    id: 63,
    session: 2,
    rating: 4,
    comment:
      "I appreciate that the information being given is very practical and will be very helpful for our organization.",
  },
  { id: 64, session: 2, rating: 3, comment: "" },
  {
    id: 65,
    session: 2,
    rating: 3,
    comment:
      "I wish it was longer! It felt like we really got into a good flow and then next thing you know it was wrapping up!",
  },
  { id: 66, session: 2, rating: 2, comment: "" },
  {
    id: 67,
    session: 2,
    rating: 3,
    comment:
      'This was a useful session jumping into the "how" of using AI, although I would have preferred for it to follow a discussion about the "if/whether to use" it. Our organization, as I\'m sure many nonprofits, often work with issues of political sensitivity and confidentiality as well as requiring a lot of human judgment, and I hope for more in-depth discussions along those lines',
  },
  { id: 68, session: 2, rating: 4, comment: "" },
  { id: 69, session: 2, rating: 4, comment: "" },
  {
    id: 70,
    session: 2,
    rating: 4,
    comment:
      "Very practical, hands-on guidance, helpful examples and scenarios. Appreciate the way the questions in chat were tracked and addressed - much improved from session 1! One thought is that 1 hour feels tight to get through everything without having to rush.  I know 1 hour is probably easier for most folks to commit to on a weekly basis, but I wonder if you could consider 90-minute sessions in the future.",
  },
  {
    id: 71,
    session: 2,
    rating: 4,
    comment:
      "Concrete examples are really helpful. There were a lot of them today! Also loved all the resources/links shared in the chat by the instructors. It would be helpful to have a full list of them somewhere for reference",
  },
  {
    id: 72,
    session: 2,
    rating: 2,
    comment:
      "The meta prompt example seemed intriguing but went too fast. I will rewatch..thanks for recording the session!  I look forward to a more in-depth discussion how to reduced environmental costs while using AI.  Are there more efficient ways to use AI to reduce environmental impacts during use? Your tool showing a tradeoff for hamburgers or driving is clever, but environmentalists are already not driving nor eating hamburgers. Thanks!",
  },
  {
    id: 73,
    session: 2,
    rating: 4,
    comment: "i learning more about different types of AI",
  },
  {
    id: 74,
    session: 2,
    rating: 2,
    comment:
      "I understand there is a lot of information to cover, but the discussions are moving fast. It's hard to keep up with the chat between what the instructors are dropping in and all the comments/questions from the participants.",
  },
  {
    id: 75,
    session: 2,
    rating: 2,
    comment:
      "For those of us new to AI, the slides moved too fast. Clearly the more advanced participants understood what was presented but for us newbies it was impossible to follow this at all.",
  },
  {
    id: 76,
    session: 2,
    rating: 4,
    comment:
      "It was a lot really fast! Thank you for providing all the links, materials, and transcripts!",
  },
  {
    id: 77,
    session: 2,
    rating: 2,
    comment:
      "better than last week, a bit more hands on, but questions i have - like the confidentiality bit - seem to be glossed over or not addressed.",
  },
  {
    id: 78,
    session: 2,
    rating: 2,
    comment:
      "Some of it was not new information for me (prompting) - and I'm feeling in general like I'm still missing the big picture - like, the mechanics of using AI to solve some of our problems.",
  },
  { id: 79, session: 2, rating: 3, comment: "" },
  {
    id: 80,
    session: 2,
    rating: 4,
    comment: "Really useful information and tools to use right away",
  },
  { id: 81, session: 2, rating: 3, comment: "" },
  {
    id: 82,
    session: 2,
    rating: 3,
    comment: "Looking forward to more how-to and tools to share!",
  },
  { id: 83, session: 2, rating: 4, comment: "Great info!!" },
  { id: 84, session: 2, rating: 4, comment: "" },
  {
    id: 85,
    session: 2,
    rating: 2,
    comment:
      "I would have liked more time on prompt writing. It felt a little bit rushed, but I'm glad we have the slides and all the resources to work on it offline.",
  },
  { id: 86, session: 2, rating: 4, comment: "" },
  { id: 87, session: 2, rating: 4, comment: "" },
  {
    id: 88,
    session: 2,
    rating: 3,
    comment:
      "I think we're on the right track. I'm looking forward to the next session",
  },
  {
    id: 89,
    session: 2,
    rating: 3,
    comment:
      "It bumped up against my knowledge limit - I'll need to digest this content and play around with it",
  },
  { id: 90, session: 2, rating: 4, comment: "Appreciate the prompt primer!" },
  {
    id: 91,
    session: 2,
    rating: 4,
    comment: "CRAFT Demo was a little to fast to follow",
  },
  {
    id: 92,
    session: 2,
    rating: 4,
    comment:
      "It seems like all of the set up to the writing prompts and reviewing the results takes a much time, or more time, as thinking/writing on my own.",
  },
  { id: 93, session: 2, rating: 4, comment: "" },
  {
    id: 94,
    session: 2,
    rating: 3,
    comment:
      "As someone who has not used AI, the process seems a lot less mysterious now! Thank you!",
  },
  {
    id: 95,
    session: 2,
    rating: 4,
    comment: "Really helpful conversation and useful tools",
  },
  {
    id: 96,
    session: 2,
    rating: 3,
    comment:
      "Overall very good! I found that the ChatGPT demo moved too fast and I quickly got lost, but I will go back an rewatch the video!",
  },
  {
    id: 97,
    session: 2,
    rating: 3,
    comment:
      "Steep learning curve: it seems simple but there are intricacies. Not a bad thing, just the reality of anything new.",
  },
  {
    id: 98,
    session: 2,
    rating: 3,
    comment:
      'Really appreciate the "real- life" application of concepts covered in session 2. Keep it coming!',
  },
  {
    id: 99,
    session: 2,
    rating: 4,
    comment: "Great content and shared resources!",
  },
  {
    id: 100,
    session: 2,
    rating: 4,
    comment:
      "Well done. I appreciate the practical approach and real world examples.",
  },
  { id: 101, session: 2, rating: 3, comment: "thank you" },
  {
    id: 102,
    session: 2,
    rating: 3,
    comment:
      "I was late due to an employee situation, but I look forward to looking through the deck!",
  },
  {
    id: 103,
    session: 2,
    rating: 4,
    comment: "Love all the information being shared.",
  },
  {
    id: 104,
    session: 2,
    rating: 4,
    comment: "Great links to tools and the CRAFT prompter",
  },
  { id: 105, session: 2, rating: 3, comment: "" },
  { id: 106, session: 2, rating: 3, comment: "" },
  {
    id: 107,
    session: 2,
    rating: 4,
    comment: "Enjoyed the interactive nature of this session.",
  },
  { id: 108, session: 2, rating: 4, comment: "" },
  { id: 109, session: 2, rating: 3, comment: "" },
  { id: 110, session: 2, rating: 4, comment: "" },
  { id: 111, session: 2, rating: 3, comment: "" },
  { id: 112, session: 2, rating: 4, comment: "" },
  {
    id: 113,
    session: 2,
    rating: 4,
    comment: "Lots to cover but a great overview on hands-on!",
  },
  {
    id: 114,
    session: 2,
    rating: 4,
    comment: "An hour is SO SHORT! Thank you for packing info in there.",
  },
  { id: 115, session: 2, rating: 4, comment: "Great new information!" },
  { id: 116, session: 2, rating: 3, comment: "" },
  {
    id: 117,
    session: 2,
    rating: 4,
    comment: "Really liked the practical tips.",
  },
  {
    id: 118,
    session: 2,
    rating: 4,
    comment:
      "Loved how pragmatic it was--will immediatly apply what I learned!",
  },
];

export const session3Data: FeedbackEntry[] = [
  {
    id: 119,
    session: 3,
    rating: 4,
    comment:
      "Very good explanation on ethics issues and approaches. Extremely helpful to our organization!",
  },
  {
    id: 120,
    session: 3,
    rating: 3,
    comment:
      "Josh and Kim do a great job of providing supporting resources -- thank you!",
  },
  { id: 121, session: 3, rating: 4, comment: "" },
  {
    id: 122,
    session: 3,
    rating: 1,
    comment:
      "It felt like the topics the audience really wanted to dive into didn't get the time needed for adequate coverage. There was a noticiable delay between chat and live conversation. Seemed like the presenters missed important content. For example several people shared their AI objectives but were completely missed by the presenters. Totally didn't get the point of the Concern, Influence, Control circles. So far this session was the least helpful.",
  },
  {
    id: 123,
    session: 3,
    rating: 4,
    comment:
      "Looking forward to trying the Trolly tool. Enjoyed the pace and variety, with video and interaction with a learner.",
  },
  {
    id: 124,
    session: 3,
    rating: 4,
    comment:
      "I was away so I missed the first two sessions but jumping in on week 3 it was still easy to follow. The presentation was good and the extra tools are interesting. Looking forward to reviewing the first two sessions and catching up!",
  },
  {
    id: 125,
    session: 3,
    rating: 3,
    comment:
      "Interesting to see that accuracy and privacy still are key problems when using AI.",
  },
  { id: 126, session: 3, rating: 4, comment: "" },
  {
    id: 127,
    session: 3,
    rating: 4,
    comment:
      "This is very important information.Bieng aware of privacy and Bias is crucial.",
  },
  { id: 128, session: 3, rating: 4, comment: "" },
  {
    id: 129,
    session: 3,
    rating: 4,
    comment: "I really enjoyed the 3rd session it was thoughtful",
  },
  {
    id: 130,
    session: 3,
    rating: 4,
    comment:
      "very thought provoking, many things I want to share with our team",
  },
  {
    id: 131,
    session: 3,
    rating: 4,
    comment: "The pace was much more manageable for me, thank you!",
  },
  {
    id: 132,
    session: 3,
    rating: 2,
    comment:
      "Pacing was better. Thank you! I'm still hoping you'll address how to use AI to reduce environmental impacts during use. Environmentalists already do not eat hamburgers or drive cars, so they cannot offset their use. For example, I've read that different types/styles of prompts can make a difference in reducing energy use, even if small. I'll also try to put this in the community.",
  },
  {
    id: 133,
    session: 3,
    rating: 3,
    comment: "Interesting to use AI to decide if I should use AI. :-)",
  },
  {
    id: 134,
    session: 3,
    rating: 3,
    comment:
      "Not as many resources or examples given. Still a helpful and informative session though",
  },
  { id: 135, session: 3, rating: 3, comment: "" },
  {
    id: 136,
    session: 3,
    rating: 4,
    comment:
      "Pacing was better - thank you! Helping framing of these thorny issues. Appreciate the video and the tools you created, shared, and demonstrated",
  },
  { id: 137, session: 3, rating: 3, comment: "" },
  {
    id: 138,
    session: 3,
    rating: 3,
    comment:
      "Because we are in the infant stages of looking at AI adoption it gave us a good methodology to where to start and what we should be looking at.",
  },
  {
    id: 139,
    session: 3,
    rating: 4,
    comment:
      "The prompt tools are giving me a better understanding on how to think through what I'm asking AI to do for me.",
  },
  {
    id: 140,
    session: 3,
    rating: 2,
    comment:
      "I still don't know how to use AI. There are examples of how to use it - grant prospecting, report creation, etc. I have no idea how to actually make, like a finance report from information for several spreadsheets.",
  },
  {
    id: 141,
    session: 3,
    rating: 4,
    comment:
      "Thank you for not engaging with the chat during the session and waiting until the end to answer questions. It was so much easier to follow along and understand. Great tools. Thank you",
  },
  {
    id: 142,
    session: 3,
    rating: 4,
    comment:
      "apps are great, appreciate the emphasis on the grey area and the need to still use your brain",
  },
  {
    id: 143,
    session: 3,
    rating: 3,
    comment:
      "The trolley problem app looks like a pretty useful tool to bring back to my organization. I like the ability to assess the impact of using AI on our org.",
  },
  { id: 144, session: 3, rating: 4, comment: "" },
  { id: 145, session: 3, rating: 3, comment: "" },
  { id: 146, session: 3, rating: 4, comment: "" },
  {
    id: 147,
    session: 3,
    rating: 3,
    comment:
      "Always really helpful to be reminded about ethics - Trolley problem is memorable - a little theoretical, but good stuff",
  },
  {
    id: 148,
    session: 3,
    rating: 2,
    comment:
      "I was hoping for more critical perspectives regarding the ethics of AI",
  },
  { id: 149, session: 3, rating: 4, comment: "" },
  { id: 150, session: 3, rating: 4, comment: "" },
  { id: 151, session: 3, rating: 3, comment: "" },
  { id: 152, session: 3, rating: 4, comment: "Great job, thank you!" },
  {
    id: 153,
    session: 3,
    rating: 3,
    comment: "I found this one a little slower.",
  },
  {
    id: 154,
    session: 3,
    rating: 3,
    comment:
      "Really enjoying the real-world examples, but I'm having a hard time keeping track of all the resources and acronyms - why are there so many different ones that have to do with COMPAS? It's confusing.",
  },
  {
    id: 155,
    session: 3,
    rating: 3,
    comment:
      "good pace- looking forward to practicing with the app. I need more time to practice all the information...but that's a me problem!!!",
  },
  {
    id: 156,
    session: 3,
    rating: 4,
    comment: "Pacing was better and I love the resources.",
  },
  { id: 157, session: 3, rating: 3, comment: "" },
  { id: 158, session: 3, rating: 4, comment: "Good links for future use" },
  {
    id: 159,
    session: 3,
    rating: 4,
    comment:
      "Excellent use cases, and demos. I love the thorough presentation of different topics and tools. Thanks.",
  },
  {
    id: 160,
    session: 3,
    rating: 3,
    comment: "Really great tools to guide future decision making!",
  },
  { id: 161, session: 3, rating: 3, comment: "" },
  {
    id: 162,
    session: 3,
    rating: 4,
    comment: "great job with terrific examples",
  },
  { id: 163, session: 3, rating: 4, comment: "" },
  { id: 164, session: 3, rating: 3, comment: "" },
  { id: 165, session: 3, rating: 4, comment: "" },
  { id: 166, session: 3, rating: 4, comment: "" },
  { id: 167, session: 3, rating: 4, comment: "" },
  { id: 168, session: 3, rating: 3, comment: "" },
  { id: 169, session: 3, rating: 4, comment: "Very informative" },
  { id: 170, session: 3, rating: 2, comment: "No" },
  { id: 171, session: 3, rating: 3, comment: "" },
  { id: 172, session: 3, rating: 4, comment: "" },
];

// Combine all data and validate ratings
const rawFeedbackData = [
  ...session1Data,
  ...session2Data,
  ...session3Data,
];

// Filter out invalid ratings (must be 1-4)
export const allFeedbackData = rawFeedbackData.filter(entry => {
  const isValid = entry.rating >= 1 && entry.rating <= 4;
  if (!isValid) {
    console.warn(`Invalid rating detected for entry ${entry.id}: ${entry.rating}. Entry excluded.`);
  }
  return isValid;
});

// Calculate sentiment based on rating and comment keywords
export function calculateSentiment(entry: FeedbackEntry): FeedbackEntry {
  const positiveWords = [
    "great",
    "excellent",
    "love",
    "helpful",
    "excited",
    "good",
    "appreciate",
    "thank",
    "engaging",
    "useful",
    "practical",
  ];
  const negativeWords = [
    "fast",
    "rushed",
    "difficult",
    "struggle",
    "distract",
    "confus",
    "frustrat",
    "slow",
    "hard",
  ];

  const comment = entry.comment.toLowerCase();

  let positiveCount = positiveWords.filter((word) =>
    comment.includes(word),
  ).length;
  let negativeCount = negativeWords.filter((word) =>
    comment.includes(word),
  ).length;

  let sentiment: "positive" | "neutral" | "negative" = "neutral";
  let sentimentScore = 0.5;

  if (entry.rating >= 4) {
    sentiment = "positive";
    sentimentScore = 0.7 + positiveCount * 0.1;
  } else if (entry.rating <= 2) {
    sentiment = "negative";
    sentimentScore = 0.3 - negativeCount * 0.1;
  } else {
    if (positiveCount > negativeCount) {
      sentiment = "positive";
      sentimentScore = 0.6;
    } else if (negativeCount > positiveCount) {
      sentiment = "negative";
      sentimentScore = 0.4;
    } else {
      sentiment = "neutral";
      sentimentScore = 0.5;
    }
  }

  return {
    ...entry,
    sentiment,
    sentimentScore: Math.max(0, Math.min(1, sentimentScore)),
  };
}
