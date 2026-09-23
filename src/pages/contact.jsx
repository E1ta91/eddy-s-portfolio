import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', 'fb7bb008-65fd-40d3-8dee-c41618d4f84d');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        event.target.reset();
      } else {
        setResult(data.message || 'Error sending message');
      }
    } catch {
      setResult('Network error. Please try again.');
    } finally {
      setTimeout(() => setResult(''), 5000);
    }
  };

  return (
    <div className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-title">Let&apos;s build something</h2>
          <div className="spec-rule mt-5 max-w-[8rem]" />
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Have a product, prototype, or CAD challenge in mind? Reach out — open to collaborations
            and freelance work.
          </p>
          <a
            href="mailto:faako.edward@gmail.com"
            className="mt-6 inline-block font-mono text-sm text-accent transition hover:underline"
          >
            faako.edward@gmail.com
          </a>
        </div>

        <div>
          {result && (
            <div
              className={`mb-4 rounded-md border px-4 py-3 text-sm ${
                result.includes('success')
                  ? 'border-accent/40 bg-accent-soft text-ink'
                  : 'border-red-500/40 bg-red-500/10 text-ink'
              }`}
            >
              {result}
            </div>
          )}

          <form
            onSubmit={onSubmit}
            className="border border-line bg-[var(--surface-elevated)] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full border border-line bg-canvas px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border border-line bg-canvas px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:border-accent"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.14em] text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about the project..."
                required
                className="w-full resize-y border border-line bg-canvas px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:border-accent"
              />
            </div>

            <input type="hidden" name="subject" value="New message from portfolio" />

            <div className="mt-6">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
