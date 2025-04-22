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
              height={'300px'}
              width={'300px'}
              src={
                'https://stickershop.line-scdn.net/stickershop/v1/product/1472301/LINEStorePC/main.png?v=1'
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
