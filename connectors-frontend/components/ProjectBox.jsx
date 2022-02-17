import { Box, BoxProps, Text } from '@chakra-ui/react'
import { Tag } from './Tag'
import { OrganizationButton } from './OrganizationButton'
import { AvatarList } from './AvatarList'

export const ProjectBox = ({
  onCardClick,
  organizationHelperText,
  organizationImage,
  organizationName,
  projectTitle,
  projectDescription,
  tag,
  giveStatus,
  dateRange,
  users,
  children,
}) => (
  <Box
    maxW="sm"
    width="300px"
    marginRight="20px"
    bgGradient="linear(to-b, #2E196A, #4BAEF5)"
    _hover={{
      bgGradient: 'linear(to-b, #2E196A 20%, #4BAEF5)',
    }}
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    onClick={onCardClick}
  >
    <Box p="13px 25px 11px" borderBottom="1px solid" borderColor="white">
      <OrganizationButton
        label={organizationName}
        imageSrc={organizationImage}
        helperText={organizationHelperText?.text}
        tooltipText={organizationHelperText?.tooltipText}
        size="md"
      />
    </Box>
    <Box
      p="14px 25px 18px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box marginBottom="24px">
        {!!projectTitle && (
          <Box mb="10px">
            <Text color="white" variant="heading.3">
              {projectTitle}
            </Text>
          </Box>
        )}
        {!!projectDescription && (
          <Box mb="10px">
            <Text color="white" variant="paragraph">
              {projectDescription}
            </Text>
          </Box>
        )}

        <Box
          display="flex"
          flexDirection={{ base: 'row', md: 'column' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          justifyContent={{ base: 'space-between', md: 'center' }}
        >
          {!!dateRange && (
            <Box mb={{ base: 'unset', md: '10px' }} order={{ base: 2, md: 1 }}>
              <Text color="white" fontWeight="800" variant="heading.6">
                {dateRange}
              </Text>
            </Box>
          )}
          {!!tag && (
            <Box order={{ base: 1, md: 2 }}>
              <Tag value={tag} selected />
            </Box>
          )}
        </Box>
      </Box>
      {!!giveStatus && (
        <Box mb="24px">
          {giveStatus && (
            <Box mb="5px">
              <Text
                color="white"
                fontWeight="800"
                lineHeight="17.71px"
                fontSize="sm"
              >
                {giveStatus} GIVEs
              </Text>
            </Box>
          )}
        </Box>
      )}
      <Box
        display="flex"
        flexDirection={{ base: 'row', md: 'column' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        justifyContent={{ base: 'space-between', md: 'center' }}
      >
        {!!children && <Box mb={{ base: 'unset', md: '24px' }}>{children}</Box>}
        {!!users?.length && <AvatarList size="sm" avatars={users} />}
      </Box>
    </Box>
  </Box>
)
