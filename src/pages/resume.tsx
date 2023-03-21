import React from 'react';
import { type NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import seo from '../utils/seo';

const Resume: NextPage = () => {
  return (
    <React.Fragment>
      <NextSeo
        title={seo.titles.generic}
        description={seo.descriptions.generic}
        additionalLinkTags={seo.linkTags.generic}
        additionalMetaTags={seo.metaTags.generic}
      />
      <div
        className="bg-heroImage relative bg-fixed bg-center bg-no-repeat bg-cover box-border"
      >
        <div className="w-full min-h-screen">
          <main className="mx-auto container">
            <Layout>
              <div className="mx-auto mt-[5%] flex flex-col justify-center my-8">
                <h1 className="flex flex-col text-white font-sans font-bold leading-normal text-8xl">
                  Resume Content goes here
                </h1>
              </div>
            </Layout>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
