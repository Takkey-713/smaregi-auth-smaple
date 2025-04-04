import React from 'react'
import {
  Box,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { signOut } from 'next-auth/react'

type Props = {
  isOpen: boolean
  onClose: () => void
  user: {
    name: string
    email: string
  }
}

export const UserInfoModal: React.FC<Props> = ({ isOpen, onClose, user }) => {
  // 以下のレイアウトは後ほど修正する
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={'85%'}>
          <ModalHeader>
            <Box as={'span'} fontSize='16px'>
              &quot;工事中&quot;
            </Box>
            <Box as={'span'} fontSize='16px'>
              {user.name}
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              {/* <Box as={'span'} fontSize='16px'>
                {user.email}
              </Box> */}
            </Flex>

            {/* ここに編集画面への導線とか作る感じで */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={() => signOut({ callbackUrl: '/' })}>
              <Box as={'span'}>Sign out</Box>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
