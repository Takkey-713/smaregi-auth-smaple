'use client'
import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { Appbar } from '@/_components/header/uiparts/appbar/Appbar'

const Header: FC = () => {
  return (
    <Box as='header' width='100vw' position={'sticky'} top={'0'} zIndex={100} animation="bgShift 6s ease infinite">
      <Box px={4} bgGradient="linear(to-r, #ff0000, #ff7f00, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff69b4)" backgroundSize="800% 800%">
        <Appbar />
      </Box>

      <style jsx global>{`
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 0%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 100%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </Box>
  )
}

export default Header
