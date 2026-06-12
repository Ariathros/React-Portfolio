import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';

export default function ContactTerminal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [lines, setLines] = useState([
    { type: 'system', text: '// DEPLOYMENT TERMINAL v2.0' },
    { type: 'system', text: '// Ready to establish connection...' },
    { type: 'system', text: '// Fill in the fields below to initiate data uplink.' },
  ]);
  const [sent, setSent] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLines((prev) => [
      ...prev,
      { type: 'input', text: `> name: "${name}"` },
      { type: 'input', text: `> email: "${email}"` },
      { type: 'input', text: `> message: "${message}"` },
      { type: 'system', text: '// Encrypting payload...' },
      { type: 'success', text: '// ✓ Message transmitted successfully.' },
      { type: 'success', text: '// ✓ Response estimated within 24h.' },
    ]);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px border-t border-primary" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">005 — Contact</span>
          </div>
          <h2 className="font-mono font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-4">
            Deploy a Message
          </h2>
          <p className="font-inter text-base text-muted-foreground leading-relaxed mb-12 max-w-xl">
            Ready to build something extraordinary? Open a channel and let's architect your next project together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-sm overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-secondary/30">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-crimson/60" />
              <span className="w-3 h-3 rounded-full bg-cyan/60" />
              <span className="w-3 h-3 rounded-full bg-violet/60" />
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Terminal size={12} className="text-muted-foreground" />
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider">contact_terminal — bash</span>
            </div>
          </div>

          {/* Terminal output */}
          <div ref={terminalRef} className="px-5 py-4 max-h-40 overflow-y-auto">
            {lines.map((line, i) => (
              <div
                key={i}
                className={`font-mono text-xs leading-6 ${
                  line.type === 'system' ? 'text-muted-foreground' :
                  line.type === 'input' ? 'text-cyan' :
                  'text-emerald-400'
                }`}
              >
                {line.text}
              </div>
            ))}
            {!sent && (
              <span className="inline-block w-2 h-4 bg-primary animate-blink" />
            )}
          </div>

          {/* Form */}
          {!sent ? (
            <form onSubmit={handleSubmit} className="border-t border-border p-5 md:p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase mb-2 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase mb-2 block">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase mb-2 block">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Let's build something amazing..."
                  rows={4}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="font-mono text-xs tracking-wider flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-sm"
              >
                <Send size={14} />
                TRANSMIT
              </button>
            </form>
          ) : (
            <div className="border-t border-border p-6 text-center">
              <p className="font-mono text-sm text-emerald-400">Connection established. Expect a response within 24 hours.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}