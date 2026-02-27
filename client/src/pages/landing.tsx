import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Download, Folder, Share2, Shield, Lock, Zap, HardDrive, Globe, Monitor, Send, CheckCircle, Clock, Sparkles, Link2, UserX, Wifi, Bell, Users, Smartphone, QrCode, FolderOpen, Eye } from "lucide-react";
import joincloudLogo from "/joincloud-logo.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface SpeedParticle {
  id: number;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  length: number;
}

function MouseSpeedEffect() {
  const [particles, setParticles] = useState<SpeedParticle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const particleIdRef = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const moveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newX = e.clientX;
    const newY = e.clientY;
    
    const deltaX = newX - lastMousePos.current.x;
    const deltaY = newY - lastMousePos.current.y;
    const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    setMousePos({ x: newX, y: newY });
    lastMousePos.current = { x: newX, y: newY };
    
    setIsMoving(true);
    
    if (moveTimeoutRef.current) {
      clearTimeout(moveTimeoutRef.current);
    }
    moveTimeoutRef.current = setTimeout(() => setIsMoving(false), 100);
    
    if (velocity > 3) {
      const newParticles: SpeedParticle[] = [];
      const particleCount = Math.min(Math.floor(velocity / 8), 4);
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: particleIdRef.current++,
          x: newX + (Math.random() - 0.5) * 30,
          y: newY - 20 - Math.random() * 15,
          speed: Math.round(50 + Math.random() * 450),
          opacity: 0.6 + Math.random() * 0.4,
          length: 20 + Math.random() * 30,
        });
      }
      
      setParticles(prev => [...prev.slice(-20), ...newParticles]);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, [handleMouseMove]);

  useEffect(() => {
    if (particles.length === 0) return;
    
    const cleanup = setTimeout(() => {
      setParticles(prev => prev.slice(1));
    }, 400);
    
    return () => clearTimeout(cleanup);
  }, [particles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999]">
      {isMoving && (
        <div
          className="absolute flex items-center gap-1 animate-pulse"
          style={{
            left: mousePos.x - 25,
            top: mousePos.y - 35,
            transition: "left 0.05s ease-out, top 0.05s ease-out",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M12 4L12 20M12 20L6 14M12 20L18 14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[10px] font-bold text-primary tabular-nums">
                {Math.round(100 + Math.random() * 400)} MB/s
              </span>
            </div>
          </div>
        </div>
      )}
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            animation: "speedFadeUp 0.4s ease-out forwards",
          }}
        >
          <div
            className="bg-gradient-to-b from-primary to-transparent rounded-full"
            style={{
              width: "2px",
              height: `${particle.length}px`,
              boxShadow: "0 0 6px rgba(47, 183, 255, 0.6)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
const MAC_DOWNLOAD_URL = "https://github.com/vinay-kumar-shakyawar/joincloud/releases/download/v0.3.4/JoinCloud-0.3.4.dmg";

function Header({ onMacClick, onWindowsClick }: { onMacClick: () => void; onWindowsClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-[#000A0D]/95 backdrop-blur-md border-b border-[#001C25]" : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={joincloudLogo} alt="JoinCloud" className="h-8 w-auto object-contain" />
          <span className="text-xl font-bold text-foreground">JoinCloud</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-muted-foreground hover:text-primary transition-colors duration-150 text-sm font-medium"
            data-testid="link-features"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-muted-foreground hover:text-primary transition-colors duration-150 text-sm font-medium"
            data-testid="link-how-it-works"
          >
            How It Works
          </a>
          <a
            href="#feedback"
            className="text-muted-foreground hover:text-primary transition-colors duration-150 text-sm font-medium"
            data-testid="link-feedback"
          >
            Feedback
          </a>
        </nav>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" data-testid="button-download-header" onClick={onMacClick}>
          <Download className="w-4 h-4 mr-2" />
          Download Beta
        </Button>
      </div>
    </header>
  );
}

function Hero({ onMacClick, onWindowsClick }: { onMacClick: () => void; onWindowsClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent opacity-60" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(47, 183, 255, 0.12) 0%, rgba(47, 183, 255, 0.04) 40%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 tracking-tight">
          Your Personal Cloud.
          <br />
          <span className="text-primary text-glow">Share Files at LAN Speed.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Turn your device into a high speed file sharing hub. Create Team Spaces, preview 4K content instantly, and collaborate without cloud uploads.
        </p>
        <p className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-10">
          Only you need JoinCloud installed. Share via link or QR code. Recipients preview or download directly from their browser.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" onClick={onMacClick} data-testid="button-download-cta-macos">
            <div className="flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download for macOS
            </div>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 border-border hover:bg-card hover:border-primary/50 text-foreground"
            data-testid="button-download-windows"
            onClick={onWindowsClick}
          >
            <Download className="w-5 h-5 mr-2" />
            Download for Windows
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Fast. Private. Easy to use.</p>
        <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30 max-w-md mx-auto glow-primary">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">First 1,000 beta users get free access to all future updates!</span>
          </div>
        </div>

        {/* App Screenshot with fade effect */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-[#001C25] shadow-2xl">
            <img 
              src="/app-screenshot.png" 
              alt="JoinCloud Application Interface" 
              className="w-full h-auto"
            />
            {/* Bottom fade overlay */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, #000405 100%)"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Direct LAN transfers at maximum speed. No uploads, no waiting. Share files instantly.",
    },
    {
      icon: Shield,
      title: "Completely Private",
      description: "Your files never touch third party servers. Everything stays on your device.",
    },
    {
      icon: HardDrive,
      title: "Total Control",
      description: "Manage your files, choose what to share, and revoke access anytime.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What is JoinCloud?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            JoinCloud transforms your device into a personal cloud. Share files at full LAN speed, collaborate with your team, and preview high resolution content directly in the browser. No uploads. No waiting.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#00080A] border-[#001C25] hover:border-primary/30 transition-all duration-200" data-testid={`benefit-${index + 1}`}>
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const availableFeatures = [
    {
      icon: Users,
      title: "Team Space Collaboration",
      description: "Create a shared workspace with nearby JoinCloud users. Share file links instantly and collaborate in real time with your team.",
    },
    {
      icon: Eye,
      title: "4K Preview Without Download",
      description: "Share high resolution files up to 4K and let recipients preview them directly in their browser. No download required.",
    },
    {
      icon: Smartphone,
      title: "Multi Device Access",
      description: "Open your cloud on any device. Access your files from smartphones, tablets, laptops, or any browser connected to your network.",
    },
    {
      icon: FolderOpen,
      title: "Built In File Manager",
      description: "Organize, upload, and manage all your files directly within JoinCloud. Keep your cloud storage clean and structured.",
    },
    {
      icon: QrCode,
      title: "QR Code Sharing",
      description: "Generate QR codes for instant access to files or your entire cloud. Perfect for quick sharing with nearby devices.",
    },
    {
      icon: Link2,
      title: "One Click Link Sharing",
      description: "Generate shareable links for any file or folder. Recipients can view or download instantly through their browser.",
    },
    {
      icon: UserX,
      title: "No Signup Required",
      description: "Download and start using immediately. Free trial with no limits and no credit card required.",
    },
    {
      icon: Wifi,
      title: "High Speed LAN Transfers",
      description: "Optimized for local network performance. Transfer large files at maximum speed without internet dependency.",
    },
    {
      icon: Lock,
      title: "Private and Secure",
      description: "Your files never leave your device. Share only what you choose, when you choose, with complete control.",
    },
  ];

  const comingSoonFeatures = [
    {
      icon: Globe,
      title: "Global Sharing",
      description: "Share files with anyone, anywhere in the world. Access your cloud beyond your local network.",
    },
    {
      icon: Monitor,
      title: "Remote Cloud Access",
      description: "Control your personal cloud from any browser, anywhere. Full access to your files from any location.",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-[#00080A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            v0.3.4 Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools for seamless file sharing and team collaboration
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/30 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-[#22C55E]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Available Now</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableFeatures.map((feature, index) => (
              <Card key={index} className="bg-[#000405] border-[#001C25] hover:border-primary/30 transition-all duration-200" data-testid={`feature-available-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/30 flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Coming Soon</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {comingSoonFeatures.map((feature, index) => (
              <Card key={index} className="bg-[#000405] border-[#001C25] border-dashed opacity-80" data-testid={`feature-coming-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/20 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-[#F59E0B]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppShowcase() {
  const showcaseItems = [
    {
      image: "/screenshot-devices.png",
      title: "Device Management",
      subtitle: "Control Access to Your Cloud",
      description: "Approve and manage devices that connect to your JoinCloud. See connection history, revoke access instantly, and keep your files secure with complete visibility over who can access your cloud.",
    },
    {
      image: "/screenshot-teams.png",
      title: "Team Spaces",
      subtitle: "Collaborate in Real Time",
      description: "Create dedicated spaces for your team. Share files, send messages, and collaborate instantly with peers on your local network. Perfect for offices, studios, and creative teams.",
    },
    {
      image: "/screenshot-shares.png",
      title: "Link Sharing",
      subtitle: "Share with One Click",
      description: "Generate shareable links for any file or folder. Copy the link, scan the QR code, or share directly. Recipients can preview and download without installing anything.",
    },
    {
      image: "/screenshot-network.png",
      title: "Network Discovery",
      subtitle: "Connect Seamlessly",
      description: "Automatically discover nearby JoinCloud users on your network. Connect manually via IP address or let mDNS find peers for you. See all connected devices at a glance.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See JoinCloud in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A powerful yet intuitive interface designed for seamless file sharing and collaboration.
          </p>
        </div>
        
        <div className="space-y-24">
          {showcaseItems.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              <div className="flex-1 w-full">
                <div className="relative rounded-xl overflow-hidden border border-[#001C25] shadow-2xl">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(47, 183, 255, 0.05) 0%, transparent 50%)"
                    }}
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "Install JoinCloud",
      description: "Download and launch in seconds. Only you need the app installed.",
    },
    {
      icon: Folder,
      title: "Choose Your Files",
      description: "Select any file or folder. Your data stays on your device.",
    },
    {
      icon: Link2,
      title: "Get Your Link",
      description: "Instantly generate a shareable link or QR code.",
    },
    {
      icon: Share2,
      title: "Share Anywhere",
      description: "Send via chat, email, or scan with any device.",
    },
    {
      icon: Globe,
      title: "Access Instantly",
      description: "Recipients preview or download directly from your device.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From install to sharing in under a minute. It's that simple.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-[#00080A] border-[#001C25] hover:border-primary/30 transition-all duration-200" data-testid={`card-step-${index + 1}`}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-3xl font-bold text-primary mb-2 block">{index + 1}</span>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignPhilosophy() {
  const principles = [
    "Simple and intuitive. Upload, share, and access in seconds.",
    "Built for speed. Transfer files at full LAN bandwidth.",
    "Your data stays yours. No third party servers, no compromises.",
    "Works everywhere. Access from any device on your network.",
  ];

  return (
    <section className="py-24 px-6 bg-[#00080A]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-8">
          <Shield className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Built for Simplicity
        </h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {principles.map((principle, index) => (
            <div key={index} className="flex items-center gap-3 text-left p-4 rounded-xl border border-[#001C25] bg-[#000405] hover:border-primary/30 transition-colors">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <p className="text-lg text-muted-foreground">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeedbackSection() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const { toast } = useToast();

  const feedbackMutation = useMutation({
    mutationFn: async (data: { message: string; name?: string; email?: string; phone?: string }) => {
      const additionalDetails: Record<string, any> = {
        feedback: data.message
      };
      
      if (data.phone) {
        additionalDetails.phone = data.phone;
      }

      const payload = {
        name: data.name || "Anonymous",
        email: {
          primaryEmail: data.email || "no-email@feedback.local",
          additionalEmails: null
        },
        websiteSource: ["JOINCLOUD_IN"],
        additionalDetails
      };

      const response = await fetch("https://twenty.joincloud.in/rest/webformleads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_TWENTY_API_TOKEN}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you!",
        description: "Your feedback has been submitted. We appreciate your input!",
      });
      setMessage("");
      setName("");
      setEmail("");
      setPhone(undefined);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    feedbackMutation.mutate({
      message: message.trim(),
      name: name.trim() || undefined,
      email: email.trim() || undefined,
      phone: phone || undefined,
    });
  };

  return (
    <section id="feedback" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Help Us Build the Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Your feedback shapes JoinCloud. Share your thoughts and ideas with us. No account needed.
          </p>
        </div>

        <Card className="bg-[#00080A] border-[#001C25]">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="feedback-message" className="block text-sm font-medium text-foreground mb-2">
                  Your Feedback <span className="text-primary">*</span>
                </label>
                <Textarea
                  id="feedback-message"
                  placeholder="Share your ideas, suggestions, or thoughts with us..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="resize-none bg-[#000405] border-[#001C25] focus:border-primary"
                  data-testid="input-feedback-message"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="feedback-name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name <span className="text-muted-foreground/50">(optional)</span>
                  </label>
                  <Input
                    id="feedback-name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#000405] border-[#001C25] focus:border-primary"
                    data-testid="input-feedback-name"
                  />
                </div>
                <div>
                  <label htmlFor="feedback-email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email <span className="text-muted-foreground/50">(optional)</span>
                  </label>
                  <Input
                    id="feedback-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#000405] border-[#001C25] focus:border-primary"
                    data-testid="input-feedback-email"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                disabled={!message.trim() || feedbackMutation.isPending}
                data-testid="button-submit-feedback"
              >
                {feedbackMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Feedback
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function WaitlistSection({ waitlistRef }: { waitlistRef: React.RefObject<HTMLDivElement | null> }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const { toast } = useToast();

  const waitlistMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; profession: string; phone?: string }) => {
      const additionalDetails: Record<string, any> = {
        profession: data.profession
      };
      
      if (data.phone) {
        additionalDetails.phone = data.phone;
      }

      const payload = {
        name: data.name,
        email: {
          primaryEmail: data.email,
          additionalEmails: null
        },
        websiteSource: ["JOINCLOUD_IN"],
        additionalDetails
      };

      const response = await fetch("https://twenty.joincloud.in/rest/webformleads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_TWENTY_API_TOKEN}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when JoinCloud for Windows is available.",
      });
      setName("");
      setEmail("");
      setProfession("");
      setPhone(undefined);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !profession) return;
    waitlistMutation.mutate({
      name: name.trim(),
      email: email.trim(),
      profession,
      phone: phone || undefined,
    });
  };

  return (
    <section id="waitlist" className="py-24 px-6" ref={waitlistRef as React.Ref<HTMLElement>}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <Bell className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Notified When Windows is Available
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            JoinCloud for Windows is coming soon. Join the waitlist and be the first to know when it launches.
          </p>
        </div>

        <Card className="bg-[#00080A] border-[#001C25]">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="waitlist-name" className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <Input
                  id="waitlist-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#000405] border-[#001C25] focus:border-primary"
                  data-testid="input-waitlist-name"
                  required
                />
              </div>

              <div>
                <label htmlFor="waitlist-email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#000405] border-[#001C25] focus:border-primary"
                  data-testid="input-waitlist-email"
                  required
                />
              </div>

              <div>
                <label htmlFor="waitlist-profession" className="block text-sm font-medium text-foreground mb-2">
                  Profession <span className="text-primary">*</span>
                </label>
                <Select value={profession} onValueChange={setProfession}>
                  <SelectTrigger className="bg-[#000405] border-[#001C25]" data-testid="select-waitlist-profession">
                    <SelectValue placeholder="Select your profession" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#00080A] border-[#001C25]">
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Creator">Creator</SelectItem>
                    <SelectItem value="Working Professional">Working Professional</SelectItem>
                    <SelectItem value="Video Editor">Video Editor</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                disabled={!name.trim() || !email.trim() || !profession || waitlistMutation.isPending}
                data-testid="button-submit-waitlist"
              >
                {waitlistMutation.isPending ? (
                  "Joining..."
                ) : (
                  <>
                    <Bell className="w-4 h-4 mr-2" />
                    Join the Waitlist
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


function DownloadSection({ onMacClick, onWindowsClick }: { onMacClick: () => void; onWindowsClick: () => void }) {
  return (
    <section className="py-24 px-6 bg-[#00080A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Start Sharing in Seconds
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Download JoinCloud and turn your device into a personal cloud. Share files instantly with anyone on your network.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button size="lg" className="text-base px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" onClick={onMacClick} data-testid="button-download-cta-macos">
            <div className="flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download for macOS
            </div>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-10 border-[#001C25] hover:bg-[#00080A] hover:border-primary/50 text-foreground"
            data-testid="button-download-cta-windows"
            onClick={onWindowsClick}
          >
            <Download className="w-5 h-5 mr-2" />
            Download for Windows
          </Button>
        </div>
        <div className="flex items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">macOS</span>
            <span className="text-[#22C55E]">v0.3.4 Beta</span>
          </div>
          <span className="text-muted-foreground/50">&bull;</span>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Windows</span>
            <span className="text-[#F59E0B]">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#000A0D] border-t border-[#001C25]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={joincloudLogo} alt="JoinCloud" className="h-6 w-auto object-contain" />
            <span className="text-lg font-bold text-foreground">JoinCloud</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors duration-150"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors duration-150"
              data-testid="link-terms"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-150"
              data-testid="link-support"
            >
              Support
            </a>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JoinCloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  const waitlistRef = useRef<HTMLDivElement | null>(null);
  const { toast } = useToast();

  const handleMacClick = () => {
    window.open(MAC_DOWNLOAD_URL, "_blank");
  };

  const handleWindowsClick = () => {
    toast({
      title: "Coming Soon",
      description: "JoinCloud for Windows is not available yet. Join the waitlist below to get notified!",
    });
    setTimeout(() => {
      waitlistRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background grain-bg">
      <MouseSpeedEffect />
      <Header onMacClick={handleMacClick} onWindowsClick={handleWindowsClick}/>
      <main>
        <Hero onMacClick={handleMacClick} onWindowsClick={handleWindowsClick} />
        <CoreBenefits />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <DesignPhilosophy />
        <FeedbackSection />
        <WaitlistSection waitlistRef={waitlistRef} />
        <DownloadSection onMacClick={handleMacClick} onWindowsClick={handleWindowsClick} />
      </main>
      <Footer />
    </div>
  );
}
