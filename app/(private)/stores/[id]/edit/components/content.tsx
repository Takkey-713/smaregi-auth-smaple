'use client'
import React from 'react'
import { Store } from '../../../types/store'
import { Box, Text } from '@chakra-ui/react'

interface Props {
  data: Store
}

export const Content: React.FC<Props> = ({ data }) => {
  return (
    <Box
      as='section'
      p={10}
      minH='100vh'
      display='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      color='white'
      fontFamily="'Comic Sans MS', cursive"
      overflow='hidden'
      position='relative'
      textAlign='center'
      bgGradient='linear(to-r, #ff0000, #ff7f00, #ffff00, #00ff00, #00ffff, #0000ff, #8b00ff, #ff69b4)'
      backgroundSize='800% 800%'
      animation='bgShift 5s ease infinite'
    >
      {/* タイトル */}
      <Text
        fontSize='8xl'
        fontWeight='bold'
        textAlign='center'
        mb={10}
        animation='rainbowText 1.5s infinite, warpText 4s infinite'
        position='absolute'
        top='5%'
        left='50%'
        transform='translateX(-50%)'
      >
        🤯🔥 P P P P P 🔥🤯
      </Text>

      {/* 回転サークル */}
      <Box
        position='absolute'
        top='50%'
        left='50%'
        w='500px'
        h='500px'
        border='12px dotted white'
        borderRadius='50%'
        transform='translate(-50%, -50%)'
        animation='spin 6s linear infinite, pulse 1.2s infinite alternate'
        opacity={0.25}
      />

      {/* メインコンテンツ */}
      <Box
        className='editForm'
        fontSize='3xl'
        fontWeight='bold'
        animation='shake 1s infinite, flicker 2s infinite'
        textShadow='4px 4px 12px rgba(255,0,0,0.8)'
        zIndex={2}
      >
        <Box className='editItem' animation='jump 1.2s infinite ease-in-out'>
          🎉 {data.storeName} 🎉
        </Box>
        <Box
          className='editItem'
          mt={6}
          fontSize='2xl'
          animation='rotateCrazy 3s infinite linear, colorShift 2s infinite'
        >
          🌀 Store ID: {data.storeId} 🌀
        </Box>
      </Box>

      <style jsx global>{`
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 50% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes pulse {
          from { transform: scale(1); opacity: 0.2; }
          to { transform: scale(1.2); opacity: 0.4; }
        }

        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(6deg); }
          40% { transform: rotate(-6deg); }
          60% { transform: rotate(3deg); }
          80% { transform: rotate(-3deg); }
        }

        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }

        @keyframes rotateCrazy {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.4); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes rainbowText {
          0% { color: red; }
          20% { color: orange; }
          40% { color: yellow; }
          60% { color: lime; }
          80% { color: cyan; }
          100% { color: magenta; }
        }

        @keyframes warpText {
          0%, 100% { letter-spacing: normal; filter: blur(0px); }
          50% { letter-spacing: 20px; filter: blur(4px); }
        }

        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
          20%, 24%, 55% { opacity: 0; }
        }

        @keyframes colorShift {
          0% { color: white; }
          33% { color: lime; }
          66% { color: hotpink; }
          100% { color: white; }
        }
      `}</style>
    </Box>
  )
}
