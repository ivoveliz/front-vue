<template>
    <div class="container">
      
      <div class="row mt-5" v-if=" maxvalue.length > 0">
        <div class="col">
          <h2 class="text-center">Ruido Máximo</h2>
          <line-chart
            :chartData=" maxvalue"
            :options="chartOptions"
            :chartColors=" maxvalueChartColors"
            label= "dB/min"
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
        
        maxvalue: [],
        maxvalueChartColors: {
          borderColor: "#077187",
          pointBorderColor: "#0E1428",
          pointBackgroundColor: "#AFD6AC",
          backgroundColor: "#74A57F"
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
        
      };
    },
    async created() {

      
      const { data } = await axios.get('https://bet5piq0ak.execute-api.us-west-2.amazonaws.com/tasks',{

    })
         
        
        const json = data.body.tasks;
       
        //console.log(this.arrPositive)
        json.forEach(d => {
       
          const date =moment(d.CreatedAt).format('MM/DD/YYYY-HH:mm');
        const maxvalue = d.MaxVolumen;
     
        this.maxvalue.push({ date, total: maxvalue});
      
        
      });

    
    }
  };
  </script>
  
  <style>
  </style>