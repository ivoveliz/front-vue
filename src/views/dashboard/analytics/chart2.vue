<template>
    <div class="container">
   
  
      <div class="row mt-5" v-if="minvalue.length > 0">
        <div class="col">
          <h2 class="text-center">Ruido Mínimo</h2>
          <line-chart
            :chartData="minvalue"
            :options="chartOptions"
            :chartColors="minvalueChartColors"
            label="dB/min"
          />
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import moment from "moment";
  
  import LineChart from "./charts-components/LineChart";
  
  export default {
    components: {
      LineChart
    },
    data() {
      return {
        
      
        minvalue: [],
        minvalueChartColors: {
          borderColor: "#784F41",
          pointBorderColor: "#784F41",
          pointBackgroundColor: "#BBE5ED",
          backgroundColor: "#BBE5ED"
        } ,
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      };
    },
    async created() {
 
      const { data } = await axios.get('https://bet5piq0ak.execute-api.us-west-2.amazonaws.com/tasks',{
        // params: {
        //   body
        //     }
     
              })
         
        
        const json = data.body.tasks;
       
        //console.log(this.arrPositive)
        json.forEach(d => {
       
          const date =moment(d.CreatedAt).format('MM/DD/YYYY-HH:mm');
        
        const minvalue = d.MinVolumen;
       
        
        this.minvalue.push({ date, total: minvalue });
        
        
      });

    
    }
  };
  </script>
  
  <style>
  </style>