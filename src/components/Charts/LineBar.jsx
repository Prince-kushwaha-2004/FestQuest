import React, { useState } from 'react';
import ReactApexCharts from 'react-apexcharts';

const LineBar = () => {

    const [state3, setState3] = useState({

        series: [{
            name: 'Total registration',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352]
        }, {
            name: 'Revenue',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
            },
            stroke: {
                width: [0, 4]
            },
            title: {
                text: 'Per Day Registration'
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: ['Rann', 'Epoque', 'Cricket', 'Hackwithkiet', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001'],
            yaxis: [{
                title: {
                    text: 'user',
                },

            }, {
                opposite: true,
                title: {
                    text: 'Social Media'
                }
            }]
        },


    });
    return (
        <>
            <div id="chart">
                <ReactApexCharts options={state3.options} series={state3.series} type="line" height={350} />
            </div>
            <div id="html-dist"></div>
        </>
    )
}

export default LineBar