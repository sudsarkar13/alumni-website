import AlumniHero from "@/components/pages/alumni/AlumniHero"
import AlumniDirectory from "@/components/pages/alumni/AlumniDirectory"
import AlumniEvents from "@/components/pages/alumni/AlumniEvents"
import AlumniNews from "@/components/pages/alumni/AlumniNews"
import AlumniDonation from "@/components/pages/alumni/AlumniDonation"

export default function AlumniPage() {
  return (
    <main>
      <AlumniHero />
      <AlumniDirectory />
      <AlumniEvents />
      <AlumniNews />
      <AlumniDonation />
    </main>
  )
} 