import type { ChangeEvent, Ref } from 'react'

export function AuthField({ id, label, type, value, onChange, autoComplete, required = true, inputRef, marginBottom = 'var(--spacer-3)', autoFocus = false }: {
  id: string; label: string; type: string; value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string; required?: boolean; inputRef?: Ref<HTMLInputElement>
  marginBottom?: string; autoFocus?: boolean
}) {
  return (
    <div style={{ marginBottom }}>
      <label htmlFor={id} style={{ display: 'block', color: 'var(--color-text)', marginBottom: 'calc(var(--spacer-3) * 0.5)', fontSize: 'var(--text-body-medium-font-size)', fontWeight: 500 }}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} required={required} autoComplete={autoComplete} ref={inputRef} autoFocus={autoFocus}
        style={{ width: '100%', padding: 'calc(var(--spacer-3) * 0.75)', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-small)', color: 'var(--color-text)', fontSize: 'var(--text-body-large-font-size)', outline: 'none', boxSizing: 'border-box' }} />
    </div>
  )
}
