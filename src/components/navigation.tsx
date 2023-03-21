/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import classNames from 'classnames';
import seo from '../utils/seo';
import HomeIcon from './icons/home';
import PersonIcon from './icons/person';
import DocumentTextOutlineIcon from './icons/document-outline-text';
import BriefcaseIcon from './icons/briefcase';
import BriefcaseOutlineIcon from './icons/briefcase-outline';
import ExternalIcon from './icons/external';
import AtIcon from './icons/at';
import HomeOutlineIcon from './icons/home-outline';
import DocumentTextIcon from './icons/document-text';

function Navigation({
  children,
}: { children?: React.ReactNode }) {
  const router = useRouter();

  return (
    <React.Fragment>
      <NextSeo
        titleTemplate="%s | Brian Nunez's Porfolio"
        defaultTitle="Brian Nunez's Porfolio"
        additionalLinkTags={seo.linkTags.generic}
        additionalMetaTags={seo.metaTags.generic}
      />
      <div className="p-2 w-full flex flex-row justify-end items-center">
        {/* <h1 className="mt-4 flex flex-row justify-center items-center text-3xl font-bold font-mono bg-gradient-to-tl from-green-100 to-green-500 bg-clip-text text-transparent">
          Welcome to my portfolio
        </h1> */}
        <ul className="mt-4 flex flex-row gap-8 justify-center items-center">
          <Link href="/">
            <li className={classNames("flex flex-row justify-center items-center gap-2 px-4 py-3 rounded-md text-white font-sans font-bold text-base ease-in-out duration-300 bg-neutral-700 hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-600", { "bg-gradient-to-tr from-green-400 to-green-600": router.route === '/' })}>
              {router.route === '/' ? <HomeIcon className="fill-white" /> : <HomeOutlineIcon />}
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className={classNames("flex flex-row justify-center items-center gap-2 px-4 py-3 rounded-md text-white font-sans font-bold text-base ease-in-out duration-300 bg-neutral-700 hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-600", { "bg-gradient-to-tr from-green-400 to-green-600": router.route === '/about' })}>
              <PersonIcon className={classNames({ 'fill-white': router.route === '/about' })} />
              About
            </li>
          </Link>
          <Link href="/resume">
            <li className={classNames("flex flex-row justify-center items-center gap-2 px-4 py-3 rounded-md text-white font-sans font-bold text-base ease-in-out duration-300 bg-neutral-700 hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-600", { "bg-gradient-to-tr from-green-400 to-green-600": router.route === '/resume' })}>
              {router.route === '/resume' ? <DocumentTextIcon /> : <DocumentTextOutlineIcon />}
              Resume
            </li>
          </Link>
          <Link href="/works">
            <li className={classNames("flex flex-row justify-center items-center gap-2 px-4 py-3 rounded-md text-white font-sans font-bold text-base ease-in-out duration-300 bg-neutral-700 hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-600", { "bg-gradient-to-tr from-green-400 to-green-600": router.route === '/works' })}>
              {router.route === '/works' ? <BriefcaseIcon /> : <BriefcaseOutlineIcon />}
              Works
            </li>
          </Link>
          <Link href="/blogs">
            <li className={classNames("flex flex-row justify-center items-center gap-2 px-4 py-3 rounded-md text-white font-sans font-bold text-base ease-in-out duration-300 bg-neutral-700 hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-600", { "bg-gradient-to-tr from-green-400 to-green-600": router.route === '/blogs' })}>
              <ExternalIcon />
              Blogs
            </li>
          </Link>
          <Link href="/contact">
            <li className={classNames("flex flex-row justify-center items-center gap-2 px-4 py-3 rounded-md text-white font-sans font-bold text-base ease-in-out duration-300 bg-neutral-700 hover:bg-gradient-to-tr hover:from-green-400 hover:to-green-600", { "bg-gradient-to-tr from-green-400 to-green-600": router.route === '/contact' })}>
              <AtIcon />
              Contact
            </li>
          </Link>
        </ul>
      </div>
      {children}
    </React.Fragment>
  );
}

export default Navigation;
