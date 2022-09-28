
export interface AppProps {
    stories?: story[]
    children?: JSX.Element
    podcasts?: BroadcastType[]
    podcast?: BroadcastType
    story?: story

}

export interface story {
    id: number
    text: string
    imageUrl: string
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
    author: string
    videoUrl: string
    description: string
}