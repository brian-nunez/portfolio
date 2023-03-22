/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { type NextPage } from 'next';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import Layout from '../components/layout';
import seo from '../utils/seo';
import ContentBox from '../components/content-box';
import AtIcon from '../components/icons/at';
import locationImage from '../assets/location.png';
import nextI18nextConfig from '../../next-i18next.config';

type TFormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact: NextPage = () => {
  const { t } = useTranslation('common');
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<TFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<TFormValues> = (values) => {
    // do stuff
    console.log(values);
    reset();
  };

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
                <ContentBox>
                  <h1 className="flex flex-row justify-start items-center font-mono text-white font-bold leading-normal text-4xl after:content-[''] after:rounded after:ml-4 after:w-44 after:h-1 after:bg-gradient-to-tr after:from-green-400 after:to-green-600">
                    {t('contact.title')}
                  </h1>
                  <div className="flex gap-8 justify-end items-start mt-8">
                    <div className="flex flex-col gap-6 basis-96">
                      <ContentBox className="border border-neutral-700 rounded-md px-8 py-8 w-full">
                        <h3 className="flex justify-start gap-2 items-center font-mono leading-normal text-xl text-white font-bold">
                          <AtIcon className="-mb-2" />
                          {t('contact.email.title')}
                        </h3>
                        <ul className="flex flex-col gap-4 text-neutral-400 font-mono text-base ml-8 mt-2">
                          <li>
                            <a href={t('contact.email.mailto') as string} className="underline text-blue-400">
                              {t('contact.email')}
                            </a>
                          </li>
                        </ul>
                      </ContentBox>
                      <ContentBox className="border border-neutral-700 rounded-md px-8 py-8 w-full">
                        <h3 className="flex justify-start gap-2 items-center font-mono leading-normal text-xl text-white font-bold">
                          <Image
                            src={locationImage}
                            alt="Location Image"
                            className="w-6 h-6 -mb-2"
                          />
                          {t('contact.location.title')}
                        </h3>
                        <ul className="flex flex-col gap-4 text-neutral-400 font-mono text-base ml-8 mt-2">
                          <li>{t('contact.location.item-1')}</li>
                          <li>{t('contact.location.item-2')}</li>
                        </ul>
                      </ContentBox>
                    </div>
                    <ContentBox className="basis-full border border-neutral-700 rounded-md px-8 py-8">
                      <h2 className="flex flex-col justify-center items-start font-sans leading-normal text-2xl">
                        <span className="text-neutral-400 font-mono">
                          {t('contact.subheading-1')}
                        </span>
                        <span className="text-white font-bold font-mono">
                          {t('contact.subheading-2')}
                        </span>
                      </h2>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-4 my-4">
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              type="text"
                              className="block py-2.5 px-0 w-full text-lg font-mono text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
                              placeholder=" "
                              maxLength={30}
                              required
                              {...register('name', { required: true, maxLength: 30, pattern: /^\w+$/gi })}
                            />
                            <label
                              htmlFor="name"
                              className="peer-focus:font-medium font-mono absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Name *
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              type="email"
                              className="block py-2.5 px-0 w-full text-lg font-mono text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
                              placeholder=" "
                              maxLength={150}
                              required
                              {...register('email', { required: true, maxLength: 150 })}
                            />
                            <label
                              htmlFor="email"
                              className="peer-focus:font-medium font-mono absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Email *
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              type="text"
                              className="block py-2.5 px-0 w-full text-lg font-mono text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
                              placeholder=" "
                              maxLength={300}
                              required
                              {...register('message', { required: true, maxLength: 300 })}
                            />
                            <label
                              htmlFor="message"
                              className="peer-focus:font-medium font-mono absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Message *
                            </label>
                          </div>
                        </div>
                        <button type="submit" className="text-white bg-[#111111] border border-gray-300 focus:outline-none hover:border-green-500 hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-600 focus:ring-4 focus:ring-green-400 font-semibold font-mono rounded-lg text-base px-5 py-2.5 mr-2 mb-2 mt-4">
                          Submit
                        </button>
                      </form>
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

export default Contact;
