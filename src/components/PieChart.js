import React from "react";
import { Pie } from "react-chartjs-2";

export default function LineChart({ data1Labels, data1Numbers, line1Label, line1Color }) {

    const maxNumber1 = Math.round(Math.max(...data1Numbers) * 1.05);
    const minNumber1 = Math.round(Math.min(...data1Numbers) * 0.95);
    const CHART_COLORS = {
        red: 'rgba(255, 99, 132, 0.6)',
        orange: 'rgba(255, 159, 64, 0.6)',
        yellow: 'rgba(255, 205, 86, 0.6)',
        green: 'rgba(75, 192, 192, 0.6)',
        blue: 'rgba(54, 162, 235, 0.6)',
        purple: 'rgba(153, 102, 255, 0.6)',
        grey: 'rgba(201, 203, 207, 0.6)',
        light: 'rgba(0, 0, 0, 0.02)',
    };

    const lineDatasets = [
        {
            label: line1Label,
            data: data1Numbers,
            backgroundColor: Object.values(CHART_COLORS),
            borderColor: Object.values(CHART_COLORS),
            borderWidth: 4,
            fill: true,
            yAxisID: 'y',
        }
    ];
    return (
        <div>
            <Pie
                data={{
                    labels: data1Labels,
                    datasets: lineDatasets,
                }}
                height={400}
                width={300}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
}
