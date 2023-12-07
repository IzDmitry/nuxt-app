import { getTableColumns } from 'drizzle-orm'
import { db } from '../sqlite-service'
import { bitcoins } from '../db/schema'

export default defineEventHandler(async () => {
  try {
    const { datetime, GBR, USD, EUR } = getTableColumns(bitcoins)
    const bitcoinResp = await db.select({ datetime, GBR, USD, EUR }).from(bitcoins).all()
    return bitcoinResp
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message
    })
  }
})
