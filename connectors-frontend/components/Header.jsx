import { Box, Icon, Link } from '@chakra-ui/react'
import { ConnectWallet } from './ConnectWallet'

const menuItemProps = {
  color: 'white',
  variant: 'ghost',
  bg: 'gray.18',
  borderRadius: 0,
  w: '100%',
  mb: '1px',
  py: '21px',
  height: 'unset',
  justifyContent: 'left',
  px: '20px',
  _hover: { bg: 'gray.18' },
  _active: { bg: 'gray.18' },
  _focus: { bg: 'gray.18' },
}

export const Header = ({ links }) => {
  return (
    <Box
      display="flex"
      px={44}
      h={20}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Icon
          width="180"
          height="35"
          viewBox="0 0 200 35"
          fill="none"
          color="white"
        >
          <path
            d="M59.168 29V26.172H61.94L66.168 15.336H63.816V12.508H70.172L75.324 26.172H77.844V29H70.592V26.172H72.076L71.208 23.764H65.636L64.768 26.172H66.392V29H59.168ZM66.448 21.552H70.452L68.492 15.7L66.448 21.552ZM79.2073 12.508H86.4593L92.4232 24.352V15.336H90.2673V12.508H97.9673V15.336H95.3353V29H91.5833L84.4993 15.308L84.5273 26.172H86.8793V29H79.1793V26.172H81.6153V15.336H79.2073V12.508ZM98.9258 12.508H106.542V15.336H104.722L108.25 20.096L111.75 15.336H109.902V12.508H117.154V15.336H115.138L109.734 22.336V26.2H112.366V29H103.882V26.2H106.542V22.364L101.11 15.336H98.9258V12.508ZM124.191 29V26.172H126.963L131.191 15.336H128.839V12.508H135.195L140.347 26.172H142.867V29H135.615V26.172H137.099L136.231 23.764H130.659L129.791 26.172H131.415V29H124.191ZM131.471 21.552H135.475L133.515 15.7L131.471 21.552ZM151.511 12.508C153.676 12.508 155.328 12.9653 156.467 13.88C157.605 14.7947 158.175 16.1293 158.175 17.884C158.175 19.676 157.605 21.048 156.467 22C155.328 22.9333 153.676 23.4 151.511 23.4H149.803V26.172H152.631V29H144.203V26.172H146.555V15.336H144.203V12.508H151.511ZM151.483 20.852C153.685 20.852 154.787 19.8907 154.787 17.968C154.787 16.2133 153.685 15.336 151.483 15.336H149.831V20.852H151.483ZM166.769 12.508C168.934 12.508 170.586 12.9653 171.725 13.88C172.863 14.7947 173.433 16.1293 173.433 17.884C173.433 19.676 172.863 21.048 171.725 22C170.586 22.9333 168.934 23.4 166.769 23.4H165.061V26.172H167.889V29H159.461V26.172H161.812V15.336H159.461V12.508H166.769ZM166.741 20.852C168.943 20.852 170.045 19.8907 170.045 17.968C170.045 16.2133 168.943 15.336 166.741 15.336H165.089V20.852H166.741Z"
            fill="#1D1E20"
          />
          <image
            id="image0_5575_91697"
            width={34}
            height={34}
            xlinkHref="data:image/png;base64,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"
          />
        </Icon>
      </Box>
      <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
        <Box display="flex" as="nav">
          <Link
            href="https://chakra-ui.com"
            variant="nav.link"
            color="#1D1E20"
            fontWeight="600"
            cursor="pointer"
            mx="0px"
            _first={{ ml: '200' }}
            _last={{ mr: '0' }}
          >
            About
          </Link>
        </Box>
      </Box>
      <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
        <Box display="flex" as="nav">
          <Link
            href="https://chakra-ui.com"
            variant="nav.link"
            color="#1D1E20"
            fontWeight="600"
            cursor="pointer"
            mx="10px"
            _first={{ ml: '0' }}
            _last={{ mr: '0' }}
          >
            Collaborate
          </Link>
        </Box>
      </Box>
      <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
        <Box display="flex" as="nav">
          <Link
            href="https://chakra-ui.com"
            variant="nav.link"
            color="#1D1E20"
            fontWeight="600"
            cursor="pointer"
            mx="0px"
            _first={{ ml: '0' }}
            _last={{ mr: '0' }}
          >
            Developers
          </Link>
        </Box>
      </Box>
      <ConnectWallet />
    </Box>
  )
}
