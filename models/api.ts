import type {
  ResponseCollectionMeta,
  SinglePage,
  CompanyInformation,
  Maybe,
  Error,
  ProductsPage,
  Hoop24, ArticleEntity
} from '~/models/strapi-types/auto-generated'
import type { BlockHeroBanner, BlockProductCard } from '~/models/page-block-components'
import type { NavigationItem } from '~/models/single-types'

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

export interface hoop24Response {
  data: Hoop24
  meta: ResponseCollectionMeta
}

export interface ProductsPageResponse {
  data: ModifyBlock<ProductsPage>[]
  meta: ResponseCollectionMeta
}

export interface BlogResponse {
  data: ModifyBlock<ArticleEntity>[]
  meta: ResponseCollectionMeta
}
export interface ArticleResponse {
  data: ModifyBlock<ArticleEntity>[]
  meta: ResponseCollectionMeta
}

export interface ProductCardsResponse {
  data: {
    title: string
    Rank: string
    id: number
    pageUrl: string
    productCard: BlockProductCard
  }[]
  meta: ResponseCollectionMeta
}

export interface SinglePagesResponse {
  data: NavigationItem[]
  meta: ResponseCollectionMeta
}
