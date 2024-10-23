import { authOptions } from '@/_lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { zStores } from './types/store'
import { ListContent } from '@/(private)/stores/_components/ListContents'

// interface Params {
//   searchParams: {
//     page?: string
//     perPage?: string
//   }
// }

interface ApiRequest {
  contractId: string
  accessToken: string
}

export default async function List() {
  const session = await getServerSession(authOptions)
  // TODO ここでトークンの有効期限を見て切れてたら更新しに行く
  if (session && session.user) {
    const contractId = session.user.contract.id
    const accessToken = session.accessToken
    // const page = searchParams.page || '1'
    // const perPage = searchParams.perPage || '10'
    const result = await getStoresList({ contractId, accessToken })
    console.log(result)
    return <ListContent data={result} />
  } else {
    redirect('/unauthorized')
  }
}

const getStoresList = async (args: ApiRequest) => {
  // TODO 以下共通化したい
  const { contractId, accessToken } = args
  const baseUrl = process.env.API_ENDPOINT || ''
  const queryParams = new URLSearchParams({
    fields: 'storeId,storeName',
    division: '1',
    with_point_condition: 'all',
  }).toString()
  const res = await fetch(`${baseUrl}/${contractId}/pos/stores?${queryParams}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json() // eslint-disable-line
  const result = zStores.parse(data)
  return result
}
