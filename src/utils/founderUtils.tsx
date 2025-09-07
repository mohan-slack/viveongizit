
import { Briefcase, Cpu, Settings } from 'lucide-react';
import React from 'react';

export const getRoleColor = (role: string) => {
  switch (role) {
    case "👨‍💼": return "from-viveon-red via-viveon-red/50 to-transparent";
    case "👨‍🔬": return "from-viveon-neon-blue via-viveon-neon-blue/50 to-transparent";
    case "🧑‍💻": return "from-viveon-neon-purple via-viveon-neon-purple/50 to-transparent";
    default: return "from-viveon-red via-viveon-red/50 to-transparent";
  }
};

export const getGlowColor = (role: string) => {
  switch (role) {
    case "👨‍💼": return "bg-viveon-red/20 text-viveon-red";
    case "👨‍🔬": return "bg-viveon-neon-blue/20 text-viveon-neon-blue";
    case "🧑‍💻": return "bg-viveon-neon-purple/20 text-viveon-neon-purple";
    default: return "bg-viveon-red/20 text-viveon-red";
  }
};

export const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case "👨‍💼": return "rgba(255, 58, 47, 0.2)";
    case "🧑‍💻": return "rgba(155, 48, 255, 0.2)";
    case "👨‍🔬": return "rgba(0, 255, 255, 0.2)";
    default: return "rgba(255, 58, 47, 0.2)";
  }
};

export const getRoleTextColor = (role: string) => {
  switch (role) {
    case "👨‍💼": return "#FF3A2F";
    case "🧑‍💻": return "#9B30FF";
    case "👨‍🔬": return "#00FFFF";
    default: return "#FF3A2F";
  }
};

export const getRoleIcon = (role: string) => {
  switch (role) {
    case "👨‍💼":
      return <span className="text-2xl">👨‍💼</span>;
    case "👨‍🔬":
      return <span className="text-2xl">👨‍🔬</span>;
    case "🧑‍💻":
      return <span className="text-2xl">🧑‍💻</span>;
    default:
      return <span className="text-2xl">👨‍💼</span>;
  }
};
