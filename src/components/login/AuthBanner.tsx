import type { ReactNode } from 'react'

export function AuthBanner({ kind, children }: { kind: 'error' | 'success'; children: ReactNode }) {
  const palette = kind === 'error'
    ? { color: 'var(--color-text-danger)', background: 'var(--color-bg-danger-tertiary)', border: '1px solid var(--color-border-danger)' }
    : { color: 'var(--color-text-success)', background: 'var(--color-bg-success-tertiary)', border: '1px solid var(--color-border-success)' }
  return (
    <div role="alert" aria-live="polite" style={{ marginBottom: 'var(--base)', fontSize: 'var(--font-size-small)', padding: 'calc(var(--base) * 0.5)', borderRadius: 'var(--style-radius-s)', ...palette }}>
      {children}
    </div>
  )
}
