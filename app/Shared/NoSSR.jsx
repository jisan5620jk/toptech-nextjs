"use client"; // only needed in Next.js App Router

import { useEffect, useState } from "react";

const NoSSR = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <>{children}</>;
};

export default NoSSR;
