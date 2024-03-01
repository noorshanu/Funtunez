import { useGSAP } from "@gsap/react";
import FeatureCard from "../components/FeatureCard";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Collab() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: "header" },
      });

      ScrollTrigger.batch("#feature-card", {
        interval: 0.1,
        start: "top center",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: -30, opacity: 0 },
            { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.3, overwrite: true }
          ),
        // onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
        // onEnterBack: (batch) =>
        //   gsap.fromTo(
        //     batch,
        //     { y: -30, opacity: 0 },
        //     { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.4, overwrite: true }
        //   ),
        onLeaveBack: (batch) =>
          gsap.to(batch, { opacity: 0, y: -30, autoAlpha: 0, overwrite: true }),
      });

      tl.fromTo(
        "header h1",
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1 }
      ).fromTo("#line", { scaleX: 0 }, { scaleX: 1 }, "<=-.3");
    },
    { scope: container }
  );

  return (
    <section ref={container} className=" bg-secondary py-12">
      <div className="container-wrapper">
        <header className="mb-8">
          <h1 className="text-grad text-3xl sm:text-4xl font-work font-bold font-64 text-center mb-4">
            Our Features
          </h1>
          <div
            id="line"
            className="bg-white h-[3px] w-[300px] mx-auto mt-2"
          ></div>
        </header>
        <div className=" flex justify-center flex-col sm:flex-row ">
          <div>
            <FeatureCard
              className=" w-full sm:w-[800px] "
              IconSrc="images/sate.png"
              Title="Gamefied VR/AR experience"
              Para="Fans can interact with their favourite creators and other users in our immersive VR world, play games, and attend events."
            />
          </div>
          <div>
            <FeatureCard
              className=" w-full sm:w-[400px] "
              IconSrc="images/sate.png"
              Title="Creators Tokenization"
              Para="Enabling creators to issue their own tokens for monetization and fan engagement."
            />
          </div>
        </div>

        <div className=" flex justify-center flex-col sm:flex-row ">
          <div>
            <FeatureCard
              className=" w-full sm:w-[400px] h-full"
              IconSrc="images/sate.png"
              Title="RWA support"
              Para="Allowing creators to tokenize virtually any real-world item or experience—be it artwork, merchandise, or exclusive events—into digital assets on the blockchain.
              "
            />
          </div>
          <div className=" ">
            <FeatureCard
              className=" w-full sm:w-[800px] h-full"
              IconSrc="images/sate.png"
              Title="Decentralised governance
              "
              Para="Allowing token holders to vote on platform decisions."
            />
          </div>
        </div>
        <div className=" flex justify-center flex-col sm:flex-row ">
          <div className=" ">
            <FeatureCard
              className=" w-full sm:w-[800px] h-full"
              IconSrc="images/sate.png"
              Title="Scalability"
              Para="Transactions on FanTunez are instant, with negligible gas fees and seemless."
            />
          </div>

          <div>
            <FeatureCard
              className=" w-full sm:w-[400px] h-full"
              IconSrc="images/sate.png"
              Title="Security & transparency"
              Para="Ensuring safety and transparency with blockchain technology."
            />
          </div>
        </div>
        <div className=" flex justify-center w-full flex-col sm:flex-row ">
          <div className=" ">
            <FeatureCard
              className="w-full sm:w-[500px] h-full"
              IconSrc="images/sate.png"
              Title="User Experience"
              Para="A seamless Blockchain and Dapps experience tailored for content creators and their fans for the next gen creator economy."
            />
          </div>
          <div>
            <FeatureCard
              className=" w-full sm:w-[700px] h-full"
              IconSrc="images/sate.png"
              Title="Ai Creator tools"
              Para="Fantunez provide Ai based creator studio using which creators can build a community, online store, email marketing strategy, and secure brand deals."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collab;
