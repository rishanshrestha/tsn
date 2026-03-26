export const EVENT_DATE = "April 5, 2026";
export const VENUE = "Plaza Hotel, Lalitpur";
export const EXPECTED_ATTENDEES = "250+";

export const SUMMIT_THEMES = [
  "Technology",
  "Economy",
  "Social-Policies",
  "Development",
] as const;

export const SUMMIT_SPEAKERS = [
  {
    name: "Dr. Sudeep Rauniar",
    designation: "Founder",
    organization: "The Startup Network Nepal",
    focus: "Summit Vision & Innovation Leadership",
  },
  {
    name: "Ms. Samhita Shah",
    designation: "Global Head for Marketing, Energy and Utilities",
    organization: "Amazon Web Services",
    focus: "AI & Compute Infrastructure",
  },
  {
    name: "Karan Chaudhary",
    designation: "Managing Director",
    organization: "CG Holdings",
    focus: "AI & Society",
  },
  {
    name: "Mr. Atul K Thakur",
    designation: "Senior Secretary",
    organization: "PHDCCI",
    focus: "AI & the New Economy",
  },
  {
    name: "Mr. Shailendra Raj Giri",
    designation: "President",
    organization: "AI Association Nepal",
    focus: "AI in Energy & Finance",
  },
] as const;

export const SUMMIT_MODERATORS = [
  {
    name: "Ms. Ruchi Pandey",
    designation: "Founder",
    organization: "Areta Public Relations",
    session: "AI & Compute Infrastructure",
  },
  {
    name: "Dr. Sudeep Rauniar",
    designation: "Founder",
    organization: "The Startup Network Nepal",
    session: "AI & Society",
  },
  {
    name: "Ms. Purnima Karki",
    designation: "Law Activist",
    organization: "Public Policy Community",
    session: "AI & the New Economy",
  },
  {
    name: "Mr. Dil Bhusan Pathak",
    designation: "Senior Journalist",
    organization: "Media & Public Affairs",
    session: "AI in Energy & Finance",
  },
] as const;

export const TICKET_TIERS = [
  { id: "student", name: "Student Pass", price: "NPR 2,500", desc: "Valid student ID required", highlight: true },
  { id: "general", name: "General Pass", price: "NPR 5,000", desc: "Full access" },
] as const;

export const ITINERARY = [
  {
    time: "10:00 am – 11:00 am",
    head: "Arrival",
    topic: "Registration & Tea/Coffee",
  },
  {
    time: "11:00 am – 11:55 am",
    head: "Inaugural Session",
    topic: "Opening Vision: AI Revolution in the Context of Nepal",
    speaker: "Chief Guest: Hon'ble Minister of Communication and Information Technology, Government of Nepal",
    moderator: "Host: Dr. Sudeep Rauniar, Founder, The Startup Network Nepal",
    details: [
      "Welcome Address: Dr. Sudeep Rauniar, Founder—The Startup Network (Nepal)",
      "Guests of Honour: Mr. Shekhar Golchha, Mr. Anukool Bhatnagar, Mr. Scott Urbam, Mr. Mike Harker, Mr. Anand Jha",
    ],
  },
  {
    time: "11:55 am – 12:00 pm",
    head: "Ceremony",
    topic: "Felicitations & Group Photograph",
  },
  {
    time: "12:00 pm – 01:00 pm",
    head: "Panel Discussion I",
    topic: "AI & Compute Infrastructure",
    speaker: "Keynote: Ms. Samhita Shah, AWS",
    moderator: "Ms. Ruchi Pandey, Founder, Areta Public Relations",
    details: [
      "Panelists: Mr. Dileep Agrawal, Mr. Alok Khatri, Mr. Gangaman Maharjan",
    ],
  },
  {
    time: "01:00 pm – 01:05 pm",
    head: "Ceremony",
    topic: "Felicitations & Group Photograph",
  },
  {
    time: "01:05 pm – 02:05 pm",
    head: "Panel Discussion II",
    topic: "AI & Society",
    speaker: "Keynote: Karan Chaudhary, Managing Director, CG Holdings",
    moderator: "Dr. Sudeep Rauniar, Founder, The Startup Network Nepal",
    details: [
      "Panelists: Mr. Asish Thakur, Mr. Mahesh Swar, Mr. Gagan Thapa, Mr. Sandeep Kamat",
    ],
  },
  {
    time: "02:05 pm – 02:10 pm",
    head: "Ceremony",
    topic: "Felicitations & Group Photograph",
  },
  {
    time: "02:10 pm – 03:10 pm",
    head: "Networking Break",
    topic: "Lunch & Strategic Networking",
  },
  {
    time: "03:10 pm – 04:10 pm",
    head: "Panel Discussion III",
    topic: "AI & the New Economy",
    speaker: "Keynote: Mr. Atul K Thakur, Senior Secretary, PHDCCI",
    moderator: "Ms. Purnima Karki, Law Activist",
    details: [
      "Panelists: Mr. Birendra Raj Pandey, Mr. Kanishka Das Gupta, Mr. Swarnim Wagle",
    ],
  },
  {
    time: "04:10 pm – 04:15 pm",
    head: "Ceremony",
    topic: "Felicitations & Group Photograph",
  },
  {
    time: "04:15 pm – 05:15 pm",
    head: "Panel Discussion IV",
    topic: "AI in Energy & Finance",
    speaker: "Keynote: Mr. Shailendra Raj Giri, President, AI Association Nepal",
    moderator: "Mr. Dil Bhusan Pathak, Senior Journalist",
    details: [
      "Panelists: Suman Pokharel, Mr. Hitendra Dev Shakya, Mr. Deepak Rauniar",
    ],
  },
  {
    time: "05:15 pm – 05:20 pm",
    head: "Ceremony",
    topic: "Felicitations & Group Photograph",
  },
  {
    time: "05:20 pm onwards",
    head: "Closing Session",
    topic: "Closing Note & Final Felicitations",
  },
];
