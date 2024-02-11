

function Newscard({ title, imgUrl, Disc, Auther, Time, link,IconUrl }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="blog-box w-full cursor-pointer h-full flex flex-col nft px-4 pt-1 "
    >
      <span className="flex-1">
        {/* <LinesEllipsis
          className="text-base font-bold heading mb-4 text-[#4d5060]"
          text={title}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        /> */}

        <h3 className="text-base font-bold heading mb-2 text-[#ffffff] max-lines">
          {title}...
        </h3>
        <img
          alt=""
          className=" rounded-[20px] object-cover min-h-[190px] max-h-[250px] max-w-full mx-auto"
          src={imgUrl}
        />
        <p
          style={{ "--h": "10.2em" }}
          className="pt-4 mb-1 text-base text-[#ffffff] description max-lines"
        >
          {Disc}...
        </p>
        {/* <LinesEllipsis
          className="pt-4 mb-1 text-base text-[#4d5060] description"
          text={Disc}
          maxLine="5"
          ellipsis="..."
          trimRight
          basedOn="letters"
        /> */}
      </span>
      {/* <img src={IconUrl} alt="" className=" rounded-full p-2 h-[54px] w-[54px] bg-[#000]" />
      <span className="m-0 pt-2 text-xs font-bold time text-[#b8b8b8]">
       
        {Auther}
        <br />
        {Time}
      </span> */}
    </a>
  );
}

export default Newscard;
