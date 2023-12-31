import Image from "next/image";
import TeamCard from "./../components/TeamCard";
import { TeamDetails } from "../components/TeamDetails";

export default function Home() {
  return (
    <>
      {/* top main */}
      <section className="w-full h-screen pt-20 pb-5 justify-between items-center inline-flex gap-20 flex-col-reverse md:flex-row">
        <div className="grow h-full self-stretch justify-center flex-col gap-2.5 inline-flex">
          <div className="text-white text-opacity-90 text-6xl font-bold font-['Chakra Petch'] uppercase tracking-widest">
            <span className="text-stroke text-transparent">We Are the</span>{" "}
            Frontline
          </div>
          <div className=" text-stone-300 text-lg font-normal font-['Chakra Petch'] uppercase leading-normal">
            DJSCE's Student Chapter for Cybersecurity. We are poised to build a
            Safe Online Community, Starting innovation right here.
          </div>
        </div>
        <img className="w-1/2" src="/about.png" />
      </section>

      {/* faculty */}
      <section className="w-full pt-20 pb-5 justify-center items-center gap-14 inline-flex flex-col  md:flex-row">
        <div className="justify-start items-center gap-5 flex">
          <TeamCard
            name="Dr. Narendra Shekhokar"
            role="Faculty incharge"
            img="https://cdn.discordapp.com/attachments/765973145852575746/1158491694640156692/image.png"
          />
        </div>
        <div className=" w-96 h-full flex-col justify-center items-end gap-2.5 inline-flex">
          <div className="md:text-right text-center text-stone-300 text-lg font-normal font-['Chakra Petch'] uppercase leading-normal">
            Lorem ipsum dolor sit amet consectetur. In eget sed ut nisl. Amet
            amet morbi et cras molestie euismod in mauris arcu. Sed ipsum tellus
            lorem vivamus molestie. Commodo velit adipiscing phasellus sit vitae
            sed nam.
            <br />
            Etiam egestas volutpat nunc at. Pretium turpis aliquam sit nulla
            massa id ornare neque id bibendum.
          </div>
        </div>
      </section>

      {/* meet the core */}
      <section className="w-full pt-40 pb-5 relative gap-60 justify-between items-start inline-flex flex-col  xl:flex-row">
        <div className="flex-col justify-start items-start gap-5 inline-flex sticky top-1/2">
          <div className="text-5xl text-stroke text-transparent font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
            Meet
          </div>
          <div className="text-white text-opacity-90 text-6xl font-bold font-['Chakra Petch'] uppercase leading-10 tracking-widest">
            The Core
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-24 inline-flex">
          {TeamDetails.map((member, key) => (
            <div
              key={key}
              className="justify-start items-center gap-10 inline-flex flex-col  md:flex-row"
            >
              <TeamCard
                name={member.name}
                role={member.role}
                img={member.img}
              />
              <div className="text-center md:text-left text-stone-300 text-lg font-normal font-['Chakra Petch'] uppercase leading-normal">
                {member.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
