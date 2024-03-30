import { permanentRedirect } from "next/navigation";
import React from "react";

function page() {
  permanentRedirect(`/`);
}

export default page;
