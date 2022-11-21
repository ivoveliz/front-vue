<template>
    <div class="container">
       
      <div class="row mt-5" v-if="promvalue.length > 0">
        <div class="col">
          <h2 class="text-center">Promedio de Ruido </h2>
          <line-chart
            :chartData="promvalue"
            :options="chartOptions"
            :chartColors="promvalueChartColors"
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
        
        
        promvalue: [],
        promvalueChartColors: {
          borderColor: "#190B28",
          pointBorderColor: "#190B28",
          pointBackgroundColor: "#E55381",
          backgroundColor: "#E55381"
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
       
        const promvalue = d.PromVolumen;
        
        this.promvalue.push({ date, total: promvalue });
        
      });

    
    }
  };
  </script>
  
  <style>
  </style>