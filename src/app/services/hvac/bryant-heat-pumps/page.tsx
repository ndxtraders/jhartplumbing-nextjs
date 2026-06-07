import type { Metadata } from "next";
import { getPageMeta } from "@/lib/pageMeta";

export const metadata: Metadata = getPageMeta("/services/hvac/bryant-heat-pumps");

export { default } from "./content";
