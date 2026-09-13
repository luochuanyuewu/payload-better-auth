import type { ReactNode } from 'react'

export function AuthCard({ logo, center = false, children }: { logo?: ReactNode; center?: boolean; children: ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)', padding: 'var(--spacer-3)' }}>
      <div style={{ background: 'var(--color-bg-elevated)', padding: 'calc(var(--spacer-3) * 2)', borderRadius: 'var(--radius-medium)', boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px', ...(center ? { textAlign: 'center' as const } : {}) }}>
        {logo && <div style={{ textAlign: 'center', marginBottom: 'calc(var(--spacer-3) * 1.5)' }}>{logo}</div>}
        {children}
      </div>
    </div>
  )
}
