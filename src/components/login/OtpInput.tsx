export function OtpInput({ id, value, onChange, length = 6, autoFocus = false, pattern }: { id: string; value: string; onChange: (v: string) => void; length?: number; autoFocus?: boolean; pattern?: string }) {
  return (
    <input id={id} type="text" inputMode="numeric" autoComplete="one-time-code" value={value} required placeholder={'0'.repeat(length)} autoFocus={autoFocus} pattern={pattern}
      onChange={(e) => onChange(e.target.value.replace(/\D/g, '').slice(0, length))}
      style={{ width: '100%', padding: 'calc(var(--spacer-3) * 0.75)', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-small)', color: 'var(--color-text)', fontSize: 'var(--text-heading-medium-font-size)', fontFamily: 'monospace', textAlign: 'center', letterSpacing: '0.5em', outline: 'none', boxSizing: 'border-box' }} />
  )
}
