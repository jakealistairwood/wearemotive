import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { siteSettingsType } from './siteSettingsType'
import { pageType } from './pageType'
import { pageBuilderType } from './pageBuilderType'
import { faqType } from './documents/faqType'
import { faqsType } from './blocks/faqsType'
import { featuresType } from './blocks/featuresType'
import { heroType } from './blocks/heroType'
import { splitImageType } from './blocks/splitImageType'
import { seoType } from './seoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, siteSettingsType, pageType, pageBuilderType, faqType, faqsType, featuresType, heroType, splitImageType, seoType],
}
