import type {
  ResponseCollectionMeta,
  SinglePage,
  CompanyInformationInput,
  Maybe,
  Error,
} from '~/models/strapi-types/auto-generated'
import { BlockHeroBanner } from '~/models/page-block-components'

type DynamicZone = BlockHeroBanner | Error

type ModifyBlock<T> = Omit<T, 'Blocks'> & {
  Blocks?: Maybe<Array<Maybe<DynamicZone>>>
}

export interface SinglePageResponse {
  data: ModifyBlock<SinglePage>[]
  meta: ResponseCollectionMeta
}

export interface CompanyInformationResponse {
  data: CompanyInformationInput
  meta: ResponseCollectionMeta
}
