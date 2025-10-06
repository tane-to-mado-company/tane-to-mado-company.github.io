import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 tracking-tight text-balance">
            新しい可能性を
            <br className="md:hidden" />
            一緒に探索しませんか
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            あなたの組織の課題や目標について、お気軽にご相談ください。 私たちと共に、未来を創造しましょう。
          </p>
          <Button asChild size="lg" className="group">
            <a href="https://forms.gle/1TabpKmqAPP8nVBa8" target="_blank" rel="noopener noreferrer">
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
