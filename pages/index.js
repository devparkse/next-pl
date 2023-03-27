import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DevAni from "../components/DevAni";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              프론트엔드 개발자&nbsp;
              <br className="hidden lg:inline-block" />
              박시은
            </h1>
            <p className="mb-8 leading-relaxed">
              이상의 전인 바로 가치를 품고 풍부하게 청춘의 있으랴? 피부가 두손을
              노년에게서 대고, 그러므로 더운지라 역사를 우리 칼이다. 이상이
              더운지라 하는 꽃 힘차게 그것을 때문이다. 있는 고동을 갑 물방아
              이상의 대한 이상, 것이다. 것이 착목한는 그들은 끓는 힘차게 인간에
              동산에는 이상이 피다. 밥을 이성은 귀는 것이 것은 그러므로 뭇
              것이다. 이것을 청춘의 있는 몸이 그것은 피가 청춘의 열락의 있다.
              대고, 이상을 찾아 놀이 남는 밝은 인간은 뜨거운지라, 두손을 것이다.
              그들은 방황하여도, 사라지지 듣는다. 것이 너의 그들의 품으며, 이는
              능히 사람은 찾아다녀도, 칼이다.
            </p>
            <div className="flex justify-center">
              <Link href="/portfolio">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Portfolio
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <DevAni />
          </div>
        </div>
      </section>
    </>
  );
}
