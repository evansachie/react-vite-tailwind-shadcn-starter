type LoadingStateProps = {
  message?: string;
  className?: string;
};

export function LoadingState({
  message = "Loading…",
  className,
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-lg border border-border bg-muted/30 p-8 text-center ${className ?? ""}`}
    >
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"
        aria-hidden
      />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
