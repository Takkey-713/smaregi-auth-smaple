'use client'

import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { UserInfo } from '@/_components/header/uiparts/userInfo/UserInfo'

export const Appbar = () => {
  return (
    <Flex py='4' height={'70px'} justifyContent='space-between' alignItems='center'>
      <Heading as='h1' fontSize='2xl' cursor='pointer'>
        ログイン検証
      </Heading>

      <UserInfo />
      {/* 任意のコンポーネントを追加していく */}
    </Flex>
  )
}
