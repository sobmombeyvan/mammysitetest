"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { navLinks } from "@/lib/data";

const routes = [...navLinks.map((link) => link.href), "/contact"];

export default function RoutePrefetch() {
  const router = useRouter();

  useEffect(() => {
    routes.forEach((route) => router.prefetch(route));
  }, [router]);

  return null;
}
