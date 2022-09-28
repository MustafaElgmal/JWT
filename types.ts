
export interface AppProps {
    stories?: story[],
    children?: JSX.Element,
    broadcasts?: Broadcast[],
    story?: story,
    careers?: Career[],
}

export interface story {
    id: number
    text: string
    imageUrl: string
}

export interface Broadcast {
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