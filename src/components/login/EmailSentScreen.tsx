import type { ReactNode } from 'react'
import { AuthCard } from './AuthCard.js'

export function EmailSentScreen({
  icon,
  message,
  note,
  logo,
  onBack,
}: {
  icon: string
  message: ReactNode
  note?: ReactNode
  logo?: ReactNode
  onBack: () => void
}) {
  return (
    <AuthCard logo={logo} center>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: 'var(--color-bg-success-tertiary)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto calc(var(--spacer-3) * 1.5)',
          fontSize: '28px',
        }}
      >
        {icon}
      </div>

      <h1
        style={{
          color: 'var(--color-text)',
          fontSize: 'var(--text-heading-large-font-size)',
          fontWeight: 600,
          margin: '0 0 calc(var(--spacer-3) * 0.5) 0',
        }}
      >
        Check Your Email
      </h1>

      <p
        style={{
          color: 'var(--color-text)',
          opacity: 0.7,
          fontSize: 'var(--text-body-medium-font-size)',
          marginBottom: 'calc(var(--spacer-3) * 1.5)',
        }}
      >
        {message}
      </p>

      {note && (
        <p
          style={{
            color: 'var(--color-text)',
            opacity: 0.6,
            fontSize: 'var(--text-body-medium-font-size)',
            marginBottom: 'calc(var(--spacer-3) * 1.5)',
          }}
        >
          {note}
        </p>
      )}

      <button
        type="button"
        onClick={onBack}
        style={{
          padding: 'calc(var(--spacer-3) * 0.75) calc(var(--spacer-3) * 1.5)',
          background: 'var(--color-border)',
          border: 'none',
          borderRadius: 'var(--radius-small)',
          color: 'var(--color-text)',
          fontSize: 'var(--text-body-large-font-size)',
          cursor: 'pointer',
        }}
      >
        Back to login
      </button>
    </AuthCard>
  )
}
