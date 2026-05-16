import Hero from '../components/Hero'
import ProblemStatement from '../components/ProblemStatement'
import Solutions from '../components/Solutions'
import Platform from '../components/Platform'
import UseCases from '../components/UseCases'
import Team from '../components/Team'
import Partners from '../components/Partners'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ProblemStatement />
      <Solutions />
      <Platform />
      <UseCases />
      <Team />
      <Partners />
      <CTA />
    </main>
  )
}
