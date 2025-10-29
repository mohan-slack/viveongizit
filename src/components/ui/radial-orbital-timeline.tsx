import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  centerImage?: string;
}

export default function RadialOrbitalTimeline({
  timelineData,
  centerImage,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = window.innerWidth < 768 ? 120 : 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "bg-primary text-primary-foreground border-primary";
      case "in-progress":
        return "bg-secondary text-secondary-foreground border-secondary";
      case "pending":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden py-12 md:py-0"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-[600px] md:h-screen flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Center Ring */}
          <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full border border-primary/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-28 h-28 md:w-32 md:h-32 rounded-full border border-primary/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            {centerImage ? (
              <img src={centerImage} alt="Smart Ring" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover" />
            ) : (
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card backdrop-blur-md"></div>
            )}
          </div>

          {/* Orbit Circle */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full border border-border/20"></div>

          {/* Feature Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`}
                  style={{
                    background: `radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                {/* Node Circle */}
                <div
                  className={`
                  w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                  ${isExpanded ? "bg-primary text-primary-foreground" : isRelated ? "bg-secondary text-secondary-foreground" : "bg-card text-foreground"}
                  border-2 
                  ${isExpanded ? "border-primary shadow-lg shadow-primary/30" : isRelated ? "border-secondary animate-pulse" : "border-border"}
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125 md:scale-150" : ""}
                `}
                >
                  <Icon size={16} className="md:size-5" />
                </div>

                {/* Node Title */}
                <div
                  className={`
                  absolute top-12 md:top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-[10px] md:text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-foreground scale-110 md:scale-125" : "text-muted-foreground"}
                `}
                >
                  {item.title}
                </div>

                {/* Expanded Card */}
                {isExpanded && (
                  <Card className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 w-56 md:w-64 bg-card/95 backdrop-blur-lg border-border shadow-xl overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-border"></div>
                    <CardHeader className="pb-2 p-3 md:p-6">
                      <div className="flex justify-between items-center gap-2">
                        <Badge className={`px-2 text-[10px] md:text-xs ${getStatusStyles(item.status)}`}>
                          {item.status === "completed" ? "ACTIVE" : item.status === "in-progress" ? "FEATURED" : "AVAILABLE"}
                        </Badge>
                        <span className="text-[10px] md:text-xs font-mono text-muted-foreground">{item.date}</span>
                      </div>
                      <CardTitle className="text-xs md:text-sm mt-2">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-[10px] md:text-xs text-muted-foreground p-3 md:p-6 pt-0">
                      <p>{item.content}</p>

                      <div className="mt-3 md:mt-4 pt-3 border-t border-border">
                        <div className="flex justify-between items-center text-[10px] md:text-xs mb-1">
                          <span className="flex items-center">
                            <Zap size={10} className="mr-1" />
                            Priority Level
                          </span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${item.energy}%` }}></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 md:mt-4 pt-3 border-t border-border">
                          <div className="flex items-center mb-2">
                            <LinkIcon size={10} className="text-muted-foreground mr-1" />
                            <h4 className="text-[10px] md:text-xs uppercase tracking-wider font-medium text-muted-foreground">Related Features</h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 py-0 text-[10px] md:text-xs"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
