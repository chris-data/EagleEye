/**
 * Grid-light theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
    href: '//fonts.googleapis.com/css?family=Dosis:400,600',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
        "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
    chart: {
        backgroundColor: {
            linearGradient: {x1: 0, y1: 0, x2: 1, y2: 1},
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        },
        style: {
            fontFamily: "'Unica One', sans-serif"
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    },
    tooltip: {
        borderWidth: 0,
        shadow: true
    },
    legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px'
        }
    },
    xAxis: {
        //gridLineWidth: 0.5,
        labels: {
            style: {
                fontSize: '12px',
                color: '#6e6e70'
            }
        }
    },
    yAxis: {
        minorTickInterval: 'auto',
        //gridLineWidth: 0.5,
        title: {
            style: {
                textTransform: 'uppercase'
            }
        },
        labels: {
            style: {
                fontSize: '12px',
                color: '#6e6e70'
            }
        }
    },
    plotOptions: {
        candlestick: {
            lineColor: '#404048'
        }
    },
    // General
    //background2: '#F0F0EA'
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
