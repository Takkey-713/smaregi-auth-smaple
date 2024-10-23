'use client'

import Link from 'next/link'
import React from 'react'
import { Flex, Box } from '@chakra-ui/react'

export const Navigation = () => {
  const linkStyle = {
    textDecoration: 'none',
    border: '1px solid #000',
    padding: '8px 16px',
    borderRadius: '4px',
    margin: '4px',
  }
  return (
    <Flex py='4' alignItems='center'>
      <Link href='/wines' style={linkStyle}>
        <Box as={'span'} fontSize={{ base: '12px', md: '14px' }}>
          在庫一覧
        </Box>
      </Link>
      <Link href='/wines/new' style={linkStyle}>
        <Box as={'span'} fontSize={{ base: '12px', md: '14px' }}>
          在庫登録
        </Box>
      </Link>
      <Link href='/' style={linkStyle}>
        <Box as={'span'} fontSize={{ base: '12px', md: '14px' }}>
          QR読み取り
        </Box>
      </Link>
    </Flex>
  )
}
