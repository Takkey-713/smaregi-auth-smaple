import { prisma } from 'globals/prismadb'

export const getList = async (userId: string, page: number, perPage: number) => {
  const skip = (page - 1) * perPage
  const take = perPage

  const result = await prisma.wine.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
    skip,
    take,
  })
  return result
}
