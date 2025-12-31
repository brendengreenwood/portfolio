import React from 'react';

interface TimelineContentProps {
  sectionId: string;
}

export default function TimelineContent({ sectionId }: TimelineContentProps) {
  // Content for each timeline section
  const contentMap: Record<string, React.ReactNode> = {
    'overview': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          I designed and launched Cerebro Campaigns (Roundel Campaign Manager), an internal platform that replaced a fragmented toolchain—Operative One + spreadsheets + manual workarounds—so Roundel could scale campaign operations beyond "concierge-only" support for big advertisers.
        </p>
        <p className="text-base text-gray-700 leading-normal mb-4">
          The core challenge wasn't UI polish—it was operational throughput and trust: campaign planning was slow, inconsistent, and error-prone, limiting volume, creating data integrity issues, and causing overbooking.
        </p>
        <p className="text-base text-gray-700 leading-normal mb-4">
          I led the 0→1 UX for the campaign planning experience and built a set of scalable interaction patterns (Create, Edit, Manage ad groups) grounded in how Media Analysts actually worked. The result was a faster, more standardized workflow that enabled multi-platform planning for a broader advertiser base.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-6">
          <h4 className="text-base font-semibold text-gray-900 mb-2">Impact</h4>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• Reduced campaign planning time from <strong>~1 hour to ~2 minutes</strong></li>
            <li>• Saved <strong>~165 hours of work per week</strong> across teams</li>
            <li>• Supported <strong>~10,000 digital campaigns</strong> across <strong>~3,600 advertisers</strong></li>
            <li>• Drove <strong>~600% YoY campaign-volume growth</strong> in the first year after MVP launch</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">The Business Problem</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Roundel had the demand to scale digital advertising—but campaign operations couldn't keep up.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">What was broken</h4>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li><strong>Tool fragmentation:</strong> The workflow lived across Operative One, spreadsheets, and ad-server tools—none of which matched Roundel's real operational needs.</li>
          <li><strong>Manual workarounds as the system:</strong> Each analyst had their own spreadsheet logic and naming conventions, which created inconsistency and rework.</li>
          <li><strong>Slow throughput:</strong> Campaigns took too long to build and validate, which capped volume.</li>
          <li><strong>Data integrity risks:</strong> Inconsistent setups produced bad data, which degraded forecasting, booking, and reporting.</li>
          <li><strong>Overbooking + operational risk:</strong> Manual processes made it easier to mis-book inventory.</li>
          <li><strong>Revenue ceiling:</strong> Because building campaigns consumed so much time, Roundel primarily serviced larger advertisers—leaving smaller budgets on the table.</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">What success had to look like</h4>
        <p className="text-base text-gray-700 leading-normal mb-3">A single internal tool that:</p>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Standardized the planning workflow (one language, one set of rules)</li>
          <li>Automated repeatable setup work (reduce clicks, reduce error surface)</li>
          <li>Made campaign data structured + reliable (forecasting + reporting confidence)</li>
          <li>Scaled across platform complexity without bloating the UI</li>
          <li>Earned user trust so analysts would stop "escaping" into spreadsheets</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Users, Reality, and Constraints</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          This product lived in the "messy middle" of enterprise operations: speed mattered, accuracy mattered, and users had strong habits built around spreadsheets.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">Primary users</h4>
        <p className="text-base text-gray-700 leading-normal mb-3">
          <strong>Media Analysts / Media Managers</strong> — responsible for planning, configuring, and validating campaign setups across platforms.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">What their day actually required</h4>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Build plans quickly, repeatably, and correctly under time pressure</li>
          <li>Translate a deal/strategy into a structured plan across platforms</li>
          <li>Configure many ad groups and settings (often with platform-specific rules)</li>
          <li>Validate that the plan is correct (rates, targeting, dates, budgets, impressions)</li>
          <li>Make changes late in the process without breaking downstream systems</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">Why spreadsheets were "sticky"</h4>
        <p className="text-base text-gray-700 leading-normal mb-3">Spreadsheets weren't just preference—they were a survival tool:</p>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Fast copying/replication</li>
          <li>Personal macros and shorthand</li>
          <li>Free-form structuring when tools were rigid</li>
          <li>A sense of control during complex planning</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">What I optimized for</h4>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li><strong>Throughput:</strong> fewer clicks, fewer repetitive actions, faster planning</li>
          <li><strong>Clarity:</strong> reduce ambiguity around "global vs ad-group-level" settings</li>
          <li><strong>Scalability:</strong> patterns that hold up when campaign size and feature count increases</li>
          <li><strong>Reliability:</strong> structured inputs + automation to reduce error surface</li>
        </ul>
      </div>
    ),
    'inception': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          In Q4 2017, Target's advertising operations team was struggling with manual processes that limited their ability to scale. 
          Campaign setup took over an hour per campaign, with multiple handoffs between teams and platforms.
        </p>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Key pain points included:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Manual data entry across multiple systems</li>
          <li>Lack of visibility into campaign status</li>
          <li>Error-prone processes leading to campaign issues</li>
          <li>Limited ability to scale during peak seasons</li>
          <li>Difficulty tracking performance across platforms</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal">
          The inception phase focused on defining the problem space and establishing initial goals for what would become 
          the Roundel Campaign Manager.
        </p>
      </div>
    ),
    'discovery': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding the Users</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          During Q1 2018, we conducted extensive user research to understand the workflow, pain points, and needs of our primary users:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Campaign Managers who plan and execute advertising campaigns</li>
          <li>Media Planners who allocate budgets and define targeting</li>
          <li>Analysts who measure performance and optimize campaigns</li>
          <li>Leadership who need visibility into operations and performance</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Our research methods included:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Contextual interviews with 15+ users across roles</li>
          <li>Workflow mapping sessions</li>
          <li>Competitive analysis of existing tools</li>
          <li>Stakeholder interviews with leadership</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal">
          This discovery phase revealed that users needed a unified platform that could streamline the entire campaign lifecycle, 
          from planning to execution to reporting.
        </p>
      </div>
    ),
    'design': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Designing the Solution</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          From Q1 to Q2 2018, we focused on designing a solution that would address the key pain points identified during discovery.
        </p>
        <p className="text-base text-gray-700 leading-normal mb-4">
          The design process included:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Creating user personas and journey maps</li>
          <li>Developing information architecture</li>
          <li>Sketching and wireframing key workflows</li>
          <li>Designing high-fidelity mockups</li>
          <li>Prototyping and user testing</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Key design principles that guided our work:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Efficiency First:</strong> Minimize clicks and streamline workflows</li>
          <li><strong>Data Integrity:</strong> Ensure accurate data across systems</li>
          <li><strong>Visibility:</strong> Provide clear status and performance metrics</li>
          <li><strong>Scalability:</strong> Design for growth in campaign volume</li>
          <li><strong>Flexibility:</strong> Accommodate different campaign types and platforms</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal">
          The final design featured a unified dashboard, streamlined campaign creation wizard, and robust reporting tools.
        </p>
      </div>
    ),
    'development': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Building the Platform</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          During Q2-Q3 2018, we worked closely with engineering to build the Roundel Campaign Manager. We adopted an agile 
          approach with two-week sprints, regular demos, and continuous user feedback.
        </p>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Development highlights:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Built API integrations with multiple advertising platforms</li>
          <li>Developed a unified data model for campaigns across systems</li>
          <li>Created a flexible workflow engine to handle different campaign types</li>
          <li>Implemented real-time validation to prevent errors</li>
          <li>Built reporting dashboards with actionable insights</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Throughout development, we conducted regular usability testing with end users to validate our approach and 
          make adjustments as needed.
        </p>
        <p className="text-base text-gray-700 leading-normal">
          The development phase culminated in a beta version ready for limited testing with select users.
        </p>
      </div>
    ),
    'launch': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">MVP Launch</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          In Q4 2018, we launched the MVP version of Roundel Campaign Manager to a pilot group of users. The launch included:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Training sessions for initial users</li>
          <li>Documentation and help resources</li>
          <li>Support desk for questions and issues</li>
          <li>Feedback mechanisms for continuous improvement</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal mb-4">
          The initial launch focused on core functionality:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Campaign creation and setup</li>
          <li>Basic reporting and status tracking</li>
          <li>Integration with primary advertising platforms</li>
          <li>User management and permissions</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal">
          The MVP launch was a success, with users immediately seeing time savings and reduced errors in their workflow.
        </p>
      </div>
    ),
    'mvp-reflections': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Lessons from the MVP</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          After launching the MVP in Q4 2018, we gathered extensive feedback and metrics to understand what worked well and what needed improvement.
        </p>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Key successes:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Reduced campaign setup time from 60+ minutes to under 5 minutes</li>
          <li>Decreased error rates by 85%</li>
          <li>Increased user satisfaction scores</li>
          <li>Enabled scaling of campaign volume by 150% within first three months</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Areas for improvement:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Need for more advanced reporting capabilities</li>
          <li>Requests for bulk operations and templates</li>
          <li>Desire for better integration with additional platforms</li>
          <li>Performance issues with large data sets</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal">
          These insights formed the foundation for our continuous improvement roadmap.
        </p>
      </div>
    ),
    'pattern-create': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Pattern 1: Creating Ad Groups</h3>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <img
            src="/assets/placeholder-create-v1.png"
            alt="Early version: granular one-by-one workflow"
            className="w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-600 italic text-center">[Screenshot: V1 - Too granular, mirrored legacy tooling]</p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">What users were trying to do</h4>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Create many ad groups quickly across tactics/platforms, often repeating similar setups, without losing track of where things belonged.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">The initial reality (why it failed)</h4>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Early versions were <strong>too granular</strong> and mirrored legacy tooling (Operative One) — too many steps and unclear mental model.</li>
          <li>The MVP flow still required <strong>one-by-one entry</strong> and became slower as the ad product set grew.</li>
          <li>Large campaigns made the "hunt and click" workflow painful (too many tactics, too much repetition).</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key insight</h4>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-5">
          <p className="text-base text-gray-800 leading-normal">
            Users didn't need more flexibility—they needed a <strong>faster batching workflow</strong> that matched how they planned: select what you want, then assign it where it belongs.
          </p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">The design decision</h4>
        <p className="text-base text-gray-700 leading-normal mb-3">
          A <strong>centralized "Create Ad Groups" modal</strong> that supports:
        </p>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Multi-tactic assignment (apply the same ad group product to multiple tactics)</li>
          <li>A "bucket" selection model (browse/search on the left → build a set on the right)</li>
          <li>Clear rate signifiers and selection state</li>
        </ul>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <img
            src="/assets/placeholder-create-final.png"
            alt="Final version: centralized modal with batching"
            className="w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-600 italic text-center">[Screenshot: Final - Centralized modal with multi-select and batching]</p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">Tradeoffs & constraints</h4>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Modal complexity had to remain learnable (avoid turning it into a mini-app)</li>
          <li>Needed strong search and clear system feedback to prevent mistakes</li>
          <li>Required alignment with the underlying data model (what constitutes an ad group product, how it maps to tactics)</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Impact</h4>
          <p className="text-gray-700 mb-2">
            "I can build a campaign in minutes now instead of spending an hour hunting through menus."
          </p>
          <p className="text-sm text-gray-600 italic">— Media Analyst, Post-Launch Feedback</p>
        </div>
      </div>
    ),
    'pattern-edit': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Pattern 2: Editing Ad Groups</h3>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <img
            src="/assets/placeholder-edit-v1.png"
            alt="V1: Bloated vertical editor with all settings visible"
            className="w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-600 italic text-center">[Screenshot: V1 - Bloated in-page editor, endless scrolling]</p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">What users were trying to do</h4>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Enter settings correctly <em>and</em> verify what they entered—without hunting through hidden menus or forgetting what changed.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">The initial reality (why it failed)</h4>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Early editing was a <strong>one-setting-at-a-time</strong> pattern.</li>
          <li>As features grew, the UI became:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Bloated and vertically long</li>
              <li>Click-heavy</li>
              <li>Confusing (especially <strong>global vs ad-group-level</strong> settings)</li>
              <li>Difficult to scan and verify</li>
            </ul>
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key insight</h4>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-5">
          <p className="text-base text-gray-800 leading-normal">
            Editing is not just "data entry." It's <strong>entry + verification</strong>, and users need the structure of the domain visible so they can build confidence.
          </p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">The design decision</h4>
        <p className="text-base text-gray-700 leading-normal mb-3">
          A scalable editing framework based on user-defined grouping:
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mb-5">
          <img
            src="/assets/placeholder-card-sort.png"
            alt="Card sorting exercise results"
            className="w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-600 italic text-center">[Screenshot: Card sorting results → categories that matched mental models]</p>
        </div>

        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Card sorting → categories that matched how users thought (Properties, Targeting, Delivery, Pricing)</li>
          <li><strong>Tabbed navigation</strong> to reduce overwhelm and separate concerns</li>
          <li><strong>Contextual visibility ("knowledge in the world")</strong>
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Inputs on the left</li>
              <li>Reference/defaults on the right (ad-server defaults, key metadata)</li>
            </ul>
          </li>
        </ul>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <img
            src="/assets/placeholder-edit-v2.png"
            alt="V2: Tabbed editor with reference panel"
            className="w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-600 italic text-center">[Screenshot: V2 - Tabbed editor with contextual reference panel]</p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">Evolution under scale</h4>
        <p className="text-base text-gray-700 leading-normal mb-3">
          As the in-page editor hit width limits and grew cluttered:
        </p>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Moved editing into a <strong>full-screen modal</strong></li>
          <li>Added <strong>carousel navigation</strong> so users could move between ad groups without closing</li>
        </ul>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <img
            src="/assets/placeholder-edit-v3.png"
            alt="V3: Full-screen modal with carousel navigation"
            className="w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-600 italic text-center">[Screenshot: V3 - Full-screen modal with carousel for multi-ad-group editing]</p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">Tradeoffs & constraints</h4>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Tabs risk hiding information → mitigated by consistent structure + summary/reference panel</li>
          <li>Modal approach risks disorientation → mitigated by strong context, titles, and next/prev navigation</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Impact</h4>
          <p className="text-gray-700 mb-2">
            "I finally know what's set where. The tabs make it so much clearer and I can actually verify my work now."
          </p>
          <p className="text-sm text-gray-600 italic">— Media Manager, User Testing Session</p>
        </div>
      </div>
    ),
    'pattern-manage': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Pattern 3: Managing Ad Groups (Bulk + Scale)</h3>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <img
            src="/assets/placeholder-manage-v1.png"
            alt="V1: Long table with scattered actions"
            className="w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-600 italic text-center">[Screenshot: V1 - Long tables with confusing selections and scattered actions]</p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">What users were trying to do</h4>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Operate on many ad groups at once (bulk edit, duplicate, move, delete), while staying oriented in large tables.
        </p>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">The initial reality (why it failed)</h4>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Key actions lived at the top of the page; row actions were scattered</li>
          <li>As tables got long:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Selections were hard to track</li>
              <li>Users lost feedback about what was selected</li>
              <li>Bulk actions felt risky</li>
            </ul>
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key insight</h4>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-5">
          <p className="text-base text-gray-800 leading-normal">
            Bulk actions need <strong>persistent, contextual feedback</strong>. Users must feel safe and in control when operating on large sets.
          </p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">The design decision</h4>
        <p className="text-base text-gray-700 leading-normal mb-3">
          A <strong>context-aware persistent action bar</strong> that:
        </p>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Appears only when relevant (selection or system state)</li>
          <li>Keeps critical actions close to the user</li>
          <li>Reinforces key steps (Save / Sync / Forecast) when needed</li>
        </ul>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <img
            src="/assets/placeholder-manage-v2.png"
            alt="V2: Persistent action bar appearing on selection"
            className="w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-600 italic text-center">[Screenshot: V2 - Context-aware action bar with clear selection feedback]</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <img
            src="/assets/placeholder-manage-workflow.png"
            alt="Safe bulk workflow example"
            className="w-full rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-600 italic text-center">[Screenshot: Annotated workflow showing safe bulk operations]</p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">Tradeoffs & constraints</h4>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li>Risk of visual noise → mitigated by conditional visibility</li>
          <li>Needed careful prioritization of actions to avoid overwhelming the bar</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Impact</h4>
          <p className="text-gray-700 mb-2">
            "The action bar makes bulk changes feel safe. I can see exactly what I've selected and what will happen next."
          </p>
          <p className="text-sm text-gray-600 italic">— Senior Media Analyst, Feedback Session</p>
        </div>
      </div>
    ),
    'user-feedback': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">User-Centered Iteration</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          In Q1 2019, we established a formal process for collecting and prioritizing user feedback:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Monthly user feedback sessions</li>
          <li>In-app feedback mechanisms</li>
          <li>Usage analytics to identify pain points</li>
          <li>Regular stakeholder reviews</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Key themes from user feedback:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Need for more automation in repetitive tasks</li>
          <li>Desire for more customizable reporting</li>
          <li>Requests for better visibility into campaign performance</li>
          <li>Need for improved collaboration features</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal">
          This feedback directly informed our product roadmap and prioritization for the next phase of development.
        </p>
      </div>
    ),
    'enhance': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Feature Enhancements</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          During Q2 2019, we focused on enhancing the platform based on user feedback:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Bulk Operations:</strong> Added ability to create and edit multiple campaigns simultaneously</li>
          <li><strong>Templates:</strong> Implemented campaign templates for common scenarios</li>
          <li><strong>Advanced Reporting:</strong> Enhanced reporting capabilities with custom views and exports</li>
          <li><strong>Performance Optimization:</strong> Improved system performance for large data sets</li>
          <li><strong>Additional Integrations:</strong> Added support for more advertising platforms</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal mb-4">
          These enhancements significantly improved user efficiency and satisfaction, with SUS scores increasing from 69 to 75.
        </p>
        <p className="text-base text-gray-700 leading-normal">
          The enhanced platform enabled the team to handle a 250% increase in campaign volume compared to pre-launch.
        </p>
      </div>
    ),
    'new-personas': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Expanding User Base</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          In Q3 2019, we identified new user personas who could benefit from the platform:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Executive Stakeholders:</strong> Needed high-level performance dashboards</li>
          <li><strong>Agency Partners:</strong> Required limited access to campaign data</li>
          <li><strong>Finance Team:</strong> Needed budget tracking and forecasting</li>
          <li><strong>Creative Team:</strong> Needed to manage creative assets within campaigns</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal mb-4">
          We conducted research with these new personas to understand their specific needs and workflows.
        </p>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Based on this research, we designed new features and interfaces tailored to each persona:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Executive dashboards with high-level KPIs</li>
          <li>Partner portal with controlled access to campaign data</li>
          <li>Budget management tools for finance team</li>
          <li>Creative asset library integrated with campaigns</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal">
          Expanding to these new personas increased the platform's value across the organization.
        </p>
      </div>
    ),
    'loop-back': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Refining the Experience</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          From Q4 2019 to Q1 2020, we focused on refining the user experience based on accumulated feedback and usage data:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Conducted a comprehensive UX audit</li>
          <li>Analyzed user paths and identified friction points</li>
          <li>Redesigned key workflows for greater efficiency</li>
          <li>Improved information architecture</li>
          <li>Enhanced visual design for better clarity and hierarchy</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Key improvements included:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Streamlined navigation with contextual menus</li>
          <li>Redesigned dashboard with personalized views</li>
          <li>Enhanced data visualization for better insights</li>
          <li>Improved form design with smart defaults and validation</li>
          <li>Added keyboard shortcuts for power users</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal">
          These refinements further improved user satisfaction, with SUS scores reaching 80.
        </p>
      </div>
    ),
    'final-launch': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Scaling Across the Organization</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          From Q2 2020 through Q4 2022, we focused on scaling the platform across the entire organization:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Expanded to all advertising teams globally</li>
          <li>Integrated with additional platforms and data sources</li>
          <li>Enhanced security and compliance features</li>
          <li>Improved performance and scalability</li>
          <li>Added advanced analytics and AI-powered recommendations</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal mb-4">
          During this period, we released major updates quarterly, with minor enhancements delivered continuously.
        </p>
        <p className="text-base text-gray-700 leading-normal mb-4">
          By the end of 2022, the platform was handling:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>400% more campaigns than at initial launch</li>
          <li>5x the number of users across multiple teams</li>
          <li>Integration with 12+ advertising platforms</li>
          <li>Billions in advertising spend annually</li>
        </ul>
        <p className="text-base text-gray-700 leading-normal">
          The platform had become a critical part of Target's advertising operations, enabling unprecedented scale and efficiency.
        </p>
      </div>
    ),
    'final-reflections': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Before / After</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Before</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Fragmented toolchain (Operative One + spreadsheets + ad-server tools)</li>
              <li>• Manual entry and inconsistent conventions</li>
              <li>• Slow planning and high rework</li>
              <li>• Limited scalability → focus on large advertisers only</li>
              <li>• ~1 hour campaign setup time</li>
              <li>• Data integrity issues and overbooking risks</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">After</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Centralized planning workflow with standardized rules</li>
              <li>• Batch creation + clearer editing + safer bulk management</li>
              <li>• Structured data improved forecasting and reporting</li>
              <li>• Scaled operations to serve all advertisers</li>
              <li>• ~2 minute campaign setup time</li>
              <li>• 85-95% error reduction through automation</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Impact & Outcomes</h3>
        <p className="text-base text-gray-700 leading-normal mb-4">
          Looking back on the project in 2023, the impact of Roundel Campaign Manager was substantial:
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Efficiency (Throughput)</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Reduced campaign planning time from <strong>~1 hour to ~2 minutes</strong> (97% reduction)</li>
            <li>• Saved <strong>~165 hours/week</strong> across teams</li>
            <li>• Enabled analysts to execute more campaigns with fewer operational bottlenecks</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Data Integrity (Correctness)</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Automated naming conventions, product settings, and rates → improved consistency</li>
            <li>• <strong>85-95% error reduction</strong> through structured inputs and validation</li>
            <li>• Increased forecasting accuracy and reduced overbooking risk</li>
            <li>• Improved confidence in reporting (closed-loop reporting)</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Growth and Scalability (Business Leverage)</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>~600% growth</strong> in campaign volume in the first year after MVP launch</li>
            <li>• Supported <strong>~10,000 campaigns</strong> across <strong>~3,600 advertisers</strong></li>
            <li>• Enabled multi-platform activation for more advertisers (not only large accounts)</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">User Experience (Adoption + Satisfaction)</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Eliminated reliance on third-party tools for critical workflows</li>
            <li>• SUS surveys improved from <strong>69 to 80</strong> over the product lifecycle</li>
            <li>• Consistently positive user feedback and high adoption rates</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Reflections — What I Learned</h3>

        <div className="bg-gray-50 p-4 rounded-lg mb-5">
          <p className="text-base text-gray-700 leading-normal mb-3">
            <strong>Scaling exposes weak assumptions.</strong> Early patterns that felt "fine" broke under real campaign volume. Designing for scale from day one—then hardening patterns as usage grew—was critical to long-term success.
          </p>
          <p className="text-base text-gray-700 leading-normal mb-3">
            <strong>The biggest wins came from designing repeatable patterns instead of bespoke screens.</strong> The three core patterns (Create, Edit, Manage) became the foundation that could evolve and adapt as the product grew in complexity.
          </p>
          <p className="text-base text-gray-700 leading-normal mb-3">
            <strong>Trust wasn't a presentation—it was earned through reliable workflows that reduced surprise.</strong> Users trusted the system because it was predictable, consistent, and made their work visible and verifiable.
          </p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">What I'd do differently next time</h4>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-1.5">
          <li><strong>Push earlier for stronger quantitative measurement</strong> — time-on-task, error rates, and workflow efficiency metrics from day one</li>
          <li><strong>Invest more upfront in foundational information architecture</strong> — the "global vs ad-group-level" confusion could have been avoided with clearer IA early on</li>
          <li><strong>Simplify the editing surface sooner</strong> — we waited too long to address the bloated vertical editor, which created unnecessary friction for users</li>
          <li><strong>Document pattern decisions more formally</strong> — capturing the "why" behind pattern choices would have helped onboard new team members and maintain consistency</li>
        </ul>

        <div className="bg-gray-900 text-white p-6 rounded-lg mt-8">
          <p className="text-base leading-normal italic">
            "This project demonstrated how thoughtful, operationally-focused UX design can transform business operations and enable significant growth. It reinforced my belief that the best design work isn't always the most visually striking—it's the work that deeply understands user workflows and makes complex operations feel simple and trustworthy."
          </p>
        </div>
      </div>
    )
  };

  return (
    <div className="mb-16">
      {contentMap[sectionId] || (
        <div className="prose prose-gray max-w-none">
          <p className="text-base text-gray-700 leading-normal">
            Select a section from the timeline to view details.
          </p>
        </div>
      )}
    </div>
  );
}
