export interface AppProps {
  stories?: storyType[];
  children?: JSX.Element;
  broadcasts?: Broadcasts[];
  story?: storyType;
}

export interface storyType {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  description: string;
  title: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface story {
  id: number;
  text: string;
  imageUrl: string;
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
