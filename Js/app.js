const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const alertBanner = document.getElementById('alert');
const bellIconClick = document.getElementById('bell-svg');
const notifications = document.querySelector('.dropdown-content');
const hourlyTraffic = document.getElementById('hourlyTraffic');
const dailyTraffic = document.getElementById('dailyTraffic');
const weeklyTraffic = document.getElementById('weeklyTraffic');
const monthlyTraffic = document.getElementById('monthlyTraffic');


// Traffic Buttons Container //
let btnContainer = document.getElementById('traffic-buttons');

// Traffic Buttons By Class //
let btns = btnContainer.getElementsByClassName("traffic-nav-link");

// Loop through the buttons //
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    e.target.classList.add("active");
  });
}

// ========================== //


// Bell Drop Down Menu //

bellIconClick.addEventListener('click', () => {
  notifications.classList.toggle('hidden');
});

window.onclick = function(event) {
  if (event.target === bellIconClick) {
    return;
  } else if (!notifications.classList.contains('hidden')) {
    notifications.classList.add('hidden');
  }
};
// ================== //



alertBanner.innerHTML = `
  <div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete!</p>
    <button class="alert-banner-close">x</button>
  </div>;
`

alertBanner.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

// Weekly Traffic Data //

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
  }]
};

let trafficOptions = {
  maintainAspectRatio: false,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend: {
    display: false
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

weeklyTraffic.addEventListener('click', () => {
  trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  })
});

// =================== //

// Hourly Taffic Data //

let trafficHourlyData = {
  labels: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
  datasets: [{
    data: [0, 10, 30, 20, 45, 25, 15, 30, 35, 42, 50],
    backgroundColor: 'rgba(116, 119, 191, .3)',
  }]
};

hourlyTraffic.addEventListener('click', () => {
  trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficHourlyData,
    options: trafficOptions
  })
});

// =================== //

// Daily Traffic Data //

let trafficDailyData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
  datasets: [{
    data: [0, 200, 400, 100, 250, 350, 400, 300, 350, 200, 100],
    backgroundColor: 'rgba(116, 119, 191, .3)',
  }]
};

dailyTraffic.addEventListener('click', () => {
  trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDailyData,
    options: trafficOptions
  })
});

// =================== //

// Monthly Traffic Data //

let trafficMonthlyData = {
  labels: ["February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [{
    data: [12500, 10000, 8500, 9000, 13500, 15000, 7500, 8700, 9000, 11500, 8500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
  }]
};

monthlyTraffic.addEventListener('click', () => {
  trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficMonthlyData,
    options: trafficOptions
  })
});

// Bar Graph //

const dailyData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    label: '# of hits',
    data: [100, 115, 175, 125, 230, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
};

// Bar Chart //

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// Doughnut Chart //

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: "# of Users",
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

// Mobile Options //

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
}

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});


// Messaging Section of Site //

const user = document.getElementById("members");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});

// ========================== //

// Local Storage Saved Settings //
const emailToggle = document.getElementById('toggle');
const profileToggle = document.getElementById('toggle_2');
const timezoneSelect = document.querySelector('#timezone')

function testStorage() {
  const test = 'test';
   try {
     localStorage.setItem(test, test);
     localStorage.removeItem(test);
     return true;
    } catch(e) {
      return false;
  }  
}

if (testStorage() === true) {
  
  document.getElementById("save").addEventListener("click", () => {
    localStorage.setItem('emailNotification', emailToggle.checked);
    localStorage.setItem('profilePublic', profileToggle.checked);
    localStorage.setItem('myTimeZoneSelectedValue', timezoneSelect.value);
    alert("Settings Successfully Saved!");
  });

  document.getElementById("cancel").addEventListener("click", () => {
    const cancel = confirm('Are you sure you want to cancel changes?');

    if (cancel) {
      localStorage.setItem('emailNotification', emailToggle.checked = null);
      localStorage.setItem('profilePublic', profileToggle.checked = null);
      localStorage.setItem('myTimeZoneSelectedValue', timezoneSelect.value = 'Select a Timezone');
    };
  }); 

  document.getElementById('timezone').addEventListener("click", () => {
    localStorage.setItem('myTimeZoneSelectedValue', 'far-east');
    localStorage.setItem('myTimeZoneSelectedValue', 'middle-east');
    localStorage.setItem('myTimeZoneSelectedValue', 'europe');
    localStorage.setItem('myTimeZoneSelectedValue', 'east-americas');
    localStorage.setItem('myTimeZoneSelectedValue', 'west-americas');
  });

}

emailToggle.checked = JSON.parse(localStorage.getItem('emailNotification'));
profileToggle.checked = JSON.parse(localStorage.getItem('profilePublic'));
document.querySelector('#timezone').value = localStorage.getItem('myTimeZoneSelectedValue');