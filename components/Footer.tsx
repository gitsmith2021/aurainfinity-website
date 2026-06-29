import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { footerLinks, mission } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      {/* Contact call to action */}
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build what&apos;s next.
            </h2>
            <p className="mt-3 text-pretty text-muted">
              We partner with organizations ready to operate with greater
              clarity, efficiency and confidence.
            </p>
          </div>
          <Button href={`mailto:${siteConfig.email}`} variant="primary">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Footer base */}
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm text-muted">{siteConfig.tagline}</p>
            <p className="mt-6 text-sm text-subtle">{mission}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-10">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 pb-10">
          <p className="text-sm text-subtle">
            © {year} Aura Infinity.
          </p>
        </div>
      </div>
    </footer>
  );
}
