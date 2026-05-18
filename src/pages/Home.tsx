import Hero from '../components/Hero'
import ProblemStatement from '../components/ProblemStatement'
import Solutions from '../components/Solutions'
import Platform from '../components/Platform'
import UseCases from '../components/UseCases'

import CTA from '../components/CTA'
import WhyZoron from '../components/WhyZoron'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ProblemStatement />
      <Solutions />
      <Platform />
      <UseCases />
      <WhyZoron/>
      <CTA />
    </main>
  )
}
