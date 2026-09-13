import React from 'react'
import { AuthCard } from './AuthCard.js'
import { AuthField } from './AuthField.js'
import { AuthBanner } from './AuthBanner.js'
import { AuthButton } from './AuthButton.js'

export function ForgotPasswordForm({ email, onEmailChange, onSubmit, onBack, loading, error, logo }: {
  email: string
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  onBack: () => void
  loading: boolean
  error: string | null
  logo?: React.ReactNode
}) {
  return (
    <AuthCard logo={logo}>

        <h1
          style={{
            color: 'var(--color-text)',
            fontSize: 'var(--text-heading-large-font-size)',
            fontWeight: 600,
            margin: '0 0 calc(var(--spacer-3) * 0.5) 0',
            textAlign: 'center',
          }}
        >
          Reset Password
        </h1>

        <p
          style={{
            color: 'var(--color-text)',
            opacity: 0.7,
            fontSize: 'var(--text-body-medium-font-size)',
            textAlign: 'center',
            marginBottom: 'calc(var(--spacer-3) * 1.5)',
          }}
        >
          Enter your email and we&apos;ll send you a link to reset your password
        </p>

        <form onSubmit={onSubmit}>
          <AuthField id="forgot-email" label="Email" type="email" value={email} onChange={onEmailChange} autoComplete="email" marginBottom="calc(var(--spacer-3) * 1.5)" autoFocus />

          {error && <AuthBanner kind="error">{error}</AuthBanner>}

          <AuthButton type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </AuthButton>
        </form>

        <button
          type="button"
          onClick={onBack}
          style={{
            width: '100%',
            marginTop: 'var(--spacer-3)',
            padding: 'calc(var(--spacer-3) * 0.5)',
            background: 'transparent',
            border: 'none',
            color: 'var(--color-text)',
            opacity: 0.7,
            fontSize: 'var(--text-body-medium-font-size)',
            cursor: 'pointer',
          }}
        >
          ← Back to login
        </button>
    </AuthCard>
  )
}
