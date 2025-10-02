'use client'

import React, { useState } from 'react'
import { Box, Avatar } from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { UserInfoModal } from './UserInfoModal'

export const UserInfo: React.FC = () => {
  const { data: session, status } = useSession()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleAvatarClick = () => setIsModalOpen(true)

  if (status === 'loading') return null

  if (session) {
    return (
      <>
        <Box cursor={'pointer'} onClick={handleAvatarClick} animation="float 3s ease-in-out infinite alternate">
          <Avatar name='Logined User' height='40px' width='40px' />
        </Box>

        <UserInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={session.user} />

        <style jsx global>{`
          @keyframes float {
            0% { transform: translateY(0px) rotate(-3deg); }
            50% { transform: translateY(-8px) rotate(3deg); }
            100% { transform: translateY(0px) rotate(-3deg); }
          }
        `}</style>
      </>
    )
  }

  return (
    <Box cursor={'pointer'} onClick={() => signIn('smaregi')} animation="flicker 1.2s infinite">
      <Box as={'span'}>ログイン</Box>
      <style jsx global>{`
        @keyframes flicker {
          0%,19%,21%,23%,25%,54%,56%,100% { opacity:1; }
          20%,24%,55% { opacity:0; }
        }
      `}</style>
    </Box>
  )
}
