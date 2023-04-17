import { ComponentBlockHeroBanner, Maybe } from '~/models/strapi-types/auto-generated'

import type { ImageFile } from '~/models/strapi-types/transformed-fields'
// @ts-ignore

type Modify<T> = Omit<T, 'image' | 'backgroundImage' | 'metaImage'> & {
  [K in keyof T & ('image' | 'backgroundImage' | 'metaImage')]: Maybe<ImageFile>
}

export type BlockHeroBanner = Modify<ComponentBlockHeroBanner>
