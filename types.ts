export interface AppProps{
    stories?:story[]

}

export interface story{
    id:number
    text:string
    imageUrl:string
}