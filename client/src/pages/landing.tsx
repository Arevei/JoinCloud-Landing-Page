import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Download, Folder, Share2, Shield, Lock, Zap, HardDrive, Globe, Monitor, Send, CheckCircle, Clock, Sparkles, Link2, UserX, Wifi, Bell } from "lucide-react";
import joincloudLogo from "/joincloud-logo.png";

function Header({ onWindowsClick }: { onWindowsClick: () => void }) {
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
        scrolled ? "bg-card/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={joincloudLogo} alt="JoinCloud" className="h-8 w-auto object-contain" />
          <span className="text-xl font-semibold text-foreground">JoinCloud</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            data-testid="link-features"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            data-testid="link-how-it-works"
          >
            How It Works
          </a>
          <a
            href="#feedback"
            className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            data-testid="link-feedback"
          >
            Feedback
          </a>
        </nav>
        <Button asChild data-testid="button-download-header" onClick={onWindowsClick}>
          <div className=" flex ">
            <Download className="w-4 h-4 mr-2" />
            Download Beta
          </div>
        </Button>
      </div>
    </header>
  );
}

function Hero({ onWindowsClick }: { onWindowsClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(47, 183, 255, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
          Share Files Directly From Your System Using a Link.
          <br />
          <span className="text-primary">No Third-Party Storage Needed.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          A Personal Cloud Network, Powered by your own device.
        </p>
        <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10">
          Only the sender needs to install JoinCloud. Receivers access shared files through a browser, no installation required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="text-base px-10" onClick={onWindowsClick}  data-testid="button-download-cta-macos">
            <div className="flex">
              <Download className="w-5 h-5 mr-2" />
              Download for macOS
            </div>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8"
            data-testid="button-download-windows"
            onClick={onWindowsClick}
          >
            <Download className="w-5 h-5 mr-2" />
            Download for Windows
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Fast. Secure. In your control.</p>
        <div className="mt-8 p-4 rounded-md bg-primary/10 border border-primary/20 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">First 1,000 beta users get 1 year free access to all paid features!</span>
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
      title: "Fast",
      description: "Files are transferred directly without cloud uploads. No middleman slowing you down.",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Files remain on your system and are shared only when you allow it.",
    },
    {
      icon: HardDrive,
      title: "Full Control",
      description: "You decide what to share, when to share, and when to stop sharing.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What is JoinCloud?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            JoinCloud turns your system into a personal cloud node. Instead of uploading files to third-party cloud services, share files directly from your machine using a generated link.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border hover-elevate transition-all duration-200" data-testid={`benefit-${index + 1}`}>
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
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
      icon: Download,
      title: "Sender-Only Installation",
      description: "Only the person sharing files needs JoinCloud installed. Receivers can download files using a browser link.",
    },
    {
      icon: HardDrive,
      title: "Local Cloud Creation",
      description: "Install JoinCloud on the system you want to use as the cloud. Your system acts as the file host.",
    },
    {
      icon: Link2,
      title: "Link-Based File Sharing",
      description: "Generate a share link for any file or folder. Copy the full link to access files, or copy the host link (e.g. https://0.0.0.0:8080) to access the cloud from a different device on the same network.",
    },
    {
      icon: UserX,
      title: "No Signup or Account Required",
      description: "No login, no user binding. Install only if you want to share files from your own system.",
    },
    {
      icon: Wifi,
      title: "Local Network Optimized",
      description: "Designed for same-network usage. Works even when internet connectivity is limited or unavailable.",
    },
    {
      icon: Lock,
      title: "Secure Transfers",
      description: "Files remain on your system and are only served when you explicitly share them.",
    },
  ];

  const comingSoonFeatures = [
    {
      icon: Globe,
      title: "Global Sharing",
      description: "Share files with anyone, anywhere in the world, not just on your local network.",
    },
    {
      icon: Monitor,
      title: "Web-Based Access",
      description: "Remotely control your personal cloud from any browser. Access your files from anywhere.",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            v0.3.1 Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to share files securely and efficiently
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Available Now</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover-elevate transition-all duration-200" data-testid={`feature-available-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-2">{feature.title}</h4>
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
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Coming Soon</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {comingSoonFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border-border border-dashed opacity-80" data-testid={`feature-coming-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-amber-500/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-2">{feature.title}</h4>
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

function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "Install and start JoinCloud",
      description: "Download and install on your Mac or Windows PC. Only the sender needs the app.",
    },
    {
      icon: Folder,
      title: "Select a file or folder to share",
      description: "Choose what you want to share. Your files stay exactly where they are on your system.",
    },
    {
      icon: Link2,
      title: "JoinCloud generates a share link",
      description: "A unique link is created for your selected files. No upload needed.",
    },
    {
      icon: Share2,
      title: "Share the link with another user",
      description: "Send the link to anyone via chat, email, or any messaging app.",
    },
    {
      icon: Globe,
      title: "Receiver opens and downloads",
      description: "The receiver opens the link in their browser and downloads the file directly from your system.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Five simple steps to start sharing files directly from your device
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border hover-elevate transition-all duration-200" data-testid={`card-step-${index + 1}`}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-3xl font-bold text-primary mb-2 block">{index + 1}</span>
                <h3 className="text-base font-medium text-foreground mb-2">{step.title}</h3>
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
    "Technology should stay invisible to the user",
    "The first successful file transfer matters most",
    "File sharing should be fast and frictionless",
    "Users should retain ownership and control of their data",
  ];

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <Shield className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Our Design Philosophy
        </h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {principles.map((principle, index) => (
            <div key={index} className="flex items-center gap-3 text-left p-4 rounded-md border border-border/50">
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
  const { toast } = useToast();

  const feedbackMutation = useMutation({
    mutationFn: async (data: { message: string; name?: string; email?: string }) => {
      const response = await apiRequest("POST", "/api/feedback", data);
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
    });
  };

  return (
    <section id="feedback" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Let's Explore and Create Something Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Your feedback, our expertise. Share your thoughts openly, no account needed, no strings attached.
          </p>
        </div>

        <Card className="bg-card border-border">
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
                  className="resize-none"
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
                    data-testid="input-feedback-email"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
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
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const waitlistMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; profession: string; phone?: string }) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
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
      setPhone("");
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
      phone: phone.trim() || undefined,
    });
  };

  return (
    <section id="waitlist" className="py-24 px-6" ref={waitlistRef as React.Ref<HTMLElement>}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Bell className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Get Notified When Windows is Available
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            JoinCloud for Windows is coming soon. Join the waitlist and be the first to know when it launches.
          </p>
        </div>

        <Card className="bg-card border-border">
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
                  data-testid="input-waitlist-email"
                  required
                />
              </div>

              <div>
                <label htmlFor="waitlist-profession" className="block text-sm font-medium text-foreground mb-2">
                  Profession <span className="text-primary">*</span>
                </label>
                <Select value={profession} onValueChange={setProfession}>
                  <SelectTrigger data-testid="select-waitlist-profession">
                    <SelectValue placeholder="Select your profession" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Creator">Creator</SelectItem>
                    <SelectItem value="Working Professional">Working Professional</SelectItem>
                    <SelectItem value="Video Editor">Video Editor</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="waitlist-phone" className="block text-sm font-medium text-muted-foreground mb-2">
                  Phone Number <span className="text-muted-foreground/50">(optional)</span>
                </label>
                <Input
                  id="waitlist-phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  data-testid="input-waitlist-phone"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
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

function DownloadSection({ onWindowsClick }: { onWindowsClick: () => void }) {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Ready to take control of your files?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Download JoinCloud and start sharing files directly from your device. Only you need to install it, receivers just use a browser link.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button size="lg" className="text-base px-10" onClick={onWindowsClick}  data-testid="button-download-cta-macos">
            <div className="flex">
              <Download className="w-5 h-5 mr-2" />
              Download for macOS
            </div>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-10"
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
            <span className="text-amber-500">v0.3.1 Beta</span>
          </div>
          <span className="text-muted-foreground/50">&bull;</span>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Windows</span>
            <span className="text-amber-500">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={joincloudLogo} alt="JoinCloud" className="h-6 w-auto object-contain" />
            <span className="text-lg font-semibold text-foreground">JoinCloud</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              data-testid="link-terms"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
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
    <div className="min-h-screen bg-background">
      <Header onWindowsClick={handleWindowsClick}/>
      <main>
        <Hero onWindowsClick={handleWindowsClick} />
        <CoreBenefits />
        <Features />
        <HowItWorks />
        <DesignPhilosophy />
        <FeedbackSection />
        <WaitlistSection waitlistRef={waitlistRef} />
        <DownloadSection onWindowsClick={handleWindowsClick} />
      </main>
      <Footer />
    </div>
  );
}
