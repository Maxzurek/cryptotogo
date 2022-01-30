import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from "recharts";
import { PriceAction } from "../../models/coin.models";

interface ChartProps {
    priceAction: PriceAction[];
    xAxisInterval: number;
}

export default function Chart(props: ChartProps) {
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <AreaChart data={props.priceAction}
                   >
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="40%" stopColor="#82ca9d" stopOpacity={0.5} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
};