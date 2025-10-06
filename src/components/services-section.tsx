import { Card } from "@/components/ui/card"
import { BookOpen, Cpu, Users } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "フィクション",
    description:
      "物語の力を活用し、組織のビジョンと文化を形成します。ナラティブデザインとストーリーテリングで、人々の心を動かします。",
  },
  {
    icon: Cpu,
    title: "サイバー技術",
    description:
      "最先端のデジタル技術とAIを駆使し、未来志向のソリューションを構築します。テクノロジーと人間性の調和を追求します。",
  },
  {
    icon: Users,
    title: "心理学",
    description:
      "人と組織の深層心理を理解し、持続可能な成長と変革を支援します。科学的アプローチで組織の潜在能力を引き出します。",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300 bg-card border-border">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4 tracking-wide">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
