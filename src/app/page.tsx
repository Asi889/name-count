import { promises as fs } from "fs";
import Autocomplete from "@/components/Autocomplete";
import bg from "../../public/images/pink.jpg";
import Image from "next/image";
// import Chart from "@/components/Chart";

export default async function Home() {
  const jwomen = await fs.readFile(process.cwd() + "/data/jf.json", "utf8");
  const jewishWomen = JSON.parse(jwomen);
  const men = await fs.readFile(process.cwd() + "/data/jm.json", "utf8");
  const jMen = JSON.parse(men);
  const allD = [...jMen, ...jewishWomen];

  return (
    <div className="text-center w-full h-screen">
      {/* <img
        src={bg.src}
        alt=""
        className="absolute h-full w-full object-fill z-0"
      /> */}
      <div className="z-50">
        <Autocomplete data={allD} />
      </div>
    </div>
  );
}
