import {
  Baby,
  Bed,
  Building2,
  Car,
  Clock,
  Eye,
  Gem,
  GraduationCap,
  Headphones,
  HeartHandshake,
  Home,
  RefreshCw,
  Shield,
  ShieldCheck,
  Smile,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  eye: Eye,
  gem: Gem,
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  users: Users,
  clock: Clock,
  sparkles: Sparkles,
  baby: Baby,
  "heart-handshake": HeartHandshake,
  car: Car,
  shield: Shield,
  bed: Bed,
  "refresh-cw": RefreshCw,
  headphones: Headphones,
  home: Home,
  "building-2": Building2,
  smile: Smile,
};

type IconProps = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

export default function Icon({ name, className = "h-6 w-6", strokeWidth = 1.5 }: IconProps) {
  const LucideIconComponent = iconMap[name] ?? ShieldCheck;
  return <LucideIconComponent className={className} strokeWidth={strokeWidth} />;
}
