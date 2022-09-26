
export interface AppProps {
    stories?: story[]
    children?: JSX.Element
    broadcasts?: Broadcasts[]
    story?:story

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