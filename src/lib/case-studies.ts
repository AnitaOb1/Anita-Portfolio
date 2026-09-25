export type CaseStudy = {
  slug: string;
  brand: string;
  category: string;
  accent: string;
  tagline: string;
  audience: string;
  challenge: string;
  diagnosisJourney: string[];
  diagnosisNote: string;
  strategy: { title: string; desc: string }[];
  sampleCaption: string;
  contentDirection: string[];
  whatIdTest: string[];
  metrics: string[];
  outlook: string;
  takeaway: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "glowwell",
    brand: "GLOWWELL",
    category: "Holistic Wellness & Skincare",
    accent: "#8BA888",
    tagline: "Turning a skincare feed into a trusted daily ritual.",
    audience:
      "Women 28–45 drawn to clean, holistic skincare who are skeptical of \"miracle product\" marketing and want to understand the why behind a routine.",
    challenge:
      "GLOWWELL's feed was product-first and promotional, competing on price against mass skincare brands instead of on the philosophy that actually sets it apart.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Most content lived at Discover and Purchase, with almost nothing to help someone move from curious to convinced, the Learn and Trust stages were essentially empty.",
    strategy: [
      { title: "Lead with philosophy, not products", desc: "Open with the \"why\" behind holistic skincare before ever naming a product." },
      { title: "Ritual-based content, not routine dumps", desc: "Frame posts around morning/evening rituals rather than ingredient lists." },
      { title: "Founder-led trust content", desc: "Bring the founder's face and voice into Stories weekly to build recognition." },
      { title: "Ingredient education series", desc: "A recurring \"What's actually in this\" format to build authority." },
      { title: "Soft-sell product integration", desc: "Products appear as the natural conclusion of a ritual, not the opener." },
    ],
    sampleCaption:
      "Your skin doesn't need eleven steps. It needs three you'll actually do. Here's the ritual we built GLOWWELL around, and why less is doing more than you think. 🌿",
    contentDirection: [
      "Weekly ritual carousels (AM/PM routines broken down simply)",
      "Founder Q&A Stories every Friday",
      "Ingredient spotlight reels (15–30 sec, direct to camera)",
      "UGC re-shares with added educational captions",
    ],
    whatIdTest: [
      "Founder-voice captions vs. brand-voice captions",
      "Carousel ritual breakdowns vs. single ingredient-spotlight images",
      "\"Why it works\" reels vs. before/after reels",
      "Soft CTA (\"save this for later\") vs. direct CTA (\"shop the ritual\")",
      "Morning ritual content vs. evening ritual content for saves",
    ],
    metrics: [
      "Saves per post (proxy for perceived value)",
      "Story reply rate on founder Q&As",
      "Click-through rate to product pages",
      "Follower growth rate month over month",
    ],
    outlook:
      "Within 90 days, the goal is a feed where Learn and Trust content outnumber direct promotion 3:1, with saves becoming the primary engagement signal, evidence that people are treating the account as a resource, not just a shop.",
    takeaway:
      "When a wellness brand competes on philosophy instead of price, content stops chasing algorithm trends and starts building the kind of trust that actually converts.",
  },
  {
    slug: "the-shape-of-wellness",
    brand: "THE SHAPE OF WELLNESS",
    category: "Holistic Health Coaching",
    accent: "#C17A56",
    tagline: "Making a generalist coach feel like a specialist.",
    audience:
      "Women in their 30s–50s navigating perimenopause, burnout, or chronic stress who want a coach who sees the whole picture, not just macros.",
    challenge:
      "The brand tried to speak to everyone, weight loss, stress, sleep, hormones, and ended up sounding like no one in particular, with low save and share rates.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Discover-stage reach was healthy from reels, but the Consider stage was the leak: visitors couldn't tell what made this coach different from any other wellness account.",
    strategy: [
      { title: "Niche down publicly", desc: "Anchor every post to one clear throughline: whole-person health for women 35+." },
      { title: "Signature framework", desc: "Package her coaching approach into a named, repeatable framework." },
      { title: "Client story spotlights", desc: "Real (anonymized) transformation stories told as narratives, not stats." },
      { title: "Myth-busting content", desc: "Address common holistic-health misconceptions head-on to build authority." },
      { title: "Consistent CTA ladder", desc: "Every post moves toward one next step, free guide, then call." },
    ],
    sampleCaption:
      "You don't need another 21-day reset. You need someone who looks at your sleep, your stress, and your hormones, together. That's the whole point of The Shape Method. Comment 'READY' and I'll send you the first step.",
    contentDirection: [
      "\"Whole picture\" client story reels",
      "Myth-busting carousels (holistic health misconceptions)",
      "Signature framework explainer series",
      "Weekly \"ask me anything\" Story sessions",
    ],
    whatIdTest: [
      "Framework-named content vs. generic tip content",
      "Client story reels vs. educational reels for saves",
      "Comment-to-DM CTA vs. link-in-bio CTA",
      "Single-topic weeks vs. mixed-topic weeks for follow growth",
      "Long-form captions vs. short punchy captions",
    ],
    metrics: [
      "Profile visits to follow ratio",
      "DM/comment CTA response rate",
      "Save rate on framework content",
      "Free guide opt-in rate",
    ],
    outlook:
      "A 90-day niche-down should show a smaller but sharper follower increase, with profile-visit-to-follow conversion climbing as the account becomes unmistakably about one thing.",
    takeaway:
      "A specific, named point of view outperforms broad appeal every time, clarity is what lets the right person recognize themselves in your content.",
  },
  {
    slug: "mindful-nutrition-co",
    brand: "MINDFUL NUTRITION CO.",
    category: "Nutrition & Functional Wellness",
    accent: "#2B6C6C",
    tagline: "Replacing diet-culture noise with functional nutrition trust.",
    audience:
      "Health-conscious adults 25–45 recovering from diet culture, looking for functional, food-first nutrition guidance without restriction language.",
    challenge:
      "Content unintentionally echoed diet-culture patterns (before/afters, restriction language) that clashed with the brand's actual anti-diet, functional approach, creating a trust gap.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Trust was the breaking point: the audience this brand wants is actively allergic to diet-culture visual and verbal cues, even when the underlying message is different.",
    strategy: [
      { title: "Language audit", desc: "Remove restriction/weight-loss framing from every caption template." },
      { title: "Food-as-function content", desc: "Reframe every recommendation around how food functions in the body, not calories." },
      { title: "Anti-diet positioning, stated plainly", desc: "Say directly what the brand isn't, to earn skeptical trust fast." },
      { title: "Practitioner credibility content", desc: "Bring credentials and clinical reasoning into simple, visual explainers." },
      { title: "Community-first tone", desc: "Invite questions and nuance rather than presenting one-size-fits-all rules." },
    ],
    sampleCaption:
      "This is not a 'don't eat carbs' post. It's a 'here's what carbs actually do for your nervous system' post. Functional nutrition, not fear-based nutrition. That's the whole philosophy. 🌾",
    contentDirection: [
      "\"Function over fear\" educational carousels",
      "Practitioner-led explainer reels",
      "Anti-diet positioning posts (stated directly, sparingly)",
      "Community Q&A series addressing nuance and exceptions",
    ],
    whatIdTest: [
      "Function-based captions vs. benefit-based captions",
      "Practitioner-facing camera reels vs. text-overlay reels",
      "Direct anti-diet statements vs. implied positioning",
      "Carousel education vs. single-graphic education for saves",
      "Community question prompts vs. statement-only posts for comments",
    ],
    metrics: [
      "Comment sentiment (qualitative trust signal)",
      "Save-to-reach ratio",
      "Profile visits from educational content",
      "Newsletter/consult opt-in rate",
    ],
    outlook:
      "Over 90 days, comment sentiment should shift measurably toward relief and recognition (\"finally, someone who gets it\") as the primary qualitative signal that trust is rebuilding.",
    takeaway:
      "In a diet-culture-saturated space, what you don't say is as strategic as what you do, precise language is a trust-building tool, not just polish.",
  },
  {
    slug: "herwell",
    brand: "HERWELL",
    category: "Women's Wellness Coaching",
    accent: "#C97A8E",
    tagline: "Building community before building a funnel.",
    audience:
      "Women 30–50 in major life transitions (postpartum, divorce, career change) seeking a wellness coach who understands the emotional weight of change.",
    challenge:
      "The account had warm, emotionally resonant content but no clear path from \"I relate to this\" to \"I should book a call\", engagement was high, conversion was flat.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Trust was already strong from emotionally honest content; the missing link was Consider, nothing bridged relatable feelings to a concrete next step.",
    strategy: [
      { title: "Emotional-to-practical bridge", desc: "Follow every emotionally resonant post with a practical, actionable follow-up." },
      { title: "Named coaching container", desc: "Give the offer a name and shape so it's easy to consider and refer." },
      { title: "Soft, consistent CTA presence", desc: "Add a low-pressure next step to posts that previously had none." },
      { title: "Real client voice", desc: "Use direct client language (with permission) to describe transformation." },
      { title: "Transition-specific content pillars", desc: "Organize content by life transition, not by generic wellness topic." },
    ],
    sampleCaption:
      "You don't have to have it figured out to start. You just have to stop doing it completely alone. That's what the HerWell Circle is for, link in bio if today's the day. 🤍",
    contentDirection: [
      "Transition-specific pillar content (postpartum / career / relationship)",
      "\"Feeling → next step\" paired post series",
      "Client-voice testimonial reels",
      "Weekly low-pressure CTA close-out posts",
    ],
    whatIdTest: [
      "Named offer CTA vs. generic \"work with me\" CTA",
      "Paired emotional+practical posts vs. standalone emotional posts",
      "Client-voice captions vs. coach-voice captions",
      "Weekly CTA cadence vs. CTA-per-post",
      "Reels vs. carousels for transition-specific storytelling",
    ],
    metrics: [
      "Link-in-bio click rate",
      "DM inquiry rate",
      "Consult booking rate from social",
      "Repeat engagement rate (comments across multiple posts per user)",
    ],
    outlook:
      "With a clear, named next step attached to already-strong emotional content, DM inquiries should become the dominant conversion path within 90 days, growing steadily as the container becomes recognizable.",
    takeaway:
      "Community and warmth build trust, but trust needs a door to walk through, pairing emotional content with a concrete, named next step is what turns connection into bookings.",
  },
  {
    slug: "coach-lexi",
    brand: "COACH LEXI",
    category: "Fitness & Wellness",
    accent: "#E85D4C",
    tagline: "From generic fitness content to a recognizable coaching voice.",
    audience:
      "Women 25–40 who've tried generic fitness programs and want sustainable strength training with real accountability and personality.",
    challenge:
      "Content was competent but interchangeable with hundreds of other fitness coaches, no distinct point of view, humor, or personality coming through.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Reach was fine at Discover, but nothing distinguished this account once someone landed on it, the Learn stage looked identical to a dozen competitors.",
    strategy: [
      { title: "Personality-first content", desc: "Let humor and real personality lead, with fitness expertise as the substance underneath." },
      { title: "Signature coaching phrases", desc: "Develop repeatable, ownable language that becomes associated with the brand." },
      { title: "Behind-the-scenes coaching moments", desc: "Show real coaching interactions, not just polished workout demos." },
      { title: "Opinion-led content", desc: "Take clear stances on fitness myths to stand out from neutral, generic advice." },
      { title: "Consistent face-to-camera presence", desc: "Build recognition through a consistent on-camera format." },
    ],
    sampleCaption:
      "\"I don't have time to work out\" is the fitness industry's favorite lie to sell you. Here's the 12-minute version that actually works, and why I stopped programming hour-long sessions for my clients.",
    contentDirection: [
      "Opinion/myth-busting reels (strong, clear stances)",
      "Behind-the-scenes coaching clips",
      "Signature phrase graphics for shareability",
      "Face-to-camera weekly \"coach's take\" series",
    ],
    whatIdTest: [
      "Opinion-led hooks vs. tip-led hooks",
      "Face-to-camera reels vs. text-overlay reels",
      "Humor-forward captions vs. straightforward captions",
      "Signature phrase content vs. generic motivational content for shares",
      "Behind-the-scenes content vs. polished demo content for comments",
    ],
    metrics: [
      "Share rate (personality-driven content proxy)",
      "Comment rate on opinion content",
      "Follower growth rate vs. category benchmark",
      "Branded phrase mentions/tags",
    ],
    outlook:
      "As personality-led content compounds, shares and branded-phrase mentions should become the leading indicators of differentiation within 90 days, ahead of raw follower count.",
    takeaway:
      "In a saturated fitness niche, expertise is table stakes, a recognizable point of view and personality are what actually make someone choose one coach over a hundred others.",
  },
  {
    slug: "olivia-green",
    brand: "OLIVIA GREEN",
    category: "Life & Career Coaching",
    accent: "#5B4B8A",
    tagline: "Positioning a career coach as a strategic partner, not a cheerleader.",
    audience:
      "Ambitious professionals 28–45 at a career crossroads who want strategic, no-fluff guidance rather than generic motivational content.",
    challenge:
      "The account leaned heavily on motivational quote-style content, which drew broad but shallow engagement and attracted followers unlikely to invest in coaching.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "High reach, low-quality Discover traffic, motivational content pulled in a broad audience that rarely progressed past a like, let alone toward Consider.",
    strategy: [
      { title: "Strategic frameworks over quotes", desc: "Replace motivational content with concrete career-strategy frameworks." },
      { title: "Case-study style storytelling", desc: "Show real (anonymized) career pivots as structured before/after strategy stories." },
      { title: "Direct, consultative tone", desc: "Write like a strategist advising a peer, not a cheerleader posting affirmations." },
      { title: "High-value gated resources", desc: "Offer a genuinely useful framework download as the entry point." },
      { title: "Positioning against \"just follow your passion\"", desc: "Contrast the strategic approach with generic career advice." },
    ],
    sampleCaption:
      "\"Follow your passion\" is not a career strategy. Here's the 3-part framework I use with clients to actually evaluate a pivot, before they quit anything. Save this before your next \"should I stay or go\" spiral.",
    contentDirection: [
      "Framework breakdown carousels",
      "Anonymized career pivot case-study posts",
      "\"Bad advice we're retiring\" contrarian series",
      "Free framework resource promotion (recurring, not one-off)",
    ],
    whatIdTest: [
      "Framework content vs. motivational-quote content for saves",
      "Consultative tone vs. warm/casual tone",
      "Case-study posts vs. tips-list posts",
      "Gated resource CTA vs. direct booking CTA",
      "Contrarian hooks vs. affirming hooks",
    ],
    metrics: [
      "Save rate on framework content",
      "Resource download rate",
      "Download-to-call conversion rate",
      "Follower quality (engagement rate vs. raw count)",
    ],
    outlook:
      "Expect total follower growth to slow initially as motivational-only followers churn out, while save rate, download rate, and call bookings rise, a smaller, higher-intent audience within 90 days.",
    takeaway:
      "For a strategist, sounding strategic matters more than sounding inspiring, the right content repels the wrong audience on purpose, which is what makes the right audience convert.",
  },
  {
    slug: "trackflow",
    brand: "TRACKFLOW",
    category: "B2B SaaS",
    accent: "#3D5A80",
    tagline: "Making a project-management tool's socials sound human.",
    audience:
      "Operations leads and team managers at small-to-mid-size companies evaluating lightweight project management tools.",
    challenge:
      "Product-focused, feature-list content generated minimal engagement and did nothing to differentiate Trackflow from larger, better-funded competitors.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Feature-dump content technically covered Learn, but nothing built Trust, no proof the product solved real operational pain, just a list of capabilities.",
    strategy: [
      { title: "Pain-point-first content", desc: "Lead with operational frustrations before introducing the product as the answer." },
      { title: "Customer workflow stories", desc: "Show how real teams actually use Trackflow day to day." },
      { title: "Founder/team voice", desc: "Bring visible humans into a category dominated by faceless SaaS accounts." },
      { title: "Comparison content, done honestly", desc: "Address how Trackflow differs from bigger competitors without disparaging them." },
      { title: "Community proof over feature lists", desc: "Prioritize testimonials and use-case proof over spec sheets." },
    ],
    sampleCaption:
      "Your team doesn't need more project management features. It needs the 4 you'll actually use. Here's how a 12-person ops team cut their status-meeting time in half with Trackflow.",
    contentDirection: [
      "Workflow-story carousels (real customer use cases)",
      "\"Why we built this\" founder-voice posts",
      "Honest comparison content vs. bigger competitors",
      "Short customer testimonial video clips",
    ],
    whatIdTest: [
      "Pain-point hooks vs. feature-led hooks",
      "Founder-voice posts vs. brand-voice posts",
      "Workflow story format vs. feature carousel format",
      "Comparison content vs. pure product content for saves",
      "Video testimonials vs. text testimonials for trust signal",
    ],
    metrics: [
      "Engagement rate vs. B2B SaaS benchmark",
      "Link clicks to product demo",
      "Demo-to-trial conversion rate",
      "Branded/tagged mentions from customers",
    ],
    outlook:
      "As pain-point and story-led content replaces feature dumps, demo clicks should become a more reliable conversion signal than raw engagement, with measurable lift within 90 days.",
    takeaway:
      "Even B2B software is bought by people solving a frustrating problem, content that names the frustration before the feature earns attention that a spec sheet never will.",
  },
  {
    slug: "fincore",
    brand: "FINCORE",
    category: "Financial SaaS",
    accent: "#1F5C4D",
    tagline: "Earning trust in a category built on skepticism.",
    audience:
      "Small business owners and finance leads evaluating financial management software, inherently wary of overclaiming fintech marketing.",
    challenge:
      "Polished, corporate content read as generic and slightly untrustworthy in a category where audiences are primed to be skeptical of financial software claims.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Trust was the clear bottleneck, financial software buyers scrutinize claims closely, and overly polished content read as marketing rather than substance.",
    strategy: [
      { title: "Transparency-first content", desc: "Show real numbers, real limitations, and real use cases rather than blanket claims." },
      { title: "Plain-language finance education", desc: "Demystify financial concepts the audience deals with daily." },
      { title: "Third-party proof", desc: "Prioritize integrations, certifications, and customer results over brand claims." },
      { title: "Founder/CFO-voice credibility", desc: "Use a named finance expert's voice to add authority." },
      { title: "Security and compliance content", desc: "Address trust concerns directly rather than leaving them implicit." },
    ],
    sampleCaption:
      "We're not going to tell you Fincore fixes everything. Here's exactly what it does, what it doesn't, and why 200+ small business owners still switched anyway.",
    contentDirection: [
      "Plain-language finance education carousels",
      "\"What it does / doesn't do\" transparency posts",
      "Customer result case-study posts (real numbers, anonymized where needed)",
      "Security/compliance explainer content",
    ],
    whatIdTest: [
      "Transparency-led content vs. benefit-led content",
      "Named-expert voice vs. brand voice",
      "Real-numbers case studies vs. generalized success claims",
      "Security-focused posts vs. feature-focused posts for trust signal",
      "Educational carousels vs. product-demo videos",
    ],
    metrics: [
      "Trust-signal engagement (saves, shares of educational content)",
      "Demo request rate",
      "Sales-qualified lead rate from social",
      "Content-attributed customer citations in sales calls",
    ],
    outlook:
      "In a skepticism-heavy category, the 90-day marker of success is fewer but higher-quality demo requests, leads who arrive already partly convinced because the content did the trust-building work.",
    takeaway:
      "In financial services, restraint is a trust signal, admitting limitations builds more credibility than claiming to solve everything.",
  },
  {
    slug: "brewhaus-cafe",
    brand: "BREWHAUS CAFÉ",
    category: "Local Business",
    accent: "#B5651D",
    tagline: "Turning a neighborhood café into a local habit.",
    audience:
      "Local residents and remote workers within a few miles of the café, looking for a reliable coffee spot to make part of their routine.",
    challenge:
      "Posts were inconsistent and purely promotional (menu items, hours), with no sense of the café's atmosphere or community, nothing to make it feel like \"my place.\"",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "For a local business, Discover is mostly geographic, the real gap was Trust and Consider: nothing made the café feel familiar before a first visit.",
    strategy: [
      { title: "Atmosphere-first content", desc: "Show the space, the sounds, the regulars, the feeling of being there." },
      { title: "Staff personality content", desc: "Introduce baristas and staff to build the \"regular spot\" feeling online." },
      { title: "Local-community tagging", desc: "Engage with and tag nearby businesses and local accounts consistently." },
      { title: "Simple, recurring content rhythm", desc: "A sustainable weekly rhythm instead of sporadic promotional bursts." },
      { title: "User-generated content invitation", desc: "Actively encourage and reshare customer photos and check-ins." },
    ],
    sampleCaption:
      "Table by the window is free right now (for about ten more minutes, let's be honest). New oat milk cortado's on the board today. See you in a bit? ☕",
    contentDirection: [
      "Weekly \"what's on the board\" Stories",
      "Staff/barista spotlight reels",
      "Local community tag-and-collab posts",
      "UGC reshares with personal, casual captions",
    ],
    whatIdTest: [
      "Casual/personal captions vs. polished brand captions",
      "Staff-featured content vs. product-only content",
      "Story-based daily updates vs. feed-only weekly updates",
      "UGC reshares vs. original content for engagement",
      "Local tagging/collabs vs. solo posting for reach",
    ],
    metrics: [
      "Local reach / local hashtag or tag impressions",
      "Story reply rate",
      "UGC volume (tags and mentions)",
      "In-store mentions of \"saw it on Instagram\"",
    ],
    outlook:
      "For a local business, the 90-day win is qualitative as much as quantitative, a steady rise in UGC and Story replies signals the café has become part of regulars' daily rhythm, not just a page they follow.",
    takeaway:
      "Local businesses don't need viral reach, they need familiarity. Consistent, personal content turns a page into a place people already feel they know.",
  },
  {
    slug: "keller-bloom-realty",
    brand: "KELLER & BLOOM REALTY",
    category: "Real Estate",
    accent: "#8C6A4F",
    tagline: "Selling trust in the agent before the listing.",
    audience:
      "First-time and move-up homebuyers in the local market who are choosing an agent as much as a house.",
    challenge:
      "Content was 90% listing photos with no agent personality or process visible, buyers had no way to evaluate who they'd actually be working with.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Listings alone drove Discover traffic, but nothing at Learn or Trust helped a buyer choose this agent specifically over any other with similar listings.",
    strategy: [
      { title: "Agent-as-guide content", desc: "Show the buying process and the agent's role in it, not just finished listings." },
      { title: "Local market education", desc: "Share genuinely useful local market insight to build authority." },
      { title: "Client journey storytelling", desc: "Tell real client stories from first showing to keys-in-hand." },
      { title: "Personality and process transparency", desc: "Let the agent's voice and approach come through consistently." },
      { title: "Neighborhood spotlight series", desc: "Build hyperlocal authority beyond just listed properties." },
    ],
    sampleCaption:
      "Before this was 'sold,' it was 14 showings, one bidding war, and a client who almost gave up. Here's what actually happened behind this listing, and why we didn't.",
    contentDirection: [
      "Client journey story reels (showing to closing)",
      "Local market update carousels",
      "Neighborhood spotlight posts",
      "Agent process/behind-the-scenes content",
    ],
    whatIdTest: [
      "Process-led content vs. listing-only content",
      "Client story reels vs. property tour reels",
      "Market education posts vs. promotional posts for saves",
      "Agent-voice captions vs. neutral listing captions",
      "Neighborhood content vs. property-only content for local reach",
    ],
    metrics: [
      "DM inquiry rate",
      "Save rate on market education content",
      "Local reach and engagement rate",
      "Referral mentions attributing social content",
    ],
    outlook:
      "As agent-as-guide content builds recognition, expect DM inquiries to shift from \"is this available\" to \"can we talk about buying\", a qualitative sign that trust is building before first contact, over roughly 90 days.",
    takeaway:
      "In real estate, buyers choose an agent before they choose a house, content that shows the person and the process sells trust, which is what actually closes deals.",
  },
  {
    slug: "the-cozy-loft",
    brand: "THE COZY LOFT",
    category: "Handmade Home Décor",
    accent: "#D8A48F",
    tagline: "Turning craft process into the product's best marketing.",
    audience:
      "Home décor shoppers 25–45 who value handmade, slow-made goods and are willing to pay more for authenticity and story.",
    challenge:
      "Product photos alone couldn't compete on price with mass-produced décor, the handmade value and story behind each piece weren't visible anywhere.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Without visible process and story, the brand was implicitly asking to be judged on price alone against mass manufacturers, a fight it can't win.",
    strategy: [
      { title: "Process-as-content", desc: "Show the making of each piece as the primary content, not an occasional behind-the-scenes extra." },
      { title: "Maker's-voice storytelling", desc: "Let the maker narrate the why behind materials and design choices." },
      { title: "Time and craft transparency", desc: "Make the hours and skill behind each piece visible to justify price." },
      { title: "Customer home features", desc: "Show pieces styled in real customers' homes for aspirational proof." },
      { title: "Small-batch/limited framing", desc: "Use honest scarcity (genuinely limited runs) rather than manufactured urgency." },
    ],
    sampleCaption:
      "Six hours, one piece, zero shortcuts. This bowl started as a lump of clay on Tuesday, here's the whole process, start to finish. Only 4 left in this glaze.",
    contentDirection: [
      "Process/making-of reels (start to finish)",
      "Maker's-voice storytelling captions",
      "Customer home feature reshares",
      "Small-batch drop announcement content",
    ],
    whatIdTest: [
      "Process reels vs. finished-product photos for saves",
      "Maker-voice captions vs. product-description captions",
      "Customer home features vs. studio-only photography",
      "Honest scarcity messaging vs. no urgency messaging",
      "Time/craft-transparency posts vs. price-focused posts",
    ],
    metrics: [
      "Save rate on process content",
      "Website click-through rate",
      "Drop sell-through rate",
      "Average order value trend",
    ],
    outlook:
      "As process content builds perceived value, expect average order value and sell-through on limited drops to rise over 90 days, even without price competition against mass retailers.",
    takeaway:
      "Handmade goods aren't sold on the finished product alone, showing the labor and intention behind each piece is what justifies the price and builds a collector mindset.",
  },
  {
    slug: "writewell-academy",
    brand: "WRITEWELL ACADEMY",
    category: "Online Education",
    accent: "#7A2E38",
    tagline: "Proving results before asking for enrollment.",
    audience:
      "Aspiring and early-career writers considering an online writing course, wary of overpromising \"get published fast\" programs.",
    challenge:
      "Course-promotional content dominated the feed with little genuine teaching value, making it hard to distinguish from lower-quality \"course-seller\" accounts.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Promotion-heavy content actively hurt Trust in a category full of overhyped courses, the audience needed proof of teaching quality before ever considering enrollment.",
    strategy: [
      { title: "Teach in public", desc: "Give away genuinely useful writing instruction for free, consistently." },
      { title: "Student results as proof", desc: "Feature real student work and outcomes over instructor claims." },
      { title: "Instructor credibility content", desc: "Show the instructor's own writing credentials and process." },
      { title: "Curriculum transparency", desc: "Show exactly what's taught, removing mystery-box course anxiety." },
      { title: "Community visibility", desc: "Highlight the student community as part of the value, not just the content." },
    ],
    sampleCaption:
      "Here's the exact 3-sentence structure I teach in Week 2 that got one student her first paid byline. Free breakdown below, no course pitch, just the framework.",
    contentDirection: [
      "Free teaching carousels (real curriculum excerpts)",
      "Student result/byline spotlight posts",
      "Instructor credibility and process content",
      "\"What's actually in the course\" transparency posts",
    ],
    whatIdTest: [
      "Free-teaching content vs. course-promotional content for saves",
      "Student-result posts vs. instructor-only posts for trust",
      "Curriculum-transparency posts vs. vague \"transform your writing\" posts",
      "Carousel teaching vs. video teaching for completion/saves",
      "Community-highlight content vs. course-only content",
    ],
    metrics: [
      "Save rate on free teaching content",
      "Waitlist/enrollment page click rate",
      "Free-content-to-enrollment conversion rate",
      "Student-generated content volume",
    ],
    outlook:
      "As free teaching content builds a reputation for genuine value, expect enrollment conversion rate (not just traffic) to improve over 90 days, as prospective students arrive pre-convinced of teaching quality.",
    takeaway:
      "In a category full of overpromising courses, genuinely teaching for free is the strongest sales pitch, it proves quality instead of just claiming it.",
  },
  {
    slug: "shecodesbetter",
    brand: "SHECODESBETTER",
    category: "Online Coding Community",
    accent: "#7C3AED",
    tagline: "Building a community brand people want to belong to, not just follow.",
    audience:
      "Women beginning or transitioning into tech careers, seeking community and encouragement alongside technical skill-building.",
    challenge:
      "Content focused heavily on technical tips, which is useful but replicable, nothing made the community itself feel like a distinct, valuable reason to join.",
    diagnosisJourney: ["Discover", "Learn", "Trust", "Consider", "Purchase"],
    diagnosisNote:
      "Learn-stage content was strong, but Consider stalled: technical tips alone don't communicate what it feels like to belong to this specific community versus any other coding resource.",
    strategy: [
      { title: "Member-voice content", desc: "Let real community members' voices and journeys lead the content, not just admin posts." },
      { title: "Belonging-focused storytelling", desc: "Show the community experience, support, wins, camaraderie, not just the curriculum." },
      { title: "Beginner-safe framing", desc: "Explicitly reduce intimidation for those just starting out." },
      { title: "Win-celebration content", desc: "Publicly celebrate member milestones, from first commit to first job offer." },
      { title: "Consistent, warm brand voice", desc: "Maintain an encouraging, non-gatekeeping tone across all content." },
    ],
    sampleCaption:
      "Six months ago she'd never written a line of code. Today she accepted her first junior dev offer. This is why we built SheCodesBetter, not just to teach code, but to make sure no one does it alone. 💜",
    contentDirection: [
      "Member spotlight/milestone reels",
      "\"A day in the community\" behind-the-scenes content",
      "Beginner-friendly technical tip carousels",
      "Member-voice takeover Stories",
    ],
    whatIdTest: [
      "Member-story content vs. technical-tip-only content for follows",
      "Milestone-celebration posts vs. curriculum-announcement posts",
      "Member-voice captions vs. brand-voice captions",
      "Beginner-safe framing vs. skill-level-neutral framing",
      "Community behind-the-scenes content vs. polished-only content",
    ],
    metrics: [
      "Community/membership sign-up rate",
      "Member-generated content volume",
      "Comment sentiment on milestone posts",
      "Referral rate (existing members inviting others)",
    ],
    outlook:
      "As belonging-focused content builds momentum, member referrals should become a growing share of new sign-ups over 90 days, a sign the community itself, not just the curriculum, is driving growth.",
    takeaway:
      "For a community brand, the product isn't just the content, it's the feeling of belonging that content makes visible. Showing that feeling is what turns followers into members.",
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
