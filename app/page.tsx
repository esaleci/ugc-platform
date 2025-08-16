"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Users, Palette, ArrowRight, Sparkles, Target, TrendingUp, Globe, Shield, Clock, MessageCircle, ChevronLeft, MessageSquare, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BrandDashboard } from "@/components/brand-dashboard";
import { CreatorDashboard } from "@/components/creator-dashboard";

const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Campaign Management",
      description: "Create and manage UGC campaigns with ease"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Creator Network",
      description: "Connect with talented content creators"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Track performance and measure ROI"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Content Creation",
      description: "High-quality UGC content for your brand"
    }
  ]

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Connect with creators worldwide"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Brand Safety",
      description: "Verified creators and content"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Turnaround",
      description: "Fast content delivery"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct Communication",
      description: "Seamless creator collaboration"
    }
  ]
  
interface TypewriterProps {
  text: string | string[];
  speed?: number;
  cursor?: string;
  loop?: boolean;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textArrayIndex] || "";

  useEffect(() => {
    if (!currentText) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < currentText.length) {
            setDisplayText((prev) => prev + currentText[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          } else if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex(0);
            setTextArrayIndex((prev) => (prev + 1) % textArray.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    currentText,
    loop,
    speed,
    deleteSpeed,
    delay,
    displayText,
    text,
  ]);

    return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">{cursor}</span>
    </span>
  );
}

interface AnimatedGradientBackgroundProps {
  startingGap?: number;
  Breathing?: boolean;
  gradientColors?: string[];
  gradientStops?: number[];
  animationSpeed?: number;
  breathingRange?: number;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
  topOffset?: number;
}

function AnimatedGradientBackground({
  startingGap = 125,
  Breathing = false,
  gradientColors = [
    "#0A0A0A",
    "#2979FF",
    "#FF80AB",
    "#FF6D00",
    "#FFD600",
    "#00E676",
    "#3D5AFE"
  ],
  gradientStops = [35, 50, 60, 70, 80, 90, 100],
  animationSpeed = 0.02,
  breathingRange = 5,
  containerStyle = {},
  topOffset = 0,
  containerClassName = "",
}: AnimatedGradientBackgroundProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrame: number;
    let width = startingGap;
    let directionWidth = 1;

    const animateGradient = () => {
      if (width >= startingGap + breathingRange) directionWidth = -1;
      if (width <= startingGap - breathingRange) directionWidth = 1;

      if (!Breathing) directionWidth = 0;
      width += directionWidth * animationSpeed;

      const gradientStopsString = gradientStops
        .map((stop, index) => `${gradientColors[index]} ${stop}%`)
        .join(", ");

      const gradient = `radial-gradient(${width}% ${width+topOffset}% at 50% 20%, ${gradientStopsString})`;

      if (containerRef.current) {
        containerRef.current.style.background = gradient;
      }

      animationFrame = requestAnimationFrame(animateGradient);
    };

    animationFrame = requestAnimationFrame(animateGradient);

    return () => cancelAnimationFrame(animationFrame);
  }, [startingGap, Breathing, gradientColors, gradientStops, animationSpeed, breathingRange, topOffset]);

    return (
    <motion.div
      key="animated-gradient-background"
      initial={{
        opacity: 0,
        scale: 1.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      className={`absolute inset-0 overflow-hidden ${containerClassName}`}
    >
      <div
        ref={containerRef}
        style={containerStyle}
        className="absolute inset-0 transition-transform"
      />
    </motion.div>
  );
}

interface HoverButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

function HoverButton({ 
  children, 
  onClick, 
  className = '', 
  disabled = false,
  glowColor = '#00ffc3',
  backgroundColor = '#111827',
  textColor = '#ffffff',
  hoverTextColor = '#67e8f9'
}: HoverButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setGlowPosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative inline-block px-8 py-4 border-none 
        cursor-pointer overflow-hidden transition-colors duration-300 
        text-xl rounded-lg z-10 font-sans
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      style={{
        backgroundColor: backgroundColor,
        color: isHovered ? hoverTextColor : textColor,
      }}
    >
      <div
        className={`
          absolute w-[200px] h-[200px] rounded-full opacity-50 pointer-events-none 
          transition-transform duration-400 ease-out -translate-x-1/2 -translate-y-1/2
          ${isHovered ? 'scale-120' : 'scale-0'}
        `}
        style={{
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
          background: `radial-gradient(circle, ${glowColor} 10%, transparent 70%)`,
          zIndex: 0,
        }}
      />
      
      <span className="relative z-10">{children}</span>
    </button>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <Card className="p-6 h-full bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:bg-white/15">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-white/20 text-white">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}

interface UserTypeSelectionProps {
  onSelect: (type: 'brand' | 'creator') => void;
}

function UserTypeSelection({ onSelect }: UserTypeSelectionProps) {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background ">
      <AnimatedGradientBackground 
        Breathing={true}
        gradientColors={["#0A0A0A", "#1a1a2e", "#16213e", "#0f3460"]}
        gradientStops={[20, 40, 70, 100]}
        startingGap={120}
        breathingRange={8}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <Typewriter
              text={["Welcome to", "UGC Creator", "Platform"]}
              speed={80}
              loop={true}
              className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Connect brands with creators. Create authentic content. Drive engagement.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl w-full"
        >
                    <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={() => onSelect('brand')}
          >
            <Card className="p-8 bg-card/20 backdrop-blur-md border-border/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl">
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">For Brands</h2>
                <p className="text-gray-300 leading-relaxed">
                  Find authentic creators, launch campaigns, and measure impact with our comprehensive brand dashboard.
                </p>
                <HoverButton
                  glowColor="#a855f7"
                  backgroundColor="rgba(168, 85, 247, 0.1)"
                  textColor="#c4b5fd"
                  hoverTextColor="#ffffff"
                  className="w-full"
                >
                  Get Started as Brand
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </HoverButton>
                </div>
            </Card>
          </motion.div>

                    <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={() => onSelect('creator')}
          >
            <Card className="p-8 bg-card/20 backdrop-blur-md border-border/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl">
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">For Creators</h2>
                <p className="text-gray-300 leading-relaxed">
                  Monetize your creativity, collaborate with top brands, and grow your audience with powerful creator tools.
                </p>
                <HoverButton
                  glowColor="#3b82f6"
                  backgroundColor="rgba(59, 130, 246, 0.1)"
                  textColor="#93c5fd"
                  hoverTextColor="#ffffff"
                  className="w-full"
                >
                  Join as Creator
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </HoverButton>
              </div>
            </Card>
          </motion.div>
        </motion.div>

<motion.div    initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col items-center justify-center  max-w-6xl w-full"
        >

       
<div className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-12">
 {/* Features Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
          ))}
        </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose Our Platform?</h2>
            <p className="text-muted-foreground">
              Join the leading UGC platform that connects brands with authentic creators.
              Create engaging content that resonates with your audience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-primary mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-x-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Platform Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <TrendingUp className="w-8 h-8" />
            </div>
          </div>
        </div>
        </div>
        </motion.div>
      </div>
                </div>

  );
}

function WhyChooseUs() {
  const platformFeatures = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Connect with creators worldwide and expand your brand's international presence."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Brand Safety",
      description: "Verified creators and content ensure your brand maintains its reputation and quality standards."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Turnaround",
      description: "Fast content delivery with streamlined workflows and efficient project management."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Direct Communication",
      description: "Seamless creator collaboration with built-in messaging and feedback tools."
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Experience the best-in-class features that make content creation and brand collaboration effortless
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
                </div>
                </div>
              </div>
  );
}

interface ProductIntroProps {
  userType: 'brand' | 'creator';
  onContinue: () => void;
  onBack: () => void;
}

function ProductIntro({ userType, onContinue, onBack }: ProductIntroProps) {
  const brandFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Campaign Management",
      description: "Create, manage, and track your UGC campaigns with advanced analytics and real-time insights."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Creator Discovery",
      description: "Find the perfect creators for your brand using our AI-powered matching algorithm."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track ROI, engagement rates, and conversion metrics across all your campaigns."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Content Library",
      description: "Organize and manage all your user-generated content in one centralized hub."
    }
  ];

  const creatorFeatures = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Tools",
      description: "Access professional editing tools and templates to create stunning content that brands love."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Earnings Dashboard",
      description: "Track your earnings, view payment history, and optimize your content strategy."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Brand Matching",
      description: "Get matched with brands that align with your niche and audience demographics."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Hub",
      description: "Connect with other creators, share tips, and collaborate on exciting projects."
    }
  ];

  const features = userType === 'brand' ? brandFeatures : creatorFeatures;
  const title = userType === 'brand' ? 'Brand Dashboard Features' : 'Creator Studio Features';
  const subtitle = userType === 'brand' 
    ? 'Everything you need to run successful UGC campaigns'
    : 'All the tools you need to monetize your creativity';

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background">
            <AnimatedGradientBackground 
        Breathing={true}
        gradientColors={userType === 'brand' 
          ? ["#0A0A0A", "#581c87", "#7c3aed", "#a855f7"]
          : ["#0A0A0A", "#1e3a8a", "#1e40af", "#2563eb"]
        }
        gradientStops={[20, 40, 70, 100]}
        startingGap={110}
        breathingRange={6}
      />
      
            <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-white hover:text-gray-300 hover:bg-white/10"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Selection
              </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {subtitle}
            </p>
            
          </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>

<div className="flex justify-center">
          <HoverButton
              onClick={onContinue}
              glowColor={userType === 'brand' ? ' #a855f7 ' : '#3b82f6'}
              backgroundColor={userType === 'brand' ? 'rgba(168, 85, 247, 0.1)' : 'rgba(59, 130, 246, 0.1)'}
              textColor={userType === 'brand' ? '#c4b5fd' : '#93c5fd'}
              hoverTextColor="#ffffff"
              className="text-lg px-12 py-4 "
            >
              Continue to Dashboard
              <ArrowRight className="inline ml-2 w-5 h-5 " />
            </HoverButton>
            </div>
                    <WhyChooseUs />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
                     
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function UGCCreatorPlatform() {
  const [currentStep, setCurrentStep] = useState<'selection' | 'intro' | 'dashboard'>('selection');
  const [userType, setUserType] = useState<'brand' | 'creator' | null>(null);
  const [dashboardType, setDashboardType] = useState<'brand' | 'creator' | null>(null);

  const handleUserTypeSelect = (type: 'brand' | 'creator') => {
    setUserType(type);
    setCurrentStep('intro');
  };

  const handleContinue = () => {
    setDashboardType(userType);
    // setCurrentStep('dashboard');
  };

  const handleBack = () => {
    if (currentStep === 'intro') {
      setCurrentStep('selection');
      setUserType(null);
    } else if (currentStep === 'dashboard') {
      setCurrentStep('intro');
    }
  };

  if (dashboardType === "brand") {
    return <BrandDashboard onBack={() => setDashboardType(null)} />
  }

  if (dashboardType === "creator") {
    return <CreatorDashboard onBack={() => setDashboardType(null)} />
  }

  return (
    <div className="relative ">
      <AnimatePresence mode="wait">
        {currentStep === 'selection' && (
          <motion.div
            key="selection"
            initial={{ opacity: 0 ,contain: "strict" }}
            animate={{ opacity: 1 ,contain: "content"}}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <UserTypeSelection onSelect={handleUserTypeSelect} />
          </motion.div>
        )}

        {currentStep === 'intro' && userType && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
                        <ProductIntro userType={userType} onContinue={handleContinue} onBack={handleBack} />
          </motion.div>
        )}

        {currentStep === 'dashboard' && userType && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background flex items-center justify-center"
          >
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold text-foreground">
                Welcome to your {userType === 'brand' ? 'Brand' : 'Creator'} Dashboard!
              </h1>
              <p className="text-muted-foreground text-lg">
                Your journey begins here. Start creating amazing content!
              </p>
              <Button onClick={handleBack} variant="outline">
                Go Back
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}

export default UGCCreatorPlatform;
