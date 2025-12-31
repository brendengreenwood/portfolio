import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PatternCreate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-12 pb-32">
          {/* Breadcrumb */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-gray-600">
              <Link to="/" className="hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link to="/case-study" className="hover:underline">
                Roundel Campaign Manager
              </Link>{" "}
              / Creating Ad Groups
            </div>
            <Link
              to="/case-study"
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
              Back to Overview
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Pattern Deep Dive
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Pattern 1: Creating Ad Groups
            </h1>
            <p className="text-lg text-gray-700 leading-normal max-w-3xl">
              From granular one-by-one entry to a batching workflow that saved hours
            </p>
          </div>

          {/* The Challenge */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What users were trying to do</h3>
              <p className="text-base text-gray-700 leading-normal mb-4">
                Create many ad groups quickly across tactics/platforms, often repeating similar setups, without losing track of where things belonged.
              </p>
              <p className="text-base text-gray-700 leading-normal">
                In a typical campaign, a Media Analyst might need to create 50+ ad groups across 5-10 tactics, each with similar products but different platform configurations. Speed and accuracy both mattered—and the existing workflow made both painful.
              </p>
            </div>
          </section>

          {/* Evolution Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Evolution: Three Iterations</h2>

            {/* V1: Too Granular */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 text-red-800 rounded-lg flex items-center justify-center font-bold">
                  V1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Too Granular</h3>
                  <p className="text-sm text-gray-600">Mirrored legacy tooling (Operative One)</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📋</div>
                    <p className="text-sm text-gray-600">Screenshot: V1 - Multi-step wizard flow</p>
                  </div>
                </div>

                <h4 className="text-base font-semibold text-gray-900 mb-2">Why it failed</h4>
                <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
                  <li>Required 7-10 steps to create a single ad group</li>
                  <li>Users lost context moving between screens</li>
                  <li>No way to batch similar setups—had to repeat for every ad group</li>
                  <li>Mental model unclear: "Am I setting this globally or per-tactic?"</li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="text-sm text-gray-700 italic">
                    "It takes me forever to set up a campaign. I end up building it in a spreadsheet first just so I don't lose my place."
                  </p>
                  <p className="text-xs text-gray-600 mt-2">— Media Analyst, Early User Feedback</p>
                </div>
              </div>
            </div>

            {/* V2: MVP Flow */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 text-yellow-800 rounded-lg flex items-center justify-center font-bold">
                  V2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">MVP: One-by-One Entry</h3>
                  <p className="text-sm text-gray-600">Shipped with launch (Q4 2018)</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-sm text-gray-600">Screenshot: V2 - Simplified in-line add flow</p>
                  </div>
                </div>

                <h4 className="text-base font-semibold text-gray-900 mb-2">What improved</h4>
                <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
                  <li>Reduced to 3-4 steps per ad group</li>
                  <li>Kept users in context (no full-page navigation)</li>
                  <li>Clear hierarchy: campaign → tactic → ad group</li>
                </ul>

                <h4 className="text-base font-semibold text-gray-900 mb-2 mt-4">Why it still broke at scale</h4>
                <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
                  <li>Still required one-by-one entry</li>
                  <li>As ad product catalog grew (10 → 50+ products), finding the right product became "hunt and click"</li>
                  <li>Large campaigns (50+ ad groups) took 30-45 minutes to set up</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-gray-700 italic">
                    "It's better than before, but when I have to add the same 5 products to 10 tactics, I'm still doing the same thing over and over."
                  </p>
                  <p className="text-xs text-gray-600 mt-2">— Media Manager, Post-Launch Feedback (Q1 2019)</p>
                </div>
              </div>
            </div>

            {/* V3: Batching Modal */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 text-green-800 rounded-lg flex items-center justify-center font-bold">
                  V3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Centralized Batching Modal</h3>
                  <p className="text-sm text-gray-600">Shipped Q3 2019</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border-2 border-green-500 p-6 mb-4">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✨</div>
                    <p className="text-sm text-gray-600">Screenshot: V3 - Multi-select modal with "bucket" model</p>
                  </div>
                </div>

                <h4 className="text-base font-semibold text-gray-900 mb-2">The key insight</h4>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-base text-gray-800 leading-normal">
                    Users didn't need more flexibility—they needed a <strong>faster batching workflow</strong> that matched how they actually planned: select what you want, then assign it where it belongs.
                  </p>
                </div>

                <h4 className="text-base font-semibold text-gray-900 mb-2">How it works</h4>
                <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
                  <li><strong>Multi-tactic assignment:</strong> Apply the same ad group product to multiple tactics at once</li>
                  <li><strong>"Bucket" selection model:</strong> Browse/search on the left → build your set on the right</li>
                  <li><strong>Clear rate signifiers:</strong> See pricing info inline to make decisions faster</li>
                  <li><strong>Persistent selection state:</strong> Never lose track of what you've selected</li>
                </ul>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Before (V2)</div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">30-45 min</p>
                    <p className="text-sm text-gray-600">to create 50 ad groups</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-xs font-semibold text-green-700 uppercase mb-2">After (V3)</div>
                    <p className="text-2xl font-bold text-green-700 mb-1">5-8 min</p>
                    <p className="text-sm text-gray-600">to create 50 ad groups</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Decisions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Design Decisions</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Modal vs. In-Page</h3>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Decision:</strong> Use a modal to isolate the "building" context from the "viewing" context.
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Why:</strong> Users needed focus when selecting from 50+ products. A modal provided:
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                  <li>Dedicated space for search and filtering</li>
                  <li>Clear "building mode" vs "viewing mode" separation</li>
                  <li>Ability to batch and review before committing</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Tradeoff:</strong> Risk of disorientation. Mitigated by strong context (tactic names, campaign info) in modal header.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. "Bucket" Selection Model</h3>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Decision:</strong> Two-column layout: Browse (left) → Selected (right)
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Why:</strong> Mental model matches how users think: "I'm building a set of things to assign."
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                  <li>Persistent visibility of what's been selected</li>
                  <li>Easy to add/remove from the set</li>
                  <li>Clear feedback before committing</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Multi-Tactic Assignment</h3>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Decision:</strong> Allow selecting multiple tactics in a single "create" action
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Why:</strong> Campaigns often use the same products across tactics. One action → 50 ad groups created.
                </p>
                <p className="text-sm text-gray-700 mt-3">
                  <strong>Constraint:</strong> Had to align with data model (what defines an ad group product, how it maps to tactics).
                </p>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact & Evidence</h2>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Feedback</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-base text-gray-700 italic mb-2">
                    "I can build a campaign in minutes now instead of spending an hour hunting through menus."
                  </p>
                  <p className="text-sm text-gray-600">— Media Analyst, Post-Launch Feedback</p>
                </div>
                <div>
                  <p className="text-base text-gray-700 italic mb-2">
                    "The multi-tactic thing is a game-changer. I set up 5 products across 8 tactics and boom—40 ad groups in like 2 minutes."
                  </p>
                  <p className="text-sm text-gray-600">— Senior Media Manager, User Testing</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">Time reduction for creating ad groups</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">10→50+</div>
                <div className="text-sm text-gray-600">Ad groups created in a single action</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Adoption rate within 2 weeks</div>
              </div>
            </div>
          </section>

          {/* Reflections */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What I Learned</h2>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Batch where it matters</h3>
                <p className="text-sm text-gray-700">
                  Not every workflow needs batching—but when users repeat the same action 50+ times, batching isn't a "nice to have," it's essential. Watch for repetition in real workflows.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Mental models &gt; tool features</h3>
                <p className="text-sm text-gray-700">
                  V1 mirrored the legacy tool's features. V3 matched how users actually thought about the work: "I'm building a set of products to assign to tactics."
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">What I'd do differently</h3>
                <p className="text-sm text-gray-700">
                  I would have pushed for the batching model earlier. We shipped V2 knowing it had repetition issues but de-prioritized batching as "post-MVP." Users felt the pain for 9 months before we addressed it.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Fixed Pagination */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link
              to="/case-study"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="text-sm">Back to Overview</span>
            </Link>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Pattern 1: Creating Ad Groups</span>
            </div>
            <Link
              to="/pattern-edit"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <span className="text-sm font-medium">Next: Editing</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
