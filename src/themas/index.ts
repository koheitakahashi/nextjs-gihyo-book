import colors from './colors'
import fontSizes from './fontSizes'
import letterSpacings from './letterSpacings'
import lineHeights from './lineHeights'
import space from './space'

// as const とは?
export const theme = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
} as const
