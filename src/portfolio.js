/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Duong Nguyen",
  title: "Hi all, I'm Duong (Dan) Nguyen",
  subTitle: emoji(
    "An experienced and passionate iOS Developer 🚀 Having experience of building mobile applications with languages and tools include Swift / Objective-C / Core Data / Firebase / Jenkins / Java / SQLite / React Native"
  ),
  resumeLink:
    "https://drive.google.com/file/d/192SR7bC6WgXjov_tEPxumyK7q98ndY-Y/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/duongntb94",
  linkedin: "https://www.linkedin.com/in/duongntb94/",
  gmail: "duongntb94@gmail.com",
  facebook: "https://www.facebook.com/duong.nntb",
  medium: "https://medium.com/@/@duongntb94",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Creating, programming, testing, deploying and maintaining iOS/iPadOS applications",
  skills: [
    emoji(
      "⚡ Implemented and deployed cross-platform mobile applications built in iOS/iPadOS platforms"
    ),
    emoji(
      "⚡ Reviewed client requirements, wireframes, and designs for technical feasibility"
    ),
    emoji(
      "⚡ Ensured quality and performance of application by performing unit and automation tests"
    ),
    emoji(
      "⚡ Continuous Integration / Continuous Delivery with Jenkins, Bitrise and more"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "XCode",
      icon: require("./assets/images/skills/xcode.png"),
      url: "https://developer.apple.com/xcode/"
    },
    {
      skillName: "Swift",
      icon: require("./assets/images/skills/swift.png"),
      url: "https://developer.apple.com/swift/"
    },
    {
      skillName: "SwiftUI",
      icon: require("./assets/images/skills/swiftui.png"),
      url: "https://developer.apple.com/xcode/swiftui/"
    },
    {
      skillName: "React Native",
      icon: require("./assets/images/skills/react-native.png"),
      url: "https://reactnative.dev/"
    },
    {
      skillName: "TypeScript",
      icon: require("./assets/images/skills/typescript.png"),
      url: "https://www.typescriptlang.org/"
    },
    {
      skillName: "Javascript",
      icon: require("./assets/images/skills/javascript.png"),
      url: "https://www.javascript.com/"
    },
    {
      skillName: "Firebase",
      icon: require("./assets/images/skills/firebase.png"),
      url: "https://firebase.google.com/"
    },
    {
      skillName: "Jenkins",
      icon: require("./assets/images/skills/jenkins.png"),
      url: "https://www.jenkins.io/",
      height: 60,
      width: "auto"
    },
    {
      skillName: "Bitrise",
      icon: require("./assets/images/skills/bitrise.png"),
      url: "https://www.bitrise.io/",
      height: 60,
      width: "auto"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Maharashi International University - Fairfield, IA, United States",
      logo: require("./assets/images/universities/maharashi.jpeg"),
      subHeader: "Master degree of Computer Science",
      duration: "May 2021 - December 2023",
      desc: "",
      descBullets: [
        "Modern Programming Practices",
        "Software Engineering",
        "Machine Learning",
        "Enterprise Architect",
        "Big Data",
        "Big Data Technologies"
      ]
    },
    {
      schoolName:
        "HCMC University of Technology and Education - Ho Chi Minh City, Vietnam",
      logo: require("./assets/images/universities/hcmute.png"),
      subHeader: "Bachelor degree of Information Technology",
      duration: "September 2012 - July 2016",
      desc: "",
      descBullets: [
        "Computer Science",
        "Data Structure and Algorithms",
        "Databases Systems",
        "Web Development",
        "Object Oriented Programming",
        "Artificial Intelligence",
        "Information Security"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "iOS App Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "React Native App Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Android App Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Mobile Developer",
      company: "ITADS",
      url: "https://itads.net/",
      companylogo: require("./assets/images/companies/itads.png"),
      date: "Oct 2019 – April 2021",
      desc: "Developed, launched, and maintained an enterprise mobile application which serves marketing purposes for more than 2,000 Isuzu and Mitsubishi care salespeople in Thailand",
      descBullets: [
        "Implemented and deployed cross-platform mobile applications built in React Native",
        "Reviewed client requirements, wireframes, and designs for technical feasibility",
        "Ensured quality and performance of application by performing unit and automation tests",
        "Reduced deployment time by 95% using FastLane and Jenkins to automate deployment to Apple Store Connect and Google Play Store",
        "Explored new technologies and shared knowledge such as Machine Learning (Core ML) and automation deployment with the development team"
      ]
    },
    {
      role: "Mobile Developer",
      company: "The App Team",
      url: "https://www.theappteam.com.au/",
      companylogo: require("./assets/images/companies/theappteam.png"),
      date: "July 2017 - Sep 2019",
      desc: "Designed and developed iOS and Android mobile applications",
      descBullets: [
        "Worked closely with product managers and designers to define a rich mobile user experience",
        "Determined technical feasibility of client requirements, wireframes, and designs",
        "Reduced deployment time by 80% through automation with Fastlane and Bitrise",
        "Researched and implemented new technologies such as push notifications, bug tracking, automatic deployment, and UI automation testing"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Isuzu MSC",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "IF YOU WANT TO CONTACT ME, PLEASE USE FOLLOWING SOCIAL MEDIA",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
