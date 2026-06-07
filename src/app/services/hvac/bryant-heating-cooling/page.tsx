import type { Metadata } from "next";
import { getPageMeta } from "@/lib/pageMeta";

export const metadata: Metadata = getPageMeta("/services/hvac/bryant-heating-cooling");

export { default } from "./content";
