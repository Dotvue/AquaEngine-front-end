<script>
import { MaintenanceService } from '../services/maintenance.service.js';

export default {
  name: 'maintenance-chart',
  data() {
    return {
      maintenanceData: [],
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Number of Maintenance Tasks',
            backgroundColor: '#6584F1',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Maintenance Tasks by Issue Type'
          }
        }
      }
    };
  },
  created() {
    const service = new MaintenanceService();
    service.getAll()
        .then(data => {
          this.maintenanceData = data;
          this.populateChartData();
        })
        .catch(error => {
          console.error('Error fetching maintenance data:', error);
        });
  },
  methods: {
    populateChartData() {
      const issueTypeCount = {};
      this.maintenanceData.forEach(task => {
        const issueType = task.issueType;
        if (issueTypeCount[issueType]) {
          issueTypeCount[issueType]++;
        } else {
          issueTypeCount[issueType] = 1;
        }
      });
      this.chartData.labels = Object.keys(issueTypeCount);
      this.chartData.datasets[0].data = Object.values(issueTypeCount);
    }
  }
};
</script>

<template>
  <div>
    <h1>Maintenance Chart</h1>
    <pv-chart type="bar" :data="chartData" :options="chartOptions"/>
  </div>
</template>

<style>
</style>