
export type ImageFile = {
  url: string
  width: number
  height: number
  alternativeText: string
}

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  ArticleBodyDynamicZoneInput: any
  ContentReadyBlockBlockDynamicZoneInput: any
  ProductsPageBlocksDynamicZoneInput: any
  SinglePageBlocksDynamicZoneInput: any
}

export type Error = {
  __typename?: 'Error'
  code: Scalars['String']
  message?: Maybe<Scalars['String']>
}

export type Pagination = {
  __typename?: 'Pagination'
  total: Scalars['Int']
  page: Scalars['Int']
  pageSize: Scalars['Int']
  pageCount: Scalars['Int']
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  not?: InputMaybe<IdFilterInput>
  eq?: InputMaybe<Scalars['ID']>
  eqi?: InputMaybe<Scalars['ID']>
  ne?: InputMaybe<Scalars['ID']>
  nei?: InputMaybe<Scalars['ID']>
  startsWith?: InputMaybe<Scalars['ID']>
  endsWith?: InputMaybe<Scalars['ID']>
  contains?: InputMaybe<Scalars['ID']>
  notContains?: InputMaybe<Scalars['ID']>
  containsi?: InputMaybe<Scalars['ID']>
  notContainsi?: InputMaybe<Scalars['ID']>
  gt?: InputMaybe<Scalars['ID']>
  gte?: InputMaybe<Scalars['ID']>
  lt?: InputMaybe<Scalars['ID']>
  lte?: InputMaybe<Scalars['ID']>
  null?: InputMaybe<Scalars['Boolean']>
  notNull?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  not?: InputMaybe<BooleanFilterInput>
  eq?: InputMaybe<Scalars['Boolean']>
  eqi?: InputMaybe<Scalars['Boolean']>
  ne?: InputMaybe<Scalars['Boolean']>
  nei?: InputMaybe<Scalars['Boolean']>
  startsWith?: InputMaybe<Scalars['Boolean']>
  endsWith?: InputMaybe<Scalars['Boolean']>
  contains?: InputMaybe<Scalars['Boolean']>
  notContains?: InputMaybe<Scalars['Boolean']>
  containsi?: InputMaybe<Scalars['Boolean']>
  notContainsi?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['Boolean']>
  gte?: InputMaybe<Scalars['Boolean']>
  lt?: InputMaybe<Scalars['Boolean']>
  lte?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  notNull?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  not?: InputMaybe<StringFilterInput>
  eq?: InputMaybe<Scalars['String']>
  eqi?: InputMaybe<Scalars['String']>
  ne?: InputMaybe<Scalars['String']>
  nei?: InputMaybe<Scalars['String']>
  startsWith?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  contains?: InputMaybe<Scalars['String']>
  notContains?: InputMaybe<Scalars['String']>
  containsi?: InputMaybe<Scalars['String']>
  notContainsi?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  null?: InputMaybe<Scalars['Boolean']>
  notNull?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  not?: InputMaybe<IntFilterInput>
  eq?: InputMaybe<Scalars['Int']>
  eqi?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  nei?: InputMaybe<Scalars['Int']>
  startsWith?: InputMaybe<Scalars['Int']>
  endsWith?: InputMaybe<Scalars['Int']>
  contains?: InputMaybe<Scalars['Int']>
  notContains?: InputMaybe<Scalars['Int']>
  containsi?: InputMaybe<Scalars['Int']>
  notContainsi?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  null?: InputMaybe<Scalars['Boolean']>
  notNull?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  not?: InputMaybe<FloatFilterInput>
  eq?: InputMaybe<Scalars['Float']>
  eqi?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  nei?: InputMaybe<Scalars['Float']>
  startsWith?: InputMaybe<Scalars['Float']>
  endsWith?: InputMaybe<Scalars['Float']>
  contains?: InputMaybe<Scalars['Float']>
  notContains?: InputMaybe<Scalars['Float']>
  containsi?: InputMaybe<Scalars['Float']>
  notContainsi?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  null?: InputMaybe<Scalars['Boolean']>
  notNull?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  not?: InputMaybe<DateFilterInput>
  eq?: InputMaybe<Scalars['Date']>
  eqi?: InputMaybe<Scalars['Date']>
  ne?: InputMaybe<Scalars['Date']>
  nei?: InputMaybe<Scalars['Date']>
  startsWith?: InputMaybe<Scalars['Date']>
  endsWith?: InputMaybe<Scalars['Date']>
  contains?: InputMaybe<Scalars['Date']>
  notContains?: InputMaybe<Scalars['Date']>
  containsi?: InputMaybe<Scalars['Date']>
  notContainsi?: InputMaybe<Scalars['Date']>
  gt?: InputMaybe<Scalars['Date']>
  gte?: InputMaybe<Scalars['Date']>
  lt?: InputMaybe<Scalars['Date']>
  lte?: InputMaybe<Scalars['Date']>
  null?: InputMaybe<Scalars['Boolean']>
  notNull?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  not?: InputMaybe<DateTimeFilterInput>
  eq?: InputMaybe<Scalars['DateTime']>
  eqi?: InputMaybe<Scalars['DateTime']>
  ne?: InputMaybe<Scalars['DateTime']>
  nei?: InputMaybe<Scalars['DateTime']>
  startsWith?: InputMaybe<Scalars['DateTime']>
  endsWith?: InputMaybe<Scalars['DateTime']>
  contains?: InputMaybe<Scalars['DateTime']>
  notContains?: InputMaybe<Scalars['DateTime']>
  containsi?: InputMaybe<Scalars['DateTime']>
  notContainsi?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  null?: InputMaybe<Scalars['Boolean']>
  notNull?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not?: InputMaybe<JsonFilterInput>
  eq?: InputMaybe<Scalars['JSON']>
  eqi?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  nei?: InputMaybe<Scalars['JSON']>
  startsWith?: InputMaybe<Scalars['JSON']>
  endsWith?: InputMaybe<Scalars['JSON']>
  contains?: InputMaybe<Scalars['JSON']>
  notContains?: InputMaybe<Scalars['JSON']>
  containsi?: InputMaybe<Scalars['JSON']>
  notContainsi?: InputMaybe<Scalars['JSON']>
  gt?: InputMaybe<Scalars['JSON']>
  gte?: InputMaybe<Scalars['JSON']>
  lt?: InputMaybe<Scalars['JSON']>
  lte?: InputMaybe<Scalars['JSON']>
  null?: InputMaybe<Scalars['Boolean']>
  notNull?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export type ComponentBlockArticlesGrid = {
  __typename?: 'ComponentBlockArticlesGrid'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  image: Maybe<ImageFile>
}

export type ComponentBlockBenefits = {
  __typename?: 'ComponentBlockBenefits'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  perks?: Maybe<Array<Maybe<ComponentSubBlockBenefitsPerks>>>
  buttons?: Maybe<Array<Maybe<ComponentSharedButton>>>
}

export type ComponentBlockBenefitsPerksArgs = {
  filters?: InputMaybe<ComponentSubBlockBenefitsPerksFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockBenefitsButtonsArgs = {
  filters?: InputMaybe<ComponentSharedButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockComparisonTable = {
  __typename?: 'ComponentBlockComparisonTable'
  id: Scalars['ID']
  comparisonTitle?: Maybe<Scalars['String']>
  comparisonHeadings?: Maybe<Array<Maybe<ComponentSubBlockTitleGroupe>>>
  row?: Maybe<Array<Maybe<ComponentSubBlockSomparisonRow>>>
}

export type ComponentBlockComparisonTableComparisonHeadingsArgs = {
  filters?: InputMaybe<ComponentSubBlockTitleGroupeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockComparisonTableRowArgs = {
  filters?: InputMaybe<ComponentSubBlockSomparisonRowFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockConsumableCardFiltersInput = {
  title?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  detailsTitle?: InputMaybe<StringFilterInput>
  detailsSubtitle?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<StringFilterInput>
  colors?: InputMaybe<ComponentSubBlockColorsFiltersInput>
  detailsDescription?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentBlockConsumableCardFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentBlockConsumableCardFiltersInput>>>
  not?: InputMaybe<ComponentBlockConsumableCardFiltersInput>
}

export type ComponentBlockConsumableCardInput = {
  id?: InputMaybe<Scalars['ID']>
  title?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  detailsTitle?: InputMaybe<Scalars['String']>
  detailsSubtitle?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Scalars['String']>
  colors?: InputMaybe<Array<InputMaybe<ComponentSubBlockColorsInput>>>
  detailsDescription?: InputMaybe<Scalars['String']>
  image: Maybe<ImageFile>
}

export type ComponentBlockConsumableCard = {
  __typename?: 'ComponentBlockConsumableCard'
  id: Scalars['ID']
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  detailsTitle: Scalars['String']
  detailsSubtitle?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['String']>
  colors?: Maybe<Array<Maybe<ComponentSubBlockColors>>>
  detailsDescription?: Maybe<Scalars['String']>
  image: Maybe<ImageFile>
}

export type ComponentBlockConsumableCardColorsArgs = {
  filters?: InputMaybe<ComponentSubBlockColorsFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockContentReadyBlock = {
  __typename?: 'ComponentBlockContentReadyBlock'
  id: Scalars['ID']
  block?: Maybe<ContentReadyBlockEntityResponse>
}

export type ComponentBlockFaq = {
  __typename?: 'ComponentBlockFaq'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  entries?: Maybe<Array<Maybe<ComponentSubBlockFaqEntry>>>
}

export type ComponentBlockFaqEntriesArgs = {
  filters?: InputMaybe<ComponentSubBlockFaqEntryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum Enum_Componentblockherobanner_Bottomcomponent {
  MadeInNz = 'MadeInNZ',
  Perks = 'Perks',
}

export enum Enum_Componentblockherobanner_Imageposition {
  Center = 'center',
  Bottom = 'bottom',
  RightOverflow = 'right_overflow',
  RightOverflowBottom = 'right_overflow_bottom',
}

export type ComponentBlockHeroBanner = {
  __typename?: 'ComponentBlockHeroBanner'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  image: Maybe<ImageFile>
  bottomComponent?: Maybe<Enum_Componentblockherobanner_Bottomcomponent>
  buttons?: Maybe<Array<Maybe<ComponentSharedButton>>>
  subtitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  sustainableActive?: Maybe<Scalars['Boolean']>
  sustainableTags?: Maybe<Scalars['String']>
  textColorTheme?: Maybe<Scalars['Boolean']>
  backgroundColor?: Maybe<ComponentSharedColor>
  backgroundImage: Maybe<ImageFile>
  tooltip?: Maybe<ComponentSharedTooltipHint>
  backgroundImageMobile?: Maybe<UploadFileEntityResponse>
  imageMobile?: Maybe<UploadFileEntityResponse>
  imagePosition?: Maybe<Enum_Componentblockherobanner_Imageposition>
}

export type ComponentBlockHeroBannerButtonsArgs = {
  filters?: InputMaybe<ComponentSharedButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockInfoSectionsRow = {
  __typename?: 'ComponentBlockInfoSectionsRow'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  sections: Array<Maybe<ComponentSubBlockInfoSection>>
}

export type ComponentBlockInfoSectionsRowSectionsArgs = {
  filters?: InputMaybe<ComponentSubBlockInfoSectionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum Enum_Componentblockinfosections_Backgroundcolor {
  NeutralLight = 'neutral_light',
  Neutral = 'neutral',
}

export type ComponentBlockInfoSections = {
  __typename?: 'ComponentBlockInfoSections'
  id: Scalars['ID']
  sections?: Maybe<Array<Maybe<ComponentSubBlockInfoSection>>>
  title?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Enum_Componentblockinfosections_Backgroundcolor>
}

export type ComponentBlockInfoSectionsSectionsArgs = {
  filters?: InputMaybe<ComponentSubBlockInfoSectionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum Enum_Componentblockinfotextimage_Imageposition {
  Left = 'left',
  Right = 'right',
  RightOverflow = 'right_overflow',
}

export type ComponentBlockInfoTextImage = {
  __typename?: 'ComponentBlockInfoTextImage'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  bottomText?: Maybe<Scalars['String']>
  backgroundImage: Maybe<ImageFile>
  image: Maybe<ImageFile>
  imagePosition?: Maybe<Enum_Componentblockinfotextimage_Imageposition>
  color?: Maybe<ComponentSharedColor>
  buttons?: Maybe<Array<Maybe<ComponentSharedButton>>>
  whiteTextTheme?: Maybe<Scalars['Boolean']>
  hoopPlaceholder?: Maybe<Scalars['Boolean']>
}

export type ComponentBlockInfoTextImageButtonsArgs = {
  filters?: InputMaybe<ComponentSharedButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockNavigationSections = {
  __typename?: 'ComponentBlockNavigationSections'
  id: Scalars['ID']
  banner?: Maybe<Array<Maybe<ComponentSubBlockBanner>>>
}

export type ComponentBlockNavigationSectionsBannerArgs = {
  filters?: InputMaybe<ComponentSubBlockBannerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockPartnersLogos = {
  __typename?: 'ComponentBlockPartnersLogos'
  id: Scalars['ID']
  title: Scalars['String']
  partners?: Maybe<Array<Maybe<ComponentSubBlockPartnerLogoLink>>>
}

export type ComponentBlockPartnersLogosPartnersArgs = {
  filters?: InputMaybe<ComponentSubBlockPartnerLogoLinkFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockProductCardFiltersInput = {
  title?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentBlockProductCardFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentBlockProductCardFiltersInput>>>
  not?: InputMaybe<ComponentBlockProductCardFiltersInput>
}

export type ComponentBlockProductCardInput = {
  id?: InputMaybe<Scalars['ID']>
  title?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Scalars['String']>
  image: Maybe<ImageFile>
}

export type ComponentBlockProductCard = {
  __typename?: 'ComponentBlockProductCard'
  id: Scalars['ID']
  title: Scalars['String']
  description: Scalars['String']
  tags: Scalars['String']
  image: Maybe<ImageFile>
}

export type ComponentBlockProductCardsSlider = {
  __typename?: 'ComponentBlockProductCardsSlider'
  id: Scalars['ID']
  title: Scalars['String']
  button: ComponentSharedButton
}

export type ComponentBlockProductsGrid = {
  __typename?: 'ComponentBlockProductsGrid'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type ComponentBlockServiceFrequencies = {
  __typename?: 'ComponentBlockServiceFrequencies'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  services: Array<Maybe<ComponentSubBlockServiceBlock>>
}

export type ComponentBlockServiceFrequenciesServicesArgs = {
  filters?: InputMaybe<ComponentSubBlockServiceBlockFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum Enum_Componentblockslider_Componentview {
  Common = 'common',
  Testimonials = 'testimonials',
  Stepper = 'stepper',
}

export type ComponentBlockSlider = {
  __typename?: 'ComponentBlockSlider'
  id: Scalars['ID']
  slides?: Maybe<Array<Maybe<ComponentSubBlockSliderSlide>>>
  commonCta?: Maybe<ComponentSharedButton>
  componentView: Enum_Componentblockslider_Componentview
}

export type ComponentBlockSliderSlidesArgs = {
  filters?: InputMaybe<ComponentSubBlockSliderSlideFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockSubProductGrid = {
  __typename?: 'ComponentBlockSubProductGrid'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  cards?: Maybe<SubProductCategoryRelationResponseCollection>
}

export type ComponentBlockSubProductGridCardsArgs = {
  filters?: InputMaybe<SubProductCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockSubProductSlider = {
  __typename?: 'ComponentBlockSubProductSlider'
  id: Scalars['ID']
  cards?: Maybe<SubProductCategoryRelationResponseCollection>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  button?: Maybe<ComponentSharedButton>
}

export type ComponentBlockSubProductSliderCardsArgs = {
  filters?: InputMaybe<SubProductCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentBlockThreeInfoBlocks = {
  __typename?: 'ComponentBlockThreeInfoBlocks'
  id: Scalars['ID']
  infoBlocks?: Maybe<Array<Maybe<ComponentSubBlockInfoBlock>>>
  color?: Maybe<ComponentSharedColor>
  banner?: Maybe<ComponentSubBlockBanner>
}

export type ComponentBlockThreeInfoBlocksInfoBlocksArgs = {
  filters?: InputMaybe<ComponentSubBlockInfoBlockFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum Enum_Componentsharedbutton_Icon {
  Hygiene = 'hygiene',
  Youtube = 'youtube',
  Linkedin = 'linkedin',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Twitter = 'twitter',
  Tiktok = 'tiktok',
  Telegram = 'telegram',
  Whatsapp = 'whatsapp',
  Play = 'play',
}

export enum Enum_Componentsharedbutton_Action {
  OpenContactModal = 'open_contact_modal',
}

export type ComponentSharedButtonFiltersInput = {
  label?: InputMaybe<StringFilterInput>
  href?: InputMaybe<StringFilterInput>
  externalLink?: InputMaybe<BooleanFilterInput>
  icon?: InputMaybe<StringFilterInput>
  openYoutubeVideo?: InputMaybe<StringFilterInput>
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSharedButtonFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedButtonFiltersInput>>>
  not?: InputMaybe<ComponentSharedButtonFiltersInput>
}

export type ComponentSharedButtonInput = {
  id?: InputMaybe<Scalars['ID']>
  label?: InputMaybe<Scalars['String']>
  href?: InputMaybe<Scalars['String']>
  externalLink?: InputMaybe<Scalars['Boolean']>
  icon?: InputMaybe<Enum_Componentsharedbutton_Icon>
  openYoutubeVideo?: InputMaybe<Scalars['String']>
  action?: InputMaybe<Enum_Componentsharedbutton_Action>
}

export type ComponentSharedButton = {
  __typename?: 'ComponentSharedButton'
  id: Scalars['ID']
  label?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
  externalLink?: Maybe<Scalars['Boolean']>
  icon?: Maybe<Enum_Componentsharedbutton_Icon>
  openYoutubeVideo?: Maybe<Scalars['String']>
  action?: Maybe<Enum_Componentsharedbutton_Action>
}

export enum Enum_Componentsharedcolor_Color {
  NeutralLight = 'neutral_light',
  Neutral = 'neutral',
  TurquoiseLight = 'turquoise_light',
  Turquoise = 'turquoise',
  OrangeLight = 'orange_light',
  Orange = 'orange',
  PurpleLight = 'purple_light',
  Purple = 'purple',
  RedLight = 'red_light',
  Red = 'red',
  Transparent = 'transparent',
}

export type ComponentSharedColor = {
  __typename?: 'ComponentSharedColor'
  id: Scalars['ID']
  color?: Maybe<Enum_Componentsharedcolor_Color>
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
}

export type ComponentSharedMetaSocialFiltersInput = {
  socialNetwork?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
}

export type ComponentSharedMetaSocialInput = {
  id?: InputMaybe<Scalars['ID']>
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>
  title?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  image: Maybe<ImageFile>
}

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial'
  id: Scalars['ID']
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork
  title: Scalars['String']
  description: Scalars['String']
  image: Maybe<ImageFile>
}

export type ComponentSharedNavigation = {
  __typename?: 'ComponentSharedNavigation'
  id: Scalars['ID']
  path?: Maybe<Scalars['String']>
  isHomePage?: Maybe<Scalars['Boolean']>
}

export type ComponentSharedSeoFiltersInput = {
  metaTitle?: InputMaybe<StringFilterInput>
  metaDescription?: InputMaybe<StringFilterInput>
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  keywords?: InputMaybe<StringFilterInput>
  metaRobots?: InputMaybe<StringFilterInput>
  structuredData?: InputMaybe<JsonFilterInput>
  metaViewport?: InputMaybe<StringFilterInput>
  canonicalURL?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>
  not?: InputMaybe<ComponentSharedSeoFiltersInput>
}

export type ComponentSharedSeoInput = {
  id?: InputMaybe<Scalars['ID']>
  metaTitle?: InputMaybe<Scalars['String']>
  metaDescription?: InputMaybe<Scalars['String']>
  metaImage: Maybe<ImageFile>
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>
  keywords?: InputMaybe<Scalars['String']>
  metaRobots?: InputMaybe<Scalars['String']>
  structuredData?: InputMaybe<Scalars['JSON']>
  metaViewport?: InputMaybe<Scalars['String']>
  canonicalURL?: InputMaybe<Scalars['String']>
}

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo'
  id: Scalars['ID']
  metaTitle: Scalars['String']
  metaDescription: Scalars['String']
  metaImage: Maybe<ImageFile>
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>
  keywords?: Maybe<Scalars['String']>
  metaRobots?: Maybe<Scalars['String']>
  structuredData?: Maybe<Scalars['JSON']>
  metaViewport?: Maybe<Scalars['String']>
  canonicalURL?: Maybe<Scalars['String']>
}

export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentSharedTooltipHint = {
  __typename?: 'ComponentSharedTooltipHint'
  id: Scalars['ID']
  title: Scalars['String']
  description: Scalars['String']
}

export type ComponentSubBlockBannerFiltersInput = {
  title?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  buttons?: InputMaybe<ComponentSharedButtonFiltersInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockBannerFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockBannerFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockBannerFiltersInput>
}

export type ComponentSubBlockBanner = {
  __typename?: 'ComponentSubBlockBanner'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image: Maybe<ImageFile>
  buttons?: Maybe<Array<Maybe<ComponentSharedButton>>>
}

export type ComponentSubBlockBannerButtonsArgs = {
  filters?: InputMaybe<ComponentSharedButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentSubBlockBenefitsPerksFiltersInput = {
  title?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockBenefitsPerksFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockBenefitsPerksFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockBenefitsPerksFiltersInput>
}

export type ComponentSubBlockBenefitsPerksInput = {
  id?: InputMaybe<Scalars['ID']>
  image: Maybe<ImageFile>
  title?: InputMaybe<Scalars['String']>
}

export type ComponentSubBlockBenefitsPerks = {
  __typename?: 'ComponentSubBlockBenefitsPerks'
  id: Scalars['ID']
  image: Maybe<ImageFile>
  title?: Maybe<Scalars['String']>
}

export type ComponentSubBlockColorsFiltersInput = {
  color?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockColorsFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockColorsFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockColorsFiltersInput>
}

export type ComponentSubBlockColorsInput = {
  id?: InputMaybe<Scalars['ID']>
  color?: InputMaybe<Scalars['String']>
}

export type ComponentSubBlockColors = {
  __typename?: 'ComponentSubBlockColors'
  id: Scalars['ID']
  color?: Maybe<Scalars['String']>
}

export type ComponentSubBlockFaqEntryFiltersInput = {
  question?: InputMaybe<StringFilterInput>
  answer?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockFaqEntryFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockFaqEntryFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockFaqEntryFiltersInput>
}

export type ComponentSubBlockFaqEntry = {
  __typename?: 'ComponentSubBlockFaqEntry'
  id: Scalars['ID']
  question?: Maybe<Scalars['String']>
  answer?: Maybe<Scalars['String']>
}

export type ComponentSubBlockImageRepeater = {
  __typename?: 'ComponentSubBlockImageRepeater'
  id: Scalars['ID']
  image: Maybe<ImageFile>
}

export type ComponentSubBlockInfoBlockFiltersInput = {
  title?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockInfoBlockFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockInfoBlockFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockInfoBlockFiltersInput>
}

export type ComponentSubBlockInfoBlock = {
  __typename?: 'ComponentSubBlockInfoBlock'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image: Maybe<ImageFile>
}

export enum Enum_Componentsubblockinfosection_Imagesize {
  Small = 'small',
  Large = 'large',
}

export enum Enum_Componentsubblockinfosection_Backgroundcolor {
  White = 'white',
  LightGray = 'light_gray',
  Gray = 'gray',
  DarkGray = 'dark_gray',
  Turquoise = 'turquoise',
}

export type ComponentSubBlockInfoSectionFiltersInput = {
  imageSize?: InputMaybe<StringFilterInput>
  backgroundColor?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockInfoSectionFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockInfoSectionFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockInfoSectionFiltersInput>
}

export type ComponentSubBlockInfoSection = {
  __typename?: 'ComponentSubBlockInfoSection'
  id: Scalars['ID']
  image: Maybe<ImageFile>
  imageSize: Enum_Componentsubblockinfosection_Imagesize
  backgroundColor?: Maybe<Enum_Componentsubblockinfosection_Backgroundcolor>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type ComponentSubBlockPartnerLogoLinkFiltersInput = {
  url?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockPartnerLogoLinkFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockPartnerLogoLinkFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockPartnerLogoLinkFiltersInput>
}

export type ComponentSubBlockPartnerLogoLink = {
  __typename?: 'ComponentSubBlockPartnerLogoLink'
  id: Scalars['ID']
  url?: Maybe<Scalars['String']>
  image: Maybe<ImageFile>
}

export type ComponentSubBlockRichTextRepeater = {
  __typename?: 'ComponentSubBlockRichTextRepeater'
  id: Scalars['ID']
  richtext: Scalars['String']
}

export type ComponentSubBlockServiceBlockFiltersInput = {
  title?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<StringFilterInput>
  recommended?: InputMaybe<BooleanFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockServiceBlockFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockServiceBlockFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockServiceBlockFiltersInput>
}

export type ComponentSubBlockServiceBlock = {
  __typename?: 'ComponentSubBlockServiceBlock'
  id: Scalars['ID']
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['String']>
  recommended: Scalars['Boolean']
}

export enum Enum_Componentsubblocksliderslide_Imageposition {
  TopRight = 'topRight',
  Middle = 'middle',
  BottomRight = 'bottomRight',
}

export type ComponentSubBlockSliderSlideFiltersInput = {
  title?: InputMaybe<StringFilterInput>
  subtitle?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  cta?: InputMaybe<ComponentSharedButtonFiltersInput>
  imagePosition?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockSliderSlideFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockSliderSlideFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockSliderSlideFiltersInput>
}

export type ComponentSubBlockSliderSlide = {
  __typename?: 'ComponentSubBlockSliderSlide'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  cta?: Maybe<ComponentSharedButton>
  image: Maybe<ImageFile>
  imagePosition?: Maybe<Enum_Componentsubblocksliderslide_Imageposition>
}

export type ComponentSubBlockSomparisonRowFiltersInput = {
  title?: InputMaybe<StringFilterInput>
  toggles?: InputMaybe<ComponentSubBlockToggleGroupFiltersInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockSomparisonRowFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockSomparisonRowFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockSomparisonRowFiltersInput>
}

export type ComponentSubBlockSomparisonRow = {
  __typename?: 'ComponentSubBlockSomparisonRow'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  toggles?: Maybe<Array<Maybe<ComponentSubBlockToggleGroup>>>
}

export type ComponentSubBlockSomparisonRowTogglesArgs = {
  filters?: InputMaybe<ComponentSubBlockToggleGroupFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentSubBlockTitleGroupeFiltersInput = {
  title?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockTitleGroupeFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockTitleGroupeFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockTitleGroupeFiltersInput>
}

export type ComponentSubBlockTitleGroupe = {
  __typename?: 'ComponentSubBlockTitleGroupe'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
}

export type ComponentSubBlockToggleGroupFiltersInput = {
  status?: InputMaybe<BooleanFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentSubBlockToggleGroupFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ComponentSubBlockToggleGroupFiltersInput>>>
  not?: InputMaybe<ComponentSubBlockToggleGroupFiltersInput>
}

export type ComponentSubBlockToggleGroup = {
  __typename?: 'ComponentSubBlockToggleGroup'
  id: Scalars['ID']
  status?: Maybe<Scalars['Boolean']>
}

export type UploadFileFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  alternativeText?: InputMaybe<StringFilterInput>
  caption?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
  height?: InputMaybe<IntFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  ext?: InputMaybe<StringFilterInput>
  mime?: InputMaybe<StringFilterInput>
  size?: InputMaybe<FloatFilterInput>
  url?: InputMaybe<StringFilterInput>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  not?: InputMaybe<UploadFileFiltersInput>
}

export type UploadFileInput = {
  name?: InputMaybe<Scalars['String']>
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  ext?: InputMaybe<Scalars['String']>
  mime?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  url?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  folder?: InputMaybe<Scalars['ID']>
  folderPath?: InputMaybe<Scalars['String']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime: Scalars['String']
  size: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<UploadFile>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export type UploadFolderFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  parent?: InputMaybe<UploadFolderFiltersInput>
  children?: InputMaybe<UploadFolderFiltersInput>
  files?: InputMaybe<UploadFileFiltersInput>
  path?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  not?: InputMaybe<UploadFolderFiltersInput>
}

export type UploadFolderInput = {
  name?: InputMaybe<Scalars['String']>
  pathId?: InputMaybe<Scalars['Int']>
  parent?: InputMaybe<Scalars['ID']>
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  path?: InputMaybe<Scalars['String']>
}

export type UploadFolder = {
  __typename?: 'UploadFolder'
  name: Scalars['String']
  pathId: Scalars['Int']
  parent?: Maybe<UploadFolderEntityResponse>
  children?: Maybe<UploadFolderRelationResponseCollection>
  files?: Maybe<UploadFileRelationResponseCollection>
  path: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<UploadFolder>
}

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse'
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection'
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection'
  data: Array<UploadFolderEntity>
}

export type EzformsSubmissionFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  score?: InputMaybe<StringFilterInput>
  formName?: InputMaybe<StringFilterInput>
  data?: InputMaybe<JsonFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>
  not?: InputMaybe<EzformsSubmissionFiltersInput>
}

export type EzformsSubmissionInput = {
  score?: InputMaybe<Scalars['String']>
  formName?: InputMaybe<Scalars['String']>
  data?: InputMaybe<Scalars['JSON']>
}

export type EzformsSubmission = {
  __typename?: 'EzformsSubmission'
  score?: Maybe<Scalars['String']>
  formName?: Maybe<Scalars['String']>
  data?: Maybe<Scalars['JSON']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type EzformsSubmissionEntity = {
  __typename?: 'EzformsSubmissionEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<EzformsSubmission>
}

export type EzformsSubmissionEntityResponse = {
  __typename?: 'EzformsSubmissionEntityResponse'
  data?: Maybe<EzformsSubmissionEntity>
}

export type EzformsSubmissionEntityResponseCollection = {
  __typename?: 'EzformsSubmissionEntityResponseCollection'
  data: Array<EzformsSubmissionEntity>
  meta: ResponseCollectionMeta
}

export type EzformsRecipientFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  email?: InputMaybe<StringFilterInput>
  number?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>
  not?: InputMaybe<EzformsRecipientFiltersInput>
}

export type EzformsRecipientInput = {
  name?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  number?: InputMaybe<Scalars['String']>
}

export type EzformsRecipient = {
  __typename?: 'EzformsRecipient'
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  number?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type EzformsRecipientEntity = {
  __typename?: 'EzformsRecipientEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<EzformsRecipient>
}

export type EzformsRecipientEntityResponse = {
  __typename?: 'EzformsRecipientEntityResponse'
  data?: Maybe<EzformsRecipientEntity>
}

export type EzformsRecipientEntityResponseCollection = {
  __typename?: 'EzformsRecipientEntityResponseCollection'
  data: Array<EzformsRecipientEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  not?: InputMaybe<I18NLocaleFiltersInput>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<I18NLocale>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsPermissionFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  action?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<UsersPermissionsPermission>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRoleFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  description?: InputMaybe<StringFilterInput>
  type?: InputMaybe<StringFilterInput>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
}

export type UsersPermissionsRoleInput = {
  name?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  username?: InputMaybe<StringFilterInput>
  email?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  password?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  blocked?: InputMaybe<BooleanFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsUserInput = {
  username?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  blocked?: InputMaybe<Scalars['Boolean']>
  role?: InputMaybe<Scalars['ID']>
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  username: Scalars['String']
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<UsersPermissionsUser>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

export type ArticleBodyDynamicZone =
  | ComponentSubBlockRichTextRepeater
  | ComponentSubBlockImageRepeater
  | Error

export type ArticleFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  Runk?: InputMaybe<IntFilterInput>
  title?: InputMaybe<StringFilterInput>
  slug?: InputMaybe<StringFilterInput>
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>
  date?: InputMaybe<DateFilterInput>
  description?: InputMaybe<StringFilterInput>
  articles?: InputMaybe<ArticleFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>
  not?: InputMaybe<ArticleFiltersInput>
}

export type ArticleInput = {
  Runk?: InputMaybe<Scalars['Int']>
  title?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  image: Maybe<ImageFile>
  body?: InputMaybe<Array<Scalars['ArticleBodyDynamicZoneInput']>>
  seo?: InputMaybe<ComponentSharedSeoInput>
  date?: InputMaybe<Scalars['Date']>
  description?: InputMaybe<Scalars['String']>
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type Article = {
  __typename?: 'Article'
  title: Scalars['String']
  slug: Scalars['String']
  image: Maybe<ImageFile>
  body?: Maybe<Array<Maybe<ArticleBodyDynamicZone>>>
  seo?: Maybe<ComponentSharedSeo>
  date?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  articles?: Maybe<ArticleRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
}

export type ArticleArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  publicationState?: InputMaybe<PublicationState>
}

export type ArticleEntity = {
  __typename?: 'ArticleEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<Article>
}

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse'
  data?: Maybe<ArticleEntity>
}

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection'
  data: Array<ArticleEntity>
  meta: ResponseCollectionMeta
}

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection'
  data: Array<ArticleEntity>
}

export type CompanyInformationInput = {
  companyName?: InputMaybe<Scalars['String']>
  logo: Maybe<ImageFile>
  mobileNumber?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  address?: InputMaybe<Scalars['String']>
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentSharedButtonInput>>>
  backgroundImage: Maybe<ImageFile>
  headerPromoTags?: InputMaybe<Scalars['String']>
  logoMobile: Maybe<ImageFile>
  logoWhite: Maybe<ImageFile>
}

export type CompanyInformation = {
  __typename?: 'CompanyInformation'
  companyName?: Maybe<Scalars['String']>
  logo: Maybe<ImageFile>
  mobileNumber?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  address?: Maybe<Scalars['String']>
  socialLinks?: Maybe<Array<Maybe<ComponentSharedButton>>>
  backgroundImage: Maybe<ImageFile>
  headerPromoTags?: Maybe<Scalars['String']>
  logoMobile: Maybe<ImageFile>
  logoWhite: Maybe<ImageFile>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CompanyInformationSocialLinksArgs = {
  filters?: InputMaybe<ComponentSharedButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type CompanyInformationEntity = {
  __typename?: 'CompanyInformationEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<CompanyInformation>
}

export type CompanyInformationEntityResponse = {
  __typename?: 'CompanyInformationEntityResponse'
  data?: Maybe<CompanyInformationEntity>
}

export type ContentReadyBlockBlockDynamicZone =
  | ComponentBlockHeroBanner
  | ComponentBlockSlider
  | ComponentBlockBenefits
  | ComponentBlockInfoTextImage
  | ComponentBlockFaq
  | ComponentBlockPartnersLogos
  | ComponentBlockComparisonTable
  | ComponentBlockInfoSections
  | ComponentBlockProductCardsSlider
  | ComponentBlockSubProductSlider
  | ComponentBlockThreeInfoBlocks
  | ComponentBlockSubProductGrid
  | ComponentBlockServiceFrequencies
  | ComponentBlockNavigationSections
  | ComponentBlockInfoSectionsRow
  | Error

export type ContentReadyBlockFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  navigationTitle?: InputMaybe<StringFilterInput>
  templateName?: InputMaybe<StringFilterInput>
  Rank?: InputMaybe<IntFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<ContentReadyBlockFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ContentReadyBlockFiltersInput>>>
  not?: InputMaybe<ContentReadyBlockFiltersInput>
}

export type ContentReadyBlockInput = {
  navigationTitle?: InputMaybe<Scalars['String']>
  templateName?: InputMaybe<Scalars['String']>
  Rank?: InputMaybe<Scalars['Int']>
  block?: InputMaybe<Array<Scalars['ContentReadyBlockBlockDynamicZoneInput']>>
}

export type ContentReadyBlock = {
  __typename?: 'ContentReadyBlock'
  navigationTitle?: Maybe<Scalars['String']>
  templateName?: Maybe<Scalars['String']>
  Rank?: Maybe<Scalars['Int']>
  block?: Maybe<Array<Maybe<ContentReadyBlockBlockDynamicZone>>>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ContentReadyBlockEntity = {
  __typename?: 'ContentReadyBlockEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<ContentReadyBlock>
}

export type ContentReadyBlockEntityResponse = {
  __typename?: 'ContentReadyBlockEntityResponse'
  data?: Maybe<ContentReadyBlockEntity>
}

export type ContentReadyBlockEntityResponseCollection = {
  __typename?: 'ContentReadyBlockEntityResponseCollection'
  data: Array<ContentReadyBlockEntity>
  meta: ResponseCollectionMeta
}

export type Hoop24Input = {
  title?: InputMaybe<Scalars['String']>
  videoLink?: InputMaybe<Scalars['String']>
  promoTitle?: InputMaybe<Scalars['String']>
  promoDescription?: InputMaybe<Scalars['String']>
  benefits?: InputMaybe<Array<InputMaybe<ComponentSubBlockBenefitsPerksInput>>>
  hoopRedirectLink?: InputMaybe<Scalars['String']>
  hoopRegistrationEndpoint?: InputMaybe<Scalars['String']>
  hoopForgotPassLink?: InputMaybe<Scalars['String']>
  imageVideoPlaceholder: Maybe<ImageFile>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type Hoop24 = {
  __typename?: 'Hoop24'
  title?: Maybe<Scalars['String']>
  videoLink?: Maybe<Scalars['String']>
  promoTitle?: Maybe<Scalars['String']>
  promoDescription?: Maybe<Scalars['String']>
  benefits?: Maybe<Array<Maybe<ComponentSubBlockBenefitsPerks>>>
  hoopRedirectLink?: Maybe<Scalars['String']>
  hoopRegistrationEndpoint?: Maybe<Scalars['String']>
  hoopForgotPassLink?: Maybe<Scalars['String']>
  imageVideoPlaceholder: Maybe<ImageFile>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
}

export type Hoop24BenefitsArgs = {
  filters?: InputMaybe<ComponentSubBlockBenefitsPerksFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type Hoop24Entity = {
  __typename?: 'Hoop24Entity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<Hoop24>
}

export type Hoop24EntityResponse = {
  __typename?: 'Hoop24EntityResponse'
  data?: Maybe<Hoop24Entity>
}

export type ProductsPageBlocksDynamicZone =
  | ComponentBlockBenefits
  | ComponentBlockContentReadyBlock
  | ComponentBlockHeroBanner
  | ComponentBlockInfoTextImage
  | ComponentBlockSlider
  | ComponentBlockPartnersLogos
  | ComponentBlockProductCardsSlider
  | ComponentBlockFaq
  | ComponentBlockComparisonTable
  | ComponentBlockSubProductSlider
  | ComponentBlockInfoSections
  | ComponentBlockSubProductGrid
  | ComponentBlockProductsGrid
  | ComponentBlockThreeInfoBlocks
  | ComponentBlockInfoSectionsRow
  | ComponentBlockServiceFrequencies
  | ComponentBlockNavigationSections
  | Error

export type ProductsPageFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  pageUrl?: InputMaybe<StringFilterInput>
  navigationTitle?: InputMaybe<StringFilterInput>
  Rank?: InputMaybe<IntFilterInput>
  productCard?: InputMaybe<ComponentBlockProductCardFiltersInput>
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<ProductsPageFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<ProductsPageFiltersInput>>>
  not?: InputMaybe<ProductsPageFiltersInput>
}

export type ProductsPageInput = {
  Blocks?: InputMaybe<Array<Scalars['ProductsPageBlocksDynamicZoneInput']>>
  pageUrl?: InputMaybe<Scalars['String']>
  navigationTitle?: InputMaybe<Scalars['String']>
  Rank?: InputMaybe<Scalars['Int']>
  productCard?: InputMaybe<ComponentBlockProductCardInput>
  seo?: InputMaybe<ComponentSharedSeoInput>
}

export type ProductsPage = {
  __typename?: 'ProductsPage'
  Blocks?: Maybe<Array<Maybe<ProductsPageBlocksDynamicZone>>>
  pageUrl?: Maybe<Scalars['String']>
  navigationTitle?: Maybe<Scalars['String']>
  Rank?: Maybe<Scalars['Int']>
  productCard?: Maybe<ComponentBlockProductCard>
  seo?: Maybe<ComponentSharedSeo>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ProductsPageEntity = {
  __typename?: 'ProductsPageEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<ProductsPage>
}

export type ProductsPageEntityResponse = {
  __typename?: 'ProductsPageEntityResponse'
  data?: Maybe<ProductsPageEntity>
}

export type ProductsPageEntityResponseCollection = {
  __typename?: 'ProductsPageEntityResponseCollection'
  data: Array<ProductsPageEntity>
  meta: ResponseCollectionMeta
}

export type SinglePageBlocksDynamicZone =
  | ComponentBlockHeroBanner
  | ComponentBlockSlider
  | ComponentBlockContentReadyBlock
  | ComponentBlockInfoTextImage
  | ComponentBlockProductCardsSlider
  | ComponentBlockPartnersLogos
  | ComponentBlockFaq
  | ComponentBlockInfoSections
  | ComponentBlockSubProductSlider
  | ComponentBlockComparisonTable
  | ComponentBlockBenefits
  | ComponentBlockProductsGrid
  | ComponentBlockSubProductGrid
  | ComponentBlockThreeInfoBlocks
  | ComponentBlockServiceFrequencies
  | ComponentBlockInfoSectionsRow
  | ComponentBlockNavigationSections
  | ComponentBlockArticlesGrid
  | Error

export type SinglePageFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  pageUrl?: InputMaybe<StringFilterInput>
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>
  Rank?: InputMaybe<IntFilterInput>
  navigationTitle?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<SinglePageFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<SinglePageFiltersInput>>>
  not?: InputMaybe<SinglePageFiltersInput>
}

export type SinglePageInput = {
  pageUrl?: InputMaybe<Scalars['String']>
  Blocks?: InputMaybe<Array<Scalars['SinglePageBlocksDynamicZoneInput']>>
  seo?: InputMaybe<ComponentSharedSeoInput>
  Rank?: InputMaybe<Scalars['Int']>
  navigationTitle?: InputMaybe<Scalars['String']>
}

export type SinglePage = {
  __typename?: 'SinglePage'
  pageUrl?: Maybe<Scalars['String']>
  Blocks?: Maybe<Array<Maybe<SinglePageBlocksDynamicZone>>>
  seo?: Maybe<ComponentSharedSeo>
  Rank?: Maybe<Scalars['Int']>
  navigationTitle?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type SinglePageEntity = {
  __typename?: 'SinglePageEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<SinglePage>
}

export type SinglePageEntityResponse = {
  __typename?: 'SinglePageEntityResponse'
  data?: Maybe<SinglePageEntity>
}

export type SinglePageEntityResponseCollection = {
  __typename?: 'SinglePageEntityResponseCollection'
  data: Array<SinglePageEntity>
  meta: ResponseCollectionMeta
}

export type SubProductCategoryFiltersInput = {
  id?: InputMaybe<IdFilterInput>
  templateName?: InputMaybe<StringFilterInput>
  pageUrl?: InputMaybe<StringFilterInput>
  entries?: InputMaybe<ComponentBlockConsumableCardFiltersInput>
  Rank?: InputMaybe<IntFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  and?: InputMaybe<Array<InputMaybe<SubProductCategoryFiltersInput>>>
  or?: InputMaybe<Array<InputMaybe<SubProductCategoryFiltersInput>>>
  not?: InputMaybe<SubProductCategoryFiltersInput>
}

export type SubProductCategoryInput = {
  templateName?: InputMaybe<Scalars['String']>
  pageUrl?: InputMaybe<Scalars['String']>
  entries?: InputMaybe<Array<InputMaybe<ComponentBlockConsumableCardInput>>>
  Rank?: InputMaybe<Scalars['Int']>
}

export type SubProductCategory = {
  __typename?: 'SubProductCategory'
  templateName?: Maybe<Scalars['String']>
  pageUrl?: Maybe<Scalars['String']>
  entries?: Maybe<Array<Maybe<ComponentBlockConsumableCard>>>
  Rank?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type SubProductCategoryEntriesArgs = {
  filters?: InputMaybe<ComponentBlockConsumableCardFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type SubProductCategoryEntity = {
  __typename?: 'SubProductCategoryEntity'
  id?: Maybe<Scalars['ID']>
  attributes?: Maybe<SubProductCategory>
}

export type SubProductCategoryEntityResponse = {
  __typename?: 'SubProductCategoryEntityResponse'
  data?: Maybe<SubProductCategoryEntity>
}

export type SubProductCategoryEntityResponseCollection = {
  __typename?: 'SubProductCategoryEntityResponseCollection'
  data: Array<SubProductCategoryEntity>
  meta: ResponseCollectionMeta
}

export type SubProductCategoryRelationResponseCollection = {
  __typename?: 'SubProductCategoryRelationResponseCollection'
  data: Array<SubProductCategoryEntity>
}

export type GenericMorph =
  | ComponentBlockArticlesGrid
  | ComponentBlockBenefits
  | ComponentBlockComparisonTable
  | ComponentBlockConsumableCard
  | ComponentBlockContentReadyBlock
  | ComponentBlockFaq
  | ComponentBlockHeroBanner
  | ComponentBlockInfoSectionsRow
  | ComponentBlockInfoSections
  | ComponentBlockInfoTextImage
  | ComponentBlockNavigationSections
  | ComponentBlockPartnersLogos
  | ComponentBlockProductCard
  | ComponentBlockProductCardsSlider
  | ComponentBlockProductsGrid
  | ComponentBlockServiceFrequencies
  | ComponentBlockSlider
  | ComponentBlockSubProductGrid
  | ComponentBlockSubProductSlider
  | ComponentBlockThreeInfoBlocks
  | ComponentSharedButton
  | ComponentSharedColor
  | ComponentSharedMetaSocial
  | ComponentSharedNavigation
  | ComponentSharedSeo
  | ComponentSharedTooltipHint
  | ComponentSubBlockBanner
  | ComponentSubBlockBenefitsPerks
  | ComponentSubBlockColors
  | ComponentSubBlockFaqEntry
  | ComponentSubBlockImageRepeater
  | ComponentSubBlockInfoBlock
  | ComponentSubBlockInfoSection
  | ComponentSubBlockPartnerLogoLink
  | ComponentSubBlockRichTextRepeater
  | ComponentSubBlockServiceBlock
  | ComponentSubBlockSliderSlide
  | ComponentSubBlockSomparisonRow
  | ComponentSubBlockTitleGroupe
  | ComponentSubBlockToggleGroup
  | UploadFile
  | UploadFolder
  | EzformsSubmission
  | EzformsRecipient
  | I18NLocale
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Article
  | CompanyInformation
  | ContentReadyBlock
  | Hoop24
  | ProductsPage
  | SinglePage
  | SubProductCategory

export type FileInfoInput = {
  name?: InputMaybe<Scalars['String']>
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  id: Scalars['ID']
  username: Scalars['String']
  email?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<UsersPermissionsMeRole>
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsRegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Scalars['String']
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']
}

export type PaginationArg = {
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  start?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  ezformsSubmission?: Maybe<EzformsSubmissionEntityResponse>
  ezformsSubmissions?: Maybe<EzformsSubmissionEntityResponseCollection>
  ezformsRecipient?: Maybe<EzformsRecipientEntityResponse>
  ezformsRecipients?: Maybe<EzformsRecipientEntityResponseCollection>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
  article?: Maybe<ArticleEntityResponse>
  articles?: Maybe<ArticleEntityResponseCollection>
  companyInformation?: Maybe<CompanyInformationEntityResponse>
  contentReadyBlock?: Maybe<ContentReadyBlockEntityResponse>
  contentReadyBlocks?: Maybe<ContentReadyBlockEntityResponseCollection>
  hoop24?: Maybe<Hoop24EntityResponse>
  productsPage?: Maybe<ProductsPageEntityResponse>
  productsPages?: Maybe<ProductsPageEntityResponseCollection>
  singlePage?: Maybe<SinglePageEntityResponse>
  singlePages?: Maybe<SinglePageEntityResponseCollection>
  subProductCategory?: Maybe<SubProductCategoryEntityResponse>
  subProductCategories?: Maybe<SubProductCategoryEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryEzformsSubmissionArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryEzformsSubmissionsArgs = {
  filters?: InputMaybe<EzformsSubmissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryEzformsRecipientArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryEzformsRecipientsArgs = {
  filters?: InputMaybe<EzformsRecipientFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  publicationState?: InputMaybe<PublicationState>
}

export type QueryContentReadyBlockArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryContentReadyBlocksArgs = {
  filters?: InputMaybe<ContentReadyBlockFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryHoop24Args = {
  publicationState?: InputMaybe<PublicationState>
}

export type QueryProductsPageArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryProductsPagesArgs = {
  filters?: InputMaybe<ProductsPageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QuerySinglePageArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QuerySinglePagesArgs = {
  filters?: InputMaybe<SinglePageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QuerySubProductCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QuerySubProductCategoriesArgs = {
  filters?: InputMaybe<SubProductCategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type Mutation = {
  __typename?: 'Mutation'
  createUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  createEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>
  updateEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>
  deleteEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>
  createEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>
  updateEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>
  deleteEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>
  createArticle?: Maybe<ArticleEntityResponse>
  updateArticle?: Maybe<ArticleEntityResponse>
  deleteArticle?: Maybe<ArticleEntityResponse>
  updateCompanyInformation?: Maybe<CompanyInformationEntityResponse>
  deleteCompanyInformation?: Maybe<CompanyInformationEntityResponse>
  createContentReadyBlock?: Maybe<ContentReadyBlockEntityResponse>
  updateContentReadyBlock?: Maybe<ContentReadyBlockEntityResponse>
  deleteContentReadyBlock?: Maybe<ContentReadyBlockEntityResponse>
  updateHoop24?: Maybe<Hoop24EntityResponse>
  deleteHoop24?: Maybe<Hoop24EntityResponse>
  createProductsPage?: Maybe<ProductsPageEntityResponse>
  updateProductsPage?: Maybe<ProductsPageEntityResponse>
  deleteProductsPage?: Maybe<ProductsPageEntityResponse>
  createSinglePage?: Maybe<SinglePageEntityResponse>
  updateSinglePage?: Maybe<SinglePageEntityResponse>
  deleteSinglePage?: Maybe<SinglePageEntityResponse>
  createSubProductCategory?: Maybe<SubProductCategoryEntityResponse>
  updateSubProductCategory?: Maybe<SubProductCategoryEntityResponse>
  deleteSubProductCategory?: Maybe<SubProductCategoryEntityResponse>
  upload: UploadFileEntityResponse
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  updateFileInfo: UploadFileEntityResponse
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  login: UsersPermissionsLoginPayload
  /** Register a user */
  register: UsersPermissionsLoginPayload
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']
  data: UploadFileInput
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']
}

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput
}

export type MutationUpdateUploadFolderArgs = {
  id: Scalars['ID']
  data: UploadFolderInput
}

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']
}

export type MutationCreateEzformsSubmissionArgs = {
  data: EzformsSubmissionInput
}

export type MutationUpdateEzformsSubmissionArgs = {
  id: Scalars['ID']
  data: EzformsSubmissionInput
}

export type MutationDeleteEzformsSubmissionArgs = {
  id: Scalars['ID']
}

export type MutationCreateEzformsRecipientArgs = {
  data: EzformsRecipientInput
}

export type MutationUpdateEzformsRecipientArgs = {
  id: Scalars['ID']
  data: EzformsRecipientInput
}

export type MutationDeleteEzformsRecipientArgs = {
  id: Scalars['ID']
}

export type MutationCreateArticleArgs = {
  data: ArticleInput
}

export type MutationUpdateArticleArgs = {
  id: Scalars['ID']
  data: ArticleInput
}

export type MutationDeleteArticleArgs = {
  id: Scalars['ID']
}

export type MutationUpdateCompanyInformationArgs = {
  data: CompanyInformationInput
}

export type MutationCreateContentReadyBlockArgs = {
  data: ContentReadyBlockInput
}

export type MutationUpdateContentReadyBlockArgs = {
  id: Scalars['ID']
  data: ContentReadyBlockInput
}

export type MutationDeleteContentReadyBlockArgs = {
  id: Scalars['ID']
}

export type MutationUpdateHoop24Args = {
  data: Hoop24Input
}

export type MutationCreateProductsPageArgs = {
  data: ProductsPageInput
}

export type MutationUpdateProductsPageArgs = {
  id: Scalars['ID']
  data: ProductsPageInput
}

export type MutationDeleteProductsPageArgs = {
  id: Scalars['ID']
}

export type MutationCreateSinglePageArgs = {
  data: SinglePageInput
}

export type MutationUpdateSinglePageArgs = {
  id: Scalars['ID']
  data: SinglePageInput
}

export type MutationDeleteSinglePageArgs = {
  id: Scalars['ID']
}

export type MutationCreateSubProductCategoryArgs = {
  data: SubProductCategoryInput
}

export type MutationUpdateSubProductCategoryArgs = {
  id: Scalars['ID']
  data: SubProductCategoryInput
}

export type MutationDeleteSubProductCategoryArgs = {
  id: Scalars['ID']
}

export type MutationUploadArgs = {
  refId?: InputMaybe<Scalars['ID']>
  ref?: InputMaybe<Scalars['String']>
  field?: InputMaybe<Scalars['String']>
  info?: InputMaybe<FileInfoInput>
  file: Scalars['Upload']
}

export type MutationMultipleUploadArgs = {
  refId?: InputMaybe<Scalars['ID']>
  ref?: InputMaybe<Scalars['String']>
  field?: InputMaybe<Scalars['String']>
  files: Array<InputMaybe<Scalars['Upload']>>
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info?: InputMaybe<FileInfoInput>
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars['ID']
  data: UsersPermissionsRoleInput
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars['ID']
  data: UsersPermissionsUserInput
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordArgs = {
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
  code: Scalars['String']
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}
