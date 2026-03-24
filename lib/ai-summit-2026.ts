export const EVENT_DATE = "April 5, 2026";
export const VENUE = "Plaza Hotel, Lalitpur";
export const EXPECTED_ATTENDEES = "250+";

export const TICKET_TIERS = [
  { id: "student", name: "Student Pass", price: "NPR 2,500", desc: "Valid student ID required", highlight: true },
  { id: "general", name: "General Pass", price: "NPR 5,000", desc: "Full access" },
] as const;

export const ITINERARY = [
  { time: "10:00 am – 11:00 am", title: "Registration & Tea/Coffee" },
  {
    time: "11:00 am – 11:55 am",
    title: "Inaugural Session",
    details: [
      "Welcome Address: Dr. Sudeep Rauniar, Founder—The Startup Network (Nepal)",
      "Guests of Honour: Mr. Shekhar Golchha, Mr. Anukool Bhatnagar, Mr. Scott Urbam, Mr. Mike Harker, Mr. Anand Jha",
      "Chief Guest & Keynote: Hon'ble Minister of Communication and Information Technology, Government of Nepal",
    ],
  },
  { time: "11:55 am – 12:00 pm", title: "Felicitations & Group Photograph" },
  {
    time: "12:00 pm – 01:00 pm",
    title: "Panel Discussion I: AI & Compute Infrastructure",
    details: [
      "Keynote: Ms. Samhita Shah, Global Head for Marketing, Energy and Utilities, Amazon Web Services",
      "Panelists: Mr. Dileep Agrawal, Mr. Alok Khatri, Mr. Gangaman Maharjan",
      "Moderator: Ms. Ruchi Pandey, Founder, Areta Public Relations",
    ],
  },
  { time: "01:00 pm – 01:05 pm", title: "Felicitations & Group Photograph" },
  {
    time: "01:05 pm – 02:05 pm",
    title: "Panel Discussion II: AI & Society",
    details: [
      "Keynote: Karan Chaudhary, Managing Director, CG Holdings",
      "Panelists: Mr. Asish Thakur, Mr. Mahesh Swar, Mr. Gagan Thapa, Mr. Sandeep Kamat",
      "Moderator: Dr. Sudeep Rauniar, Founder, The Startup Network Nepal",
    ],
  },
  { time: "02:05 pm – 02:10 pm", title: "Felicitations & Group Photograph" },
  { time: "02:10 pm – 03:10 pm", title: "Lunch" },
  {
    time: "03:10 pm – 04:10 pm",
    title: "Panel Discussion III: AI & the New Economy",
    details: [
      "Keynote: Mr. Atul K Thakur, Senior Secretary, PHDCCI",
      "Panelists: Mr. Birendra Raj Pandey, Mr. Kanishka Das Gupta, Mr. Swarnim Wagle",
      "Moderator: Ms. Purnima Karki, Law Activist",
    ],
  },
  { time: "04:10 pm – 04:15 pm", title: "Felicitations & Group Photograph" },
  {
    time: "04:15 pm – 05:15 pm",
    title: "Panel Discussion IV: AI in Energy & Finance",
    details: [
      "Keynote: Mr. Shailendra Raj Giri, President, AI Association Nepal",
      "Panelists: Suman Pokharel, Mr. Hitendra Dev Shakya, Mr. Deepak Rauniar",
      "Moderator: Mr. Dil Bhusan Pathak, Senior Journalist",
    ],
  },
  { time: "05:15 pm – 05:20 pm", title: "Felicitations & Group Photograph" },
  { time: "05:20 pm onwards", title: "Closing & Felicitations" },
];
