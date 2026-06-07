import type { Metadata } from "next";
import { getPageMeta } from "@/lib/pageMeta";

export const metadata: Metadata = getPageMeta("/services/hvac/bryant-ductless-mini-split");

export { default } from "./content";
