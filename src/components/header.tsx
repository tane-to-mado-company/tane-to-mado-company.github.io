"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-8">
            <a href="/" className="text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors">
              ホーム
            </a>
            <a
              href="/services"
              className="hidden md:block text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
            >
              事業内容
            </a>
            <a
              href="/about"
              className="hidden md:block text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
            >
              企業情報
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="hidden md:block text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
            >
              お問い合わせ
            </a>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="/services"
                className="text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                事業内容
              </a>
              <a
                href="/about"
                className="text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                企業情報
              </a>
              <a
                href="/contact"
                className="text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
