import { useEffect, useMemo, useState } from "react";
import type { CSSProperties, HTMLAttributes } from "react";

type LightRaysProps = HTMLAttributes<HTMLDivElement> & {
  raysOrigin?: string;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export default function LightRays({
  className = "",
  style,
  raysOrigin = "top-center",
  raysColor = "#ffffff",
  raysSpeed = 1,
  lightSpread = 0.5,
  rayLength = 3,
  followMouse = false,
  mouseInfluence = 0.1,
  pulsating = false,
  fadeDistance = 1,
  saturation = 1,
  ...rest
}: LightRaysProps) {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!followMouse) return;

    const handleMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      setPointer({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [followMouse]);

  const origin = useMemo(() => {
    const normalized = raysOrigin.toLowerCase();
    if (normalized.includes("bottom")) return { x: 50, y: 100 };
    if (normalized.includes("center")) return { x: 50, y: 50 };
    return { x: 50, y: 0 };
  }, [raysOrigin]);

  const offsetX = followMouse ? (pointer.x - 0.5) * mouseInfluence * 100 : 0;
  const offsetY = followMouse ? (pointer.y - 0.5) * mouseInfluence * 100 : 0;

  const mergedStyle: CSSProperties = {
    ...style,
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 0,
  };

  const glowOpacity = clamp(0.15 + fadeDistance * 0.16, 0.15, 0.65);
  const spread = clamp(lightSpread * 100, 20, 90);
  const length = clamp(rayLength * 24, 24, 120);
  const hue = saturation > 1 ? `saturate(${saturation})` : "";

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={mergedStyle} {...rest}>
      <style>{`
        @keyframes light-rays-float {
          0% { transform: translate3d(-4%, -2%, 0) scale(1); opacity: 0.4; }
          100% { transform: translate3d(4%, 2%, 0) scale(1.08); opacity: 0.85; }
        }
        @keyframes light-rays-sweep {
          0% { transform: translateX(-24%) rotate(3deg); opacity: 0.2; }
          100% { transform: translateX(24%) rotate(-3deg); opacity: 0.65; }
        }
      `}</style>

      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at ${origin.x + offsetX}% ${origin.y + offsetY}%, ${raysColor} 0%, transparent ${Math.max(24, 58 - fadeDistance * 12)}%)`,
          filter: `blur(${length}px) ${hue}`.trim(),
          opacity: glowOpacity,
          transform: pulsating ? "scale(1.05)" : "scale(1)",
          animation: pulsating ? "light-rays-float 7s ease-in-out infinite alternate" : "none",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${raysColor}${Math.round(0.18 * 255).toString(16).padStart(2, "0")} 25%, transparent ${Math.max(45, 70 - fadeDistance * 10)}%)`,
          transform: `translateX(-${spread}%) rotate(6deg)`,
          animation: `light-rays-sweep ${Math.max(4, 10 - raysSpeed * 2)}s ease-in-out infinite alternate`,
          opacity: 0.35,
          mixBlendMode: "screen",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${raysColor}${Math.round(0.12 * 255).toString(16).padStart(2, "0")} 25%, transparent ${Math.max(45, 78 - fadeDistance * 10)}%)`,
          transform: `translateX(${spread}%) rotate(-7deg)`,
          animation: `light-rays-sweep ${Math.max(4, 10 - raysSpeed * 2)}s ease-in-out infinite alternate reverse`,
          opacity: 0.25,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
