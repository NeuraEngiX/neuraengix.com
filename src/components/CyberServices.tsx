import {
  ClipboardCheck,
  Network,
  ShieldCheck,
  GraduationCap,
  Search,
  Lock,
  BadgeCheck,
  RefreshCw,
} from "lucide-react";

const pillars = [
  {
    icon: ClipboardCheck,
    title: "Assess & Comply",
    tagline: "Understand Your Risks. Establish Your Cybersecurity Baseline.",
    body: "We assess OT/ICS environments to identify assets, vulnerabilities, security gaps and operational risks. Our assessments align with ISA/IEC 62443 and other relevant frameworks, providing prioritized recommendations and a practical roadmap toward improved security and compliance.",
    includes: [
      "OT/ICS Cybersecurity Assessment",
      "OT Asset Discovery & Inventory",
      "OT Risk Assessment",
      "IEC 62443 Gap Assessment",
      "Security Level Assessment",
      "Zone & Conduit Assessment",
      "Asset Criticality Assessment",
      "Security Maturity Assessment",
      "Security Architecture Review",
      "Mitigation Planning",
      "Compliance Roadmap Development",
      "CAPEX & OPEX Cybersecurity Planning",
    ],
    footnote: {
      label: "Frameworks",
      text: "ISA/IEC 62443 • NIST Cybersecurity Framework • CIS Controls • Customer-Specific Cybersecurity Standards • Applicable Regulatory Frameworks",
    },
  },
  {
    icon: Network,
    title: "Secure OT Architecture & Infrastructure",
    tagline: "Build Security Into Your Industrial Environment.",
    body: "We design and implement secure OT infrastructure that protects critical industrial systems while maintaining operational availability and reliability. Our engineering approach addresses the architecture, connectivity, segmentation and security controls required for resilient industrial operations.",
    includes: [
      "OT Security Architecture",
      "Industrial Network Architecture",
      "Network Segmentation",
      "Zone & Conduit Design",
      "Industrial DMZ Design",
      "Industrial Firewall Architecture",
      "Layer-2 / Layer-3 Industrial Switching",
      "Secure Remote Access",
      "Active Directory Integration",
      "System Hardening",
      "Windows Server Configuration",
      "WSUS Patch Management",
      "Backup & Recovery Infrastructure",
      "Network Migration & Modernization",
      "OT Asset Integration",
      "IEC 62443 Engineering Support",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Test, Validate & Defend",
    tagline: "Verify Security. Identify Exposure. Strengthen Resilience.",
    body: "We validate cybersecurity controls, identify vulnerabilities and assess the resilience of industrial environments through structured and controlled security testing. We also support security monitoring, event analysis and incident-response capabilities to help organizations detect and respond to cybersecurity events.",
    includes: [
      "OT Vulnerability Assessment",
      "Passive Network Analysis",
      "Firmware & Patch Status Assessment",
      "Security Configuration Review",
      "Network Exposure Analysis",
      "OT Penetration Testing",
      "Cyber FAT / CFAT",
      "Cyber SAT",
      "Security Acceptance Testing",
      "Security Validation",
      "IEC 62443 Compliance Verification",
      "Security Documentation Review",
      "Security Monitoring & Event Analysis",
      "Incident Response Support",
    ],
    footnote: {
      label: "OT Penetration Testing",
      text: "Testing is performed using a controlled, safety-first approach appropriate to the industrial environment. Intrusive testing of live production OT systems is avoided where it could affect safety, availability or operations. Testing can be performed in suitable environments such as FAT, pre-commissioning, laboratory, Digital Twin, integrated IT/OT, DMZ, web, API and remote-access environments.",
    },
  },
  {
    icon: GraduationCap,
    title: "Build Capability & Sustain",
    tagline: "Develop People. Strengthen Processes. Sustain Cyber Resilience.",
    body: "OT cybersecurity is an ongoing operational discipline. We help organizations establish practical cybersecurity governance, operating procedures and response capabilities while developing the knowledge and skills required across management, engineering, operations and maintenance teams.",
    includes: [
      "OT Cybersecurity Governance",
      "Cybersecurity Policies & Standards",
      "Secure Engineering Procedures",
      "Standard Operating Procedures",
      "Access Management Procedures",
      "Patch Management Procedures",
      "Backup & Recovery Procedures",
      "Change Management Procedures",
      "Incident Response Procedures",
      "Disaster Recovery Procedures",
      "Security Design Specifications",
      "Executive Cybersecurity Awareness",
      "Engineer & Operator Training",
      "OT Cybersecurity Awareness",
      "IEC 62443 Workshops",
      "Secure Operations & Maintenance Training",
      "Incident Response Exercises",
      "Role-Based Cybersecurity Training",
    ],
  },
];

const approach = [
  { icon: Search, title: "Assess", body: "Identify assets, risks, vulnerabilities and compliance gaps." },
  { icon: Lock, title: "Secure", body: "Design and implement security controls aligned with industrial requirements." },
  { icon: BadgeCheck, title: "Validate", body: "Test, verify and demonstrate that security controls meet defined requirements." },
  { icon: RefreshCw, title: "Sustain", body: "Strengthen governance, people, processes and operational resilience." },
];

const expertise = [
  {
    title: "OT Cybersecurity",
    items: "IEC 62443 • OT Risk Assessment • Security Architecture • Vulnerability Assessment • Penetration Testing",
  },
  {
    title: "Industrial Infrastructure",
    items: "Industrial Ethernet • Firewalls • Network Segmentation • DMZ • Active Directory • Virtualization • Backup & Recovery",
  },
  {
    title: "Control Systems",
    items: "PLC • DCS • SCADA • ICSS • SIS • BMS • PMS • Third-Party Industrial Systems",
  },
  {
    title: "Governance & Resilience",
    items: "Cybersecurity Policies • Secure Engineering • Patch Management • Incident Response • Disaster Recovery • Security Validation",
  },
  {
    title: "Capability Development",
    items: "IEC 62443 • OT Cybersecurity Awareness • Secure Operations • Industrial Network Security • Incident Response",
  },
];

const standards = [
  { name: "ISA/IEC 62443", body: "Industrial Automation & Control Systems Security" },
  { name: "NIST CSF", body: "Cybersecurity Framework" },
  { name: "CIS Controls", body: "Cybersecurity Controls & Best Practices" },
  { name: "ISO 27001", body: "Information Security Management" },
  { name: "ISO 22301", body: "Business Continuity Management" },
  { name: "Zero Trust", body: "Security Architecture Principles" },
];

export default function CyberServices() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            OT Cybersecurity Services
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Secure industrial operations. By design.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            NeuraEngiX provides engineering-led{" "}
            <span className="font-semibold text-foreground">OT cybersecurity services</span> for
            manufacturers, process industries, EPC contractors and OEMs. We combine industrial
            automation, control-system engineering and cybersecurity expertise to help
            organizations assess risks, secure critical infrastructure, validate security and
            build long-term cyber resilience.
          </p>
        </div>
      </section>

      {/* Four pillars */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          {pillars.map(({ icon: Icon, title, tagline, body, includes, footnote }, i) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-8 md:p-10"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-mono text-xs font-semibold text-primary">
                    0{i + 1}
                  </div>
                  <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {title}
                  </h2>
                </div>
              </div>

              <p className="mt-6 text-lg font-semibold text-foreground">{tagline}</p>
              <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">{body}</p>

              <div className="mt-8 border-t border-border/60 pt-6">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Includes
                </div>
                <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {footnote && (
                <div className="mt-6 rounded-lg border border-border/60 bg-background/50 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    {footnote.label}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {footnote.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our approach */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Our Approach
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Assess → Secure → Validate → Sustain
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              From understanding your current OT environment to designing secure architectures,
              implementing controls, validating security and developing internal capabilities,
              NeuraEngiX supports the complete{" "}
              <span className="font-semibold text-foreground">OT cybersecurity lifecycle</span>.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approach.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-8">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering-led */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Engineering-Led OT Cybersecurity
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Security that understands the plant
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              NeuraEngiX brings together{" "}
              <span className="font-semibold text-foreground">
                OT cybersecurity, industrial automation, control systems and infrastructure
                engineering
              </span>{" "}
              to address cybersecurity in the context of real industrial operations.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our capabilities span{" "}
              <span className="font-semibold text-foreground">
                PLC, DCS, SCADA, SIS, BMS, PMS and other industrial control environments
              </span>
              , enabling us to understand not only the cybersecurity requirements, but also the
              operational and engineering constraints that shape secure industrial systems.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map(({ title, items }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Standards & Frameworks
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Aligned with what your auditors expect
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map(({ name, body }) => (
              <div
                key={name}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="font-mono text-sm font-bold text-primary">{name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
