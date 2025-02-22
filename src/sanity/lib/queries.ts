import { defineQuery } from "next-sanity"

export const HOME_PAGE_QUERY = defineQuery(`
    *[_id == "siteSettings"][0]{
        homePage->{
            ...,
            content[]{
                ...,
                _type == "faqs" => {
                    ...,
                    faqs[]->
                }
            }
        }
    }
`)

export const PAGE_QUERY = defineQuery(`
    *[_type == "page" && slug.current == $slug][0]{
        ...,
        content[]{
            ...,
            _type == "faqs" => {
                ...,
                faqs[]->
            }
        }
    }
`)

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
    _id, title, slug
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
    title, body, mainImage
  }`)