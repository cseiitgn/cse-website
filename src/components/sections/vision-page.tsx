import type { LucideIcon } from 'lucide-react';

import {
  BrainCircuit,
  FileCheck2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Microscope,
  Network,
  Orbit,
  Palette,
  Scale,
  Cpu,
  UsersRound,
} from 'lucide-react';

import { cn } from '@/lib/utils';

type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: string;
};

const principles: IconItem[] = [
  {
    icon: Scale,
    title: 'Responsible scale',
    description:
      'Build computing systems that are reliable, secure, verifiable, and ready for deployment in high-stakes settings.',
    tone: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  },
  {
    icon: HeartPulse,
    title: 'Societal priorities',
    description:
      'Advance work that addresses inclusive education, sustainable living, digital health, accessibility, and public infrastructure.',
    tone: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  },
  {
    icon: Network,
    title: 'Open collaboration',
    description:
      'Create open datasets, reproducible tools, and durable partnerships with clinical, industrial, policy, and academic collaborators.',
    tone: 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
  },
];

const demonstrations = [
  {
    icon: FileCheck2,
    title: 'IITGN Exam-App',
    eyebrow: 'Assessment infrastructure',
    description:
      'A secure, cross-platform examination application for BYOD settings, designed to lower operational overhead while preserving academic integrity.',
    details: [
      'Electron-based desktop app across Windows, macOS, and Linux',
      'Controlled exam environment with PDF rendering and process monitoring',
      'Roadmap: proctoring, admin dashboards, sandboxing, offline sync, and LLM-assisted question generation and evaluation',
    ],
    tone: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  },
  {
    icon: BrainCircuit,
    title: 'Code, math, and reasoning models',
    eyebrow: 'Sovereign AI systems',
    description:
      'In collaboration with Soket AI, the department is developing multilingual, code-centric models for reasoning, software engineering, and secure deployment.',
    details: [
      '120B-parameter multilingual LLM under training and evaluation',
      'Agent-first architecture for repository-level code work, tool use, and enterprise workflows',
      'Focus areas include Indic language support, cybersecurity, AI safety, and on-premise or air-gapped deployments',
    ],
    tone: 'bg-violet-500/10 text-violet-700 dark:text-violet-300',
  },
  {
    icon: HeartPulse,
    title: 'ApneaEye',
    eyebrow: 'Deployable clinical AI',
    description:
      'A contact-free sleep apnea screening system that uses low-cost thermal sensing to move clinical AI beyond specialized sleep labs.',
    details: [
      'Single thermal camera and Raspberry Pi hardware below Rs 25,000',
      '535 hours of synchronized thermal and PSG data from 70 participants with AIIMS Delhi',
      'AHI estimation at R2 = 0.95 and MAE 2.22 events/hour against PSG',
    ],
    tone: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  },
];

const researchDirections: IconItem[] = [
  {
    icon: Orbit,
    title: 'Quantum algorithms',
    description:
      'Identify problems where quantum systems offer provable advantages, including kernels, QNNs, QAOA/VQE, and group-theoretic complexity.',
    tone: 'bg-sky-500/10 text-sky-700 dark:text-sky-300',
  },
  {
    icon: Cpu,
    title: 'Secure systems and Rust OS',
    description:
      'Develop an indigenous Rust-based ARMv8 operating system, network stack, testing pipeline, formal verification methods, and sandboxing support for mobile, edge, and IoT devices.',
    tone: 'bg-red-500/10 text-red-700 dark:text-red-300',
  },
  {
    icon: Palette,
    title: 'AI for visual arts and design',
    description:
      'Use differentiable rendering, inverse design, and learning-based methods for shadow art, knots, scribble art, and anamorphic 3D forms.',
    tone: 'bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300',
  },
  {
    icon: UsersRound,
    title: 'Accessibility and assistive technology',
    description:
      'Create culturally and linguistically inclusive AI for communication, adaptive learning, eye-gaze interfaces, and assistive interaction.',
    tone: 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
  },
];

const educationTracks = [
  {
    icon: GraduationCap,
    title: 'Foundational CS training',
    description:
      'A program for students in Gujarat engineering colleges, combining two five-day IITGN bootcamps each semester with online modules.',
    points: [
      'Programming, data structures and algorithms, and discrete mathematics',
      'Interactive lectures, problem-solving labs, coding contests, and peer learning',
      'Teaching assistantships for IITGN PhD and master\'s students',
    ],
  },
  {
    icon: Landmark,
    title: 'Academic growth',
    description:
      'Faculty expansion is planned to deepen coverage in systems, security, quantum technologies, AI, theory, and interdisciplinary computing.',
    points: [
      'Near-term goal: add four to five faculty members in priority areas',
      'Decade goal: 35 to 40 core CSE faculty',
      'Target faculty-student ratio: 1:10, aligned with MoE recommendations',
    ],
  },
];

export default function VisionPage() {
  return (
    <div>
      <section className="border-b bg-muted/40">
        <div className="container py-14 md:py-18">
          <p className="text-sm font-medium text-secondary">
            Department of Computer Science &amp; Engineering, IIT Gandhinagar
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
                Responsible, scalable computing for India and the world
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The department&apos;s decade-long vision is to pair fundamental
                advances in AI, theory, and systems with deployable technologies
                for inclusive education, sustainable living, digital health, and
                secure public infrastructure.
              </p>
            </div>
            <aside className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Microscope className="size-5" />
                </div>
                <p className="font-semibold">Long term outcome</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Become a global hub for socially impactful, scientifically
                rigorous computing research through open datasets, reproducible
                tools, and strong links with industry, policy, clinics, and
                peer institutions.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeader
            eyebrow="Research culture"
            title="What will guide the department"
            description="The vision emphasizes research that is deep enough to advance computer science and practical enough to be validated in the environments where it will be used."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <IconCard key={principle.title} item={principle} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/30 section-padding">
        <div className="container">
          <SectionHeader
            eyebrow="High-TRL demonstrations"
            title="From research prototypes to deployable systems"
            description="Three initiatives anchor the near-term translation agenda: assessment infrastructure, sovereign AI systems, and clinical AI that can leave the lab."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {demonstrations.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-lg border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>
                    <div className={cn('rounded-md p-2', item.tone)}>
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeader
            eyebrow="Research directions"
            title="Significant areas of advancement"
            description="The document identifies long-horizon research efforts where the department can build distinctive depth across theory, systems, AI, and human-centered computing."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {researchDirections.map((direction) => (
              <IconCard key={direction.title} item={direction} horizontal />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/30 section-padding">
        <div className="container">
          <SectionHeader
            eyebrow="Education and capacity"
            title="Training students while growing the department"
            description="The academic plan combines regional capacity building with deliberate faculty growth, improved ratios, and stronger research output."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {educationTracks.map((track) => {
              const Icon = track.icon;

              return (
                <article
                  key={track.title}
                  className="rounded-lg border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold">{track.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {track.description}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm">
                    {track.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium text-secondary">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function IconCard({
  item,
  horizontal = false,
}: {
  item: IconItem;
  horizontal?: boolean;
}) {
  const Icon = item.icon;

  return (
    <article
      className={cn(
        'rounded-lg border border-border bg-card p-5 shadow-sm',
        horizontal && 'sm:flex sm:gap-4',
      )}
    >
      <div className={cn('mb-4 rounded-md p-2', item.tone, horizontal && 'sm:mb-0')}>
        <Icon className="size-5" />
      </div>
      <div>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </article>
  );
}
