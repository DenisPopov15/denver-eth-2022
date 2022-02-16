import { Heading, Container } from "@chakra-ui/react"
import {} from "@chakra-ui/react"

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Heading size="md" fontWeight="bold" mb="8">{title}</Heading>
      {children}
    </Container>
  )
}
