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
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={'85%'} animation="spinModal 1s ease-in-out">
        <ModalHeader>
          <Box as={'span'} fontSize='16px' animation="rainbowText 2s infinite">
            &quot;工事中&quot;
          </Box>
          <Box as={'span'} fontSize='16px' ml={2} animation="warpText 3s infinite">
            {user.name}
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            {/* ユーザー情報表示 */}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='red' mr={3} onClick={() => signOut({ callbackUrl: '/' })} animation="bounce 1.5s infinite alternate">
            <Box as={'span'}>Sign out</Box>
          </Button>
        </ModalFooter>
      </ModalContent>

      <style jsx global>{`
        @keyframes rainbowText {
          0% { color: red; }
          20% { color: orange; }
          40% { color: yellow; }
          60% { color: lime; }
          80% { color: cyan; }
          100% { color: magenta; }
        }
        @keyframes warpText {
          0%,100% { letter-spacing: normal; filter: blur(0px); }
          50% { letter-spacing: 10px; filter: blur(3px); }
        }
        @keyframes spinModal {
          0% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
          100% { transform: rotate(-5deg); }
        }
        @keyframes bounce {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
      `}</style>
    </Modal>
  )
}
