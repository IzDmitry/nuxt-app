import axios from 'axios'
import { db } from '../sqlite-service'
import { bitcoins } from '../db/schema'
import { useScheduler } from '#scheduler'

export default defineNitroPlugin(() => {
  startScheduler()
})

function startScheduler () {
  const scheduler = useScheduler()

  scheduler.run(async () => {
    try {
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      const data = response.data

      // Store the data in the bitcoins table
      await db.insert(bitcoins).values({
        GBR: data.bpi.GBP.rate_float,
        EUR: data.bpi.EUR.rate_float,
        USD: data.bpi.USD.rate_float
      })
      console.log('Data stored successfully!')
    } catch (error) {
      console.error('An error occurred: ', error)
    }
  }).hourly() // .everySecond()
}
