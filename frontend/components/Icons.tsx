import type { ComponentProps } from "react";
type IconProps = ComponentProps<"svg">;

export const LockIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M9 11V8a3 3 0 0 1 6 0v3" />
  </svg>
);

export const UnlockIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M15 11V8a3 3 0 0 0-6 0" />
  </svg>
);

export const EyeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const EyeOffIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path d="M3 3l18 18" />
    <path d="M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 3-3c0-.4-.1-.8-.2-1.1" />
    <path d="M9.5 5.2A10.5 10.5 0 0 1 12 5c6.5 0 10 7 10 7a18.6 18.6 0 0 1-2.1 3.2" />
    <path d="M6.3 6.3A18.2 18.2 0 0 0 2 12s3.5 7 10 7a9.7 9.7 0 0 0 2.7-.4" />
  </svg>
);

export const CopyIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <rect x="2" y="2" width="13" height="13" rx="2" />
  </svg>
);

export const LoaderIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" opacity="0.25" fill="none" />
    <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="1.8" fill="none" />
  </svg>
);

export const ShieldIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const SparklesIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path d="M9 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" />
    <path d="M17 9l.6 2 .4.4 2 .6-2 .6-.4.4-.6 2-.6-2-.4-.4-2-.6 2-.6.4-.4.6-2Z" />
    <path d="M13 16l.5 1.5L15 18l-1.5.5L13 20l-.5-1.5L11 18l1.5-.5L13 16Z" />
  </svg>
);
