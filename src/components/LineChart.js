import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ data1Labels, data1Numbers, line1Label, line1Color, data2Labels, data2Numbers, line2Label, line2Color }) {

    const maxNumber1 = Math.round(Math.max(...data1Numbers) * 1.05);
    const minNumber1 = Math.round(Math.min(...data1Numbers) * 0.95);
    const maxNumber2 = Math.round(Math.max(...data2Numbers) * 1.05);
    const minNumber2 = Math.round(Math.min(...data2Numbers) * 0.95);

    const lineDatasets = [
        {
            label: line1Label,
            data: data1Numbers,
            backgroundColor: [`rgba(${line1Color},0.4)`],
            borderColor: [`rgba(${line1Color},1)`],
            borderWidth: 2,
            fill: true,
            yAxisID: 'y',
        }
    ];
    if (line2Label) {
        lineDatasets.push({
            label: line2Label,
            data: data2Numbers,
            backgroundColor: [`rgba(${line2Color},0.4)`],
            borderColor: [`rgba(${line2Color},1)`],
            borderWidth: 2,
            fill: true,
            yAxisID: 'y',
        });
    }
    return (
        <div>
            <Line
                data={{
                    labels: data1Labels,
                    datasets: lineDatasets,
                }}
                height={300}
                width={400}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            min: minNumber1,
                            max: maxNumber1,
                            beginAtZero: true,
                        },
                        y1: {
                            min: minNumber2,
                            max: maxNumber2,
                            display: false,
                            beginAtZero: true,
                            position: 'right',
                            grid: {
                                drawOnChartArea: false,
                            },
                        },
                    },
                }}
            />
        </div>
    );
}
