import {
  ComponentBlockHeroBanner,
  ComponentBlockSlider,
  ComponentBlockInfoTextImage,
  ComponentBlockBenefits,
  ComponentSubBlockSliderSlide,
  ComponentBlockProductCard,
  ComponentBlockProductCardsSlider,
  ComponentBlockPartnersLogos,
  ComponentBlockConsumableCard,
  ComponentBlockSubProductSlider,
  Maybe,
  SubProductCategoryEntityResponse,
  SubProductCategory,
  ComponentBlockComparisonTable,
  ComponentBlockFaq,
  ComponentBlockInfoSections,
  ComponentBlockProductsGrid,
  ComponentSubBlockInfoSection,
  ComponentBlockSubProductGrid,
  ComponentSharedButton,
  ComponentBlockInfoSectionsRow,
  ComponentBlockServiceFrequencies,
  ComponentBlockThreeInfoBlocks,
  ComponentBlockNavigationSections
} from '~/models/strapi-types/auto-generated'

export type SubBlockSliderSlide = ComponentSubBlockSliderSlide

export type BlockHeroBanner = ComponentBlockHeroBanner
export type BlockSlider = ComponentBlockSlider
export type BlockInfoTextImage = ComponentBlockInfoTextImage
export type BlockBenefits = ComponentBlockBenefits
export type BlockProductCard = {
  productCard: ComponentBlockProductCard
  navigationTitle: string
  pageUrl: string
  id: number
}
export type BlockProductCardsSlider = ComponentBlockProductCardsSlider
export type BlockPartnersLogos = ComponentBlockPartnersLogos
export type BlockSubProductCard = ComponentBlockConsumableCard
export type BlockSubProductSlider = {
  title?: string
  description?: string
  button?: ComponentSharedButton
  cards: SubProductCategory[]
}
export type BlockComparisonTable = ComponentBlockComparisonTable
export type BlockFaq = ComponentBlockFaq
export type BlockInfoSections = ComponentBlockInfoSections
export type BlockProductsGrid = ComponentBlockProductsGrid
export type BlockSubProductsGrid = {
  title?: string
  description?: string
  cards: SubProductCategory[]
}

export type BlockInfoSectionsRow = ComponentBlockInfoSectionsRow
export type BlockServiceFrequencies = ComponentBlockServiceFrequencies
export type BlockThreeInfoBlocks = ComponentBlockThreeInfoBlocks
export type BlockNavigationSections = ComponentBlockNavigationSections
