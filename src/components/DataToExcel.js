import React from 'react';
import * as XLSX from 'xlsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const DataToExcel = ({ data, filename, sheetName }) => {
    const dataToExcel = () => {
        // Verificación
        if (!data || data.length === 0) {
            alert("No hay datos para exportar a Excel");
            return;
        }

        // Media de todos los campos
        const TotalTemperatures = data.reduce((total, { Temperatura }) => parseFloat(total) + parseFloat(Temperatura), 0) / data.length;
        const TotalHumiditys = data.reduce((total, {Humedad}) => parseFloat(total) + parseFloat(Humedad),0) / data.length;
        const TotalCO2 = data.reduce((total, {Nivel_del_Gas}) => parseFloat(total) + parseFloat(Nivel_del_Gas),0) / data.length;
        const TotalDistancia = data.reduce((total, {Distancia}) => parseFloat(total) + parseFloat(Distancia),0) / data.length;

        // Campos a exportar
        const Fields = data.map(({ Temperatura, Humedad, Nivel_del_Gas, Distancia, createdAt }) => ({
            Temperatura,
            Humedad,
            Nivel_del_Gas,
            Distancia,
            createdAt
        }));

        // Encabezado de la hoja
        const header = ['Temperaturas (°C)', 'Humedades(%)', 'Niveles de gas (mg)', 'Distancias (mg/m3)', 'Fecha y hora de publicación'];

        // Combinación de datos y el encabezado
        const sheetData = [header, ...Fields.map(item => Object.values(item))];

        // Agregar la media de los datos al final de la hoja
        const TemperaturesRow = ['Porcentaje de temperatura registrada: ', (TotalTemperatures.toFixed(2)) + '%'];
        const HumidityRow = ['Porcentaje de humedad registrada: ', (TotalHumiditys.toFixed(2)) + '%'];
        const CO2Row = ['Porcentaje de nivel del gas registrado: ', (TotalCO2.toFixed(2)) + '%'];
        const DistanciaRow = ['Porcentaje de distancia recorrida: ', (TotalDistancia.toFixed(2)) + '%'];
        sheetData.push(TemperaturesRow, HumidityRow, CO2Row, DistanciaRow);

        // Crear una nueva hoja de cálculo
        const ws = XLSX.utils.aoa_to_sheet(sheetData);

        // Crear un libro de trabajo
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, sheetName || 'Sheet 1');

        // Guardar el archivo Excel
        XLSX.writeFile(wb, filename || 'exported_data.xlsx');
    };

    return (
        <button className="btn btn-success" onClick={dataToExcel}>
            <i className="bi bi-cloud-arrow-down-fill"></i> Descargar datos
        </button>
    );
};

export default DataToExcel;
