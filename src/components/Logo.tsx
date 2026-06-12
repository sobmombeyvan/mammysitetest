import Image from "next/image";

type LogoProps = {
  className?: string;
  compact?: boolean;
  light?: boolean;
};

export default function Logo({ className = "", compact = false, light = false }: LogoProps) {
  const height = compact ? 44 : 56;

  return (
    <div className={`flex items-center ${className}`}>
      <div
        className={`relative shrink-0 overflow-hidden ${
          light ? "rounded-lg bg-cream p-1.5" : ""
        }`}
        style={{ height, width: height * 1.46 }}
      >
        <Image
          src="/images/logo.jpg"
          alt="Ma'My House — Nous prenons soin de ce qui compte le plus"
          fill
          className="object-contain object-left"
          sizes={compact ? "64px" : "82px"}
          priority
        />
      </div>
    </div>
  );
}
