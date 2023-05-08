import { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        DEFAULT: '1440px',
      },
    },
    screens: {
      '2xl': { max: '1440px' },
      xl: { max: '1024px' },
      lg: { max: '768px' },
      md: { max: '540px' },
      sm: { max: '380px' },
    },
    colors: {
      'neutral-100': '#ffffff',
      'neutral-200': '#f7fafd',
      'neutral-300': '#eaf0f4',
      'neutral-400': '#b7c0ca',
      'neutral-500': '#949ea6',
      'neutral-600': '#777e87',
      'neutral-700': '#525a63',
      'neutral-800': '#313a45',
      'neutral-900': '#000000',
      'turquoise-100': '#ecfeff',
      'turquoise-200': '#9fe8ed',
      'turquoise-300': '#6ad3dc',
      'turquoise-400': '#35bfca',
      'turquoise-500': '#00aab8',
      'turquoise-600': '#0495a0',
      'turquoise-700': '#088189',
      'turquoise-800': '#0b6c71',
      'turquoise-900': '#0f5759',
      'orange-100': '#fff3e9',
      'orange-200': '#ffdcba',
      'orange-300': '#feb76f',
      'orange-400': '#fe9e3b',
      'orange-500': '#fd8407',
      'orange-600': '#d9730b',
      'orange-700': '#b5620f',
      'orange-800': '#915012',
      'orange-900': '#6d3f16',
      'purple-100': '#f8eeff',
      'purple-200': '#ecd9fe',
      'purple-300': '#e0c3fc',
      'purple-400': '#d3aefb',
      'purple-500': '#c798f9',
      'purple-600': '#a57ed0',
      'purple-700': '#8464a8',
      'purple-800': '#62497f',
      'purple-900': '#402f56',
      'red-100': '#ffdce9',
      'red-200': '#ffb3cb',
      'red-300': '#ff8bae',
      'red-400': '#ff6290',
      'red-500': '#ff3972',
      'red-600': '#d33262',
      'red-700': '#a82a52',
      'red-800': '#7d2341',
      'red-900': '#511b31',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontSize: {
      tag: [
        '0.625rem',
        {
          lineHeight: '120%',
          letterSpacing: '1px',
          fontWeight: '700',
        },
      ],
      'button-s': [
        '0.75rem',
        {
          lineHeight: '133%',
          fontWeight: '700',
        },
      ],
      'button-m': [
        '0.875rem',
        {
          lineHeight: '171%',
          fontWeight: '700',
        },
      ],
      'body-2': [
        '0.875rem',
        {
          lineHeight: '171%',
          fontWeight: '400',
        },
      ],
      'body-1': [
        '1.125rem',
        {
          lineHeight: '171%',
          fontWeight: '400',
        },
      ],
      'subtitle-3': [
        '1rem',
        {
          lineHeight: '150%',
          fontWeight: '700',
        },
      ],
      'subtitle-2': [
        '1.125rem',
        {
          lineHeight: '178%',
          fontWeight: '700',
        },
      ],
      'subtitle-1': [
        '1.5rem',
        {
          lineHeight: '167%',
          fontWeight: '700',
        },
      ],
      'headline-3': [
        '2rem',
        {
          lineHeight: '125%',
          fontWeight: '800',
        },
      ],
      'headline-2': [
        '2.625rem',
        {
          lineHeight: '133%',
          fontWeight: '800',
        },
      ],
      'headline-1': [
        '3.625rem',
        {
          lineHeight: '124%',
          fontWeight: '800',
        },
      ],
    },
    fontFamily: {
      sans: ['Gotham', 'ui-sans-serif'],
    },
    extend: {
      padding: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  safelist: [
    'text-neutral-700',
    'bg-neutral-200',
    'bg-neutral-500',
    'bg-turquoise-200',
    'bg-turquoise-500',
    'bg-orange-200',
    'bg-orange-500',
    'bg-purple-200',
    'bg-purple-500',
    'bg-red-200',
    'bg-red-500',
  ],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.absolute-center': {
          top: '50%',
          left: '50%',
          '@apply -translate-x-1/2 -translate-y-1/2': {},
        },
        '.absolute-y-center': {
          top: '50%',
          '@apply -translate-y-1/2': {},
        },
        '.absolute-x-center': {
          left: '50%',
          '@apply -translate-x-1/2': {},
        },
        '.reset-centered': {
          left: 'auto',
          top: 'auto',
          transform: 'none',
        },
        '.absolute-cover': {
          width: '100%',
          height: '100%',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
        },
        '.flex-centered': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      })
    }),
  ],
}
