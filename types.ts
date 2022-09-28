import { date } from "yup"

export interface AppProps {
    stories?: story[]
    children?: JSX.Element
    broadcasts?: Broadcasts[]
    story?:story
    internships?:Internship[]
    internship?:Internship

}

export interface story {
    id: number
    text: string
    imageUrl: string
}

export interface Broadcasts {
    id: number;
    title: string;
    href: string;
    date: string;
    datetime: string;
    category: {
        name: string;
        href: string;
    };
    imageUrl: string;
    preview: string;
    author: {
        name: string;
        imageUrl: string;
        href: string;
    };
    readingLength: string;

}

export interface Internship{
    _id:string,
    image: {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      };
      description:string,
      title:string,
      _rev:string,
      _type:string,
      _createdAt:string,
      _updatedAt:string

}