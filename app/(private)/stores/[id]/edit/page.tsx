import { authOptions } from '@/_lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { zStore } from '../../types/store'
import { Content } from './components/content'

interface ApiRequest {
  contractId: string
  accessToken: string
  storeId: string
}

export default async function Edit({
  params,
}: {
  params: { id : string}
}
) {
  const storeId = params.id;

  const session = await getServerSession(authOptions)
  // TODO ここでトークンの有効期限を見て切れてたら更新しに行く
  if (session && session.user) {
    const contractId = session.user.contract.id
    const accessToken = session.accessToken
    const result = await getStore({ contractId, accessToken, storeId })

    return <Content data={result} />
  } else {
    redirect('/unauthorized')
  }
}

const getStore = async (args: ApiRequest) => {
  // TODO 以下共通化したい
  const { contractId, accessToken, storeId } = args
  const baseUrl = process.env.API_ENDPOINT || ''
  const queryParams = new URLSearchParams({
    fields: 'storeId,storeName',
    with_point_condition: 'all',
  }).toString()
  const res = await fetch(`${baseUrl}/${contractId}/pos/stores/${storeId}?${queryParams}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json() // eslint-disable-line
  const result = zStore.parse(data)
  return result
}
