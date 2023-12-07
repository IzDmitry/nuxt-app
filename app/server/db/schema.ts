import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const bitcoins = sqliteTable('bitcoins', {
  id: integer('id').primaryKey(),
  datetime: text('timestamp').default(sql`CURRENT_TIMESTAMP`),
  GBR: integer('gbr'),
  EUR: integer('eur'),
  USD: integer('usd')
})
