import { Box, Link } from "@chakra-ui/react"

export const SkillBox = ({ skill, credentials }) => (
  <Box
    maxW="sm"
    display="inline-flex"
    width="30%"
    minW="250px"
    m="10px"
    p="10px"
    bgGradient="linear(to-b, #86156F, #4D43D1)"
    _hover={{
      bgGradient: "linear(to-b, #86156F 20%, #4D43D1)",
    }}
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
  >
    <Box p="13px 25px 11px">
      <Box display="flex" alignItems="baseline">
        <Box
          color="white"
          fontWeight="600"
          letterSpacing="wide"
          fontSize="18px"
        >
          {skill}
        </Box>
      </Box>

      <Box
        fontWeight="800"
        as="h4"
        lineHeight="tight"
        fontSize="16px"
        color="white"
        isTruncated
      >
        {credentials} credentials
      </Box>

      <Box>
        <Link
          href="https://chakra-ui.com"
          variant="nav.link"
          color="primary"
          fontWeight="600"
          cursor="pointer"
          mx="0px"
          _last={{ mr: "0" }}
        >
          See details
        </Link>
      </Box>
    </Box>
  </Box>
)
