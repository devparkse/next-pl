import Head from "next/head";
import Link from "next/link";
import React from "react";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <>
      <Head>
        <title>프론트엔드 개발자 박시은 포트폴리오</title>
        <meta
          name="description"
          content="프론트엔드 개발자 박시은 포트폴리오"
        />
        <meta name="keyword" content="React.js, Next.js, portfolio, 박시은" />
        <link legacyBehavior rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link legacyBehavior href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl">devparkse</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link legacyBehavior href="/">
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link legacyBehavior href="/profile">
              <a className="mr-5 hover:text-gray-900">Profile</a>
            </Link>
            <Link legacyBehavior href="/portfolio">
              <a className="mr-5 hover:text-gray-900">Portfolio</a>
            </Link>
            <Link legacyBehavior href="/life">
              <a className="mr-5 hover:text-gray-900">Life</a>
            </Link>
            <Link legacyBehavior href="/vision">
              <a className="mr-5 hover:text-gray-900">Vision</a>
            </Link>
          </nav>
          {/* dark 모드 적용 */}
          <DarkModeButton />
        </div>
      </header>
    </>
  );
};

export default Header;
