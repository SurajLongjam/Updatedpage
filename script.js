// Progress Chart Initialization
const ctx = document.getElementById('progressChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Completion %',
      data: [20, 40, 65, 85],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
