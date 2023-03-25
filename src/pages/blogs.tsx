import React from 'react';
import { type NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/layout';
import seo from '../utils/seo';
import ContentBox from '../components/content-box';
import nextI18nextConfig from '../../next-i18next.config';

const Blogs: NextPage = () => {
  const { t } = useTranslation('common');
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
          <main className="mx-auto w-9/12">
            <Layout>
              <div className="mx-auto mt-[5%] flex flex-col justify-center my-8">
                <ContentBox className="flex flex-col gap-8">
                  <h1 className="flex flex-row justify-start items-center font-mono text-white font-bold leading-normal text-4xl after:content-[''] after:rounded after:ml-4 after:w-44 after:h-1 after:bg-gradient-to-tr after:from-green-400 after:to-green-600">
                    {t('blogs.title')}
                  </h1>
                  <div className="flex gap-12">
                    <ContentBox className="h-96 basis-1/3 border border-neutral-700 rounded-md px-8 py-8">

                    </ContentBox>
                    <ContentBox className="h-96 basis-1/3 border border-neutral-700 rounded-md px-8 py-8">

                    </ContentBox>
                    <ContentBox className="h-96 basis-1/3 border border-neutral-700 rounded-md px-8 py-8">

                    </ContentBox>
                  </div>
                </ContentBox>
              </div>
            </Layout>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export async function getStaticProps({ locale }: { locale: string; }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig, ['en-US', 'en-CA'])),
    },
  };
}

export default Blogs;
