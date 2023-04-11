import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { Container } from "react-bootstrap";

const LineChart = () => {
  const settimana = useSelector(state => state.settimana.content);
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (canvasRef.current && settimana) {
      const ctx = canvasRef.current.getContext("2d");

      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: settimana.map(giorno =>
            new Date(giorno.dt * 1000).toLocaleDateString("it-IT", {
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              month: "numeric"
            })
          ),
          datasets: [
            {
              label: "Temperature",
              data: settimana.map(giorno => parseFloat(giorno.main.temp).toFixed(0)),
              backgroundColor: "rgba(255, 255, 255, 0.336)",
              borderColor: "#161616",
              borderWidth: 4
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }
  }, [settimana]);

  return (
    <Container className="mb-3 rounded-2">
      <canvas className="rounded-2" ref={canvasRef} />
    </Container>
  );
};

export default LineChart;
