import { Mail, Smartphone, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>

      <div className="max-w-2xl space-y-8">
        <p className="text-lg text-muted-foreground">
          I'm always interested in hearing about new research opportunities, collaboration possibilities, 
          and connecting with fellow academics and professionals. Feel free to reach out!
        </p>

        <div className="space-y-6">
          <a
            href="mailto:ashok.singh.malhi@gmail.com"
            className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-200 group"
          >
            <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:text-accent transition-colors" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <p className="text-muted-foreground">ashok.singh.malhi@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+917011115411"
            className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-200 group"
          >
            <Smartphone className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:text-accent transition-colors" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Phone</h4>
              <p className="text-muted-foreground">+91-7011115411</p>
            </div>
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Connect With Me</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-lg bg-card border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-card border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-card border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-12">
        <div className="text-center text-muted-foreground text-sm">
          <p>© 2025 Dr. Ashok Malhi. All rights reserved.</p>
          <p className="mt-2">Built with modern web technologies</p>
        </div>
      </div>
    </section>
  )
}
