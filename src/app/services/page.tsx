import type { Metadata } from "next";
import { getPageMeta } from "@/lib/pageMeta";

export const metadata: Metadata = getPageMeta("/services");

export { default } from "./content";
