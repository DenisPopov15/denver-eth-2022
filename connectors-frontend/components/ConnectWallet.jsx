import { Box } from '@chakra-ui/react'

export const ConnectWallet = ({ onClick, isMetamaskConnected }) => {
  return (
    <Box
      alignItems="center"
      as="button"
      borderRadius="md"
      bg={isMetamaskConnected ? 'gray.200' : 'primary'}
      color={isMetamaskConnected ? 'gray.800' : 'white'}
      fontSize="14"
      fontWeight="600"
      px={4}
      h={12}
      onClick={!isMetamaskConnected ? onClick : () => {}}
    >
      {isMetamaskConnected ? 'Wallet connected' : 'Connect your Wallet'}
    </Box>
  )
}
