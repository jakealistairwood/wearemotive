import { PageBuilder } from "@/components/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function Page() {
  const { data: page } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  })
  return page?.homePage?.content ? (
    <PageBuilder content={page?.homePage?.content} />
  ) : null;
}