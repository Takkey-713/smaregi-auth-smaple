'use client'
import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { Appbar } from '@/_components/header/uiparts/appbar/Appbar'

const PublicHeader: FC = () => {
  return (
    <Box as='header' width='100vw' position={'sticky'} top={'0'}>
      <Box px={4} bgColor='gray.100'>
        <Appbar />
      </Box>
    </Box>
  )
}

export default PublicHeader
