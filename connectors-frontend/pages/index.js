import styles from "../styles/Home.module.css"
import { Header } from "../components/Header"
import { HugeTitle } from "../components/HugeTitle"
import { ConnectWallet } from "../components/ConnectWallet"
import { Box, Text, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.landing}>
        <div className={styles.hero}>
          <HugeTitle>Text</HugeTitle>
          <br />
          <Text fontSize='xl' color='#1D1E20'>
            Claim, explore and share your professional identity based on merit, skills and real working and learning experience. </Text>
          <br />
          <ConnectWallet />
        </div>
        <div className={styles.hero}>
          <Box boxSize='lg'>
            <Image src='https://i.imgur.com/9AHOMSW.png' />
          </Box>
        </div>
      </div>
    </>
  )
}
