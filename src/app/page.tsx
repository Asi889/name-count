import Container from "@/components/Container";
import { gernateData } from "@/utils/getAllData";
import { Suspense } from "react";

export default async function Home() {
  const data = (await gernateData()) ?? {
    allData: [],
    names: [],
  };

  return (
    <div className="text-center w-full h-screen overflow-x-hidden bg-[#C9D9DA]">
      <Suspense>
        <Container data={data.allData} names={data.names} />
      </Suspense>
    </div>
  );
}
