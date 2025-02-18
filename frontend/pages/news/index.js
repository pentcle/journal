import React from "react";
import Layout from "../../components/layout";
import {fetchAPI} from "../../lib/api";
import {NewsCardMini} from "../../components/newsCardMini";

export default function News({ news }) {
    return (
        <Layout>
            <h1>News</h1>
            <div className="grid gap-4 grid-cols-3 md:grid-cols-6 lg:grid-cols-9">
                {news.map((item, i) => (
                    <NewsCardMini item={item.attributes} key={i} />
                ))}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const news = (await fetchAPI("/news")).data;
    return {
        props: {
            news,
        },
        revalidate: 1,
    };
}