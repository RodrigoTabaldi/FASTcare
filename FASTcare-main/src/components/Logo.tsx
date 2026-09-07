interface Props { size?: number; color?: string; }

export default function Logo({ size = 34, color = "var(--tinta)" }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="15" cy="20" r="11" stroke={color} strokeWidth="2.4" />
      <circle cx="25" cy="20" r="11" stroke={color} strokeWidth="2.4" />
      <circle cx="20" cy="20" r="3" fill="var(--gold)" />
    </svg>
  );
}
