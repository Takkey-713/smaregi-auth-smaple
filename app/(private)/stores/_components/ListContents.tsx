'use client'
import React,{ useState } from 'react'
import { StoreProps } from '../types/store'
import { Box, List } from '@chakra-ui/react'
import { ListCard } from '@/(private)/stores/_components/ListCard'

interface Props {
  data: StoreProps
}


export const ListContent: React.FC<Props> = ({ data }) => {

  const targetStatus = (flg: boolean) => {
    setFlgState(!flg)
  }

  const [ flgState, setFlgState ] = useState(false)
  // このページにはカードコンポーネントとpaginationを配置する
  if (data.length === 0)
    return (
      <Box as='section' p={4}>
        <>データ存在しません</>
      </Box>
    )
  return (
    <Box as='section' p={4}>
      <Box>一括更新</Box>
      <Box>個別更新</Box>
      <List flexDir={'column'}>
        {data.map((store) => (
          <ListCard key={store.storeId} data={store} targetStatus = {flgState} updFn={targetStatus} />
        ))}
      </List>
    </Box>
  )
}
