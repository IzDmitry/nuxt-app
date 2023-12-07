<template>
	<div class="chart-container">
	    <highstock
	      :options="chartOptions"
	      :update="['options.title', 'options.series']"
	    />
	</div>
</template>

<script>
const data = await fetch(
        'http://localhost:3000/api/bitcoin'
    ).then(response => response.json());

export default {
  data() {
    return {
      chartOptions: {
        title: {
          text: "Historical bitcoin price data"
        },
        rangeSelector: {
        	buttons: [
	        	{
	            type: 'all',
	            text: 'All'
	          },
			    	{
			        type: "day",
			        count: 1,
			        text: "1d"
			    	},
			    	{
			        type: "week",
			        count: 1,
			        text: "1w"
			    	},
			    	{
			        type: "month",
			        count: 1,
			        text: "1m"
				    },
				    {
			        type: "year",
			        count: 1,
			        text: "1y"
			    	}
					],
        },
        series: [
          {
            name: 'USD',
            data: data.map(item => [new Date(item['datetime']).getTime(), item['USD']]),
          },
          {	
            name: 'GBR',
            data: data.map(item => [new Date(item['datetime']).getTime(), item['GBR']]),
          },
          {	
            name: 'EUR',
            data: data.map(item => [new Date(item['datetime']).getTime(), item['EUR']]),
          },
        ],
      }
    };
  },
};
</script>

<style>
.chart-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.highcharts-credits{
	visibility: hidden;
}
</style>

