export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}

export function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      fill="none"
      className={className}
    >
      <path
        d="M21 31C15.477 31 11 35.477 11 41V159C11 164.523 15.477 169 21 169H179C184.523 169 189 164.523 189 159V61.361C189 55.838 184.523 51.361 179 51.361H84.081C83.022 51.361 82.006 50.94 81.256 50.192L64.947 33.921C63.072 32.05 60.532 31 57.884 31H21Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
