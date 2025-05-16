
export interface FeatureCategory {
  title: string;
  features: FeatureItem[];
}

export interface FeatureItem {
  title: string;
  values: (boolean | string)[];
}

export const packageDuration: FeatureItem = {
  title: "Package Duration",
  values: ["10 hours", "20 hours", "30 hours", "40 hours", "50 hours"]
};

export const basicFeatures: FeatureCategory = {
  title: "Basic",
  features: [
    {
      title: "Job Posting",
      values: ["5 Jobs", "20 Jobs", "30 Jobs", "40 Jobs", "50 Jobs"]
    },
    {
      title: "Assessment Rounds - 3 rounds",
      values: [
        "MCQ or Coding",
        "MCQ and Coding",
        "MCQ and Coding",
        "MCQ and Coding",
        "MCQ and Coding"
      ]
    },
    {
      title: "Email Notifications (Recruiter & Candidate)",
      values: [true, true, true, true, true]
    },
    {
      title: "Candidate Tracking",
      values: [true, true, true, true, true]
    }
  ]
};

export const aiFeatures: FeatureCategory = {
  title: "AI Features",
  features: [
    {
      title: "Proctoring - full features",
      values: [
        "1 hour for proctoring 9 hours on tests",
        "2 hour for proctoring 18 hours on tests",
        "3 hour for proctoring 27 hours on tests",
        "4 hours for proctoring 36 hours on tests",
        "5 hours for proctoring 45 hours on tests"
      ]
    },
    {
      title: "AI - Match Making - ATS",
      values: [
        "100 applications",
        "200 applications",
        "300 applications",
        "400 applications",
        "500 applications"
      ]
    },
    {
      title: "AI - Resume Analyzer - ATS",
      values: [
        "100 applications",
        "200 applications",
        "300 applications",
        "400 applications",
        "500 applications"
      ]
    },
    {
      title: "AI Question Generation (OpenAI)",
      values: [
        "500 questions",
        "1000 questions",
        "1500 questions",
        "2000 questions",
        "3000 questions"
      ]
    },
    {
      title: "AI Job Description Generator",
      values: [
        "10 Job Descriptions",
        "20 Job Descriptions",
        "25 Job Descriptions",
        "40 Job Descriptions",
        "50 Job Descriptions"
      ]
    },
    {
      title: "AI Candidate Feedback",
      values: [
        "100 applications",
        "200 applications",
        "300 applications",
        "400 applications",
        "500 applications"
      ]
    }
  ]
};

export const analyticsFeatures: FeatureCategory = {
  title: "Analytics & Report",
  features: [
    {
      title: "Analytic Dashboard",
      values: [true, true, true, true, true]
    },
    {
      title: "Basic Reporting",
      values: [true, "Downloadable", "Downloadable", "Downloadable", "Downloadable"]
    },
    {
      title: "Advance Reporting",
      values: [false, false, true, true, true]
    }
  ]
};

export const supportFeatures: FeatureCategory = {
  title: "Support & Training",
  features: [
    {
      title: "E-mail",
      values: [
        "8 hours turn around time",
        "4 hours turn around time",
        "2 hours turn around time",
        "1 hour turn around time",
        "30 mins TAT"
      ]
    },
    {
      title: "Phone Call Support",
      values: [
        "upto 1 hr",
        "upto 2 hr",
        "upto 3 hr",
        "upto 4 hrs",
        "upto 5 hrs"
      ]
    },
    {
      title: "Chat Support",
      values: [
        "upto 1 hr",
        "upto 2 hr",
        "upto 3 hr", 
        "upto 4 hrs",
        "upto 5 hrs"
      ]
    },
    {
      title: "Training Session",
      values: [
        "upto 1 hr",
        "upto 2 hr",
        "upto 3 hr",
        "upto 4 hrs",
        "upto 5 hrs"
      ]
    },
    {
      title: "Ticketing System",
      values: [
        "9 AM - 9 PM",
        "9 AM - 9 PM",
        "24 x 7 submission",
        "24 x 7 submission",
        "24 x 7 submission"
      ]
    }
  ]
};
