import React from "react";

interface StatisticsProps {
  filledCells: number;
  islandCount: number;
  totalCells: number;
}

const Statistics: React.FC<StatisticsProps> = ({
  filledCells,
  islandCount,
  totalCells,
}) => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard title="Filled Cells" value={filledCells} total={totalCells} />
      <StatCard title="Islands" value={islandCount} />
      <StatCard title="Total Cells" value={totalCells} />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: number;
  total?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, total }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center transition-colors duration-200">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        {title}
      </h3>
      <p className="text-3xl font-bold text-accent">
        {value}
        {total && (
          <span className="text-xl text-gray-500 dark:text-gray-400">
            /{total}
          </span>
        )}
      </p>
    </div>
  );
};

export default Statistics;
