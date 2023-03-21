import React from 'react';
import { type NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config';
import Layout from '../components/layout';
import seo from '../utils/seo';
import GithubIcon from '../components/icons/github';
import LinkedInIcon from '../components/icons/linkedin';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const { t: tL } = useTranslation('links');

  return (
    <React.Fragment>
      <NextSeo
        title={seo.titles.home}
        description={seo.descriptions.home}
        additionalLinkTags={seo.linkTags.home}
        additionalMetaTags={seo.metaTags.home}
      />
      <div
        className="bg-heroImage relative bg-fixed bg-center bg-no-repeat bg-cover box-border"
      >
        <div className="w-full min-h-screen">
          <main className="mx-auto container">
            <Layout>
              <div className="flex flex-col justify-center items-center gap-3 mt-[8%]">
                <div className="w-72 h-72 flex justify-center items-center">
                  <Image
                    src="https://avatars.githubusercontent.com/u/37200096?v=4"
                    alt="Brian's Photo"
                    className="w-full h-full rounded-full"
                    width={1200}
                    height={1200}
                  />
                </div>
                <h2 className="font-mono text-white text-3xl font-semibold">{t('home.name')}</h2>
                <p className="text-gray-400 font-mono">{t('home.title')}</p>
                <div className="flex flex-row gap-4 justify-center items-center">
                  <a href={tL('github.link') as string} target="_blank" rel="noreferrer">
                    <div className="p-2 bg-neutral-700 fill-white rounded hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-600">
                      <GithubIcon />
                    </div>
                  </a>
                  <a href={tL('linkedin.link') as string} target="_blank" rel="noreferrer">
                    <div className="p-2 bg-neutral-700 fill-[#3996f4] hover:fill-white rounded hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-600">
                      <LinkedInIcon />
                    </div>
                  </a>
                </div>
                <a
                  role="button"
                  className="px-10 py-3 rounded-3xl text-white font-sans font-bold text-lg bg-gradient-to-tr from-green-400 to-green-600 hover:from-green-600 hover:to-green-400"
                  href="/assets/resume"
                  download="Brian_Nunez-Resume.pdf"
                >
                  Download CV
                </a>
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
      ...(await serverSideTranslations(locale, ['common', 'links'], nextI18NextConfig, ['en-US', 'en-CA'])),
    },
  };
}

export default Home;
