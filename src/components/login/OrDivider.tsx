export function OrDivider() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: 'calc(var(--spacer-3) * 1.5) 0',
        gap: 'calc(var(--spacer-3) * 1)',
      }}
    >
      <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
      <span style={{ color: 'var(--color-text)', opacity: 0.6, fontSize: 'var(--text-body-medium-font-size)' }}>
        or
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
    </div>
  )
}
