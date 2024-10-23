'use client'
import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { Appbar } from '@/_components/header/uiparts/appbar/Appbar'
import { Navigation } from '@/_components/header/uiparts/navigation/Navigation'

const Header: FC = () => {
  return (
    <Box as='header' width='100vw' position={'sticky'} top={'0'} zIndex={100}>
      <Box px={4} bgColor='gray.100'>
        <Appbar />
      </Box>

      {/* <Box px={4} bgColor='gray.100'>
        <Navigation />
      </Box> */}
    </Box>
  )
}

export default Header
