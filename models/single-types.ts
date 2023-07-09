import {
  CompanyInformation,
  ComponentBlockFaq,
  ComponentBlockProductCard,
  ComponentSubBlockInfoSection,
} from '~/models/strapi-types/auto-generated'

export type CompanyInformationState = CompanyInformation

export type ProductCardsState = {
  navigationTitle: string
  pageUrl: string
  id: number
  productCard: ComponentBlockProductCard
}[]

export type InfoSection = ComponentSubBlockInfoSection
