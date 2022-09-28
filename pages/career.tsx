import { GetStaticProps } from 'next';
import React from 'react'
import Opportunities from '../components/Opportinities';
import { AppProps } from '../types';
import { getAllCareers } from '../utils/apis';

const Career = ({ careers }: AppProps) => {
    console.log(careers)
    return (
        <>
            <div>
                <img
                    className="w-screen h-screen"
                    src="https://res.cloudinary.com/dotcom-prod/images/c_fill,f_auto,g_faces:center,q_auto,w_1920/v1/wt-cms-assets/2022/07/zopveeuinrrynpwapfl1/disruptivetechnologies.jpg"
                />
            </div>
            <Opportunities careers={careers} />
        </>
    )
}

export default Career;
export const getStaticProps: GetStaticProps = async () => {
    const careers = await getAllCareers();
    return {
        props: { careers: careers },
        redirect: 172800
    }
}
