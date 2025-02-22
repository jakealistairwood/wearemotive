import { defineQuery } from "next-sanity"

export const HOME_PAGE_QUERY = defineQuery(`
    *[_id == "siteSettings"][0]{
        homePage->{
            ...,
            content[]{
                ...,
                _type == "faqs" => {
                    ...,
                    faqs[]->{
                        _id,
                        title,
                        body,
                        "text": pt::text(body)
                    }
                }
            }
        }
    }
`)

export const PAGE_QUERY = defineQuery(`
    *[_type == "page" && slug.current == $slug][0]{
        ...,
        "seo": {
            "title": coalesce(seo.title, title, ""),
            "description": coalesce(seo.description,  ""),
            "image": seo.image,
            "noIndex": seo.noIndex == true
        },
        content[]{
            ...,
            _type == "faqs" => {
                ...,
                faqs[]->{
                    _id,
                    title,
                    body,
                    "text": pt::text(body)
                }
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

export const SITEMAP_QUERY = defineQuery(`
    *[_type in ["page", "post"] && defined(slug.current)] {
        "href": select(
            _type == "page" => "/" + slug.current,
            _type == "post" => "/posts/" + slug.current,
            slug.current
        ),
        _updatedAt
    }
`)