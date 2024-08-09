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
        const TotalTemperatures = data.reduce((total, { temperatura }) => parseFloat(total) + parseFloat(temperatura), 0) / data.length;
        const TotalHumiditys = data.reduce((total, {humedad_relativa}) => parseFloat(total) + parseFloat(humedad_relativa),0) / data.length;
        const TotalCO2 = data.reduce((total, {CO2}) => parseFloat(total) + parseFloat(CO2),0) / data.length;
        const TotalVOC = data.reduce((total, {VOC}) => parseFloat(total) + parseFloat(VOC),0) / data.length;
        const TotalIntensity = data.reduce((total, {intensidad_luminosa}) => parseFloat(total) + parseFloat(intensidad_luminosa),0) / data.length;

        // Campos a exportar
        const Fields = data.map(({ temperatura, humedad_relativa, CO2, VOC, intensidad_luminosa, createdAt }) => ({
            temperatura,
            humedad_relativa,
            CO2,
            VOC,
            intensidad_luminosa,
            createdAt
        }));

        // Encabezado de la hoja
        const header = ['Temperaturas (°C)', 'Humedades Relativas (%)', 'CO2 (mg)', 'VOC (mg/m3)', 'Intensidades Luminosas (LUX)', 'Fecha y hora de publicación'];

        // Combinación de datos y el encabezado
        const sheetData = [header, ...Fields.map(item => Object.values(item))];

        // Agregar la media de los datos al final de la hoja
        const TemperaturesRow = ['Porcentaje de temperatura registrada: ', (TotalTemperatures.toFixed(2)) + '%'];
        const HumidityRow = ['Porcentaje de humedad registrada: ', (TotalHumiditys.toFixed(2)) + '%'];
        const CO2Row = ['Porcentaje de CO2 registrada: ', (TotalCO2.toFixed(2)) + '%'];
        const VOCRow = ['Porcentaje de VOC registrada: ', (TotalVOC.toFixed(2)) + '%'];
        const IntensityRow = ['Porcentaje de intensidad luminosa registrada: ', (TotalIntensity.toFixed(2)) + '%'];
        sheetData.push(TemperaturesRow, HumidityRow, CO2Row, VOCRow, IntensityRow);

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
