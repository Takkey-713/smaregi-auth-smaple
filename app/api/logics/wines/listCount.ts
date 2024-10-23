import { prisma } from 'globals/prismadb'

export const listCount = async (userId: string) => {
  const count = await prisma.wine.count({
    where: {
      userId: userId,
    },
  })

  return count
}
