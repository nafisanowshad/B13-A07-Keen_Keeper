import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const StatsChart = ({ callCount, textCount, videoCount }) => {


    const data = [
        { name: 'Call', value: callCount, fill: '#244D3F' },
        { name: 'Text', value: textCount, fill: '#7E35E1' },
        { name: 'Video', value: videoCount, fill: '#37A163' },
    ];

    return (
        <PieChart style={{ width: '100%',  maxWidth: '350px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="10%"
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
            />

            <Legend wrapperStyle={{ marginTop: 30}} />
            <Tooltip />
        </PieChart>
    );
};

export default StatsChart;