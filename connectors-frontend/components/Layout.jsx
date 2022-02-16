import { Center } from "@chakra-ui/react"

export const Layout = ({ children }) => {
  return (
    <Center maxW={1200} paddingX="20">
      {children}
    </Center>
  )
}
