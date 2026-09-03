import { BatteryCharging, Building2, Factory, Home, LineChart, Settings2, ShieldCheck, SunMedium, Wrench } from "lucide-react";

export const stats = [
  { value: "25+", label: "Years experience" },
  { value: "520+", label: "Projects delivered" },
  { value: "84 MW", label: "Clean capacity installed" },
  { value: "14", label: "Regions supported" }
];

export const solutions = [
  {
    slug: "residential",
    title: "Residential Solar",
    label: "Homes",
    description: "Rooftop systems designed around household load, roof profile, safety, and long-term savings.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    icon: Home
  },
  {
    slug: "commercial",
    title: "Commercial Solar",
    label: "Business",
    description: "Reliable grid-tied solar for offices, campuses, retail assets, warehouses, and institutions.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    icon: Building2
  },
  {
    slug: "industrial",
    title: "Industrial Solar",
    label: "Large scale",
    description: "High-capacity solar plants built for factories and energy-intensive production environments.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    icon: Factory
  },
  {
    slug: "rooftop-solar",
    title: "Rooftop Solar",
    label: "Rooftops",
    description: "Structurally reviewed rooftop systems with efficient layouts and premium installation standards.",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80",
    icon: SunMedium
  },
  {
    slug: "solar-epc",
    title: "Solar EPC",
    label: "Turnkey",
    description: "Engineering, procurement, construction, approvals, commissioning, and handover under one team.",
    image: "https://images.unsplash.com/photo-1548613053-22087dd8edb8?auto=format&fit=crop&w=1200&q=80",
    icon: Settings2
  },
  {
    slug: "operations-maintenance",
    title: "Operations & Maintenance",
    label: "Care",
    description: "Monitoring, preventive service, performance audits, and lifecycle support for solar assets.",
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1200&q=80",
    icon: Wrench
  }
];

export const services = [
  { title: "Energy Audit", description: "Load analysis, tariff review, site feasibility, and ROI modeling.", icon: LineChart },
  { title: "System Design", description: "Engineering layouts, simulation, component selection, and yield forecasting.", icon: BatteryCharging },
  { title: "Approvals & EPC", description: "Utility coordination, procurement, installation, commissioning, and documentation.", icon: Settings2 },
  { title: "Lifecycle Care", description: "Remote monitoring, maintenance visits, safety checks, and performance reporting.", icon: ShieldCheck }
];

export const projects = [
  {
    slug: "aurelia-textiles-rooftop",
    title: "Aurelia Textiles Rooftop Plant",
    type: "Industrial rooftop",
    capacity: "2.4 MW",
    location: "Gujarat",
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1400&q=80",
    summary: "A high-yield rooftop installation supporting continuous production loads with measured daytime grid reduction."
  },
  {
    slug: "verdant-office-campus",
    title: "Verdant Office Campus",
    type: "Commercial",
    capacity: "780 kW",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1400&q=80",
    summary: "A clean-energy retrofit for a multi-building workplace campus with live generation dashboards."
  },
  {
    slug: "suryapath-villas",
    title: "Suryapath Villas Community",
    type: "Residential",
    capacity: "310 kW",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    summary: "Distributed rooftop solar designed for premium homes with backup-ready architecture."
  }
];

export const posts = [
  {
    slug: "how-to-evaluate-solar-roi",
    title: "How to Evaluate Solar ROI Beyond the Payback Period",
    date: "Aug 18, 2026",
    category: "Finance",
    excerpt: "A practical framework for comparing tariff savings, demand charges, degradation, and maintenance."
  },
  {
    slug: "commercial-rooftop-design-checklist",
    title: "A Commercial Rooftop Solar Design Checklist",
    date: "Jul 30, 2026",
    category: "Engineering",
    excerpt: "The site, structural, safety, and electrical details that shape a better solar project."
  },
  {
    slug: "om-matters-after-commissioning",
    title: "Why O&M Matters After Commissioning",
    date: "Jun 26, 2026",
    category: "Operations",
    excerpt: "Solar assets perform best when monitoring and maintenance are planned from day one."
  }
];

export const faqs = [
  ["How long does installation take?", "Residential systems often take 2-6 weeks from survey to commissioning. Commercial and industrial timelines depend on approvals, structure, procurement, and shutdown windows."],
  ["Do you handle approvals?", "Yes. Our EPC workflow includes documentation, utility coordination, safety compliance, and commissioning support."],
  ["What happens after handover?", "We provide monitoring, preventive maintenance, cleaning schedules, performance reporting, and service response support."],
  ["Can the website values be replaced with real company data?", "Yes. All headline metrics, projects, insights, and solution details are structured so real business data can be swapped in cleanly."]
];
