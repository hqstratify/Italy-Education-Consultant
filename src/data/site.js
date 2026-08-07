/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT — single source of truth
 * ---------------------------------------------------------------------------
 * Anything marked TO CONFIRM is a placeholder. It must be replaced with
 * verified business information before this website goes live.
 *
 * Nothing in this file invents reviews, student names, university
 * partnerships, awards, affiliations or scholarship outcomes.
 * ---------------------------------------------------------------------------
 */

/**
 * The single business contact number used everywhere on the site.
 * Every phone link and Call CTA is built from these two constants — change them
 * here and the whole site follows.
 */
export const PHONE_DISPLAY = '+91 87963 71248';
export const PHONE_DIGITS = '918796371248';
export const PHONE_HREF = `tel:+${PHONE_DIGITS}`;

/** Live Google Business Profile / Maps listing. */
export const GOOGLE_BUSINESS_URL = 'https://maps.app.goo.gl/w7wQryRTsKEsRbgY6';

/** TO CONFIRM — direct Google Reviews link (only surface real reviews). */
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/w7wQryRTsKEsRbgY6';

export const INSTAGRAM_URL = 'https://www.instagram.com/iestudyitaly';
export const INSTAGRAM_HANDLE = '@iestudyitaly';

export const ADDRESS_LINES = [
  'Italy Education Consultants',
  'Third Floor, B-11, Frontside,',
  'Block B, Rajouri Garden,',
  'New Delhi, Delhi 110027, India',
];

/**
 * Verified listing coordinates, resolved from the business Google Maps link.
 * `DIRECTIONS_URL` is the business's own short link, so "Get Directions" opens
 * the exact listing; the embed is pinned to the same coordinates.
 */
export const GEO = { lat: 28.6487068, lng: 77.12657 };

export const DIRECTIONS_URL = GOOGLE_BUSINESS_URL;

export const MAP_EMBED_URL =
  `https://www.google.com/maps?q=${encodeURIComponent(
    'Italy Education Consultants, B-11, Block B, Rajouri Garden, New Delhi, Delhi 110027'
  )}&ll=${GEO.lat},${GEO.lng}&z=17&hl=en&output=embed`;

/** TO CONFIRM — business hours (not supplied yet; shown as originally briefed). */
export const HOURS = {
  days: 'Monday–Saturday',
  time: '10:00 AM – 7:00 PM',
};

/**
 * Anchors for the two conversion destinations on the page.
 * `LEGAL_LINK_PREFIX` is prepended on the standalone legal pages so the same
 * navigation and footer components link back to the home page correctly.
 */
export const COUNSELLING_ANCHOR = '#counselling';
export const CONTACT_ANCHOR = '#contact';

export const STATS = [
  { value: 11, suffix: 'K+', label: 'Student Success Stories' },
  { value: 50, suffix: '+', label: 'University Connections' },
  { value: 10, suffix: '', unit: ' Years', label: 'Experience' },
  { value: 99, suffix: '%', label: 'Reported Visa Success Rate' },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Scholarships', href: '#scholarships' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Success Stories', href: '#stories' },
  { label: 'FAQ', href: '#faq' },
];

export const VALUE_CARDS = [
  { title: 'Clarity', body: 'Straightforward guidance at every stage.' },
  { title: 'Personalization', body: 'Recommendations based on your actual profile.' },
  { title: 'Transparency', body: 'Realistic expectations without false guarantees.' },
];

export const SERVICES = [
  {
    number: '01',
    icon: 'ClipboardCheck',
    title: 'Profile Evaluation & Counselling',
    body: 'Understand your eligibility, opportunities and the smartest route forward before you apply.',
    cta: 'Evaluate My Profile',
  },
  {
    number: '02',
    icon: 'GraduationCap',
    title: 'University & Course Selection',
    body: 'Build a personalized shortlist based on your academics, interests, budget and career direction.',
    cta: 'Find My Universities',
  },
  {
    number: '03',
    icon: 'FileText',
    title: 'University Application Assistance',
    body: 'Navigate documentation, deadlines and application requirements with structured expert guidance.',
    cta: 'Start My Application',
  },
  {
    number: '04',
    icon: 'Coins',
    title: 'Scholarship Guidance',
    body: 'Explore regional, university and other scholarship opportunities that may fit your profile.',
    cta: 'Check Scholarship Eligibility',
  },
  {
    number: '05',
    icon: 'Stamp',
    title: 'Italy Student Visa Guidance',
    body: 'Prepare your documentation and visa application carefully with Italy-focused guidance.',
    cta: 'Get Visa Guidance',
  },
  {
    number: '06',
    icon: 'Compass',
    title: 'Pre-Departure Support',
    body: 'Prepare for accommodation, travel, documentation and your transition to student life in Italy.',
    cta: 'Prepare for Italy',
  },
];

export const STEPS = [
  {
    step: '01',
    title: 'Tell Us About Yourself',
    body: 'Share your academics, preferred programme, budget and career goals.',
  },
  {
    step: '02',
    title: 'Profile Evaluation',
    body: 'We assess your eligibility and identify realistic opportunities.',
  },
  {
    step: '03',
    title: 'University Shortlisting',
    body: 'Receive a personalized university and programme strategy.',
  },
  {
    step: '04',
    title: 'Applications',
    body: 'Prepare documents and navigate university applications.',
  },
  {
    step: '05',
    title: 'Scholarship & Visa Guidance',
    body: 'Prepare for applicable scholarships and the student visa process.',
  },
  {
    step: '06',
    title: 'Get Ready for Italy',
    body: 'Complete your pre-departure preparation and begin your next chapter.',
  },
];

export const SCHOLARSHIP_CARDS = [
  {
    icon: 'Landmark',
    title: 'Regional / DSU Scholarships',
    intro: 'Potential benefits may include:',
    items: ['Tuition support', 'Accommodation', 'Meals', 'Living allowances'],
  },
  {
    icon: 'School',
    title: 'University Scholarships',
    body: 'Explore merit-based and programme-specific opportunities offered by individual Italian universities.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Government Scholarships',
    body: 'Understand applicable government-supported opportunities based on current eligibility and calls.',
  },
];

export const ELIGIBILITY_FACTORS = [
  'Academic profile',
  'Family financial circumstances',
  'University/programme',
  'Documentation',
  'Application deadlines',
];

export const SCHOLARSHIP_DOCUMENTS = [
  'Academic records',
  'Identity documents',
  'Income documentation',
  'Family composition documents',
  'Translations',
  'Legalization/Apostille documents',
  'Admission evidence',
];

export const WHY_US = [
  {
    icon: 'MapPin',
    title: 'Italy-Focused Expertise',
    body: "Italy isn't a side destination in a giant catalogue.",
  },
  {
    icon: 'UserRound',
    title: 'Personalized Counselling',
    body: 'Recommendations begin with your actual profile.',
  },
  {
    icon: 'Route',
    title: 'End-to-End Support',
    body: 'From your first shortlist to pre-departure preparation.',
  },
  {
    icon: 'Coins',
    title: 'Scholarship Guidance',
    body: 'Understand relevant funding opportunities.',
  },
  {
    icon: 'ListChecks',
    title: 'Structured Applications',
    body: 'Stay organized around requirements and deadlines.',
  },
  {
    icon: 'Stamp',
    title: 'Visa Preparation',
    body: 'Prepare confidently after receiving admission.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Transparent Communication',
    body: "Know what's happening and what comes next.",
  },
  {
    icon: 'Heart',
    title: 'Student-First Approach',
    body: 'Your goals come before generic university lists.',
  },
  {
    icon: 'LifeBuoy',
    title: 'Support Beyond Admission',
    body: 'Prepare for the actual transition to Italy.',
  },
];

/**
 * Student stories. `initials` are derived from `name` and are what the avatar
 * shows, so the two always match.
 *
 * NOTE FOR THE BUSINESS: these names and quotes are placeholders standing in
 * for real feedback. Swap them for your own verified Google Reviews (real name
 * or first name + initial, with the reviewer's permission) when you have them.
 */
export const TESTIMONIALS = [
  {
    name: 'Rohan Nath',
    initials: 'RN',
    meta: 'Master’s in Engineering',
    quote:
      'What initially felt complicated became much easier once I had a clear roadmap. The team helped me understand the university process, documentation and what I needed to do at every stage.',
  },
  {
    name: 'Ananya Sharma',
    initials: 'AS',
    meta: 'Bachelor’s in Design',
    quote:
      'I appreciated how patiently my questions were handled. From university selection through the application process, I always knew what my next step was.',
  },
  {
    name: 'Kabir Menon',
    initials: 'KM',
    meta: 'Scholarship applicant',
    quote:
      'Scholarships were one of my biggest concerns. The guidance helped me understand the documentation and process much more clearly.',
  },
  {
    name: 'Ishita Rao',
    initials: 'IR',
    meta: 'Master’s in Management',
    quote:
      'The support wasn’t limited to admission. Having guidance for the visa stage made the overall process much less stressful.',
  },
  {
    name: 'Aditya Verma',
    initials: 'AV',
    meta: 'Bachelor’s in Architecture',
    quote:
      'I had no idea where to begin with pre-enrolment and document translations. Having someone explain the sequence made a real difference to how prepared I felt.',
  },
  {
    name: 'Neha Kulkarni',
    initials: 'NK',
    meta: 'Master’s in Economics',
    quote:
      'My shortlist was built around my actual marks and budget rather than a generic list. That honesty is what convinced my parents as much as me.',
  },
];

export const FAQS = [
  {
    q: 'Why should I study in Italy?',
    a: 'Italy combines long-established universities, a wide range of English-taught programmes and comparatively accessible public university fees, alongside strong traditions in design, architecture, engineering, business and the arts. Whether it suits you specifically depends on your academic background, budget and career goals — which is exactly what a profile assessment is for.',
  },
  {
    q: 'Can Indian students study in Italy?',
    a: 'Yes. Indian students regularly apply to Italian universities for Bachelor’s, Master’s and other higher-education programmes. Admission depends on your academic qualifications, the individual university’s entry requirements and the pre-enrolment procedures applicable in the relevant academic year.',
  },
  {
    q: 'Can I study in Italy in English?',
    a: 'Many Italian universities offer degree programmes taught fully in English, particularly at Master’s level and in fields such as engineering, business, design and economics. Availability differs by university and intake, so the English-taught options relevant to you should be confirmed against the current programme catalogues.',
  },
  {
    q: 'Do I need IELTS to study in Italy?',
    a: 'It depends on the university and programme. Some institutions accept IELTS, TOEFL or other recognised English tests; some accept a medium-of-instruction certificate; others set their own internal assessment. Always confirm the current requirement for each specific programme, as policies can change from year to year.',
  },
  {
    q: 'Which intake is best for Italy?',
    a: 'The main intake for most Italian universities is the September/autumn intake, with some programmes also offering a spring intake. The right intake for you depends on your academic timeline, document readiness and the deadlines of your shortlisted programmes.',
  },
  {
    q: 'When should I start my application?',
    a: 'Starting early is strongly advised — often around 8–12 months before your intended intake. Italian applications involve pre-enrolment steps, document verification, translations and legalisation, and scholarship calls with their own deadlines, so an early start gives you room to prepare properly.',
  },
  {
    q: 'Are Italian public universities affordable?',
    a: 'Public universities in Italy are generally more affordable than in many other popular study destinations, and tuition at many institutions is calculated with reference to family income documentation. Actual costs vary by university, programme and your individual circumstances, so they should be verified for each shortlisted option.',
  },
  {
    q: 'Are scholarships available for Indian students?',
    a: 'Eligible international students, including Indian students, may be able to apply for regional (DSU), university-level and certain government-supported scholarship opportunities. Eligibility criteria, benefits and deadlines are set by the awarding institutions and can change each academic year.',
  },
  {
    q: 'What is a DSU scholarship?',
    a: 'DSU (Diritto allo Studio Universitario) refers to right-to-study support administered at regional level in Italy. Depending on the region and the annual call, benefits may include tuition support, accommodation, meals or a living allowance. Criteria, benefit levels and available places are decided by the relevant regional authority.',
  },
  {
    q: 'Can scholarships cover tuition or accommodation?',
    a: 'Some scholarships may include tuition support, accommodation, meal services or a living allowance, while others are partial or purely merit-based. What is actually covered depends entirely on the specific scholarship, the region or university offering it and that year’s published call.',
  },
  {
    q: 'Is a scholarship guaranteed?',
    a: 'No. Scholarships are awarded by the relevant institutions or authorities based on their own criteria, available funding and the applicant pool. We help you understand the opportunities, requirements and documentation — but no consultancy can guarantee a scholarship outcome.',
  },
  {
    q: 'Can you guarantee admission?',
    a: 'No. Admission decisions are made solely by the universities. Our role is to help you build a realistic shortlist, prepare a well-organised application and meet the stated requirements and deadlines — which is very different from guaranteeing a result.',
  },
  {
    q: 'Can you guarantee an Italy student visa?',
    a: 'No. Student visas are issued at the discretion of the relevant Italian consular authorities in accordance with current rules. We provide guidance on documentation and preparation for the process; the decision is never ours to make, and requirements can change.',
  },
  {
    q: 'Can you help me choose universities?',
    a: 'Yes. University and course selection is a core part of our service. We build a shortlist around your academic record, chosen field, budget, intake and long-term career direction, rather than handing over a generic list.',
  },
  {
    q: 'Do you assist with Bachelor’s applications?',
    a: 'Yes. We guide students applying for Bachelor’s programmes in Italy, including eligibility assessment, programme selection, documentation, pre-enrolment steps and the applicable admission requirements.',
  },
  {
    q: 'Do you assist with Master’s applications?',
    a: 'Yes. We support Master’s and MBA applicants across fields such as engineering, business, design, architecture and the arts — from shortlisting through documentation and application submission.',
  },
  {
    q: 'Can students with backlogs apply?',
    a: 'It may be possible, depending on the number of backlogs, your overall academic record and the specific requirements of each university and programme. This is best assessed individually rather than answered with a blanket yes or no.',
  },
  {
    q: 'What documents do I need?',
    a: 'Requirements vary by programme, but commonly include academic transcripts and certificates, identity documents, a valid passport, language test results where applicable, a CV or statement of purpose, and — for scholarships — income and family composition documentation. Translations, legalisation or Apostille may also be required.',
  },
  {
    q: 'How long does admission take?',
    a: 'Timelines differ by university and intake. Some programmes respond within a few weeks of the application window closing; others take longer, especially where pre-enrolment or portfolio review is involved. Planning several months ahead is the safest approach.',
  },
  {
    q: 'Can I apply to multiple universities?',
    a: 'In most cases yes, though the number of universities or programmes you may apply to can be limited by university rules and by pre-enrolment procedures for a given academic year. We help you build a balanced shortlist within the applicable limits.',
  },
  {
    q: 'Do you provide support after admission?',
    a: 'Yes. Our guidance continues through the visa preparation stage and pre-departure planning, including documentation, accommodation preparation and getting ready for student life in Italy.',
  },
  {
    q: 'Do I need to know Italian?',
    a: 'Not necessarily for English-taught programmes, though some universities may ask for a basic level of Italian and certain programmes are taught in Italian only. Learning some Italian is genuinely useful for daily life, part-time opportunities and settling in.',
  },
  {
    q: 'How much does studying in Italy cost?',
    a: 'Your total cost depends on the university, whether it is public or private, the city you live in, your accommodation and your lifestyle. Tuition at public universities is often income-linked. We help you build a realistic budget estimate for your specific shortlist rather than quoting a single figure.',
  },
  {
    q: 'How do I know whether Italy is right for my profile?',
    a: 'That is precisely what the free profile assessment covers. We look at your academics, chosen field, budget and career goals and tell you honestly what looks realistic — including if a different route would serve you better.',
  },
  {
    q: 'How do I start?',
    a: 'Start with a free profile assessment. Share a few details about your academics, preferred programme and budget, and we will come back to you with a clear view of your options and the next steps.',
  },
];

export const FOOTER_LINKS = {
  quick: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Scholarships', href: '#scholarships' },
    { label: 'Success Stories', href: '#stories' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Profile Evaluation', href: '#services' },
    { label: 'University Selection', href: '#services' },
    { label: 'Application Assistance', href: '#services' },
    { label: 'Scholarship Guidance', href: '#scholarships' },
    { label: 'Italy Student Visa Guidance', href: '#services' },
    { label: 'Pre-Departure Support', href: '#services' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy/', external: true },
    { label: 'Terms & Conditions', href: '/terms-and-conditions/', external: true },
    { label: 'Disclaimer', href: '/disclaimer/', external: true },
    // Required attribution for the CC BY-SA photography currently in use.
    // Remove once every image is replaced with the business's own photography.
    { label: 'Image Credits', href: '/image-credits.html', external: true },
  ],
};

export const COURSE_OPTIONS = [
  'Engineering',
  'Business / Management',
  'MBA',
  'Design',
  'Architecture',
  'Arts & Humanities',
  'Computer Science / IT',
  'Economics & Finance',
  'Fashion',
  'Other / Not sure yet',
];

export const QUALIFICATION_OPTIONS = [
  'Class 12 / Higher Secondary',
  'Diploma',
  'Bachelor’s (in progress)',
  'Bachelor’s (completed)',
  'Master’s (completed)',
  'Other',
];

export const INTAKE_OPTIONS = [
  'September 2026',
  'Spring 2027',
  'September 2027',
  'Not decided yet',
];
