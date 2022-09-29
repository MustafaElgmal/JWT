export const Base_Url = "http://localhost:3000";

export const women = [
  {
    id: 1, name: "Mai Azzmy", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships",
    imgUrl: "https://i.ibb.co/kBgtHK6/Rectangle-5.png"
  },
  {
    id: 2, name: "Rana Nadim", position: "Position", quote: "May the space between where I am  and where I want to be inspire me",
    imgUrl: "https://i.ibb.co/6PR2Y74/Rectangle-15.png"
  },
  {
    id: 3, name: "Habiba Diab", position: "Position", quote: "As a member of our global wounderman thompson family, I am proud to be amongst such incredible talent and humbled to be a contributor of our flourishing success",
    imgUrl: "https://i.ibb.co/X8PKD3q/Rectangle-8.png"
  }
];

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

