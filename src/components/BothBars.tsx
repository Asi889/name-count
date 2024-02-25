import React from "react";
import NumberComponent from "./NumberComponent";
import ProgressBar from "./ProgressBar";

function BothBars(props: any) {
  const { mCount, fCount, percent } = props;
  return (
    <div className="w-full mx-auto relative flex gap-x-6">
      {/* <img
            src="https://media.giphy.com/media/xT4uQAvtDlvsx2ITkI/giphy.gif?cid=ecf05e47rzhfc494lcps7yswobhp2kvwyglctk8qyi32esxo&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt=""
            className="absolute h-[100px] w-[100px] object-fill z-0"
          /> */}
      <div className="w-full text-left">
        <NumberComponent value={mCount} />
        <ProgressBar
          male={true}
          bgcolor={"#458def"}
          completed={`${percent[0]}`}
        />
        <div className="text-center pt-2">{`\u2642`}</div>
      </div>
      <div className="w-full text-right">
        <NumberComponent value={fCount} />
        <ProgressBar
          male={false}
          bgcolor={"#eb67b8"}
          completed={`${percent[1]}`}
        />
        <div className="pt-2 text-center">{`\u2640`}</div>
      </div>
    </div>
  );
}

export default BothBars;
