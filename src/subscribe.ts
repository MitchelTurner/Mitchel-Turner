/**
 * Posts an email to the configured newsletter provider.
 * Set VITE_SUBSCRIBE_ENDPOINT to a Buttondown, Mailchimp, ConvertKit,
 * or other endpoint that accepts an `email` field.
 */
export async function subscribe(email: string): Promise<void> {
  const endpoint = import.meta.env.VITE_SUBSCRIBE_ENDPOINT
  if (!endpoint) {
    throw new Error('Subscribe endpoint is not configured.')
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ email }),
  })

  if (!response.ok) {
    throw new Error(`Subscribe failed (${response.status})`)
  }
}
