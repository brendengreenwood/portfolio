import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Savings",
      description: "Reduced campaign setup time from ~1 hour to ~2 minutes (97% reduction).",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Campaign Volume Growth",
      description: "~600% YoY campaign volume growth in the first year after MVP launch.",
    },
    {
      icon: <SmileIcon className="w-8 h-8" />,
      title: "User Satisfaction",
      description: "SUS scores improved from 69 to 80 over time, with consistently positive feedback.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Accuracy",
      description: "85-95% reduction in errors through standardized workflows and validation.",
    },
    {
      icon: <NetworkIcon className="w-8 h-8" />,
      title: "Scale & Reach",
      description:
        "Supported ~10,000 campaigns across ~3,600 advertisers, enabling multi-platform activation for all.",
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Weekly Efficiency Gains",
      description: "Saved ~165 hours of work per week across teams.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <TimelineNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      /> */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-12 pb-32">
          {/* Breadcrumb */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-gray-600">
              <Link to="/" className="hover:underline">
                Home
              </Link>{" "}
              / Case Studies / Roundel Campaign Manager
            </div>
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
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

          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              6-Year 0→1 Product Journey
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Roundel Campaign Manager
            </h1>
            <div className="flex gap-6 text-sm text-gray-600 mb-6">
              <div>
                <span className="font-semibold">Timeline:</span> 2017-2023 (6 years)
              </div>
              <div>
                <span className="font-semibold">Role:</span> Lead Designer
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-normal mb-4 max-w-3xl">
              I designed and launched Cerebro Campaigns, an internal platform that replaced a fragmented toolchain and enabled Roundel to scale campaign operations from concierge-only support to serving thousands of advertisers.
            </p>
            <p className="text-base text-gray-600 mb-8 max-w-3xl">
              This case study documents a multi-year journey from MVP to enterprise-scale product, showing how core UX patterns evolved through continuous iteration and user feedback.
            </p>

            {/* Hero Image */}
            <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden shadow-lg mb-8">
              <div className="aspect-video w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-sm text-gray-600 font-medium">Hero Image: Dashboard Overview or Key Pattern</p>
                  <p className="text-xs text-gray-500 mt-2">Show the evolved product in action</p>
                </div>
              </div>
            </div>

            {/* Impact Callout */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-8">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Impact</h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700">
                <div>• <strong>97% time reduction</strong> (~1 hour → ~2 minutes)</div>
                <div>• <strong>~600% campaign volume growth</strong> in year 1</div>
                <div>• <strong>~165 hours saved</strong> per week</div>
                <div>• <strong>85-95% error reduction</strong></div>
              </div>
            </div>
          </div>

          {/* Why Patterns */}
          <section className="mb-12">
            <div className="bg-gray-50 border-l-4 border-gray-900 p-5 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">This case study is organized around 3 core interaction patterns</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Over 6 years, the product evolved continuously—but the core challenge remained: <strong>how do you make campaign planning fast, correct, and scalable?</strong> These three patterns became the foundation that could adapt as complexity grew.
              </p>
            </div>
          </section>

          {/* Core Patterns - THE STORY */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Core Patterns</h2>

            {/* Pattern 1: Creating */}
            <Link to="/case-study/pattern-create" className="block mb-8 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all overflow-hidden">
              <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Creating Ad Groups</h3>
                      <p className="text-sm text-gray-600 mb-4">From granular one-by-one entry to batching workflow that saved hours</p>

                      {/* Visual Evolution Preview */}
                      <div className="mb-4 rounded-lg overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50 p-4">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-white rounded shadow-sm p-3 border border-gray-200">
                            <div className="text-xs font-semibold text-gray-500 mb-2">V1: Too Granular</div>
                            <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded flex items-center justify-center text-2xl">
                              ❌
                            </div>
                          </div>
                          <div className="bg-white rounded shadow-sm p-3 border border-gray-200">
                            <div className="text-xs font-semibold text-gray-500 mb-2">V2: MVP Flow</div>
                            <div className="aspect-square bg-gradient-to-br from-yellow-50 to-yellow-100 rounded flex items-center justify-center text-2xl">
                              ⚠️
                            </div>
                          </div>
                          <div className="bg-white rounded shadow-sm p-3 border border-blue-500">
                            <div className="text-xs font-semibold text-blue-700 mb-2">V3: Batching</div>
                            <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded flex items-center justify-center text-2xl">
                              ✅
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded">
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">The Problem</div>
                          <p className="text-sm text-gray-700">Creating 50+ ad groups required repetitive clicks and hunting through menus. Large campaigns became painful.</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <div className="text-xs font-semibold text-blue-700 uppercase mb-1">The Solution</div>
                          <p className="text-sm text-gray-700">Centralized modal with multi-select: pick what you want, assign to multiple tactics at once.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                        <span>View pattern evolution</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>

            {/* Pattern 2: Editing */}
            <Link to="/case-study/pattern-edit" className="block mb-8 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all overflow-hidden">
              <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Editing Ad Groups</h3>
                      <p className="text-sm text-gray-600 mb-4">From bloated vertical scroll to tabbed editor with verification framework</p>

                      {/* Visual Evolution Preview */}
                      <div className="mb-4 rounded-lg overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50 p-4">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-white rounded shadow-sm p-3 border border-gray-200">
                            <div className="text-xs font-semibold text-gray-500 mb-2">V1: Bloated</div>
                            <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded flex items-center justify-center text-2xl">
                              📜
                            </div>
                          </div>
                          <div className="bg-white rounded shadow-sm p-3 border border-gray-200">
                            <div className="text-xs font-semibold text-gray-500 mb-2">V2: Tabs</div>
                            <div className="aspect-square bg-gradient-to-br from-yellow-50 to-yellow-100 rounded flex items-center justify-center text-2xl">
                              📑
                            </div>
                          </div>
                          <div className="bg-white rounded shadow-sm p-3 border border-blue-500">
                            <div className="text-xs font-semibold text-blue-700 mb-2">V3: Modal</div>
                            <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded flex items-center justify-center text-2xl">
                              ✨
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded">
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">The Problem</div>
                          <p className="text-sm text-gray-700">Settings grew vertically into endless scroll. Users couldn't verify what they'd entered or find what changed.</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <div className="text-xs font-semibold text-blue-700 uppercase mb-1">The Solution</div>
                          <p className="text-sm text-gray-700">Card-sorted categories + tabbed navigation + reference panel. Editing became entry + verification.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                        <span>View pattern evolution</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>

            {/* Pattern 3: Managing */}
            <Link to="/case-study/pattern-manage" className="block mb-8 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all overflow-hidden">
              <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Managing at Scale</h3>
                      <p className="text-sm text-gray-600 mb-4">From risky bulk actions to context-aware controls that users trusted</p>

                      {/* Visual Evolution Preview */}
                      <div className="mb-4 rounded-lg overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50 p-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white rounded shadow-sm p-3 border border-gray-200">
                            <div className="text-xs font-semibold text-gray-500 mb-2">V1: Scattered Actions</div>
                            <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded flex items-center justify-center text-2xl">
                              🔀
                            </div>
                          </div>
                          <div className="bg-white rounded shadow-sm p-3 border border-blue-500">
                            <div className="text-xs font-semibold text-blue-700 mb-2">V2: Context Bar</div>
                            <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded flex items-center justify-center text-2xl">
                              🎯
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded">
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">The Problem</div>
                          <p className="text-sm text-gray-700">Selections were hard to track in long tables. Bulk operations felt dangerous—users lost feedback about what was selected.</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <div className="text-xs font-semibold text-blue-700 uppercase mb-1">The Solution</div>
                          <p className="text-sm text-gray-700">Persistent action bar that appears on selection with clear feedback. Safety through visibility.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                        <span>View pattern evolution</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>
          </section>

          {/* Additional Context - Collapsible */}
          <section className="mb-12">
            <details className="bg-white rounded-lg border-2 border-gray-200">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Want the full context?</h3>
                    <p className="text-sm text-gray-600">How I worked, the business problem, and the 6-year timeline</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 border-t border-gray-200">
                <div className="pt-6 space-y-6">
                  {/* How I Worked */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-3">How I Worked: Build-Measure-Learn</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      This wasn't a linear "research → design → build" process. I worked embedded in a Scrum team with 2-week sprints, doing continuous discovery in parallel with delivery.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Learned the domain hands-on (Google Ad Manager, Trade Desk, Facebook Ads Manager) while interviewing users about Roundel's specific workflows</li>
                      <li>• Built prototypes, tested with users, refined designs—all within sprint cycles</li>
                      <li>• Shipped incrementally and let real usage expose what needed to evolve</li>
                      <li>• Personas and patterns emerged through iteration, not upfront research</li>
                    </ul>
                  </div>

                  {/* The Business Problem */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-3">The Business Problem</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Roundel had demand to scale digital advertising—but campaign operations couldn't keep up. The workflow was fragmented across Operative One, spreadsheets, and ad-server tools. Each analyst had their own logic, which created inconsistency, slow throughput, data integrity risks, and a revenue ceiling (only large advertisers could be serviced).
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Success meant:</strong> A single tool that standardized planning, automated setup work, earned user trust so analysts would stop "escaping" into spreadsheets, and scaled without bloating the UI.
                    </p>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-3">The 6-Year Timeline</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-24 font-semibold text-gray-500">Q4 2017–Q4 2018</div>
                        <div>MVP: Discovery, design, development, and launch of core patterns</div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-24 font-semibold text-gray-500">Q1 2019–Q4 2019</div>
                        <div>Continuous releases: User feedback loops, pattern hardening, new personas emerging</div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-24 font-semibold text-gray-500">Q1 2020–Q4 2022</div>
                        <div>Scale: Platform evolution, 600% campaign growth, patterns adapted to handle complexity</div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-24 font-semibold text-gray-500">2023</div>
                        <div>Reflection: Looking back on what worked, what didn't, and what I'd do differently</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </section>
        </div>

        {/* Fixed Pagination */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <button className="flex items-center gap-2 text-gray-400 cursor-not-allowed">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="text-sm">Previous</span>
            </button>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Overview</span> · 1 of 6
            </div>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <span className="text-sm font-medium">Next</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
