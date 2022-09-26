export interface AppProps{
    stories?:story[]
    children?:JSX.Element
    story?:story
}

export interface story{
    id:number
    text:string
    imageUrl:string
}