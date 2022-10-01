


export interface AppProps {
  stories?: storyType[];
  children?: JSX.Element;
  podcasts?: BroadcastType[]
  podcast?: BroadcastType
  story?: storyType;
  careers?: Career[],
  internships?: Internship[]
  internship?: Internship
}


export interface storyType {

  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  story: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  owner: string

}

export interface story {
  id: number;
  text: string;
  imageUrl: string;
}



export interface BroadcastType {
  _id: string;
  title: string;
  publishedAt: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  author: string;
  videoUrl: string;
  description: string;
  audioUrl: string
}

export interface Career {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  description: string
  "image": {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }
  title: string
}






export interface Internship {
  _id: string,
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  description: string,
  title: string,
  _rev: string,
  _type: string,
  _createdAt: string,
  _updatedAt: string

}
export interface FormType{
  firstName:string
  lastName:string
  email:string
  phoneNumber:string
  message:string
}

