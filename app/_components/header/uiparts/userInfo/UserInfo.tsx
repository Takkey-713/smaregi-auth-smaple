'use client'

import React, { useState } from 'react'
import { Box, Avatar } from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/react'
// import { signIn, useSession } from 'next-auth/client'
import { UserInfoModal } from './UserInfoModa'

export const UserInfo: React.FC = () => {
  const { data: session, status } = useSession()
  console.log(status)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleAvatarClick = () => {
    setIsModalOpen(true)
  }
  if (status === 'loading') {
    return null
  }

  if (session && session.user) {
    return (
      <>
        <Box cursor={'pointer'} onClick={handleAvatarClick}>
          {/* TODO デフォの画像用意する */}
          <Avatar
            name='Logined User'
            height={'32px'}
            width={'32px'}
            src={session.user.name || ''}
          />
        </Box>

        <UserInfoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          user={session.user}
        />
      </>
    )
  }

  if (!session) {
    return (
      <Box cursor={'pointer'} onClick={() => signIn('smaregi')}>
        <Box as={'span'}>ログイン</Box>
      </Box>
    )
  }
}
