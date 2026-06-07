import type { Metadata } from "next";
import { getPageMeta } from "@/lib/pageMeta";

export const metadata: Metadata = getPageMeta("/services/hvac/bryant-air-conditioners");

export { default } from "./content";
