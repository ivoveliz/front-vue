<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object
    },
    chartColors: {
      type: Object
    }
  },
  mounted() {
    const dates = this.chartData.map(d => d.date).reverse();
    const labels = this.chartData.map(d => d.label).reverse();
    const totals = this.chartData.map(d => d.total).reverse();
     console.log(dates )
     console.log(totals )
    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor
    } = this.chartColors;

    this.renderChart(
      {
        labels: [
   "hola","adios"
  ],
        datasets: [
          {
            label:"hola",
            data: [{ x: '22/11/2022-15:55:15', y: 0 },
    { x: '22/11/2022-15:55:45', y: 0 }],
            borderColor: borderColor,
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            backgroundColor: backgroundColor
          }
        ]
      },
      this.options
    );
  }
};
</script>
