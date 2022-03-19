import { useState } from 'react';

function Home(props) {
    return (
        <>
            <h1>{props.date}</h1>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            date: new Date().toUTCString()
        },

        revalidate: 10
    }
}

export default Home;