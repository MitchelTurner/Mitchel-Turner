import { useState, type FormEvent } from 'react'
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from '../data/site'
import { subscribe } from '../subscribe'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Connect() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const email = String(new FormData(form).get('email') ?? '').trim()

    if (!EMAIL.test(email)) {
      setError(true)
      setMessage('Enter a valid email to subscribe.')
      return
    }

    try {
      await subscribe(email)
      setError(false)
      setMessage("You're on the list — thanks for reading.")
      form.reset()
    } catch {
      setError(true)
      setMessage('Could not subscribe. Please try again.')
    }
  }

  return (
    <section className="connect" id="connect">
      <div>
        <h2>Stay in the loop.</h2>
        <p className="note">
          A short note lands in your inbox when something new goes up — no more, no less.
        </p>
        <form className="sub-form" noValidate onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email address"
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
        <p className={error ? 'form-msg is-error' : 'form-msg'} role="status" aria-live="polite">
          {message}
        </p>
      </div>

      <div className="contact">
        <span className="caption">Get in touch</span>
        <p>
          <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
        </p>
        <p>Ketchikan, Alaska 99901</p>
        <p>Best reached Mon–Fri, 9–5</p>
        <p className="tip">
          <strong>Have a tip?</strong> Text the number above or send a DM on{' '}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
            Instagram
          </a>
          . Anything from council to the docks.
        </p>
      </div>
    </section>
  )
}
