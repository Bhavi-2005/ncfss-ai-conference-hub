import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Network, Factory } from "lucide-react";

const topicCategories = [
  {
    icon: Cpu,
    title: "Core AI Evolution & Architectures",
    topics: [
      "Agentic AI",
      "Multi-Agent Systems",
      "Explainable AI",
      "Small Language Models",
      "Neuro-Symbolic AI",
      "Self-Evolving Algorithms",
    ],
  },
  {
    icon: Network,
    title: "Smart Infrastructure & Edge Intelligence",
    topics: [
      "Cognitive Digital Twins",
      "6G-Enabled AI Networks",
      "Self-Healing Infrastructure",
      "Swarm Intelligence",
    ],
  },
  {
    icon: Factory,
    title: "Industry-Specific Smart Solutions",
    topics: [
      "Precision Healthcare",
      "Smart Mobility 2.0",
      "Next-Gen Industrial Robotics",
      "Precision Agriculture",
    ],
  },
];

const Topics = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Conference <span className="text-primary">Topics</span>
          </h1>
          <p className="text-muted-foreground text-sm">Research areas for NCFSS-AI'26</p>
        </div>

        <div className="space-y-8 mb-12">
          {topicCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className="gradient-card rounded-2xl p-8 glow-border card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${ci * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-sm md:text-base font-bold text-primary uppercase tracking-wide">
                  {cat.title}
                </h2>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {cat.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-primary font-semibold uppercase tracking-wide mb-8">
          Note: Not limited to the above
        </p>

        <div className="text-center">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-full gradient-button px-8 py-3 text-sm font-semibold text-primary-foreground btn-glow"
          >
            Register Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topics;
