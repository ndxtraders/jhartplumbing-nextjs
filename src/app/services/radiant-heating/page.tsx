import type { Metadata } from "next";
import { getPageMeta } from "@/lib/pageMeta";

export const metadata: Metadata = getPageMeta("/services/radiant-heating");

export { default } from "./content";
