import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "50K+", label: "Alumni Members" },
  { number: "120+", label: "Countries" },
  { number: "1000+", label: "Events Hosted" },
  { number: "200+", label: "Partner Companies" }
]

export function StatsSection() {
  return (
    <section className="py-20 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 