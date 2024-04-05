var fs = require("fs");
const { promises } = fs;
const makeNames = async () => {
  const jsonData = await Promise.all([
    promises.readFile(process.cwd() + "/data/jf.json", "utf8"),
    promises.readFile(process.cwd() + "/data/jm.json", "utf8"),
  ]);
  const data = jsonData.map((item) => JSON.parse(item)).flat();
  const allNames = data.map((item) => ({
    name: item.first_name,
    url: encodeURIComponent(item.first_name),
  }));
  return allNames;
};

const make = async () => {
  const names = await makeNames();
  console.log(names);

  for (const { name, url } of names) {
    fs.mkdirSync(process.cwd() + "/src/app/" + url, { recursive: true });
    fs.writeFileSync(
      process.cwd() + "/src/app/" + url + "/page.tsx",
      `
import { AppComponent } from "@/components/App";
      
// THIS FILE IS AUTOGENERATED - DO NOT MODIFY- THIS FILE IS AUTOGENERATED - DO NOT MODIFY only run again in scripts/make-pages.js
      
export default async function page() {
    return <AppComponent currentName={"${name}"} />;
}
            
            `
    );
  }
};
make();