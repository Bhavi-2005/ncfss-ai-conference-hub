import { Link } from "react-router-dom";
import { BookOpen, Users, Lightbulb, Code, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const infoCards = [
  {
    icon: BookOpen,
    title: "Why Participate?",
    description: "Join NCFSS-AI'26 for an unforgettable experience in cutting-edge AI research and smart systems.",
  },
  {
    icon: Code,
    title: "Coding Excellence",
    description: "Showcase your programming skills in competitive coding challenges and technical presentations.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with researchers, faculty, and industry professionals from across the nation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Explore groundbreaking ideas in AI, smart systems, and future technologies.",
  },
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "1000+", label: "Alumni Network" },
  { value: "50+", label: "Research Papers" },
  { value: "16 Apr", label: "Conference Date" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Er. Perumal Manimekalai College of Engineering
          </p>
          <p className="mb-1 text-xs text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Approved by AICTE, New Delhi · Affiliated to Anna University, Chennai
          </p>
          <p className="mb-1 text-xs text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            Accredited by NAAC with 'A' Grade & NBA · AN AUTONOMOUS INSTITUTION
          </p>
          <p className="mb-6 text-xs text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Konerippalli, HOSUR - 635 117.
          </p>

          <div className="mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm font-semibold text-primary tracking-wider uppercase">
              Department of Computer Science and Engineering
            </p>
            <p className="mt-1 text-xs text-muted-foreground italic">Proudly presents</p>
          </div>

          <h2 className="mb-2 text-lg md:text-xl font-medium text-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            National Conference on Future of Smart Systems and AI
          </h2>

          <h1 className="mb-8 font-display text-5xl md:text-7xl font-black tracking-tight opacity-0 animate-fade-in-up glow-text" style={{ animationDelay: "0.6s" }}>
            <span className="text-foreground">NCFSS.</span>
            <span className="text-primary">Ai</span>
            <span className="text-foreground">'26</span>
          </h1>

          {/* Logo placeholder */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl glow-border bg-secondary/50 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <span className="text-xs text-muted-foreground">LOGO</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Link
              to="/guidelines"
              className="rounded-full border border-primary/30 bg-secondary px-8 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary/10 hover:border-primary btn-glow flex items-center gap-2"
            >
              Guidelines <ArrowRight size={16} />
            </Link>
            <Link
              to="/register"
              className="rounded-full gradient-button px-8 py-3 text-sm font-semibold text-primary-foreground btn-glow flex items-center gap-2"
            >
              Register <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs animate-bounce">
          Scroll for more
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-2 text-center font-display text-2xl md:text-3xl font-bold text-foreground">
            Why Participate?
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Join NCFSS-AI 2026 for an unforgettable experience
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card, i) => (
              <div
                key={card.title}
                className="gradient-card rounded-2xl p-6 glow-border card-hover opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-sm font-bold text-foreground">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-display text-2xl md:text-3xl font-bold text-foreground">
            About the Department
          </h2>
          <p className="mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The Computer Science and Engineering Department at Er. Perumal Manimekalai College of Engineering 
            is a hub of innovation and excellence. We nurture future technology leaders with state-of-the-art 
            facilities and experienced faculty.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="gradient-card rounded-2xl p-6 glow-border card-hover">
                <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 NCFSS-AI'26 · Er. Perumal Manimekalai College of Engineering · Department of Computer Science and Engineering
        </p>
      </footer>
    </div>
  );
};

export default Index;
