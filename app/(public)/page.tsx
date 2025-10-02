'use client'
import { Flex, Box, Avatar, Text } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') return null

  if (!session) {
    return (
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontFamily="'Comic Sans MS', cursive"
        fontSize="3xl"
        color="white"
        animation="flicker 1.5s infinite"
        textShadow="2px 2px 8px rgba(0,0,0,0.6)"
        className="crazy-bg"
      >
        🔥 ログインしてね 🔥
        <style jsx global>{`
          .crazy-bg {
            background: linear-gradient(-45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff69b4);
            background-size: 800% 800%;
            animation: bgShift 8s ease infinite;
          }
          @keyframes bgShift {
            0% { background-position: 0% 50%; }
            25% { background-position: 50% 0%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 50% 100%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 24%, 55% { opacity: 0; }
          }
        `}</style>
      </Box>
    )
  }

  if (session && session.user) {
    const linkStyle = {
      textDecoration: 'none',
      border: '2px solid white',
      padding: '12px 20px',
      borderRadius: '12px',
      margin: '6px',
      display: 'inline-block',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: 'white',
      textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
      animation: 'bounce 2s infinite alternate',
    }

    return (
      <Box
        minH="100vh"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        fontFamily="'Comic Sans MS', cursive"
        position="relative"
        textAlign="center"
        className="crazy-bg"
        overflow="hidden"
      >
        {/* アバター */}
        <Box animation="float 4s ease-in-out infinite alternate">
          <Avatar
            name={session.user.name || 'user'}
            size="2xl"
            src="https://stickershop.line-scdn.net/stickershop/v1/product/1472301/LINEStorePC/main.png?v=1"
          />
        </Box>

        {/* ログイン中テキスト */}
        <Text
          fontSize="6xl"
          fontWeight="bold"
          mt={6}
          mb={10}
          animation="rainbowText 2s infinite, warpText 4s infinite"
        >
          🤯 Now LogIn ~~~🤯
        </Text>



        {/* リンクボタン */}
        <Flex>
          <Link href="/stores" style={linkStyle}>
            店舗設定
          </Link>
        </Flex>

        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gap={4} // テキスト同士の間隔
        >
          <Text
            fontSize="4xl"
            fontWeight="black"
            p={4}
            bg="whiteAlpha.700"
            borderRadius="lg"
            animation="bounceText 0.8s infinite alternate, rainbowText 2s infinite"
            textAlign="center"
          >
            🤯エラーが発生しました
          </Text>

          <Text
            fontSize="4xl"
            fontWeight="black"
            p={4}
            bg="whiteAlpha.700"
            borderRadius="lg"
            animation="bounceText 0.8s infinite alternate-reverse, rainbowText 2s infinite"
            textAlign="center"
          >
            うっそー
          </Text>
        </Box>


        <style jsx global>{`
          .crazy-bg {
            background: linear-gradient(-45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff69b4);
            background-size: 800% 800%;
            animation: bgShift 8s ease infinite;
          }
          @keyframes bgShift {
            0% { background-position: 0% 50%; }
            25% { background-position: 50% 0%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 50% 100%; }
            100% { background-position: 0% 50%; }
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
            0%,100% { letter-spacing: normal; filter: blur(0px); }
            50% { letter-spacing: 15px; filter: blur(4px); }
          }
          @keyframes float {
            0% { transform: translateY(0px) rotate(-5deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(-5deg); }
          }
          @keyframes bounce {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-15px) scale(1.1); }
            100% { transform: translateY(0) scale(1); }
          }
          @keyframes bounceText {
            0% { transform: scale(1) translateY(0); }
            25% { transform: scale(1.2, 0.8) translateY(-10px); }
            50% { transform: scale(0.9, 1.1) translateY(5px); }
            75% { transform: scale(1.1, 0.9) translateY(-5px); }
            100% { transform: scale(1) translateY(0); }
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
      </Box>
    )
  }
}
