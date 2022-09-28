export interface AppProps {
  stories?: storyType[];
  children?: JSX.Element;
   podcasts?: BroadcastType[]
    podcast?: BroadcastType
  story?: storyType;
  careers?: Career[],
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
     author:string;
     videoUrl:string;
     description:string;
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




