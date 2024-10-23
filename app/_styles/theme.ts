import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  base: '0px',
  sm: '425px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
}

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  breakpoints,
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray3: '#333333',
    gray7: '#717171',
    grayE: '#EAEAEA',
  },
})
export default theme
