function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 50 30" aria-hidden="true">
      <path fill="currentColor" d="M0 0h6v24h12v6H0zM22 0h6v24h12v6H22z" />
      <path fill="var(--accent)" d="M44 24h6v6h-6z" />
    </svg>
  );
}

export default Logo;
