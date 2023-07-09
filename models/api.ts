import type {
  ResponseCollectionMeta,
  SinglePage,
  CompanyInformation,
  Maybe,
  Error,
  ProductsPage,
} from '~/models/strapi-types/auto-generated'
import { BlockHeroBanner, BlockProductCard } from '~/models/page-block-components'

type DynamicZone = BlockHeroBanner | Error

type ModifyBlock<T> = Omit<T, 'Blocks'> & {
  Blocks?: Maybe<Array<Maybe<DynamicZone>>>
}

export interface SinglePageResponse {
  data: ModifyBlock<SinglePage>[]
  meta: ResponseCollectionMeta
}

export interface CompanyInformationResponse {
  data: CompanyInformation
  meta: ResponseCollectionMeta
}

export interface ProductsPageResponse {
  data: ModifyBlock<ProductsPage>[]
  meta: ResponseCollectionMeta
}

export interface ProductCardsResponse {
  data: {
    title: string
    id: number
    pageUrl: string
    productCard: BlockProductCard
  }[]
  meta: ResponseCollectionMeta
}
