export const Base_Url = "http://localhost:3000";

export const women = [
  {
    id: 1, name: "Mai Azzmy", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships",
    imgUrl: "https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/mai.png"
  },
  {
    id: 2, name: "Rana Nadim", position: "Position", quote: "May the space between where I am  and where I want to be inspire me",
    imgUrl: "https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/rana.png"
  },
  {
    id: 3, name: "Habiba Diab", position: "Position", quote: "As a member of our global wunderman thompson family.",
    imgUrl: "https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/habiba.png"
  }
];

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

