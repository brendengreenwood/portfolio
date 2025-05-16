import React from 'react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function MetricCard({ icon, title, description }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="text-gray-400 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}