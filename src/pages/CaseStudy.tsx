import React, { useState } from "react";
import TimelineNav from "../components/timeline/TimelineNav";
import TimelineContent from "../components/timeline/TimelineContent";
import MetricCard from "../components/metrics/MetricCard";
import {
  Clock,
  TrendingUp,
  SmileIcon,
  Database,
  NetworkIcon,
  Timer,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudy() {
  const [activeSection, setActiveSection] = useState("overview");

  const metrics = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Savings",
      description: "Reduced campaign setup time from 1 hour to 2 minutes.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Campaign Volume Growth",
      description: "400% increase in campaign volume within the first year.",
    },
    {
      icon: <SmileIcon className="w-8 h-8" />,
      title: "User Satisfaction",
      description: "69 – 80 SUS scores over time, with positive feedback.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Accuracy",
      description: "Improved data reliability, reducing overbooking.",
    },
    {
      icon: <NetworkIcon className="w-8 h-8" />,
      title: "Multi-Platform Activation",
      description:
        "Enabled activation for all advertisers, not just high-value accounts.",
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Time Saved Weekly",
      description: "Saved 165 hours of work per week across teams.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <TimelineNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 ml-80">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-600">
                <Link to="/" className="hover:underline">
                  Home
                </Link>{" "}
                / Case Studies / Cerebro Campaigns
              </div>
              <div className="text-sm">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Portfolio
                </Link>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Roundel Campaign Manager
            </h1>
            <div className="flex gap-8 text-sm text-gray-600 mb-8">
              <div>
                <span className="font-semibold">Years Active:</span> 2017-2023
              </div>
              <div>
                <span className="font-semibold">Role:</span> Lead Designer
              </div>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Roundel Campaign Manager is an internal ad operations tool
                designed to streamline campaign planning, segmentation, and
                execution across multiple platforms. This case study outlines
                the development process, design challenges, and outcomes,
                highlighting how Cerebro transformed campaign efficiency,
                business growth, and user satisfaction through a data-centric,
                user-focused approach.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden bg-gray-100 p-8">
              <img
                src="/assets/CMP cover 1.png"
                alt="Roundel Campaign Manager Interface"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="p-2 bg-white rounded-full shadow-lg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button className="p-2 bg-white rounded-full shadow-lg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic content based on selected timeline section */}
          <TimelineContent sectionId={activeSection} />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Key Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  icon={metric.icon}
                  title={metric.title}
                  description={metric.description}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
