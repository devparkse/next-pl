import Head from "next/head";
import Link from "next/link";
import React from "react";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl">devparkse</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/profile">
              <a className="mr-5 hover:text-gray-900">Profile</a>
            </Link>
            <Link href="/portfolio">
              <a className="mr-5 hover:text-gray-900">Portfolio</a>
            </Link>
            <Link href="/life">
              <a className="mr-5 hover:text-gray-900">Life</a>
            </Link>
            <Link href="/vision">
              <a className="mr-5 hover:text-gray-900">Vision</a>
            </Link>
          </nav>
          {/* dark 모드 적용 */}
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
