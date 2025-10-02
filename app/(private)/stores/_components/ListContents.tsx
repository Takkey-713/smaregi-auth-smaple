'use client'
import React from 'react'
import { Store } from '../types/store'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface Props {
  data: Store[]
}

export const ListContent: React.FC<Props> = ({ data }) => {

  return (
    <Box
      minH="100vh"
      p={10}
      bgGradient="linear(to-r, pink.400, yellow.300, teal.400, purple.500)"
      backgroundSize="400% 400%"
      animation="bgShift 8s ease infinite"
      fontFamily="Comic Sans MS, cursive"
      overflow="hidden"
    >
      <Text
        fontSize="5xl"
        fontWeight="bold"
        textAlign="center"
        mb={10}
        animation="rainbowText 3s infinite"
      >
        🎪 CRAZYy PPanic Funnyy🎉
      </Text>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={6}
      >
        {data.map((store) => (
          <Link href={`/stores/${store.storeId}/edit`} passHref key={store.storeId}>
            <Box
              p={6}
              bg="white"
              borderRadius="2xl"
              boxShadow="0px 0px 20px rgba(0,0,0,0.3)"
              color="black"
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              position="relative"
              animation="wobble 3s ease-in-out infinite"
              border="4px solid"
              cursor="pointer"
              _hover={{
                animation: 'spinCrazy 1s linear infinite',
                bg: 'yellow.200',
                color: 'red.600',
              }}
            >
              <Text
                fontSize="2xl"
                mb={3}
                animation="shimmer 2s linear infinite"
              >
                🦄 {store.storeName} 🦄
              </Text>
              <Text fontSize="lg">ID: {store.storeId}</Text>
            </Box>
          </Link>
        ))}
      </Box>

      <style jsx global>{`
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes rainbowText {
          0% { color: red; }
          20% { color: orange; }
          40% { color: yellow; }
          60% { color: green; }
          80% { color: blue; }
          100% { color: violet; }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(-2deg) translateY(0px); }
          25% { transform: rotate(2deg) translateY(-5px); }
          50% { transform: rotate(-3deg) translateY(3px); }
          75% { transform: rotate(3deg) translateY(-3px); }
        }
        @keyframes spinCrazy {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(720deg) scale(1.3); }
        }
        @keyframes shimmer {
          0% { text-shadow: 0 0 5px red; }
          25% { text-shadow: 0 0 10px yellow; }
          50% { text-shadow: 0 0 15px lime; }
          75% { text-shadow: 0 0 10px cyan; }
          100% { text-shadow: 0 0 5px magenta; }
        }
        @keyframes explode {
          0% { transform: translate(-50%, -50%) scale(0.5) rotate(0deg); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(3) rotate(720deg); opacity: 0; }
        }

        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 0%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 100%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </Box>
  )
}
