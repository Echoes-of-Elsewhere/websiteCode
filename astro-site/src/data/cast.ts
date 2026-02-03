/** Shared Q&A questions (same order for every cast member). */
export const qaQuestions: { id: string; question: string }[] = [
  { id: "interested-rpg", question: "What got you interested in RPG?" },
  { id: "first-gaming", question: "What was your first gaming experience like?" },
  { id: "favorite-moment", question: "Favorite character or game moment?" },
  { id: "other-cool-thing", question: "What other cool thing do you do?" },
  { id: "favorite-media", question: "Favorite movie, book, or character?" },
  { id: "gm-player-both", question: "GM, Player, or Both, and why?" },
];

/** Per-member Q&A answers keyed by question id. Omit a key if no answer yet. */
export type QaAnswers = Partial<Record<(typeof qaQuestions)[number]["id"], string>>;

export interface CastMember {
  name: string;
  role: string;
  bio?: string;
  website?: string;
  social?: string;
  /** Answers keyed by question id. When you have answers, add them here. */
  qa?: QaAnswers;
}

export const castMembers: CastMember[] = [
  {
    name: "Keith Keffer",
    role: "as The Keeper of Secrets (GM)",
    bio: "",
    website: "#",
    social: "#"
  },
  {
    name: "Leah Skye",
    role: "as Blake Emberlich",
    bio: "",
    website: "#",
    social: "#"
  },
  {
    name: "Tony Keoni",
    role: "as Dr Eliot Knight",
    bio: "",
    website: "#",
    social: "#"
  },
  {
    name: "Professor Gregor",
    role: "as Himself",
    bio: "",
    website: "#",
    social: "#"
  },
  {
    name: "Shawn Johnson",
    role: "as Ivan Petrovich III",
    bio: "",
    website: "#",
    social: "#"
  },
  {
    name: "Andy",
    role: "as Sam Carver",
    bio: "",
    website: "#",
    social: "#"
  },
  {
    name: "E. D. Jones",
    role: "as Vince Pascal",
    bio: "",
    website: "#",
    social: "#"
  }
];
