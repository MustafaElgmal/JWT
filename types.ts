export interface AppProps{
    stories?:story[]
    children?:JSX.Element
}

export interface story{
    id:number
    text:string
    imageUrl:string
}