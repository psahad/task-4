
        google.charts.load('current',{'packages':['corechart']});
        google.charts.setOnLoadCallback(drawStuffDesktop);

        google.charts.setOnLoadCallback(drawStuffMobile);

        function drawStuffDesktop(){
        var data = new google.visualization.arrayToDataTable([
          ['', 'Total Sales', 'Total Balance'],
          ['Mar 21', 450, 550],
          ['Mar 22', 200, 250],
          ['Mar 23', 600, 425],
          ['Mar 24', 300, 100],
          ['Mar 25', 400, 250],
          ['Mar 26', 510, 550],
          ['Mar 27', 100, 200],
          ['Mar 28', 150, 300]
          
        ]);

        var options = {
            bars: 'vertical',
            vAxis: {format: 'Currency',
                gridlines : {
                    count : 3, color: '#282C38'
                },
                ticks: [200, 400, 600],
                baseline : {
                    color: '#282C38'
                },
                textStyle: {
                    color: '#3C4254', 
                    fontName: 'inter'
                },
            },
            hAxis: {
                textStyle: {
                    color: '#3C4254', 
                    fontName: 'inter'
                }
            },
            height: 236,
            width: 800,
            backgroundColor: {
                    fill: 'transparent',
                },
            chartArea: {
                backgroundColor: {
                    fill: 'transparent',
                }
            },
            bar: {
                groupWidth: 20
            },
            colors: ['#11CABE', '#246CF9'],
            fontName: 'inter',
            theme: 'material',
            legend: 'none',
        };

        var table = new google.visualization.ColumnChart(document.getElementById('chart'));

        table.draw(data, options);
        }
        

        function drawStuffMobile(){
        var data = new google.visualization.arrayToDataTable([
          ['', 'Total Sales', 'Total Balance'],
          ['Mar 21', 450, 550],
          ['Mar 22', 200, 250],
          ['Mar 23', 600, 425]

          
        ]);

        var options = {
            bars: 'vertical',
            vAxis: {format: 'Currency',
                gridlines : {
                    count : 3, color: '#282C38'
                },
                ticks: [200, 400, 600],
                baseline : {
                    color: '#282C38'
                },
                textStyle: {
                    color: '#3C4254', 
                    fontName: 'inter'
                },
            },
            hAxis: {
                textStyle: {
                    color: '#3C4254', 
                    fontName: 'inter'
                }
            },
            height: 236,
            width: 300,
            backgroundColor: {
                    fill: 'transparent',
                },
            chartArea: {
                backgroundColor: {
                    fill: 'transparent',
                }
            },
            bar: {
                groupWidth: 20
            },
            colors: ['#11CABE', '#246CF9'],
            fontName: 'inter',
            theme: 'material',
            legend: 'none',
        };

        var table = new google.visualization.ColumnChart(document.getElementById('chart-mobile'));

        table.draw(data, options);
        }


const menuIcon = document.querySelector('.hamburger');

const navLeft = document.querySelector('.nav-left')

menuIcon.addEventListener('click', () => {
    navLeft.classList.toggle('change')
})


