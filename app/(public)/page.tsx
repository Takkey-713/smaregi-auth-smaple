'use client'
import { Flex, Box, Avatar } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: session, status } = useSession()
  console.log(session)

  const linkStyle = {
    textDecoration: 'none',
    border: '1px solid #000',
    padding: '8px 16px',
    borderRadius: '4px',
    margin: '4px',
  }

  if (status === 'loading') {
    return null
  }

  if (!session) {
    return (
      <Box cursor={'pointer'}>
        <Box as={'span'}>ログインしてね</Box>
      </Box>
    )
  }

  if (session && session.user) {
    return (
      <Box as={'section'}>
        <Box>
          <Box as={'span'}>ログイン中～</Box>
          <Box>
            <Avatar
              name='testImage'
              height={'500px'}
              width={'500px'}
              src={
                'https://pos-cache.smaregi.jp/resources/HFoCOx5X8tn9DpI4pc1wMq5rK1Vg39+YpGuci4pgeiIRifMH92tBkcM6B2adK7UzXCfSZl76KKFu0GPogrueqznDBdRnY3VUt2XoODJZ5r+Cml8w+vIu4FNz8LG+gNp+laHofBTxU/PA7+ZyQZqKKuThgvKbDG0R6rQs/Yca0yghctGCv/XIYZ8X7+w7fmdpckqVIskbrvv0UKEiwjee2A==.png'
              }
            />
          </Box>
        </Box>
        <Flex py='4' alignItems='center'>
          <Link href='/stores' style={linkStyle}>
            <Box as={'span'} fontSize={{ base: '12px', md: '14px' }}>
              店舗設定
            </Box>
          </Link>
          <Link href='/wines/new' style={linkStyle}>
            <Box as={'span'} fontSize={{ base: '12px', md: '14px' }}>
              WIP
            </Box>
          </Link>
          <Link href='/' style={linkStyle}>
            <Box as={'span'} fontSize={{ base: '12px', md: '14px' }}>
              WIP
            </Box>
          </Link>
        </Flex>
      </Box>
    )
  }
}
