import { sanityClient } from "../client"
import { Career } from "../types"



export const getCareerUsingPagination = async () => {
    try {
        return await sanityClient.fetch(`*[_type=="career"] | order(_createdAt desc) [0...3]`)
    } catch (error) {
        console.log(error)
    }
}

export const getAllCareers = async (): Promise<Career[] | undefined> => {
    try {
        return await sanityClient.fetch(`*[_type=="career"]`)!
    } catch (error) {
        console.log(error)
    }
}