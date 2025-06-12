"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  AreaChart,
  LinearXAxis,
  LinearXAxisTickSeries,
  LinearXAxisTickLabel,
  LinearYAxis,
  LinearYAxisTickSeries,
  AreaSeries,
  Area,
  Gradient,
  GradientStop,
  GridlineSeries,
  Gridline,
  ChartDataTypes,
} from 'reaviz';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChartDataPoint {
  key: Date;
  data: number | null | undefined;
}

interface ChartSeries {
  key: string;
  data: ChartDataPoint[];
}

interface LegendItem {
  name: string;
  color: string;
}

interface TimePeriodOption {
  value: string;
  label: string;
}

const LEGEND_ITEMS: LegendItem[] = [
  { name: 'Campaign A', color: '#5B14C5' },
  { name: 'Campaign B', color: '#8B5CF6' },
  { name: 'Campaign C', color: '#A78BFA' },
];

const TIME_PERIOD_OPTIONS: TimePeriodOption[] = [
  { value: 'year', label: 'Year' },
  { value: 'month', label: 'Month' },
  { value: 'week', label: 'Week' },
];

const generateRevenueData = (period: string): ChartSeries[] => {
  const now = new Date();
  let dataPoints: ChartDataPoint[] = [];
  
  if (period === 'year') {
    // Generate 12 months of data
    dataPoints = Array.from({ length: 12 }, (_, i) => {
      const date = new Date(now.getFullYear(), i, 1);
      return { key: date, data: Math.floor(Math.random() * 50000) + 20000 };
    });
  } else if (period === 'month') {
    // Generate 4 weeks of data
    dataPoints = Array.from({ length: 4 }, (_, i) => {
      const date = new Date(now);
      date.setDate(now.getDate() - (3 - i) * 7);
      return { key: date, data: Math.floor(Math.random() * 15000) + 5000 };
    });
  } else {
    // Generate 7 days of data
    dataPoints = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(now);
      date.setDate(now.getDate() - (6 - i));
      return { key: date, data: Math.floor(Math.random() * 3000) + 1000 };
    });
  }

  return [
    {
      key: 'Campaign A',
      data: dataPoints,
    },
    {
      key: 'Campaign B',
      data: dataPoints.map(point => ({
        key: point.key,
        data: Math.floor(Math.random() * (point.data as number) * 0.8) + (point.data as number) * 0.2,
      })),
    },
    {
      key: 'Campaign C',
      data: dataPoints.map(point => ({
        key: point.key,
        data: Math.floor(Math.random() * (point.data as number) * 0.6) + (point.data as number) * 0.1,
      })),
    },
  ];
};

const validateChartData = (data: ChartSeries[]): { key: string; data: { key: string; data: number }[] }[] => {
  if (!Array.isArray(data)) return [];
  return data.map(series => ({
    key: String(series.key),
    data: Array.isArray(series.data)
      ? series.data.map(item => ({
          key: item.key instanceof Date ? item.key.toISOString() : String(item.key),
          data: typeof item.data === 'number' && !isNaN(item.data) ? item.data : 0,
        }))
      : [],
  }));
};

const formatCurrency = (value: number): string => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}K`;
  }
  return `$${value.toLocaleString()}`;
};

const TotalRevenueChart: React.FC = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<string>('month');
  const [chartData, setChartData] = useState<ChartSeries[]>(() => generateRevenueData('month'));
  const [chartWidth, setChartWidth] = useState<number>(400);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setChartWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleTimePeriodChange = (period: string) => {
    setSelectedTimePeriod(period);
    setChartData(generateRevenueData(period));
  };

  const validatedChartData = validateChartData(chartData);
  
  const totalRevenue = chartData.reduce((total, series) => {
    const seriesTotal = series.data.reduce((sum, point) => sum + (point.data as number || 0), 0);
    return total + seriesTotal;
  }, 0);

  const formatXAxisLabel = (value: any): string => {
    const date = new Date(value);
    if (selectedTimePeriod === 'year') {
      return date.toLocaleDateString('en-US', { month: 'short' });
    } else if (selectedTimePeriod === 'month') {
      return `Week ${Math.ceil(date.getDate() / 7)}`;
    } else {
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    }
  };

  console.log('validatedChartData', validatedChartData);

  return (
    <>
      <style jsx global>{`
                        :root {
          --reaviz-tick-fill: #374151;
          --reaviz-gridline-stroke: rgba(107, 114, 128, 0.2);
        }
        .dark {
          --reaviz-tick-fill: #F3F4F6;
          --reaviz-gridline-stroke: rgba(209, 213, 219, 0.2);
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --reaviz-tick-fill: #F3F4F6;
            --reaviz-gridline-stroke: rgba(209, 213, 219, 0.2);
          }
        }
        .reaviz-axis-tick-label {
          font-weight: 500 !important;
          font-size: 12px !important;
        }
      `}</style>
      
            <Card className="w-full  bg-background border-border dark:bg-gray-900 dark:border-gray-700">
        <CardHeader className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
                            <h3 className="text-2xl font-bold text-foreground dark:text-white">Total Revenue</h3>
              <p className="text-muted-foreground dark:text-gray-300">Campaign performance overview</p>
            </div>
            <div className="flex gap-2">
              {TIME_PERIOD_OPTIONS.map(option => (
                <Badge
                  key={option.value}
                  variant={selectedTimePeriod === option.value ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleTimePeriodChange(option.value)}
                >
                  {option.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              {LEGEND_ITEMS.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }} 
                  />
                                    <span className="text-sm text-muted-foreground dark:text-gray-300">{item.name}</span>
                </div>
              ))}
            </div>
            
            <div className="text-right">
                            <div className="text-3xl font-bold text-foreground dark:text-white">
                <CountUp
                  start={0}
                  end={totalRevenue}
                  duration={2}
                  formattingFn={formatCurrency}
                />
              </div>
                            <p className="text-sm text-muted-foreground dark:text-gray-300">Total Revenue</p>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="h-80 w-full" ref={containerRef}>
            <AreaChart
              height={320}
              width={chartWidth}
              data={[
                {
                  key: 'Test Series',
                  data: [
                    { key: '2024-01-01', data: 10 },
                    { key: '2024-01-02', data: 20 },
                    { key: '2024-01-03', data: 15 },
                  ]
                }
              ]}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TotalRevenueChart;
