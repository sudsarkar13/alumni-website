import { Metadata } from "next"
import AdminHero from "@/components/pages/administration/AdminHero"
import AdminStats from "@/components/pages/administration/AdminStats"
import AdminTeam from "@/components/pages/administration/AdminTeam"
import AdminContact from "@/components/pages/administration/AdminContact"

export const metadata: Metadata = {
  title: "Administration | Alumni Portal",
  description: "Meet our administrative team and leadership.",
}

export default function AdministrationPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <AdminHero />
      <AdminStats />
      <AdminTeam />
      <AdminContact />
    </main>
  )
} 