import React from 'react'
import { Store } from '../types/store'
import {
  Box,
  ListItem,
  Heading,
  Text,
  Stack,
  Card,
  CardHeader,
  CardBody,
  useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link' // ✅ 使用するならこのまま、使わないなら削除

interface Props {
  data: Store
  targetStatus: boolean
  updFn: (value: boolean) => void
}

export const ListCard: React.FC<Props> = ({ data }) => {
  const stackWidth = useBreakpointValue({ base: '100%', sm: 'calc(100% - 150px)' })
  return (
    <ListItem>
      <Link href={`/stores/${data.storeId}/edit`} passHref>
        <Card direction={{ base: 'column', sm: 'row' }} mt={4} overflow='hidden' cursor='pointer'>
          <Stack w={stackWidth} p={8}>
            <CardHeader p={0}>
              <Heading fontSize={{ base: '14px', md: '18px' }}>{data.storeName}</Heading>
            </CardHeader>
            <CardBody p={0}>
              <Text fontSize={{ base: '12px', md: '14px' }}>
                <Box as='span' fontWeight='bold' mr={2}>
                  ポイント還元率:
                </Box>
                {data.pointCondition.pointGivingUnitPrice}
                <Box as='span'>%</Box>
              </Text>
              <Text fontSize={{ base: '12px', md: '14px' }}>
                <Box as='span' fontWeight='bold' mr={2}>
                  ポイント付与単位(金額):
                </Box>
                {data.pointCondition.spendRate}
                <Box as='span'>円</Box>
              </Text>
              <Text fontSize={{ base: '12px', md: '14px' }}>
                <Box as='span' fontWeight='bold' mr={2}>
                  ポイント付与単位(ポイント):
                </Box>
                {data.pointCondition.pointGivingUnit}
                <Box as='span'>point</Box>
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Link>
    </ListItem>
  )
}
