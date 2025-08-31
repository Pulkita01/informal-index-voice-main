// @/data/workerStories.ts
export type WorkerStory = {
  id: number;
  name: string;
  role: string;
  story: string;
  qrImage: string; // path to public QR code
};

export const workerStories: WorkerStory[] = [
  {
    id: 1,
    name: "Pinky",
    role: "Informal Worker",
    story: "Fighting for dignity in slums",
    qrImage: "/qrcodes/story1.jpeg",
  },
  {
    id: 2,
    name: "Seema",
    role: "Informal Worker",
    story: "Life on the Edge",
    qrImage: "/qrcodes/story2.jpeg",
  },
  {
    id: 3,
    name: "Pinky Devi",
    role: "Informal worker",
    story: "Living in Abuse",
    qrImage: "/qrcodes/story3.jpeg",
  },
  {
    id: 4,
    name: "Suresh",
    role: "Informal worker",
    story: "Grinding Gears of Survival",
    qrImage: "/qrcodes/story4.jpeg",
  },
  {
    id: 5,
    name: "Radha",
    role: "Informal worker",
    story: "",
    qrImage: "/qrcodes/story6.jpeg",
  },
  {
    id: 3,
    name: "Sunita",
    role: "Informal worker",
    story: "Living on the Margins",
    qrImage: "/qrcodes/story7.jpeg",
  },
];
