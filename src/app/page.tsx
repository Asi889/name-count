import Container from "@/components/Container";
import { gernateData } from "@/utils/getAllData";

export default async function Home() {
  const data = await gernateData();

  return (
    <div className="text-center w-full h-screen overflow-x-hidden bg-[#C9D9DA]">
      {/* <div className="z-50 pt-20 px-6"> */}
      <Container data={data.allData} names={data.names} />
      {/* </div> */}
    </div>
  );
}
