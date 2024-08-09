import React from 'react'
import { Card, Title, Subtitle } from "@tremor/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({overallchartdata}) => {
    return(
    <Card className="mt-6">
        <Title style={{fontWeight: 'bold'}}>
          Gráfica general de variables capturadas (Actualmente)
        </Title>
        <Subtitle>A continuación se muestran los valores de las variables capturadas.</Subtitle>
        <ResponsiveContainer className="mt-6" width="100%" height={300}>
        <BarChart
          width={100}
          height={300}
          data={[(overallchartdata)]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="updatedAt" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temperatura" fill="red" formatter={(value) => `${value} °C`}/> {/* formato de cada data */}
          <Bar dataKey="humedad_relativa" fill="#3498DB" formatter={(value) => `${value} %`}/>
          <Bar dataKey="CO2" fill='grey' formatter={(value) => `${value} mg`}/>
          <Bar dataKey="VOC" fill='green' formatter={(value) => `${value} mg/m3`}/>
          <Bar dataKey="intensidad_luminosa" fill="#F1C40F" formatter={(value) => `${value} LUX`}/>
        </BarChart>
        </ResponsiveContainer>
    </Card>
    );
}

export default Chart