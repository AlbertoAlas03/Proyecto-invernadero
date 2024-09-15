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
          <Bar dataKey="Temperatura" fill="red" formatter={(value) => `${value} °C`}/> {/* formato de cada data */}
          <Bar dataKey="Humedad" fill="#3498DB" formatter={(value) => `${value} %`}/>
          <Bar dataKey="Nivel_del_Gas" fill='grey' formatter={(value) => `${value} ppm`}/>
          <Bar dataKey="Distancia" fill='green' formatter={(value) => `${value} cm`}/>
        </BarChart>
        </ResponsiveContainer>
    </Card>
    );
}

export default Chart