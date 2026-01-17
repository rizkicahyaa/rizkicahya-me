type BentoGridProps = {
    children: React.ReactNode;
};

export default function BentoGrid({ children }: BentoGridProps) {
    return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">{children}</div>;
}

export function BentoItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={`h-full ${className || ""}`}>{children}</div>;
}
