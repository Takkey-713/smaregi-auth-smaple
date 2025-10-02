import { z } from 'zod'

const zPointCondition = z.object({
  storeId: z.string(),
  pointUseDivision: z.string(),
  spendRate: z.string().nullable(),
  pointGivingUnitPrice: z.string().nullable(),
  pointGivingUnit: z.string().nullable(),
  pointGivingDivision: z.string(),
  pointUseUnit: z.string(),
  pointSpendDivision: z.string(),
  pointSpendLimitDivision: z.string(),
  expireDivision: z.string(),
  expireLimit: z.string().nullable(),
  mileageDivision: z.string(),
  mileageLimit: z.string().nullable(),
})

export const zStore = z.object({
  storeId: z.string(),
  storeName: z.string(),
  pointCondition: zPointCondition,
})

export type Store = z.infer<typeof zStore>

export const zStores = z.array(zStore)
export type StoreProps = z.infer<typeof zStores>