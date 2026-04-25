"use client";

import dynamic from "next/dynamic";

const SpaShell = dynamic(() => import("../spa"), {
  ssr: false,
});

export default function CatchAllPage() {
  return <SpaShell />;
}
