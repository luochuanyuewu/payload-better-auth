'use client'

import { useConfig } from '@payloadcms/ui'
import { useState, useRef, type FormEvent } from 'react'
import { createAuthClient } from 'better-auth/react'
import { useAuthClientBaseURL } from '../useAuthMountPath.js'

export type ForgotPasswordViewProps = {
  /** Optional pre-configured auth client */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authClient?: any
  /** Custom logo element */
  logo?: React.ReactNode
  /** Page title. Default: 'Forgot Password' */
  title?: string
  /** Path to login page. Default: '/admin/login' */
  loginPath?: string
  /** Success message to show after email is sent */
  successMessage?: string
}

/**
 * Forgot password page component for requesting a password reset email.
 * Uses the Better Auth client's `requestPasswordReset` (the raw
 * `/forget-password` endpoint was renamed to `/request-password-reset` in
 * Better Auth 1.6; the client tracks such renames across versions).
 */
export function ForgotPasswordView({
  authClient: providedClient,
  logo,
  title = 'Forgot Password',
  loginPath = '/admin/login',
  successMessage = 'If an account exists with this email, you will receive a password reset link.',
}: ForgotPasswordViewProps) {

  // Payload Config
  const {config: {routes: {admin:adminRoute}}} = useConfig()
  const authBaseURL = useAuthClientBaseURL()
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clientRef = useRef<any>(null)
  const getClient = () => {
    if (providedClient) return providedClient
    if (clientRef.current) return clientRef.current
    clientRef.current = createAuthClient({
      ...(authBaseURL ? { baseURL: authBaseURL } : {}),
    })
    return clientRef.current
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const client = getClient()
      const result = await client.requestPasswordReset({
        email,
        redirectTo: `${window.location.origin}${adminRoute}/reset-password`,
      })

      // Better Auth already answers unknown emails with a success (that's the
      // anti-enumeration boundary), so a returned error here is a genuine
      // failure (rate limit, misconfiguration, 5xx) — surface it instead of
      // claiming an email was sent when nothing was.
      if (result.error) {
        setError(result.error.message ?? 'Failed to send reset email. Please try again.')
      } else {
        setSuccess(true)
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-bg)',
          padding: 'var(--spacer-3)',
        }}
      >
        <div
          style={{
            background: 'var(--color-bg-elevated)',
            padding: 'calc(var(--spacer-3) * 2)',
            borderRadius: 'var(--radius-medium)',
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
          }}
        >
          {logo && (
            <div style={{ marginBottom: 'calc(var(--spacer-3) * 1.5)' }}>
              {logo}
            </div>
          )}

          <h1
            style={{
              color: 'var(--color-text)',
              fontSize: 'var(--text-heading-large-font-size)',
              fontWeight: 600,
              margin: '0 0 var(--spacer-3) 0',
            }}
          >
            Check Your Email
          </h1>

          <p
            style={{
              color: 'var(--color-text)',
              opacity: 0.8,
              marginBottom: 'calc(var(--spacer-3) * 1.5)',
              fontSize: 'var(--text-body-medium-font-size)',
            }}
          >
            {successMessage}
          </p>

          <a
            href={loginPath}
            style={{
              color: 'var(--color-text)',
              fontSize: 'var(--text-body-medium-font-size)',
              textDecoration: 'underline',
            }}
          >
            Back to login
          </a>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg)',
        padding: 'var(--spacer-3)',
      }}
    >
      <div
        style={{
          background: 'var(--color-bg-elevated)',
          padding: 'calc(var(--spacer-3) * 2)',
          borderRadius: 'var(--radius-medium)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {logo && (
          <div
            style={{
              textAlign: 'center',
              marginBottom: 'calc(var(--spacer-3) * 1.5)',
            }}
          >
            {logo}
          </div>
        )}

        <h1
          style={{
            color: 'var(--color-text)',
            fontSize: 'var(--text-heading-large-font-size)',
            fontWeight: 600,
            marginBottom: 'calc(var(--spacer-3) * 0.5)',
            textAlign: 'center',
            margin: '0 0 calc(var(--spacer-3) * 0.5) 0',
          }}
        >
          {title}
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
          Enter your email and we'll send you a reset link.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 'calc(var(--spacer-3) * 1.5)' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                color: 'var(--color-text)',
                marginBottom: 'calc(var(--spacer-3) * 0.5)',
                fontSize: 'var(--text-body-medium-font-size)',
                fontWeight: 500,
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              style={{
                width: '100%',
                padding: 'calc(var(--spacer-3) * 0.75)',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-small)',
                color: 'var(--color-text)',
                fontSize: 'var(--text-body-large-font-size)',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {error && (
            <div
              style={{
                color: 'var(--color-text-danger)',
                marginBottom: 'var(--spacer-3)',
                fontSize: 'var(--text-body-medium-font-size)',
                padding: 'calc(var(--spacer-3) * 0.5)',
                background: 'var(--color-bg-danger-tertiary)',
                borderRadius: 'var(--radius-small)',
                border: '1px solid var(--color-border-danger)',
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: 'calc(var(--spacer-3) * 0.75)',
              background: 'var(--color-text)',
              border: 'none',
              borderRadius: 'var(--radius-small)',
              color: 'var(--color-bg-elevated)',
              fontSize: 'var(--text-body-large-font-size)',
              fontWeight: 500,
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'opacity 150ms ease',
              marginBottom: 'var(--spacer-3)',
            }}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>

          <div style={{ textAlign: 'center' }}>
            <a
              href={loginPath}
              style={{
                color: 'var(--color-text)',
                opacity: 0.7,
                fontSize: 'var(--text-body-medium-font-size)',
                textDecoration: 'underline',
              }}
            >
              Back to login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordView
