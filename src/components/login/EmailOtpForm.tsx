import React from 'react'
import { AuthCard } from './AuthCard.js'
import { OtpInput } from './OtpInput.js'
import { AuthBanner } from './AuthBanner.js'
import { AuthButton } from './AuthButton.js'

export function EmailOtpForm({ email, code, onCodeChange, onSubmit, onBack, loading, error, logo, codeLength = 6 }: {
  email: string
  code: string
  onCodeChange: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  onBack: () => void
  loading: boolean
  error: string | null
  logo?: React.ReactNode
  /** Digits in the emailed code — the emailOTP plugin's `otpLength`. Default: 6. */
  codeLength?: number
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
          Enter Your Code
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
          We&apos;ve sent a verification code to <strong>{email}</strong>
        </p>

        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: 'calc(var(--spacer-3) * 1.5)' }}>
            <label
              htmlFor="email-otp-code"
              style={{
                display: 'block',
                color: 'var(--color-text)',
                marginBottom: 'calc(var(--spacer-3) * 0.5)',
                fontSize: 'var(--text-body-medium-font-size)',
                fontWeight: 500,
              }}
            >
              Verification Code
            </label>
            <OtpInput id="email-otp-code" value={code} onChange={onCodeChange} length={codeLength} autoFocus />
          </div>

          {error && <AuthBanner kind="error">{error}</AuthBanner>}

          <AuthButton type="submit" disabled={loading || code.length !== codeLength}>
            {loading ? 'Verifying...' : 'Verify'}
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
