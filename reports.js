// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // --- Sample Data ---
  // In a real application, fetch this data from your backend.
  const students = [
    { name: 'Amit Sharma', roll: '01', class: 'VI - B', totalDays: 30, present: 20, absent: 10 },
    { name: 'Priya Singh', roll: '02', class: 'VI - B', totalDays: 30, present: 25, absent: 5 },
    { name: 'Rahul Verma', roll: '03', class: 'VIII - A', totalDays: 30, present: 29, absent: 1 },
    { name: 'Sneha Patel', roll: '04', class: 'VIII - A', totalDays: 30, present: 10, absent: 20 },
    { name: 'Rohan Gupta', roll: '05', class: ' X - A', totalDays: 30, present: 27, absent: 3},
    { name: 'Anjali Mehra', roll:'06', class: 'X - A', totalDays: 30, present: 16, absent: 14 },
    { name: 'Vikas Kumar', roll: '07', class: 'XI - B', totalDays: 30, present: 22, absent: 8 },
    { name: 'Meena Joshi', roll: '08', class: 'XI - B', totalDays: 30, present: 13, absent: 17 }
  ];

  // Simulate today's attendance (for demo)
  const todayAttendance = {
    'VI-B-01': true,
    'VI-B-02': false,
    'VIII-A-01': true,
    'VIII-A-02': false,
    'X-A-01': true,
    'X-A-02': true,
    'XI-B-01': true,
    'XI-B-02': true
  };

  // --- Summary Cards ---
  const totalStudents = students.length;
  const below75 = students.filter(s => (s.present / s.totalDays) * 100 < 75).length;
  const presentToday = Object.values(todayAttendance).filter(v => v).length;
  const absentToday = Object.values(todayAttendance).filter(v => !v).length;

  document.getElementById('below-75-count').textContent = below75;
  document.getElementById('total-students-count').textContent = totalStudents;
  document.getElementById('present-today-count').textContent = presentToday;
  document.getElementById('absent-today-count').textContent = absentToday;

  // --- Attendance Trend (Line Chart) ---
  // Simulate 7 days trend for each class with zig-zag pattern
  const classes = ['Class VI - B', 'Class VIII - A', 'Class X - A', 'Class XI - B'];
  const trendData = {
    'Class VI - B':    [50, 90, 60, 30, 80, 10, 95],   // bottom, top, middle, bottom, top, middle, top
    'Class VIII - A':  [85, 30, 90, 20, 7, 35, 5],   // top, bottom, top, middle, top, bottom, top
    'Class X - A':     [60, 95, 40, 85, 30, 9, 53],   // middle, top, bottom, top, bottom, top, middle
    'Class XI - B':    [95, 50, 1, 35, 62, 40, 7]    // top, middle, top, bottom, top, bottom, top
  };
  const trendLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const trendChartCtx = document.getElementById('trendChart').getContext('2d');
  new Chart(trendChartCtx, {
    type: 'line',
    data: {
      labels: trendLabels,
      datasets: classes.map((cls, idx) => ({
        label: cls,
        data: trendData[cls],
        borderColor: ['#1976d2', '#10b981', '#ffc107', '#ff6384'][idx],
        backgroundColor: 'rgba(25, 118, 210, 0.08)',
        tension: 0.35,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 24,
          bottom: 18,
          left: 18,
          right: 18
        }
      },
      plugins: {
        legend: { display: true },
        title: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: { display: true, text: 'Attendance %' }
        },
        x: {
          title: { display: true, text: 'Day' }
        }
      }
    }
  });

  // --- Class-wise Comparison (Horizontal Bar Chart) ---
  // Calculate average attendance percentage per class
  const classWise = {};
  students.forEach(s => {
    if (!classWise[s.class]) classWise[s.class] = [];
    classWise[s.class].push((s.present / s.totalDays) * 100);
  });
  const classLabels = Object.keys(classWise);
  const classAverages = classLabels.map(cls => (
    classWise[cls].reduce((a, b) => a + b, 0) / classWise[cls].length
  ).toFixed(1));

  const classComparisonCtx = document.getElementById('classComparisonChart').getContext('2d');
  new Chart(classComparisonCtx, {
    type: 'bar',
    data: {
      labels: classLabels,
      datasets: [{
        label: 'Average Attendance %',
        data: classAverages,
        backgroundColor: [
          'rgba(25, 118, 210, 0.85)',
          'rgba(16, 185, 129, 0.85)',
          'rgba(255, 193, 7, 0.85)',
          'rgba(255, 99, 132, 0.85)'
        ],
        borderRadius: 8,
        borderSkipped: false,
        barPercentage: 0.7,
        categoryPercentage: 0.6
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: {
          display: false
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          title: { display: true, text: 'Attendance %' }
        },
        y: {
          title: { display: true, text: 'Class' }
        }
      }
    }
  });

  // --- Student Attendance Table ---
  const tbody = document.getElementById('student-attendance-table-body');
  tbody.innerHTML = '';
  students.forEach(s => {
    const percent = ((s.present / s.totalDays) * 100).toFixed(1);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${s.name}</td>
      <td>${s.roll}</td>
      <td>${s.totalDays}</td>
      <td>${s.present}</td>
      <td>${s.absent}</td>
      <td style="font-weight:600; color:${percent < 75 ? '#c62828' : '#1976d2'}">${percent}%</td>
    `;
    tbody.appendChild(tr);
  });
});