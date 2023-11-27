<script setup lang="ts">
import type { SharedSeoInput } from '~/models/shared-components'

interface StructuredData {
  // Define the structured data type
  // ...
}

interface MetaImage {
  url?: string
  width?: number
  height?: number
  alternativeText?: string
}

interface MetaSocial {
  id?: number
  socialNetwork?: string
  title?: string
  description?: string
  image?: MetaImage
}

interface SEOData {
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  metaRobots?: string
  structuredData?: StructuredData
  metaViewport?: string
  canonicalURL?: string
  metaImage?: MetaImage
  metaSocial?: MetaSocial[]
}

const props = defineProps({
  seoData: {
    type: Object as () => SharedSeoInput | undefined,
    required: true,
  },
})

if (!!props.seoData) {
  useHead(() => {
    const metaTags = []

    if (props.seoData?.metaDescription) {
      metaTags.push({
        hid: 'description',
        name: 'description',
        content: props.seoData.metaDescription,
      })
    }

    if (props.seoData?.keywords) {
      metaTags.push({
        hid: 'keywords',
        name: 'keywords',
        content: props.seoData.keywords,
      })
    }

    if (props.seoData?.metaRobots) {
      metaTags.push({
        hid: 'robots',
        name: 'robots',
        content: props.seoData.metaRobots,
      })
    }

    // ... handle other meta tags similarly

    const ogTags =
      props.seoData?.metaSocial
        ?.filter(Boolean)
        ?.map((social) => [
          {
            hid: `og:title:${social?.socialNetwork?.toLowerCase()}`,
            name: `og:title:${social?.socialNetwork?.toLowerCase()}`,
            property: 'og:title',
            content: social?.title,
          },
          {
            hid: `og:description:${social?.socialNetwork?.toLowerCase()}`,
            name: `og:description:${social?.socialNetwork?.toLowerCase()}`,
            property: 'og:description',
            content: social?.description,
          },
          {
            hid: `og:image:${social?.socialNetwork?.toLowerCase()}`,
            name: `og:image:${social?.socialNetwork?.toLowerCase()}`,
            property: 'og:image',
            content: social?.image?.url,
          },
        ])
        .flat() ?? []

    const scripts = props.seoData?.structuredData
      ? [
          {
            hid: 'ld-json',
            type: 'application/ld+json',
            children: props.seoData.structuredData,
          },
        ]
      : []
    console.log({
      title: props.seoData?.metaTitle,
      meta: [...metaTags, ...ogTags],
      link: props.seoData?.canonicalURL
        ? [{ rel: 'canonical', href: props.seoData.canonicalURL }]
        : [],
      script: scripts,
    })
    return {
      title: props.seoData?.metaTitle,
      meta: [...metaTags, ...ogTags],
      link: props.seoData?.canonicalURL
        ? [{ rel: 'canonical', href: props.seoData.canonicalURL }]
        : [],
      script: scripts,
    }
  })
}
</script>
