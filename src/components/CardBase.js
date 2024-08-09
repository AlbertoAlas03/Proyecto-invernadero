import React from "react";
import { Grid, Col, Card, Text, Metric, Title, Flex, Badge, Legend, CategoryBar, ProgressBar } from "@tremor/react";
import thermometer from "../img/thermometer.png";
import humidity_img from "../img/Humity.png";
import co2 from "../img/co2.png";
import planet from "../img/planet-earth.png";
import ligh_bulb from "../img/light-bulb.png";
import {
  StatusOnlineIcon
} from "@heroicons/react/outline";

function convertCelsiusToFahrenheit(celsius) {
  return ((celsius * 1.8) + 32).toFixed(2);
}

function formatCelsius(celsius) {
  return (celsius * 1).toFixed(2);
}

const CardBase = ({ last_data }) => {

  /*const [last_data,setLast_data]=useState([])
  
  function fetch_last_data(){
    fetch(url_data).then(response=>response.json()).then(resjson=>{
      setLast_data(resjson[resjson.length-1])
      console.log(resjson[resjson.length-1])
    })
  }

useEffect(()=>{
  fetch_last_data()
},[]);*/

  return (
    <Grid
      numItems={1}
      numItemsSm={2}
      numItemsLg={3}
      className="gap-2"
    >
      <Col numColSpan={1} numColSpanLg={2}>
        <Card decoration="top" decorationColor="red">
          <Flex justifyContent="center">
            <Title>Temperatura actual</Title>
          </Flex>
          <Flex className="mt-6">
            <div>
              <img
                alt="Temperatura"
                src={thermometer}
                style={{
                  height: 60,
                  widows: 60
                }}
              />
            </div>
            <Metric>{formatCelsius(last_data.temperatura)}°C / {convertCelsiusToFahrenheit(last_data.temperatura)}°F</Metric>
            <Badge icon={StatusOnlineIcon}>LIVE</Badge>
          </Flex>
          <Flex className="mt-6">
            <Text>Medidor de temperatura (°C)</Text>
            <Text>{last_data.temperatura}°C</Text>
          </Flex>
          <CategoryBar
            values={[20, 10, 70]}
            colors={["sky", "orange", "rose"]}
            markerValue={last_data.temperatura}
            className="mt-3"
          />
          <Flex className="mt-6">
            <Text>Medidor de temperatura (°F)</Text>
            <Text>{convertCelsiusToFahrenheit(last_data.temperatura)}°F</Text>
          </Flex>
          <CategoryBar
            values={[68, 18, 14]}
            colors={["sky", "orange", "rose"]}
            markerValue={convertCelsiusToFahrenheit(last_data.temperatura)}
            className="mt-3"
          />
          <Legend
            className="mt-3"
            categories={["Frío", "Cálido", "Caliente"]}
            colors={["blue", "orange", "red"]}
          />
        </Card>
      </Col>

      <Card decoration="top" decorationColor="sky">
        <Flex justifyContent="center">
          <Title>Humedad actual</Title>
        </Flex>
        <Flex className="mt-6">
          <div>
            <img
              alt="Humedad"
              src={humidity_img}
              style={{
                height: 60,
                widows: 60
              }}
            />
          </div>
          <Metric>{last_data.humedad_relativa}%</Metric>
          <Badge icon={StatusOnlineIcon}>LIVE</Badge>
        </Flex>
        <Flex className="mt-6">
          <Text className="mt-6">Medidor de humedad</Text>
          <Text className="mt-6">{last_data.humedad_relativa}%</Text>
        </Flex>
        <ProgressBar value={last_data.humedad_relativa} color="blue" className="mt-3" />
        <Legend
          className="mt-3"
          categories={["Nivel de húmedad"]}
          colors={["blue"]}
        />
      </Card>
      <Col>
        <Card decoration="top" decorationColor="stone">
          <Flex justifyContent="center">
            <Title>CO2 registrado</Title>
          </Flex>
          <Flex className="mt-6">
            <div>
              <img
                alt="CO2"
                src={co2}
                style={{
                  height: 60,
                  windows: 60
                }}
              />
            </div>
            <Metric>{last_data.CO2} mg</Metric>
            <Badge icon={StatusOnlineIcon}>LIVE</Badge>
          </Flex>
        </Card>
      </Col>
      <Card decoration="top" decorationColor="emerald">
        <Flex justifyContent="center">
          <Title>VOC registrado</Title>
        </Flex>
        <Flex className="mt-6">
          <div>
            <img
              alt="planet"
              src={planet}
              style={{
                height: 60,
                widows: 60
              }} />
          </div>
          <Metric>{last_data.VOC} mg/m3</Metric>
          <Badge icon={StatusOnlineIcon}>LIVE</Badge>
        </Flex>
      </Card>
      <Card decoration="top" decorationColor="yellow">
        <Flex justifyContent="center">
          <Title>Intensidad luminosa</Title>
        </Flex>
        <Flex className="mt-6">
          <div>
            <img
              alt="lightbulb"
              src={ligh_bulb}
              style={{
                height: 60,
                widows: 60
              }} />
          </div>
          <Metric>{last_data.intensidad_luminosa} LUX</Metric>
          <Badge icon={StatusOnlineIcon}>LIVE</Badge>
        </Flex>
      </Card>
    </Grid>
  )
}


export default CardBase