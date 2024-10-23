import { prisma } from 'globals/prismadb'
import { WineData } from '@/api/wines/types'
import crypto from 'crypto'

export const createWine = async (data: WineData) => {
  const uniqueQrcode = await generateUniqueQrcode()
  const result = await prisma.wine.create({
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
      qrcode: uniqueQrcode,
    },
  })
  return result
}

const generateUniqueQrcode = async () => {
  let qrcode: string = ''
  let exists = true

  while (exists) {
    qrcode = crypto.randomBytes(20).toString('hex')

    const qrcodeExists = await prisma.wine.findUnique({
      where: { qrcode },
    })

    if (!qrcodeExists) {
      exists = false
    }
  }

  return qrcode
}
