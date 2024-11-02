import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Join Your Alumni Community?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with fellow graduates, access exclusive opportunities, and be part of a thriving professional network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group text-base">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 