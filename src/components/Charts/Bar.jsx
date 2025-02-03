import React, { useState } from 'react';
import ReactApexCharts from 'react-apexcharts';

const Bar = () => {
    const [state1, setState1] = useState({

        series: [{
            name: 'Registrations',
            data: [44, 55, 57, 56, 61]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87]
        },],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '70%',
                    borderRadius: 2,
                    borderRadiusApplication: 'end',

                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Rann', 'Epoque', 'Prastuti', 'HackwithIndia', 'Cricket'],
            },
            yaxis: {
                title: {
                    text: '(People)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "" + val + " thousands"
                    }
                }
            }
        },


    });
    return (
        <>
            <div id="chart">
                <ReactApexCharts options={state1.options} series={state1.series} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </>
    )
}

export default Bar