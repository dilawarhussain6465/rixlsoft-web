// Blog posts (Insights). Plain text only; the generator escapes everything.
// Author for every post is 'RixlSoft Engineering'.

export default [
  {
    slug: 'agentic-ai-enterprise-2026',
    title: 'Agentic AI in 2026: From Chatbots to Safe Autonomous Workflows',
    author: 'RixlSoft Engineering',
    category: 'AI & Automation',
    date: 'September 2026',
    readMins: 7,
    excerpt: "Agents that plan, call tools and finish multi-step work are now practical, but most failures come from weak scoping, not weak models. Here is how we design, guard, evaluate and cost agentic workflows that enterprises can actually trust.",
    intro: [
      "Two years ago most enterprise AI projects were chat interfaces bolted onto a knowledge base. In 2026 the conversation has moved on. Models are reliable enough at tool use, structured output and multi-step reasoning that teams now ask a different question: can the system do the work, not just talk about it? That is what people mean by agentic AI, a model that plans, calls APIs, reads the results and decides what to do next until a goal is met.",
      "The upside is real, but so is the risk. An agent that can issue a refund, update a CRM record or merge a pull request can also do those things wrongly, at machine speed. This article summarises how RixlSoft approaches agentic systems for clients: which use cases are ready, what the architecture looks like, which guardrails matter, how to evaluate behaviour before and after launch, and where to start without betting the business."
    ],
    sections: [
      {
        heading: 'Where agents are ready today',
        paras: [
          "The best early candidates share three traits: the work is high volume, the steps are describable, and a mistake is detectable and reversible. That rules out a lot of glamorous ideas and rules in a lot of unglamorous ones. Back-office operations are the sweet spot, because the process already exists in someone's head or a runbook, and the agent is mostly orchestrating systems that have APIs.",
          "We steer clients away from fully open-ended agents that are told to go and improve revenue. Narrow agents with a clear definition of done outperform general ones, are cheaper to run, and are far easier to evaluate."
        ],
        bullets: [
          "Customer service triage: classify, pull order and account context, draft a resolution, and execute low-risk actions such as resending an invoice.",
          "Finance operations: invoice matching, exception handling in accounts payable, and reconciliation notes for human review.",
          "Sales operations: lead research, CRM hygiene, meeting preparation and follow-up drafting.",
          "Engineering: dependency upgrades, test generation, incident summarisation and first-pass code review.",
          "IT and HR service desks: access requests, onboarding checklists and policy questions with ticket updates."
        ]
      },
      {
        heading: 'A reference architecture that holds up',
        paras: [
          "Under the hood, a production agent is less magical than the demos suggest. It is a loop: the model receives a goal, context and a list of tools; it proposes an action; your code validates and executes that action; the result goes back to the model; repeat until done or until a limit is hit. Almost all of the engineering effort sits outside the model, in the orchestration layer.",
          "We build that layer with a few fixed components. A tool registry exposes typed functions with strict input schemas, increasingly through the Model Context Protocol so the same tools can be reused across models and clients. A retrieval layer supplies grounded context from documents and systems of record. A state store keeps the plan, intermediate results and a full trace of every step. A policy engine decides, per tool and per argument, whether an action runs automatically, needs approval, or is blocked. Finally, an observability pipeline records prompts, tool calls, latencies and costs so every run can be replayed.",
          "Keep the model swappable. Pricing and capability shift every few months, and the teams that hard-code one provider's quirks into business logic pay for it later. A thin abstraction over model calls, plus an evaluation suite, lets you change models with evidence rather than hope."
        ]
      },
      {
        heading: 'Guardrails that actually reduce risk',
        paras: [
          "Guardrails are not a single content filter at the end. They are layered controls, and the most effective ones are ordinary software engineering. The single most important rule: the agent should never hold more permission than the human it is acting for, and ideally much less.",
          "Prompt injection deserves special attention. Any text the agent reads, an email, a web page, a support ticket, can contain instructions. Treat all retrieved content as untrusted data, keep high-impact tools behind explicit approval, and never let the output of one untrusted source directly trigger an irreversible action. The OWASP guidance for LLM applications is a useful checklist here."
        ],
        bullets: [
          "Least-privilege credentials scoped per tool, with read-only access by default.",
          "Hard limits on steps, spend, records touched and monetary value per run.",
          "Schema validation on every tool call, rejecting anything outside allowed values.",
          "Allow-lists for destinations such as email domains, payment accounts and repositories.",
          "Idempotent actions and a documented rollback path for anything that writes data."
        ]
      },
      {
        heading: 'Evaluation before and after launch',
        paras: [
          "If you cannot measure an agent, you cannot improve it or defend it. Before launch we build an evaluation set from real historical cases, typically a few hundred, each with an expected outcome. We score the final result, but also the path: did it call the right tools, in a sensible order, without unnecessary steps? Deterministic checks cover what they can, such as correct record IDs or totals, and model-graded rubrics cover the rest, with humans spot-checking the graders.",
          "After launch, evaluation becomes monitoring. Sample live runs for human review, track task success, escalation rate, cost per task and time to completion, and feed every failure back into the test set. Any change to prompts, tools or model version should run the full suite in CI before it ships, exactly like a code change."
        ]
      },
      {
        heading: 'Human-in-the-loop as a dial, not a switch',
        paras: [
          "Human oversight works best when it is designed as a graduated dial. In the first phase the agent drafts and a person approves everything. As accuracy is proven on a category of task, that category moves to approve-by-exception, where only low-confidence or high-value cases go to a reviewer. Only well-understood, reversible actions ever become fully autonomous.",
          "Design the review experience carefully. A reviewer should see the agent's proposed action, the evidence it used and its reasoning summary on one screen, and be able to approve, edit or reject in seconds. Those decisions are also your best training and evaluation data. For regulated contexts, including systems that may fall under the EU AI Act's obligations as they phase in, this audit trail is not optional."
        ]
      },
      {
        heading: 'Cost, and where to start',
        paras: [
          "Agent costs are driven by tokens per step multiplied by steps per task. Long contexts and chatty loops add up quickly. Practical levers include routing simple steps to smaller models, caching stable context such as system prompts and policies, summarising history instead of replaying it, and capping steps. Always compare cost per completed task with the fully loaded cost of the human process, not cost per call.",
          "Our recommended starting point is a single process, one team and a six to ten week pilot. Pick a workflow with clear success criteria, build the evaluation set first, launch in draft-only mode, and expand autonomy as the numbers justify it. That path produces a working system and, just as importantly, the internal confidence to build the next one.",
          "Resist the urge to build a platform before you have a use case. Shared components such as the tool registry, policy engine and tracing pipeline are worth standardising, but only after one or two agents have shown which abstractions you actually need. The second agent should reuse far more than the first."
        ]
      }
    ],
    takeaways: [
      "Choose narrow, high-volume, reversible workflows for your first agents.",
      "Most of the engineering lives in orchestration, tools, policy and observability, not the model.",
      "Build the evaluation set before the agent, and run it on every change.",
      "Treat human oversight as a dial that opens only as measured accuracy improves."
    ],
    services: ['generative-ai', 'automation-apps', 'custom-software']
  },

  {
    slug: 'legacy-modernization-ai-era',
    title: 'Legacy Modernization in the AI Era: A Practical Playbook',
    author: 'RixlSoft Engineering',
    category: 'Digital Transformation',
    date: 'August 2026',
    readMins: 6,
    excerpt: "Big-bang rewrites still fail for the same reasons they always have, but AI has changed how fast teams can understand and move old systems. This playbook covers sequencing, the strangler fig pattern, data migration and managing risk.",
    intro: [
      "Most organisations we speak to are running at least one system that everyone is afraid to touch: a monolith written a decade or two ago, thin on tests, thinner on documentation, and dependent on two people who know where the bodies are buried. It still makes money, which is precisely why replacing it is so hard.",
      "What changed in the last two years is not the strategy, which remains incremental, but the economics of the hardest part: understanding the old code. Large language models can now read, summarise and cross-reference legacy codebases far faster than a new team can. Used well, that shortens discovery and lowers risk. Used carelessly, it produces confident translations of code nobody understood in the first place. Here is the playbook we use at RixlSoft."
    ],
    sections: [
      {
        heading: 'Start with outcomes, not technology',
        paras: [
          "Modernization is expensive, so it has to be justified by something the business cares about: faster release cycles, lower run costs, retiring an unsupported platform, reducing security exposure, or unlocking data for analytics and AI. Write these down with a baseline. If you cannot say what will be measurably better in twelve months, you are not ready to start.",
          "Then map the estate. For each application, capture business criticality, rate of change, technical health and dependencies. The classic options still apply: retain, rehost, replatform, refactor, rebuild or retire. It is common to find that a meaningful share of the portfolio can simply be retired or consolidated, which is the cheapest modernization there is.",
          "Be explicit about the operating model too. A modernization programme needs a product owner with authority to make trade-offs, a small platform team building shared foundations, and domain-aligned delivery teams that own each migrated capability end to end. Without that structure, programmes drift into an endless technical exercise that the business stops funding."
        ]
      },
      {
        heading: 'Use AI to understand the system before changing it',
        paras: [
          "The biggest time sink in legacy work is discovery. We now pair engineers with AI tooling to accelerate it. Models are indexed over the codebase, database schema, job schedules and whatever documentation exists, and engineers use them to answer targeted questions: where is this business rule enforced, what writes to this table, which batch jobs depend on this file.",
          "The output of this phase is not generated code. It is a living knowledge base: capability maps, data lineage, sequence diagrams for critical flows, and a catalogue of business rules with references back to the source lines. Every AI-generated claim is verified by an engineer against the code or by running it, because models can and do hallucinate plausible behaviour."
        ],
        bullets: [
          "Generate module-level summaries and dependency graphs, then have engineers correct them.",
          "Extract business rules into plain language and confirm them with domain experts.",
          "Produce characterisation tests that capture current behaviour, including its quirks.",
          "Flag dead code, duplicated logic and undocumented integrations for triage."
        ]
      },
      {
        heading: 'The strangler fig pattern, applied properly',
        paras: [
          "The strangler fig pattern remains the safest default for anything critical. You put a routing layer, often an API gateway or reverse proxy, in front of the legacy system, then peel off one capability at a time into a new service. Traffic for that capability moves to the new implementation, the old code path is retired, and you repeat. At every point the business has a working system.",
          "Two details make or break it. First, choose seams well: start with capabilities that are relatively self-contained, frequently changed and valuable, rather than the most tangled core. Second, invest early in the facade and the anti-corruption layer that translates between old and new data models, so the new services do not inherit the legacy design. Run old and new side by side with shadow traffic or parallel runs, compare outputs automatically, and only cut over when the diff is clean."
        ]
      },
      {
        heading: 'Data migration is the real project',
        paras: [
          "Teams consistently underestimate data. Legacy databases contain decades of edge cases: nullable fields that are never null except when they are, codes whose meaning changed in 2011, and records only valid under rules that no longer exist. Plan data work as a first-class workstream, not a weekend task before go-live.",
          "Profile the data early, agree target models with the business, and build repeatable, automated migration pipelines rather than one-off scripts. Where both systems must run concurrently, use change data capture to keep them in sync and make reconciliation reports part of every rehearsal. We aim for at least two full dress rehearsals of any cutover, with timing, validation and rollback all tested."
        ],
        bullets: [
          "Profile volumes, quality and anomalies before designing the target schema.",
          "Automate migration and reconciliation so every run is repeatable.",
          "Use change data capture for coexistence periods instead of dual writes from application code.",
          "Define rollback criteria and a tested rollback procedure before cutover day."
        ]
      },
      {
        heading: 'Where AI-assisted code generation fits',
        paras: [
          "AI coding assistants are genuinely useful in modernization, within limits. They are strong at translating well-understood, well-tested routines, writing boilerplate for new services, generating test scaffolding, and upgrading frameworks or language versions across many files. They are weak at inferring intent from ambiguous code and at making architectural decisions.",
          "Our rule is simple: generate only against a safety net. Characterisation tests must exist before code is translated, and the translated code must pass them. Human review focuses on behaviour, security and design rather than syntax. Line-by-line translation of a monolith into a new language without redesign mostly gives you the same problems in a newer syntax.",
          "Governance matters as well. Decide which code and data may be sent to which AI services, prefer enterprise agreements that exclude your code from model training, and keep secrets and customer data out of prompts. Log which changes were AI-assisted so reviewers know where to look harder. None of this slows teams down much, and it avoids uncomfortable conversations with security and legal later."
        ]
      },
      {
        heading: 'Sequencing and managing risk',
        paras: [
          "A realistic programme sequences work in waves. Wave zero builds the foundations: CI/CD, observability, a cloud landing zone, the routing facade and the knowledge base. Wave one migrates two or three low-risk but visible capabilities to prove the pattern and the team. Later waves take on progressively more central domains, with the database core usually last.",
          "Keep the risk register honest. The common failure modes are well known: scope creep into redesigning every process at once, feature freezes that last too long and erode business support, key-person dependency on legacy experts, and cutovers without rehearsal. Short waves, visible wins, parallel running and an explicit decommissioning plan for each retired component keep momentum and trust. Modernization is finished not when the new system launches, but when the old one is switched off."
        ]
      }
    ],
    takeaways: [
      "Tie every modernization to measurable business outcomes with a baseline.",
      "Use AI to accelerate understanding, and verify every claim it makes against the code.",
      "Strangle the monolith capability by capability, with parallel runs and automated diffs.",
      "Treat data migration as its own workstream with automated reconciliation and rehearsed cutovers."
    ],
    services: ['digital-transformation', 'cloud-migration', 'custom-software']
  },

  {
    slug: 'ai-powered-crm-salesforce-hubspot',
    title: 'AI-Powered CRM: Agentforce, Breeze and Dynamics 365 Copilot Explained',
    author: 'RixlSoft Engineering',
    category: 'Salesforce & CRM',
    date: 'August 2026',
    readMins: 6,
    excerpt: "Every major CRM vendor now ships AI assistants and autonomous agents, but the results depend almost entirely on the quality of your data and processes. Here is what each platform offers and how to prepare before switching anything on.",
    intro: [
      "The three CRM platforms we work with most, Salesforce, HubSpot and Microsoft Dynamics 365, have all made AI the centre of their roadmaps. Salesforce has Agentforce, HubSpot has Breeze, and Microsoft has Copilot across Dynamics 365 and the Power Platform. The marketing is loud and the demos are impressive. The results in production are more uneven.",
      "The pattern we see across client projects is consistent: AI features amplify whatever is already in the CRM. Clean data and clear processes produce useful summaries, accurate forecasts and agents that resolve cases. Duplicate accounts, empty fields and undocumented workflows produce confident nonsense. This article explains, in practical terms, what each platform brings and how sales and service teams should prepare."
    ],
    sections: [
      {
        heading: 'Salesforce Agentforce',
        paras: [
          "Agentforce is Salesforce's platform for building and deploying AI agents that work inside the Salesforce data and permission model. Agents are defined with topics, instructions and actions, where actions can be Flows, Apex, prompt templates or API calls. They can be deployed to employees inside Salesforce or to customers through channels such as web chat and messaging, with handoff to human agents when needed.",
          "Two parts of the architecture matter most for planning. First, grounding: agents are only as useful as the data they can reach, which is why Salesforce ties Agentforce closely to its Data Cloud platform for unifying customer data from multiple sources. Second, trust: the Einstein Trust Layer provides controls around data handling, masking and auditing for model calls. Because agents run on existing Flows and Apex, any automation debt in your org becomes agent debt. Consumption-based pricing also means you should model conversation volumes before you scale."
        ]
      },
      {
        heading: 'HubSpot Breeze',
        paras: [
          "Breeze is HubSpot's AI layer across its hubs. It includes Breeze Copilot, an assistant available throughout the platform for summarising records, drafting content and answering questions about your data; a set of Breeze Agents for specific jobs such as customer support, prospecting, content and social media; and Breeze Intelligence, which enriches contact and company records with third-party data and helps identify buying intent.",
          "HubSpot's advantage is simplicity. For small and mid-sized teams whose data already lives in HubSpot, many AI features work with modest configuration. The customer-facing agent, for example, is grounded primarily in your knowledge base and website content, so the quality of those sources directly determines answer quality. The limitation is the flip side: complex, multi-system processes still need proper integration work before agents can act on them."
        ]
      },
      {
        heading: 'Dynamics 365 and Copilot',
        paras: [
          "Microsoft's approach spreads across several products. Copilot capabilities inside Dynamics 365 Sales and Customer Service help with record summaries, email drafting, meeting preparation and case resolution. Sales capabilities are also surfaced inside Outlook and Teams through Microsoft 365 Copilot, which suits organisations whose sellers live in email rather than the CRM. Copilot Studio is the tool for building custom agents that connect to Dataverse, Power Automate flows and hundreds of connectors.",
          "For Microsoft-centric organisations the strongest argument is integration: identity, security, data governance and productivity tools already share a platform. The planning challenge is licensing, which spans Dynamics, Microsoft 365 and Copilot Studio capacity, and should be modelled carefully before a broad rollout.",
          "Across all three vendors, product names, packaging and pricing have changed frequently since 2024, and they will keep changing. Treat any feature matrix, including this one, as a starting point, and confirm current capabilities and licence terms with the vendor or a partner before committing budget."
        ]
      },
      {
        heading: 'What changes for sales and service teams',
        paras: [
          "Regardless of platform, the near-term impact falls into a few categories. Sellers spend less time on data entry and research as activity capture and account summaries improve. Managers get pipeline insights and deal risk signals, provided the underlying stage data is trustworthy. Service teams see the biggest structural change, with agents resolving routine cases end to end and humans handling exceptions and relationship work.",
          "That shift changes roles. Someone has to own agent instructions, knowledge content and escalation rules, and review agent conversations weekly. In the organisations where AI CRM works, that ownership is explicit, usually a small team combining CRM administration, knowledge management and operations."
        ],
        bullets: [
          "Automatic call and email summaries logged to the right records.",
          "Account and opportunity briefs generated before meetings.",
          "Self-service agents resolving order status, returns and account changes.",
          "Suggested replies and knowledge articles for human service agents.",
          "Forecast and deal risk signals, when stage data is maintained honestly."
        ]
      },
      {
        heading: 'Preparing your data: the unglamorous work that decides success',
        paras: [
          "Before enabling any agent, run a data readiness assessment. In most CRMs we audit, the same issues appear: duplicate accounts and contacts, required fields filled with placeholder values, opportunity stages that do not reflect reality, and customer data split across ERP, billing, support and marketing systems with no reliable matching key.",
          "Fixing this is a project, not a checkbox. Define a single customer identifier and matching rules. Deduplicate and set up ongoing duplicate prevention. Rationalise fields, since many orgs carry hundreds that nobody uses. Integrate the systems that hold the facts agents will need, such as orders, invoices and entitlements, using a proper integration layer rather than ad hoc sync scripts. Finally, clean up the knowledge base: outdated or contradictory articles are the most common cause of wrong answers from service agents."
        ],
        bullets: [
          "Establish a golden customer record and duplicate prevention rules.",
          "Audit field usage and retire fields that add noise.",
          "Integrate order, billing and support data the agents will reference.",
          "Review sharing and permission models, since agents inherit them.",
          "Rewrite and date-stamp knowledge articles, and assign owners."
        ]
      },
      {
        heading: 'A sensible rollout path',
        paras: [
          "Start with assistive features that keep a human in control, such as summaries, drafting and meeting preparation. They deliver quick value, build trust and expose data problems safely. Next, launch one customer-facing or internal agent on a narrow, well-documented use case, with clear escalation and a weekly review of transcripts. Measure resolution rate, escalation rate, customer satisfaction and cost per interaction against the human baseline.",
          "Only then expand to more topics and actions. Throughout, keep a platform-neutral view: the right choice depends on where your data and users already are, not on which vendor has the most compelling keynote.",
          "Governance should grow with autonomy. Document what each agent may and may not do, which records and actions it can touch, and when it must hand off to a person. Review data residency and privacy obligations for customer conversations, particularly for GDPR in the UK and Europe and for sector rules in finance and healthcare. Keep an audit trail of agent actions, and make it easy for customers to reach a human. These controls are what allow you to expand agents confidently rather than pulling them back after the first public mistake."
        ]
      }
    ],
    takeaways: [
      "AI in the CRM amplifies data quality, good or bad.",
      "Pick the platform that matches where your data and users already live.",
      "Assign clear ownership for agent instructions, knowledge content and reviews.",
      "Start assistive, then launch one narrow agent with measured outcomes."
    ],
    services: ['salesforce-consulting', 'hubspot-crm', 'dynamics-365']
  },

  {
    slug: 'spatial-computing-enterprise-roi',
    title: 'Spatial Computing for the Enterprise: Where AR and VR Deliver ROI',
    author: 'RixlSoft Engineering',
    category: 'AR / VR',
    date: 'July 2026',
    readMins: 6,
    excerpt: "Spatial computing is past the hype cycle and into a quieter, more useful phase. Training, remote assistance and product visualization now show repeatable returns, and a well-scoped pilot on Quest, Vision Pro or WebXR is the fastest way to prove them.",
    intro: [
      "Spatial computing has had several false dawns. The difference now is that the hardware is capable, the tooling is mature, and enough enterprises have run real deployments that the pattern of where it pays off is clear. Meta Quest headsets are affordable and manageable at fleet scale, Apple Vision Pro has set a new bar for passthrough and display quality, and Android XR devices have joined the market. Meanwhile WebXR lets many experiences run in a browser with no app store involved.",
      "The question for most organisations is no longer whether AR and VR work, but where they beat the alternatives on cost, safety or speed. At RixlSoft we build spatial applications in Unity, Unreal and WebXR, and this article sets out the use cases we see paying back, how to choose a platform, and how to structure a pilot that produces a clear go or no-go decision."
    ],
    sections: [
      {
        heading: 'Immersive training: the clearest business case',
        paras: [
          "Training is where virtual reality most reliably earns its keep, especially when real-world practice is dangerous, expensive, or hard to schedule. Think equipment operation, emergency procedures, hazardous environments, medical and clinical skills, and soft-skills scenarios such as difficult customer conversations. VR lets trainees repeat a procedure as many times as they need, fail safely, and receive consistent assessment.",
          "The economic logic is straightforward. Compare the cost of the current method, including travel, instructor time, equipment downtime, consumables and incidents, with the cost of building and deploying the simulation. Programmes with many trainees, recurring certification or expensive physical setups tend to justify the investment fastest. Instrument everything: completion times, error rates and assessment scores give you evidence rather than anecdotes."
        ],
        bullets: [
          "Safety-critical procedures such as lockout-tagout, confined spaces and emergency response.",
          "Operating expensive or scarce equipment without taking it out of production.",
          "Onboarding for distributed workforces where central classroom training is costly.",
          "Scenario-based soft-skills practice with repeatable, scored outcomes."
        ]
      },
      {
        heading: 'Remote assistance and guided work',
        paras: [
          "Remote assist puts an expert virtually beside a field technician. The technician wears a headset or uses a phone or tablet, the expert sees their view, and annotations are anchored in the real world. The value comes from fewer repeat visits, less expert travel and faster resolution. Step-by-step AR work instructions overlaid on equipment extend the same idea to routine tasks and reduce dependency on paper manuals.",
          "Practical constraints matter more here than in training. Consider connectivity on site, safety rules about headsets in industrial areas, battery life across a shift, and whether a phone-based AR solution is good enough. Often it is, and it avoids buying and managing headsets entirely."
        ]
      },
      {
        heading: 'Product visualization and sales',
        paras: [
          "For manufacturers, retailers, real estate and architecture, spatial visualization helps buyers understand products that are large, configurable or not yet built. Placing a true-scale machine on a factory floor, walking through an unbuilt apartment, or configuring a product in 3D shortens sales cycles and reduces misunderstandings that lead to returns or change orders.",
          "The hidden cost is 3D content. CAD models are usually far too heavy for real-time rendering and must be optimised, textured and kept in sync with the product catalogue. Budget for a content pipeline, not just an app. Where reach matters more than fidelity, browser-based 3D and AR on mobile devices can deliver much of the value with no installs."
        ]
      },
      {
        heading: 'Choosing a platform: Quest, Vision Pro, Android XR or WebXR',
        paras: [
          "Meta Quest devices remain the pragmatic default for training at scale: they are relatively inexpensive, standalone, support hand and controller tracking, and can be managed centrally with enterprise device management. Mixed reality passthrough on current models also enables blended scenarios. Check Meta's current business and device management options at the time of purchase, as they have changed more than once.",
          "Apple Vision Pro, running visionOS, offers exceptional display and passthrough quality and integrates with the Apple ecosystem. It suits high-value visualization, design review and executive or client-facing experiences more than large training fleets, given its price. Apple also provides enterprise APIs for approved business use cases. Android XR, Google's platform with Samsung's Galaxy XR as the first headset, is a newer option worth watching for organisations standardised on Android and Google services.",
          "WebXR deserves serious consideration. Experiences built with frameworks such as Three.js run in headset browsers and on phones, which removes app distribution and update friction. For lighter experiences, product viewers and pilots, it is often the fastest path. For demanding simulations, native builds in Unity or Unreal still win on performance and device features."
        ]
      },
      {
        heading: 'How to run a pilot that proves or disproves ROI',
        paras: [
          "Most spatial pilots fail not because the technology disappoints, but because nobody defined success. Before building anything, pick one use case, one user group and one metric that matters to the business, such as time to competency, first-time fix rate or quote-to-order conversion. Capture the baseline from the current process.",
          "Keep the first build small: one scenario or workflow, polished enough that users take it seriously. Plan the operational side as carefully as the software, including device charging, hygiene, storage, management, network access and support. Run the pilot for long enough to get past novelty, typically eight to twelve weeks, and compare results against the baseline and a control group where possible."
        ],
        bullets: [
          "Define one use case, one audience and one measurable outcome.",
          "Measure the baseline before building anything.",
          "Budget for 3D content and device operations, not just development.",
          "Collect comfort and usability feedback alongside performance data.",
          "Decide in advance what result justifies scaling."
        ]
      },
      {
        heading: 'Scaling beyond the pilot',
        paras: [
          "Successful pilots scale when they are integrated into existing systems. Training results should flow into the learning management system, remote assist sessions should link to work orders, and product visualizations should pull from the same catalogue as the e-commerce site. Build a reusable content pipeline and component library so the second and third scenarios cost significantly less than the first. That is where the ROI compounds.",
          "Plan for the human side of scale as well. Some users experience discomfort in VR, so keep sessions short, offer seated options and always provide a non-immersive alternative. Involve IT security early on device management, network access and data captured by cameras and sensors, especially for passthrough and remote assist, where video of facilities or people may be recorded. Finally, assign a product owner for the spatial programme. Without one, pilots tend to remain isolated demos rather than becoming part of how the organisation trains, sells and supports customers."
        ]
      }
    ],
    takeaways: [
      "Training, remote assistance and product visualization have the most repeatable returns.",
      "Choose the device for the use case: Quest for scale, Vision Pro for fidelity, WebXR for reach.",
      "Define one metric and a baseline before building the pilot.",
      "Budget for 3D content and device operations, and integrate with existing systems to scale."
    ],
    services: ['ar-vr-xr', 'game-development', 'art-design']
  },

  {
    slug: 'finops-cloud-cost-optimization',
    title: 'FinOps: Cutting Cloud Costs 20 to 40 Percent Without Slowing Delivery',
    author: 'RixlSoft Engineering',
    category: 'Cloud & DevOps',
    date: 'June 2026',
    readMins: 6,
    excerpt: "Most cloud bills carry significant waste, and removing it does not require freezing engineering. This guide covers the FinOps practices we use with clients, from visibility and tagging to commitments, architecture changes and the new challenge of AI and GPU spend.",
    intro: [
      "Cloud spend has a habit of growing faster than the business. Environments are created for a project and never deleted, instances are sized for a peak that never arrives, and data transfer charges hide in line items nobody reads. Add AI workloads with expensive GPUs and per-token API costs, and finance teams start asking hard questions.",
      "In our cost optimisation engagements, reductions in the range of 20 to 40 percent are common when an organisation has not previously run a structured programme, though the exact figure depends heavily on the starting point. The key is doing it without turning engineering into a ticket queue for finance. FinOps, the practice of bringing financial accountability to variable cloud spend, is how. Here is the approach we use."
    ],
    sections: [
      {
        heading: 'Visibility first: you cannot optimise what you cannot see',
        paras: [
          "The FinOps Foundation describes the practice in three phases: inform, optimise and operate. Inform comes first for good reason. Start by getting billing data from every provider into one place, ideally normalised to the FOCUS specification, the open standard for cloud cost and usage data that the major providers now support. Then build views that answer the questions people actually ask: what does each product, team and environment cost, and how is that trending?",
          "Unit economics make the numbers meaningful. Total spend going up can be good news if the business grew faster. Track cost per customer, per transaction or per thousand API calls, and you have a metric that engineers and executives can both reason about.",
          "Add anomaly detection early. All three major providers offer native cost anomaly alerts, and routing them to the owning team in the chat tools they already use catches runaway resources within a day instead of at month end. Pair this with forecasts so finance sees expected spend before the invoice arrives, which builds the trust that keeps FinOps a partnership rather than a policing exercise."
        ]
      },
      {
        heading: 'Tagging and allocation that actually works',
        paras: [
          "Allocation depends on tagging, and tagging depends on enforcement. Agree a small, mandatory set of tags and enforce them in infrastructure as code and through cloud policies, rather than asking people to remember. Untagged resources should fail a pipeline check or be flagged automatically, not discovered in a quarterly review.",
          "Shared costs such as networking, observability platforms and Kubernetes clusters need an agreed allocation method. For containers, tools like OpenCost or Kubecost can attribute cluster costs to namespaces and workloads. The goal is showback first, so teams can see their spend, and chargeback later if the organisation wants it."
        ],
        bullets: [
          "owner: the accountable team, not an individual.",
          "product or cost centre: what the spend supports.",
          "environment: production, staging, development or sandbox.",
          "lifecycle or expiry date for temporary resources."
        ]
      },
      {
        heading: 'Quick wins: waste removal and rightsizing',
        paras: [
          "The first savings usually come from eliminating waste. Idle and orphaned resources are everywhere: unattached volumes, old snapshots, forgotten load balancers, unused IP addresses and test environments running around the clock. Scheduling non-production environments to shut down outside working hours is one of the simplest high-impact changes.",
          "Rightsizing comes next. Use actual utilisation data over several weeks to downsize over-provisioned instances, databases and containers. Move to newer instance generations, which typically offer better price-performance, and evaluate ARM-based options such as AWS Graviton where your software supports it. Review storage tiers and lifecycle policies, since large volumes of rarely accessed data often sit in the most expensive tier."
        ],
        bullets: [
          "Delete unattached volumes, stale snapshots and idle load balancers.",
          "Schedule development and staging environments to stop outside working hours.",
          "Rightsize compute and databases based on observed utilisation.",
          "Apply storage lifecycle rules to move cold data to cheaper tiers.",
          "Review data transfer paths, including cross-zone and egress traffic."
        ]
      },
      {
        heading: 'Commitments and pricing models',
        paras: [
          "Once the footprint is rightsized, commit to the stable baseline. AWS Savings Plans and Reserved Instances, Azure reservations and savings plans, and Google Cloud committed use discounts all trade a usage commitment for significantly lower rates. Commit after rightsizing, not before, or you lock in waste. Start with a conservative coverage target for steady workloads, then increase it as confidence grows, and review utilisation monthly.",
          "For interruptible work such as batch processing, CI runners and some data pipelines, spot or preemptible capacity offers deep discounts in exchange for the possibility of interruption. The engineering work of making workloads tolerate that is usually worth it."
        ]
      },
      {
        heading: 'Architecture: the largest and most durable savings',
        paras: [
          "The biggest long-term savings come from design decisions. Autoscaling that actually scales down, serverless for spiky low-volume workloads, caching to reduce database load, and choosing managed services where they are cheaper than self-operated equivalents all change the cost curve permanently. Chatty microservices that move data across zones or regions can generate surprisingly large network bills.",
          "Build cost into the engineering workflow. Showing the estimated cost impact of infrastructure changes in pull requests, with tools that analyse Terraform plans, makes cost a design consideration rather than an after-the-fact surprise."
        ]
      },
      {
        heading: 'AI and GPU costs: the new frontier',
        paras: [
          "AI workloads introduce two new cost profiles. Self-hosted models and training runs need GPUs, which are expensive and often left idle between jobs. Scheduling, sharing GPUs across workloads, choosing the smallest instance that meets latency needs, and using spot capacity for training where checkpointing allows all help. API-based models are billed per token, so costs scale with prompt length and traffic.",
          "For API usage, the levers are routing simpler requests to smaller, cheaper models, using prompt caching where the provider supports it, trimming retrieved context, using batch processing for non-urgent jobs, and tracking cost per feature or per user. Put budgets and alerts on AI spend from day one; it can grow very quickly once a feature is popular."
        ]
      },
      {
        heading: "Culture: making cost everyone's job",
        paras: [
          "Tools find savings; culture keeps them. Give each engineering team visibility of its own spend and unit costs, set budgets with anomaly alerts, and review cost alongside reliability and performance in regular engineering rituals. Celebrate savings the same way you celebrate shipped features. A small central FinOps function can own tooling, commitments and reporting, while product teams own decisions about their own workloads. That balance is what lets costs fall while delivery speed stays the same.",
          "A practical cadence helps. Hold a short monthly cost review per product, with the top movers, anomalies and open optimisation actions, and a quarterly review of commitments and architecture. Keep a shared backlog of savings opportunities with estimated value and effort, so teams can pick them up alongside feature work instead of in panicked clean-up sprints."
        ]
      }
    ],
    takeaways: [
      "Centralise and normalise billing data, then track unit costs, not just totals.",
      "Enforce tagging in code and pipelines rather than relying on discipline.",
      "Remove waste and rightsize first, then commit to the stable baseline.",
      "Treat AI and GPU spend as a first-class cost stream with budgets from day one."
    ],
    services: ['cloud-maintenance', 'devops-ci-cd', 'cloud-migration']
  }
];
