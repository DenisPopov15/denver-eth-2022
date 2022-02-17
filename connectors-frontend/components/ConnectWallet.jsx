import { Box } from '@chakra-ui/react'

export const ConnectWallet = () => {
  return (
    <Box
      alignItems="center"
      as="button"
      borderRadius="md"
      bg="primary"
      color="white"
      fontSize="14"
      fontWeight="600"
      px={4}
      h={12}
    >
      Connect your Wallet
    </Box>
  )
}
