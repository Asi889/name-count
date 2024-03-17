/* eslint-disable @next/next/no-img-element */
import React from "react";
import malePic from "../../public/images/male.png";
import femalePic from "../../public/images/female.png";
import sitting from "../../public/images/sitting.png";
function BackGroundImages({
  fCount,
  mCount,
}: {
  fCount: number;
  mCount: number;
}) {
  return (
    <>
      <div
        className={`z-0 w-fit h-fit absolute bottom-0 right-0 transition-all grid items-end ease-in-out duration-300 lgg ${
          fCount < mCount ? "-bottom-full" : "bottom-0"
        } `}
      >
        <img
          className="w-full h-full  max-h-[300px]"
          src={sitting.src}
          alt=""
        />
      </div>
      <div
        className={`z-0 bg-[#6CB4E5] w-full h-full absolute transition-all grid items-end ease-in-out duration-300 ${
          fCount < mCount ? "-left-0" : "-left-full"
        } `}
      >
        <img className="w-fit h-full  max-h-[300px]" src={malePic.src} alt="" />
      </div>
      <div
        className={`z-0 bg-[#FDADC7] w-full h-full absolute transition-all ease-in-out duration-300 grid items-end justify-end ${
          fCount > mCount ? "-right-0" : "-right-full"
        } `}
      >
        <img
          className="w-3/4 h-full  max-h-[300px]"
          src={femalePic.src}
          alt=""
        />
      </div>
    </>
  );
}

export default BackGroundImages;
