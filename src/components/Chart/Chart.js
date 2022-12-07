import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    console.log(dataPointValues);
    // ^ error in assining new values to array
  const totalMaximum = Math.max(...dataPointValues);
    console.log(totalMaximum);
  return (
    <div className="Chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
}

export default Chart;
