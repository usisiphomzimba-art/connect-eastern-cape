import type { Activity } from "@/types";

export const activities: Activity[] = [
  { id: "speech", name: "Speech Therapy", description: "Builds communication skills, articulation, and social language for autistic children.", ageRange: "3 – 18 years", schoolsOffering: ["quest-school-pe", "ikhwezi-lokusa-mthatha", "merryvale-east-london", "uitenhage-autism-centre"], icon: "🗣️" },
  { id: "ot", name: "Occupational Therapy", description: "Develops fine motor, sensory regulation, and daily-living skills.", ageRange: "3 – 18 years", schoolsOffering: ["quest-school-pe", "ikhwezi-lokusa-mthatha", "merryvale-east-london"], icon: "✋" },
  { id: "music", name: "Music Therapy", description: "Uses rhythm and song to support emotional expression and connection.", ageRange: "4 – 18 years", schoolsOffering: ["merryvale-east-london", "ikhwezi-lokusa-mthatha", "queenstown-haven"], icon: "🎵" },
  { id: "swimming", name: "Swimming", description: "Calming water-based exercise that builds coordination and confidence.", ageRange: "5 – 18 years", schoolsOffering: ["quest-school-pe", "merryvale-east-london"], icon: "🏊" },
  { id: "art", name: "Art Classes", description: "Encourages self-expression, focus, and creative play.", ageRange: "4 – 18 years", schoolsOffering: ["merryvale-east-london", "quest-school-pe", "cradock-special"], icon: "🎨" },
  { id: "computer", name: "Computer Skills", description: "Builds digital literacy and useful future workplace skills.", ageRange: "8 – 18 years", schoolsOffering: ["queenstown-haven", "graaff-reinet-special"], icon: "💻" },
  { id: "gardening", name: "Gardening", description: "Therapeutic outdoor activity that fosters routine and responsibility.", ageRange: "6 – 18 years", schoolsOffering: ["ikhwezi-lokusa-mthatha", "queenstown-haven", "cradock-special", "aliwal-north-asd"], icon: "🌱" },
  { id: "sensory", name: "Sensory Play", description: "Structured play that supports sensory processing and regulation.", ageRange: "3 – 10 years", schoolsOffering: ["quest-school-pe", "uitenhage-autism-centre", "cradock-special"], icon: "🧩" },
  { id: "horse", name: "Horse Riding", description: "Equine-assisted therapy that improves balance, focus, and emotional well-being.", ageRange: "6 – 18 years", schoolsOffering: ["merryvale-east-london", "graaff-reinet-special"], icon: "🐎" },
  { id: "sports", name: "Sports", description: "Team and individual sport adapted for different needs and abilities.", ageRange: "6 – 18 years", schoolsOffering: ["queenstown-haven", "aliwal-north-asd"], icon: "⚽" },
  { id: "dance", name: "Dance", description: "Movement-based therapy supporting body awareness and joy.", ageRange: "4 – 16 years", schoolsOffering: ["uitenhage-autism-centre"], icon: "💃" },
  { id: "life-skills", name: "Life Skills", description: "Practical skills for independence — cooking, cleaning, money, transport.", ageRange: "10 – 18 years", schoolsOffering: ["ikhwezi-lokusa-mthatha", "queenstown-haven", "aliwal-north-asd"], icon: "🧺" },
];
