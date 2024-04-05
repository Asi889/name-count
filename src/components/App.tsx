import FrontPage from "@/components/FrontPage";
import { AppProvider } from "@/store/AppProvider";
// import { gernateData } from "@/utils/getAllData";
import { ReactNode, Suspense } from "react";
export const AppComponent = ({ currentName }: { currentName: string }) => {
  return (
    <div className="text-center w-full h-screen overflow-x-hidden bg-[#C9D9DA]">
      <Suspense>
        <AppProvider currentName={currentName}>
          <FrontPage />
        </AppProvider>
      </Suspense>
    </div>
  );
};
