"use client";

import dynamic from "next/dynamic";

const Spa = dynamic(() => import("./spa"), { ssr: false, loading: () => null });

export default function SpaShell() {
  return <Spa />;
}

