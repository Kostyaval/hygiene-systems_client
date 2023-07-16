import {
  CompanyInformation,
  ComponentBlockFaq,
  ComponentBlockProductCard,
  ComponentSubBlockInfoSection,
  Hoop24,
} from '~/models/strapi-types/auto-generated'

export type CompanyInformationState = CompanyInformation
export type Hoop24Page = Hoop24

export type ProductCardsState = {
  navigationTitle: string
  pageUrl: string
  id: number
  productCard: ComponentBlockProductCard
}[]

export type InfoSection = ComponentSubBlockInfoSection

export type NavigationItem = {
  id?: number
  pageUrl: string
  createdAt?: string
  updatedAt?: string
  Rank?: number
  navigationTitle: string
}
