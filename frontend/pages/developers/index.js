import React from "react";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import {DeveloperCardMini} from "../../components/developerCardMini";

export default function Developers({ developers }) {
  return (
    <Layout>
      <h1>Developers</h1>
        <div className="grid gap-4 grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
            {developers.map((developer, i) => (
                <DeveloperCardMini item={developer.attributes} key={i} />
            ))}
        </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const developers = (await fetchAPI("/developers")).data;

  return {
    props: {
        developers,
    },
    revalidate: 1,
  };
}
