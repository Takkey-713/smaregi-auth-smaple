import { prisma } from 'globals/prismadb'
import { WineData } from '@/api/wines/types'

export const updateWine = async (id: number, data: WineData) => {
  const result = await prisma.wine.update({
    where: {
      id: id,
    },
    data: {
      name: data.name,
      district: data.district,
      variety: data.variety,
      category: data.category,
      userId: data.userId,
      description: data.description,
      quantityInStock: data.quantityInStock,
      unitPrice: data.unitPrice,
      sellingPrice: data.sellingPrice,
      supplier: data.supplier,
      image: data.image,
    },
  })
  return result
}
