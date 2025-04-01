
import { Briefcase, Cpu, Settings } from 'lucide-react';
import React from 'react';

export const getRoleColor = (role: string) => {
  switch (role) {
    case "CEO": return "from-viveon-red via-viveon-red/50 to-transparent";
    case "CTO": return "from-viveon-neon-blue via-viveon-neon-blue/50 to-transparent";
    case "COO": return "from-viveon-neon-purple via-viveon-neon-purple/50 to-transparent";
    default: return "from-viveon-red via-viveon-red/50 to-transparent";
  }
};

export const getGlowColor = (role: string) => {
  switch (role) {
    case "CEO": return "bg-viveon-red/20 text-viveon-red";
    case "CTO": return "bg-viveon-neon-blue/20 text-viveon-neon-blue";
    case "COO": return "bg-viveon-neon-purple/20 text-viveon-neon-purple";
    default: return "bg-viveon-red/20 text-viveon-red";
  }
};

export const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case "CEO": return "rgba(255, 58, 47, 0.2)";
    case "COO": return "rgba(155, 48, 255, 0.2)";
    case "CTO": return "rgba(0, 255, 255, 0.2)";
    default: return "rgba(255, 58, 47, 0.2)";
  }
};

export const getRoleTextColor = (role: string) => {
  switch (role) {
    case "CEO": return "#FF3A2F";
    case "COO": return "#9B30FF";
    case "CTO": return "#00FFFF";
    default: return "#FF3A2F";
  }
};

export const getRoleIcon = (role: string) => {
  switch (role) {
    case "CEO":
      return <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-viveon-red" />;
    case "CTO":
      return <Cpu className="h-6 w-6 md:h-8 md:w-8 text-viveon-neon-blue" />;
    case "COO":
      return <Settings className="h-6 w-6 md:h-8 md:w-8 text-viveon-neon-purple" />;
    default:
      return <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-viveon-red" />;
  }
};
