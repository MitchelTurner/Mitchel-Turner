type IconProps = {
  className?: string
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 8.4V6.9c0-.6.4-.9.9-.9H17V3.6h-2.1C12.4 3.6 11 5 11 7.2v1.2H9v2.6h2V20h2.7v-9h2.2l.4-2.6h-2.6z"
      />
    </svg>
  )
}
