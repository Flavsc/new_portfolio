import React from "react";
import "../../styles/components/ui/GlassCard.scss";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
    return <div className={`glass-card ${className}`}>{children}</div>;
};

export default GlassCard;
