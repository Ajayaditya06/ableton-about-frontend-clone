import Link from "next/link";
import FloatingNav from "./components/floatingNav";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Image from "next/image";
import YouTube from "react-youtube";
import HeroCard2 from "./components/hearocard2";
import Card from "./components/card";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/ableton-icon-17.ico" sizes="any" />
        <title>
          Learn more about Ableton - maker of Live and Push | Ableton
        </title>
      </Head>
      <div className="flex flex-col p-0">
        <Navbar />
        <FloatingNav />
        <Header />
        <div className="flex flex-col gap-8  w-[56%] my-[150px] mx-auto">
          <div className="text-3xl  leading-10 flex">
            <div className="font-medium">
              We make <span>&nbsp;</span>
              <div className="inline  text-[#1a0bf4]">
                <Link href="/">Live</Link>
              </div>
              ,<span>&nbsp;</span>
              <div className="inline  text-[#1a0bf4]">
                <Link href="/">Push</Link>
              </div>
              <span>&nbsp;</span>
              and<span>&nbsp;</span>
              <div className="inline  text-[#1a0bf4]">
                <Link href="/">Link</Link>
              </div>
              <span>&nbsp;</span>— unique software and hardware for music
              creation and performance. With these products, our community of
              users creates amazing things.
            </div>
          </div>
          <div className="text-xl  leading-8">
            Ableton was founded in 1999 and released the first version of Live
            in 2001. Our products are used by a community of dedicated
            musicians, sound designers, and artists from across the world.{" "}
          </div>
        </div>
        <div className="h-[115vh] relative flex flex-row gap-0">
          <div className=" w-[50vw] h-[115vh] flex items-center">
            <div className="absolute ps-32 pt-3 flex">
              <Image src="/photo-1.jpg" width="640" height="640"></Image>
            </div>
          </div>
          <div className="bg-[#fbffa7] h-[115vh] w-[67vw] items-center justify-center flex ps-32">
            <Image src="/photo-2.jpg" width="500" height="500"></Image>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[56%] my-[150px] mx-auto">
          <div className="text-3xl leading-10  flex">
            <div className="font-medium">
              Making music isn’t easy. It takes time, effort, and learning. But
              when you’re in the flow, it’s incredibly rewarding.
            </div>
          </div>
          <div className="text-xl leading-8">
            We feel the same way about making Ableton products. The driving
            force behind Ableton is our passion for what we make, and the people
            we make it for.{" "}
          </div>
        </div>
        <div className="w-[100%] flex-col flex items-center justify-center">
          <YouTube
            videoId="9SbnhgjeyXA"
            opts={{ height: "450", width: "770" }}
            onReady={(e) => e.target.pauseVideo()}
          />
          <div className="w-[770px] ps-3 pt-3 justify-start flex">
            <small>
              <strong>Why Ableton - Juanpe Bolivar</strong>
            </small>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[56%] my-[150px] mx-auto">
          <div className="text-3xl leading-10 flex">
            <div className="font-medium">
              We are more than 350 people from 30 different countries divided
              between our headquarters in Berlin and our offices in Los Angeles
              and Tokyo.{" "}
            </div>
          </div>
          <div className="text-xl  leading-8">
            We feel the same way about making Ableton products. The driving
            force bMost of us are active musicians, producers, and DJs, and many
            of us use Live and Push every day. We come from a wide range of
            cultural and professional backgrounds. Some of us have PhDs, some
            are self-taught, and most of us are somewhere in between. What
            connects us is the shared belief that each of us has the skills and
            knowledge to contribute to something big: helping to shape the
            future of music culture.
          </div>
        </div>
        <div className="flex flex-row w-[100%] relative">
          <div className="w-[58vw] bg-[#b6ffc0] flex flex-col gap-32 justify-center ps-36 py-32">
            <Image src="/photo-3.jpg" width="500" height="600"></Image>
            <Image src="/photo-4.jpg" width="500" height="600"></Image>
          </div>
          <div className="absolute flex top-64 right-32">
            <Image
              src="/photo-5.jpg"
              width="600"
              height="700"
              style={{ height: "700px", width: "600px" }}
            ></Image>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[56%] my-[150px] mx-auto">
          <div className="text-3xl leading-10 flex">
            <div className="font-medium">
              We believe it takes focus to create truly outstanding instruments.
              We only work on a few products and we strive to make them great.
            </div>
          </div>
          <div className="text-xl  leading-8">
            Rather than having a one-size-fits-all process, we try to give our
            people what they need to work their magic and grow. We’ve learned
            that achieving the best results comes from building teams that are
            richly diverse, and thus able to explore problems from a wider set
            of perspectives. We don’t always agree with each other, but opinion
            and debate are valued and openly encouraged.
          </div>
        </div>
        <HeroCard2 />
        <div className="flex flex-col gap-8 w-[56%] my-[150px] mx-auto">
          <div className="text-3xl leading-10 flex">
            <div className="font-medium">
              We’re passionate about what we do, but we’re equally passionate
              about improving who we are.
            </div>
          </div>
          <div className="text-xl  leading-8">
            We work hard to foster an environment where people can grow both
            personally and professionally, and we strive to create a wealth of
            opportunities to learn from and with each other.
          </div>
          <div className="text-xl  leading-8">
            Alongside an internal training program, employees are actively
            supported in acquiring new knowledge and skills, and coached on
            applying these in their daily work. In addition, staff-organized
            development and music salons are a chance to discuss new
            technologies, production techniques and best practices.
          </div>
        </div>
        <div className="w-[100%] h-[100%] relative flex flex-row items-center justify-center">
          <div className="bg-[#d5b3ff] text-[#d5b3ff] w-[67vw] h-[120vh]">
            <></>
          </div>
          <div className="flex absolute left-36">
            <Image src="/photo-6-a.jpg" height="500" width="500"></Image>
          </div>
          <div className="flex absolute right-0">
            <Image src="/photo-7.jpg" height="700" width="700"></Image>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[56%] my-[150px] mx-auto">
          <div className="text-3xl leading-10 flex">
            <div className="font-medium">
              We want our employees to love it here. Since we&apos;re looking
              for exceptional talent from around the world, we will do
              everything we can to make your transition as easy as possible.{" "}
            </div>
          </div>
          <div className="text-xl  leading-8">
            If you&apos;re joining us in Berlin, we&apos;ll help with relocation
            and paperwork. We&apos;ll even provide you with free German or
            English lessons. Plus, working in Germany means you can expect
            comprehensive health insurance for you and your family, as well as
            generous maternity and paternity leave. Office hours are flexible,
            but it&apos;s not all work; we have several company and team outings
            throughout the year as well as a variety of fun, informal
            small-group activities.{" "}
          </div>
        </div>
        <Card />
        <div className="mt-[200px] w-[100%] border-black/10 border-b-2">
          <></>
        </div>
        <div className="my-[100px] px-32 text-6xl font-medium ">Ableton</div>
        <div className="text-sm w-[100%] flex my-[20px] justify-center items-center">
          <small>
            All images and resources are taken from Ableton and I own no rights
            over them.
          </small>
        </div>
      </div>
    </>
  );
}
