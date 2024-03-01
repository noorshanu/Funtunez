import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Newscard from "../components/Newscard";

import SliderNavigationButton from "../components/SliderNavigationButton";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const data = [
  {
    title:
      "Empowering The Crypto Community: Commendation For The Crypto Express’ Journey",
    imgUrl:
      "data:image/jpeg;base64,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",
    Disc: "you are looking for a reliable and authentic crypto service, look no further than The Crypto Express. They have everything you need to succeed in the crypto space: education, ",
    Auther: "Bitcoinik ",
    Time: "crypto media house",
    IconUrl: "https://bitcoinik.com/wp-content/uploads/2020/04/logo22.png.webp",
    link: "https://bitcoinik.com/empowering-the-crypto-community-a-commendation-for-the-crypto-express-journey/",
  },

  {
    title: "The Crypto Express: Your Gateway to the World of Cryptocurrency",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXBHoQWYfcGUz3AOfPelV9crYFzEu6lLhEA&usqp=CAU",
    Disc: "The Crypto express content is unbiased, easy to understand, and reliable. They also have a great community of crypto enthusiasts who want to succeed in this space. I highly recommend The Crypto Express  ",
    Auther: "Binance Feed",
    Time: "Top Crypto exchange",
    IconUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4AcWXAQYDMRREF9DTBEBF7Un2JFWof6ZaeqvaA7TBp4xh2C9mGdjEviebJPlL5Tne7TkSi+NJ+DcTFjgkLHBIWOCQsMAhYYKjxHz4nhES8+CXTF2CwO8K/u8rJR5nBK4jHwVXEvmNrolSgsC1BMIlcEsAk9hJWx9ZqUTCSdsmJhwFNQZPyDFyI6BG3r2SERwuhxrh2Z9IMDgwgsC1BMJBYlVwSPgF7L/APwnry7DXl6Ee6rkbkYAXtmI9P/yHkf849l9I/Fcy/6XUfy33Fyb+0sxfnLrK8x8BCDupxYlOYwAAAABJRU5ErkJggg==",
    link: "https://www.binance.com/en-IN/feed/post/3315653283282",
  },

  {
    title: "BlackRock expands crypto strategy with  application",
    imgUrl:
      "https://www.finextra.com/finextra-images/top_pics/xl/bitcoin-3.jpg",
    Disc: "In a filing through Nasdaq, the world’s largest asset manager revealed its plans to create an that holds Ethereum’s ether token (ETH), bolstering its cryptocurrency strategy.",
    Auther: "",
    Time: "10 November 2023",
    link: "https://www.finextra.com/newsarticle/43273/blackrock-expands-crypto-strategy-with-ethereum-etf-application",
  },
  {
    title: "ETH crosses $2k as BlackRock’s Ethereum Trust  filing surfaces",
    imgUrl:
      "https://cryptoslate.com/wp-content/themes/cryptoslate-2020/imgresize/timthumb.php?src=https://cryptoslate.com/wp-content/uploads/2023/11/ethereum-staking.jpg&w=600&h=315&q=75",
    Disc: "A new filing with the Delaware Division of Corporations suggests BlackRock is ready to move into Ethereum ETFs next.",
    Auther: "Jacob Oliver",
    Time: "Nov. 9, 2023",
    link: "https://cryptoslate.com/eth-crosses-2k-as-blackrocks-ethereum-trust-filing-surfaces/",
  },
  {
    title: " Are Making Their US Debut in Industry Victory",
    imgUrl:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJiY7d_VyuLg/v1/1200x800.jpg",
    Disc: "The first-ever exchange-traded funds based on Ether futures began trading in the US, capping a years-long battle by firms to provide investment vehicles centered on the second-largest digital token.",
    Auther: "Vildana Hajric",
    Time: "October 2, 2023",
    link: "https://www.bloomberg.com/news/articles/2023-10-02/ether-futures-eth-etfs-are-making-their-debut-in-the-us-in-industry-victory",
  },
];

function LatestNews() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.2,
        scrollTrigger: {
          trigger: "#section",
          toggleActions: "play pause none reset",
          start: "top 60%",
        },
      });

      tl.fromTo("#title", { x: -60, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(
          "#line",
          { scaleX: 0 },
          { scaleX: 1, transformOrigin: "left" },
          "<"
        )
        .fromTo("#cards", { x: 100, opacity: 0 }, { x: 0, opacity: 1 });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative bg-secondary py-12">
      <div id="section" className="container-wrapper">
        <div className="my-3 w-fit">
          <h1
            id="title"
            className="text-grad text-4xl font-work font-bold font-64"
          >
            Our Blogs
          </h1>
          <div id="line" className="bg-white h-[3px] w-full my-2">
            {" "}
          </div>
        </div>

        <div id="cards" className="mt-3 mb-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="py-5 [&_.swiper-slide]:!h-auto"
            modules={[Navigation]}
            navigation={{
              nextEl: ".nextEl",
              prevEl: ".prevEl",
            }}
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <Newscard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  Disc={item.Disc}
                  Auther={item.Auther}
                  Time={item.Time}
                  IconUrl={item.IconUrl}
                  link={item.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex items-center justify-center space-x-5">
          <SliderNavigationButton className="prevEl rotate-180" />
          <SliderNavigationButton className="nextEl" />
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
