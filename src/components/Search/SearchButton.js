import React from 'react';
import {Box, Flex, useColorModeValue} from '@chakra-ui/react';
import {FiSearch} from 'react-icons/fi';

export default function SearchButton(props) {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.400', 'gray.500');
  return (
    <Flex
      borderWidth="1px"
      h="10"
      px="3"
      lineHeight="none"
      align="center"
      maxW="sm"
      w="full"
      as="button"
      rounded="md"
      bg={bgColor}
      _focus={{
        outline: 'none',
        shadow: 'outline'
      }}
      {...props}
    >
      <FiSearch />
      <Box ml="2" color={textColor}>
        Search Apollo (Press /)
      </Box>
    </Flex>
  );
}