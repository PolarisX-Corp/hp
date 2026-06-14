import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Copy,
  Database,
  FileText,
  Flame,
  Globe,
  LayoutTemplate,
  Lightbulb,
  Link2,
  List,
  Mail,
  MessageSquareText,
  Search,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

// カテゴリ等で名前指定するアイコンの registry。
// （lucide-react 1.x では Twitter/Facebook/Linkedin が廃止のため、ブランド系は BrandIcon を使う）
const REGISTRY: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
  "bar-chart-3": BarChart3,
  "check-circle-2": CheckCircle2,
  "chevron-right": ChevronRight,
  clock: Clock,
  compass: Compass,
  copy: Copy,
  database: Database,
  "file-text": FileText,
  flame: Flame,
  globe: Globe,
  "layout-template": LayoutTemplate,
  lightbulb: Lightbulb,
  link: Link2,
  list: List,
  mail: Mail,
  "message-square-text": MessageSquareText,
  search: Search,
  sparkles: Sparkles,
  target: Target,
  users: Users,
};

export function Icon({
  name,
  size = 16,
  className,
  strokeWidth,
}: {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = REGISTRY[name];
  if (!Cmp) return null;
  return <Cmp size={size} className={className} strokeWidth={strokeWidth} aria-hidden />;
}
