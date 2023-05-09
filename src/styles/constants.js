export const FONTS_SIZES = {
  sm: '0.75rem',
  base: '1rem',
  // para párrafos destacados o introductorios.
  lead: '1.2rem',
  h3: '1.5rem',
  h2: '2rem',
  h1: '2.5rem'
}

// Tamanio minimo de pantalla seria 320px
export const GRID_BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

export const MEDIA_BREAKPOINTS = {
  mobile: `@media (min-width: ${GRID_BREAKPOINTS.sm}px)`,
  tablet: `@media (min-width: ${GRID_BREAKPOINTS.md}px)`,
  laptop: `@media (min-width: ${GRID_BREAKPOINTS.lg}px)`,
  desktop: `@media (min-width: ${GRID_BREAKPOINTS.xl}px)`,
  desktopL: `@media (min-width: ${GRID_BREAKPOINTS.xxl}px)`
}

export const Z_INDEXS = {
  header: {
    sticky: 500,
    nav: 1000
  },
  modal: {
    overlay: 1500,
    content: 200
  }
}
