export function LoadingScreen() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg)',
      }}
    >
      <div style={{ color: 'var(--color-text)', opacity: 0.7 }}>
        Loading...
      </div>
    </div>
  )
}
