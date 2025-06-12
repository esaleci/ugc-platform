import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


interface MiniLineChartProps {
  data: Array<{ value: number }>
  color?: string
  strokeWidth?: number
  className?: string
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
  
  export const MiniLineChart: React.FC<MiniLineChartProps> = ({
    data,
    color = "#3b82f6",
    strokeWidth = 2,
    className
  }) => {
    return (
      <div className={cn("h-16 w-full relative", className)}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={strokeWidth}
              dot={false}
              activeDot={false}
              filter="url(#glow)"
            />
              <defs>
        <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="blue" />
          <stop offset={`5%`} stopColor="blue" />
          <stop offset={`55%`} stopColor="red" />
          <stop offset={`100%`} stopColor="red" />
        </linearGradient>
      </defs>
            {/* <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }