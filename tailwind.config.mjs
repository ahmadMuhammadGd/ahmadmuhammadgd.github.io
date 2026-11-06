import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      /*
       * Semantic colors.
       *
       * The actual values live in global CSS variables:
       *
       * :root {
       *   --color-paper: 245 245 243;
       *   --color-paper-muted: 255 255 255;
       *   --color-ink: 10 10 10;
       *   --color-ink-muted: 82 82 82;
       *   --color-ink-faint: 125 125 125;
       *   --color-line: 10 10 10;
       *   --color-line-muted: 205 205 205;
       * }
       *
       * .dark {
       *   --color-paper: 10 10 10;
       *   --color-paper-muted: 18 18 18;
       *   --color-ink: 245 245 243;
       *   --color-ink-muted: 165 165 165;
       *   --color-ink-faint: 105 105 105;
       *   --color-line: 245 245 243;
       *   --color-line-muted: 48 48 48;
       * }
       */

colors: {
  paper: {
    DEFAULT: 'rgb(var(--color-paper) / <alpha-value>)',
    muted: 'rgb(var(--color-paper-muted) / <alpha-value>)',
  },

  ink: {
    DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
    muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
    faint: 'rgb(var(--color-ink-faint) / <alpha-value>)',
  },

  line: {
    DEFAULT: 'rgb(var(--color-line) / <alpha-value>)',
    muted: 'rgb(var(--color-line-muted) / <alpha-value>)',
  },

  accent: {
    DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
    muted: 'rgb(var(--color-accent-muted) / <alpha-value>)',
    subtle: 'rgb(var(--color-accent-subtle) / <alpha-value>)',
    contrast: 'rgb(var(--color-accent-contrast) / <alpha-value>)',
  },
},
      fontFamily: {
  sans: [
    'IBM Plex Sans',
    'ui-sans-serif',
    'system-ui',
    'sans-serif',
  ],

  mono: [
    'IBM Plex Mono',
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'monospace',
  ],
},


      fontSize: {
        /*
         * Normal reading typography.
         */
        body: [
          '1.0625rem',
          {
            lineHeight: '1.65',
          },
        ],

        label: [
          '0.6875rem',
          {
            lineHeight: '1.2',
            letterSpacing: '0.09em',
            fontWeight: '500',
          },
        ],

        /*
         * Section/project titles.
         */
        title: [
          'clamp(3rem, 4vw, 3.5rem)',
          {
            lineHeight: '0.9',
            letterSpacing: '-0.055em',
            fontWeight: '600',
          },
        ],

        /*
         * The important one.
         *
         * Used for the giant typography that becomes part
         * of the layout rather than ordinary content.
         */
        display: [
          'clamp(4.5rem, 13vw, 12rem)',
          {
            lineHeight: '0.78',
            letterSpacing: '-0.085em',
            fontWeight: '600',
          },
        ],

        /*
         * Extremely large background / architectural type.
         */
        'display-xl': [
          'clamp(7rem, 22vw, 20rem)',
          {
            lineHeight: '0.72',
            letterSpacing: '-0.1em',
            fontWeight: '600',
          },
        ],
      },

      maxWidth: {
        content: '1180px',
        reading: '720px',
        diagram: '1080px',
      },

      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        40: '10rem',
      },

      /*
       * No rounded-card language.
       *
       * Keep this available only for tiny technical details
       * where a 2px radius is actually useful.
       */
      borderRadius: {
        none: '0',
        sm: '2px',
      },

      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--color-ink-muted) / 1)',
            fontFamily:
              'IBM Plex Sans, ui-sans-serif, system-ui, sans-serif',
            maxWidth: '720px',

            p: {
              color: 'rgb(var(--color-ink-muted) / 1)',
            },

            li: {
              color: 'rgb(var(--color-ink-muted) / 1)',

              '&::marker': {
                color: 'rgb(var(--color-ink-faint) / 1)',
              },
            },

            h1: {
              color: 'rgb(var(--color-ink) / 1)',
              letterSpacing: '-0.055em',
            
            },

            h2: {
              color: 'rgb(var(--color-ink) / 1)',
              letterSpacing: '-0.045em',
            },

            h3: {
              color: 'rgb(var(--color-ink) / 1)',
              letterSpacing: '-0.035em',
            },

            h4: {
              color: 'rgb(var(--color-ink) / 1)',
            },

            strong: {
              color: 'rgb(var(--color-ink) / 1)',
              fontWeight: '600',
            },

            a: {
              color: 'rgb(var(--color-accent))',
              textDecoration: 'underline',
              textDecorationColor: 'rgb(var(--color-ink-faint))',
              textUnderlineOffset: '3px',
              transitionProperty: 'color, text-decoration-color',
              transitionDuration: '200ms',
              transitionTimingFunction: 'ease-in-out',

              '&:hover': {
                color: 'rgb(var(--color-accent) / 0.75)',
                textDecorationColor: 'rgb(var(--color-accent))',
              },
            },
            
            code: {
              color: 'rgb(var(--color-ink) / 1)',
              backgroundColor:
                'rgb(var(--color-paper-muted) / 1)',
              padding: '0.12rem 0.3rem',
              borderRadius: '2px',
              fontFamily:
                'IBM Plex Mono, ui-monospace, monospace',
              fontSize: '0.875em',
              fontWeight: '500',
            },

            pre: {
              backgroundColor:
                'rgb(var(--color-paper-muted) / 1)',
              color: 'rgb(var(--color-ink) / 1)',
              border:
                '1px solid rgb(var(--color-line-muted) / 1)',
              borderRadius: '0',
              fontFamily:
                'IBM Plex Mono, ui-monospace, monospace',
            },

            blockquote: {
              borderLeftColor:
                'rgb(var(--color-ink) / 1)',
              color:
                'rgb(var(--color-ink-muted) / 1)',
              fontStyle: 'normal',
            },

            hr: {
              borderColor:
                'rgb(var(--color-line-muted) / 1)',
            },
          },
        },
      },
    },
  },

  plugins: [typography],
};