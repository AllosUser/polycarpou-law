interface GoldDividerProps {
  className?: string;
  vertical?: boolean;
  width?: string;
}

export function GoldDivider({ className = "", vertical = false, width = "100%" }: GoldDividerProps) {
  if (vertical) {
    return (
      <div
        className={`gold-divider-v ${className}`}
        style={{ minHeight: "60px", alignSelf: "stretch" }}
      />
    );
  }
  return (
    <div
      className={`gold-divider ${className}`}
      style={{ width }}
    />
  );
}
