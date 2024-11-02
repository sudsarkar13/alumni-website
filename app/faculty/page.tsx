import { Metadata } from "next"
import FacultyHero from "@/components/pages/faculty/FacultyHero"
import FacultyStats from "@/components/pages/faculty/FacultyStats"
import FacultyDepartments from "@/components/pages/faculty/FacultyDepartments"
import FacultyMembers from "@/components/pages/faculty/FacultyMembers"
import FacultyContact from "@/components/pages/faculty/FacultyContact"

export const metadata: Metadata = {
  title: "Faculty | Alumni Portal",
  description: "Meet our distinguished faculty members and academic departments.",
}

export default function FacultyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <FacultyHero />
      <FacultyStats />
      <FacultyDepartments />
      <FacultyMembers />
      <FacultyContact />
    </main>
  )
} 