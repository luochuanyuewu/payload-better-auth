import { AuthCard } from './AuthCard.js'

export function AccessDeniedScreen({ onSignOut }: { onSignOut: () => void }) {
  return (
    <AuthCard center>
        <h1
          style={{
            color: 'var(--color-text-danger)',
            fontSize: 'var(--text-heading-large-font-size)',
            fontWeight: 600,
            margin: '0 0 var(--spacer-3) 0',
          }}
        >
          Access Denied
        </h1>
        <p
          style={{
            color: 'var(--color-text)',
            opacity: 0.8,
            marginBottom: 'calc(var(--spacer-3) * 1.5)',
            fontSize: 'var(--text-body-medium-font-size)',
          }}
        >
          You don't have permission to access the admin panel.
          Please contact an administrator if you believe this is an error.
        </p>
        <button
          onClick={onSignOut}
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
          Sign out and try again
        </button>
    </AuthCard>
  )
}
