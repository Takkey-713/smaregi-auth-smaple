'use client'

import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { UserInfo } from '@/_components/header/uiparts/userInfo/UserInfo'

export const Appbar = () => {
  return (
    <Flex py='4' height={'70px'} justifyContent='space-between' alignItems='center'>
      <Heading as='h1' fontSize='2xl' cursor='pointer' animation="wobble 2s infinite alternate, rainbowText 3s infinite">
        ログイン検証
      </Heading>

      <UserInfo />
      {/* 任意のコンポーネントを追加していく */}
      
      <style jsx global>{`
        @keyframes wobble {
          0%,100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          50% { transform: rotate(-5deg); }
          75% { transform: rotate(3deg); }
        }
        @keyframes rainbowText {
          0% { color: red; }
          20% { color: orange; }
          40% { color: yellow; }
          60% { color: lime; }
          80% { color: cyan; }
          100% { color: magenta; }
        }
      `}</style>
    </Flex>
  )
}
