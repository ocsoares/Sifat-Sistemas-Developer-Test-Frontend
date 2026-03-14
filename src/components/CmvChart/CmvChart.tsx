import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getCmv } from "../../services/api";
import type { CmvData } from "../../types";
import {
    ChartWrapper,
    Container,
    Header,
    LoadingText,
    Subtitle,
    Title,
    TitleAccent,
} from "./CmvChart.styles";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Filler,
    Tooltip,
);

export default function CmvChart() {
    const [data, setData] = useState<CmvData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCmv()
            .then(setData)
            .finally(() => setLoading(false));
    }, []);

    const chartData = {
        labels: data.map((item) => item.month),
        datasets: [
            {
                label: "CMV",
                data: data.map((item) => item.cost),
                backgroundColor: (ctx: any) => {
                    const gradient = ctx.chart.ctx.createLinearGradient(
                        0,
                        0,
                        0,
                        300,
                    );

                    gradient.addColorStop(0, "rgba(99, 102, 241, 0.9)");
                    gradient.addColorStop(1, "rgba(168, 85, 247, 0.3)");

                    return gradient;
                },
                borderColor: "#6366f1",
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#1e2235",
                titleColor: "#a5b4fc",
                bodyColor: "#e2e8f0",
                borderColor: "rgba(99, 102, 241, 0.3)",
                borderWidth: 1,
                padding: 12,
                callbacks: {
                    label: (ctx: any) =>
                        ` R$ ${ctx.parsed.y.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
                },
            },
        },
        scales: {
            x: {
                grid: { color: "rgba(255,255,255,0.04)" },
                ticks: {
                    color: "#64748b",
                    font: { family: "DM Sans", size: 11 },
                },
                border: { color: "transparent" },
            },
            y: {
                grid: { color: "rgba(255,255,255,0.04)" },
                ticks: {
                    color: "#64748b",
                    font: { family: "DM Sans", size: 11 },
                    callback: (value: any) =>
                        `R$ ${Number(value).toLocaleString("pt-BR")}`,
                },
                border: { color: "transparent" },
            },
        },
    };

    return (
        <Container>
            <Header>
                <TitleAccent />
                <Title>Custo de Mercadoria Vendida</Title>
                <Subtitle>2024</Subtitle>
            </Header>
            {loading ? (
                <LoadingText>Carregando...</LoadingText>
            ) : (
                <ChartWrapper>
                    <Bar data={chartData} options={options as any} />
                </ChartWrapper>
            )}
        </Container>
    );
}
