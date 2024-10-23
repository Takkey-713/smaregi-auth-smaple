import { prisma } from 'globals/prismadb'

export const getWine = async (wineId: number) => {
  const result = await prisma.wine.findUnique({
    where: {
      id: Number(wineId),
    },
  })
  return result
}
