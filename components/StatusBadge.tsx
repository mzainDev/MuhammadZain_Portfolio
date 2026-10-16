import React from 'react';

interface StatusBadgeProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  variant = 'light',
  className = '',
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`
        inline-flex w-fit self-start items-center gap-2
        rounded-full border px-3.5 py-1.5
        font-mono text-[10px] font-bold uppercase tracking-[0.14em]
        whitespace-nowrap
        ${
          isDark
            ? 'border-white/10 bg-white/[0.04] text-gray-300'
            : 'border-black/10 bg-black/[0.03] text-[#111111]'
        }
        ${className}
      `}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>

      <span>Available for work</span>
    </div>
  );
};

export default StatusBadge;