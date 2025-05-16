import React from 'react';

interface TimelineContentProps {
  sectionId: string;
}

export default function TimelineContent({ sectionId }: TimelineContentProps) {
  // Content for each timeline section
  const contentMap: Record<string, React.ReactNode> = {
    'overview': (
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Roundel Campaign Manager was developed to address critical inefficiencies in Target's advertising operations. 
          Before this tool, campaign setup was a manual, error-prone process that limited scale and created bottlenecks.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          As the lead designer, I worked closely with stakeholders, engineers, and end users to create a solution 
          that would transform how campaigns were planned, executed, and measured across multiple advertising platforms.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          This case study walks through the journey from inception to full-scale deployment, highlighting key 
          design decisions, challenges overcome, and the measurable impact on business operations.
        </p>
      </div>
    ),
    'inception': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In Q4 2017, Target's advertising operations team was struggling with manual processes that limited their ability to scale. 
          Campaign setup took over an hour per campaign, with multiple handoffs between teams and platforms.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Key pain points included:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Manual data entry across multiple systems</li>
          <li>Lack of visibility into campaign status</li>
          <li>Error-prone processes leading to campaign issues</li>
          <li>Limited ability to scale during peak seasons</li>
          <li>Difficulty tracking performance across platforms</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          The inception phase focused on defining the problem space and establishing initial goals for what would become 
          the Roundel Campaign Manager.
        </p>
      </div>
    ),
    'discovery': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding the Users</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          During Q1 2018, we conducted extensive user research to understand the workflow, pain points, and needs of our primary users:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Campaign Managers who plan and execute advertising campaigns</li>
          <li>Media Planners who allocate budgets and define targeting</li>
          <li>Analysts who measure performance and optimize campaigns</li>
          <li>Leadership who need visibility into operations and performance</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our research methods included:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Contextual interviews with 15+ users across roles</li>
          <li>Workflow mapping sessions</li>
          <li>Competitive analysis of existing tools</li>
          <li>Stakeholder interviews with leadership</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          This discovery phase revealed that users needed a unified platform that could streamline the entire campaign lifecycle, 
          from planning to execution to reporting.
        </p>
      </div>
    ),
    'design': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Designing the Solution</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          From Q1 to Q2 2018, we focused on designing a solution that would address the key pain points identified during discovery.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The design process included:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Creating user personas and journey maps</li>
          <li>Developing information architecture</li>
          <li>Sketching and wireframing key workflows</li>
          <li>Designing high-fidelity mockups</li>
          <li>Prototyping and user testing</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Key design principles that guided our work:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Efficiency First:</strong> Minimize clicks and streamline workflows</li>
          <li><strong>Data Integrity:</strong> Ensure accurate data across systems</li>
          <li><strong>Visibility:</strong> Provide clear status and performance metrics</li>
          <li><strong>Scalability:</strong> Design for growth in campaign volume</li>
          <li><strong>Flexibility:</strong> Accommodate different campaign types and platforms</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          The final design featured a unified dashboard, streamlined campaign creation wizard, and robust reporting tools.
        </p>
      </div>
    ),
    'development': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Building the Platform</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          During Q2-Q3 2018, we worked closely with engineering to build the Roundel Campaign Manager. We adopted an agile 
          approach with two-week sprints, regular demos, and continuous user feedback.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Development highlights:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Built API integrations with multiple advertising platforms</li>
          <li>Developed a unified data model for campaigns across systems</li>
          <li>Created a flexible workflow engine to handle different campaign types</li>
          <li>Implemented real-time validation to prevent errors</li>
          <li>Built reporting dashboards with actionable insights</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Throughout development, we conducted regular usability testing with end users to validate our approach and 
          make adjustments as needed.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          The development phase culminated in a beta version ready for limited testing with select users.
        </p>
      </div>
    ),
    'launch': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">MVP Launch</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In Q4 2018, we launched the MVP version of Roundel Campaign Manager to a pilot group of users. The launch included:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Training sessions for initial users</li>
          <li>Documentation and help resources</li>
          <li>Support desk for questions and issues</li>
          <li>Feedback mechanisms for continuous improvement</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The initial launch focused on core functionality:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Campaign creation and setup</li>
          <li>Basic reporting and status tracking</li>
          <li>Integration with primary advertising platforms</li>
          <li>User management and permissions</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          The MVP launch was a success, with users immediately seeing time savings and reduced errors in their workflow.
        </p>
      </div>
    ),
    'mvp-reflections': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Lessons from the MVP</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          After launching the MVP in Q4 2018, we gathered extensive feedback and metrics to understand what worked well and what needed improvement.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Key successes:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Reduced campaign setup time from 60+ minutes to under 5 minutes</li>
          <li>Decreased error rates by 85%</li>
          <li>Increased user satisfaction scores</li>
          <li>Enabled scaling of campaign volume by 150% within first three months</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Areas for improvement:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Need for more advanced reporting capabilities</li>
          <li>Requests for bulk operations and templates</li>
          <li>Desire for better integration with additional platforms</li>
          <li>Performance issues with large data sets</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          These insights formed the foundation for our continuous improvement roadmap.
        </p>
      </div>
    ),
    'user-feedback': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">User-Centered Iteration</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In Q1 2019, we established a formal process for collecting and prioritizing user feedback:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Monthly user feedback sessions</li>
          <li>In-app feedback mechanisms</li>
          <li>Usage analytics to identify pain points</li>
          <li>Regular stakeholder reviews</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Key themes from user feedback:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Need for more automation in repetitive tasks</li>
          <li>Desire for more customizable reporting</li>
          <li>Requests for better visibility into campaign performance</li>
          <li>Need for improved collaboration features</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          This feedback directly informed our product roadmap and prioritization for the next phase of development.
        </p>
      </div>
    ),
    'enhance': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature Enhancements</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          During Q2 2019, we focused on enhancing the platform based on user feedback:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Bulk Operations:</strong> Added ability to create and edit multiple campaigns simultaneously</li>
          <li><strong>Templates:</strong> Implemented campaign templates for common scenarios</li>
          <li><strong>Advanced Reporting:</strong> Enhanced reporting capabilities with custom views and exports</li>
          <li><strong>Performance Optimization:</strong> Improved system performance for large data sets</li>
          <li><strong>Additional Integrations:</strong> Added support for more advertising platforms</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          These enhancements significantly improved user efficiency and satisfaction, with SUS scores increasing from 69 to 75.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          The enhanced platform enabled the team to handle a 250% increase in campaign volume compared to pre-launch.
        </p>
      </div>
    ),
    'new-personas': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Expanding User Base</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In Q3 2019, we identified new user personas who could benefit from the platform:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Executive Stakeholders:</strong> Needed high-level performance dashboards</li>
          <li><strong>Agency Partners:</strong> Required limited access to campaign data</li>
          <li><strong>Finance Team:</strong> Needed budget tracking and forecasting</li>
          <li><strong>Creative Team:</strong> Needed to manage creative assets within campaigns</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We conducted research with these new personas to understand their specific needs and workflows.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Based on this research, we designed new features and interfaces tailored to each persona:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Executive dashboards with high-level KPIs</li>
          <li>Partner portal with controlled access to campaign data</li>
          <li>Budget management tools for finance team</li>
          <li>Creative asset library integrated with campaigns</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          Expanding to these new personas increased the platform's value across the organization.
        </p>
      </div>
    ),
    'loop-back': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Refining the Experience</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          From Q4 2019 to Q1 2020, we focused on refining the user experience based on accumulated feedback and usage data:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Conducted a comprehensive UX audit</li>
          <li>Analyzed user paths and identified friction points</li>
          <li>Redesigned key workflows for greater efficiency</li>
          <li>Improved information architecture</li>
          <li>Enhanced visual design for better clarity and hierarchy</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Key improvements included:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Streamlined navigation with contextual menus</li>
          <li>Redesigned dashboard with personalized views</li>
          <li>Enhanced data visualization for better insights</li>
          <li>Improved form design with smart defaults and validation</li>
          <li>Added keyboard shortcuts for power users</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          These refinements further improved user satisfaction, with SUS scores reaching 80.
        </p>
      </div>
    ),
    'final-launch': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Scaling Across the Organization</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          From Q2 2020 through Q4 2022, we focused on scaling the platform across the entire organization:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Expanded to all advertising teams globally</li>
          <li>Integrated with additional platforms and data sources</li>
          <li>Enhanced security and compliance features</li>
          <li>Improved performance and scalability</li>
          <li>Added advanced analytics and AI-powered recommendations</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          During this period, we released major updates quarterly, with minor enhancements delivered continuously.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          By the end of 2022, the platform was handling:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>400% more campaigns than at initial launch</li>
          <li>5x the number of users across multiple teams</li>
          <li>Integration with 12+ advertising platforms</li>
          <li>Billions in advertising spend annually</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          The platform had become a critical part of Target's advertising operations, enabling unprecedented scale and efficiency.
        </p>
      </div>
    ),
    'final-reflections': (
      <div className="prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact and Lessons Learned</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Looking back on the project in 2023, the impact of Roundel Campaign Manager was substantial:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Reduced campaign setup time by 97% (from 60+ minutes to 2 minutes)</li>
          <li>Enabled 400% growth in campaign volume</li>
          <li>Saved 165+ hours of work weekly across teams</li>
          <li>Improved data accuracy and reduced errors by 95%</li>
          <li>Enabled activation for all advertisers, not just high-value accounts</li>
          <li>Consistently high user satisfaction (SUS score of 80)</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Key lessons learned:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>User-Centered Design:</strong> Continuous user involvement was critical to success</li>
          <li><strong>Start Small, Scale Fast:</strong> The MVP approach allowed for quick wins and iterative improvement</li>
          <li><strong>Data Integration:</strong> Unified data across systems was a game-changer</li>
          <li><strong>Cross-Functional Collaboration:</strong> Close partnership between design, engineering, and business was essential</li>
          <li><strong>Measure Everything:</strong> Clear metrics helped demonstrate value and guide decisions</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed">
          This project demonstrated how thoughtful UX design can transform business operations and enable significant growth.
        </p>
      </div>
    )
  };

  return (
    <div className="mb-16">
      {contentMap[sectionId] || (
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Select a section from the timeline to view details.
          </p>
        </div>
      )}
    </div>
  );
}
