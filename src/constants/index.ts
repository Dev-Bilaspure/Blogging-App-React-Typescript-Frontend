import { EEnv, env } from "@/env-controller";
import sampleImage from "../assets/images/sample-image.jpeg";

export const tagsArray = [
  // News and Politics
  "world",
  "current-affairs",
  "politics",

  // Technology and Science
  "technology",
  "finance",
  "business",
  "science",
  "programming",
  "machine-learning",
  "artificial-intelligence",
  "cybersecurity",
  "data-science",
  "cloud-computing",
  "blockchain",
  "internet-of-things",
  "augmented-reality",
  "virtual-reality",
  "robotics",
  "nanotechnology",
  "biotechnology",
  "wearable-tech",

  // Sports
  "sports",

  // Entertainment
  "entertainment",
  "movies",
  "gaming",

  // Psychology and Lifestyle
  "psychology",
  "fashion",
  "health",
  "fitness",
  "self-improvement",
  "mindfulness",

  // Finance and Economy
  "cryptocurrency",
  "stocks-market",
  "finance-tips",

  // Travel and Exploration
  "auto-mobiles",
  "travel",
  "travel-tips",

  // Education and Learning
  "skills",
  "education",

  // Arts and Culture
  "music",
  "photography",
  "design",
  "book-reviews",
  "history",
  "culture",
  "creativity",

  // Miscellaneous
  "parenting",
  "cooking",
  "relationships",
  "entrepreneurship",
  "nature",
  "philosophy",
  "technology-trends",
  "startups",
  "gardening",
  "writing",
];

const server1 = "https://maadhyam-app-server.onrender.com";
const server2 = "https://maadhyam-app-server-new.onrender.com";

const servers = [server1, server2];

export const SERVER_ORIGIN =
  env === EEnv.DEV ? "http://localhost:8000" : servers[1];

export const defaultUserPic =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

export const bannerImages = [
  "https://firebasestorage.googleapis.com/v0/b/maadhyam-blogging-app.appspot.com/o/otherUtils%2FbannerImg.jpg?alt=media&token=3d093de7-19dc-4866-bbc0-cd6dab5d512f",
];
