"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MonthlyData = {
  month: string;
  visitors: number;
  fill: string;
};

const colors = {
  primary: "hsl(221, 83%, 53%)",
  secondary: "hsl(76, 61%, 38%)",
  accent: "hsl(30, 100%, 50%)",
  highlight: "hsl(354, 95%, 48%)",
  muted: "hsl(299, 77%, 72%)",
};

const chartData: MonthlyData[] = [
  { month: "January", visitors: 275, fill: colors.primary },
  { month: "February", visitors: 200, fill: colors.secondary },
  { month: "March", visitors: 187, fill: colors.accent },
  { month: "April", visitors: 173, fill: colors.highlight },
  { month: "May", visitors: 90, fill: colors.muted },
];

const chartConfig = {
  visitors: {
    label: "Monthly Visitors",
    color: colors.primary,
  },
} satisfies ChartConfig;

export function ChartBar2({ text }: { text: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{text}</CardTitle>
        <CardDescription>January - May 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ left: 8, right: 8, top: 8, bottom: 8 }}
          >
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <XAxis
              dataKey="visitors"
              type="number"
              axisLine={false}
              tickLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="visitors"
              fill={chartConfig.visitors.color}
              radius={[0, 4, 4, 0]}
              fillOpacity={0.9}
              fill={(entry) => entry.fill}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
