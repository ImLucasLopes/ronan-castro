'use client'

import { useContent } from '../lib/ContentContext'

export default function About() {
  const { about } = useContent()

  return (
    <section className="flex flex-col text-[#F5EFE7] bg-[#2E456A] py-4 md:py-[4%] px-[4%] md:px-[8%]">
      <h2 className="text-center font-medium text-4xl md:text-5xl mb-20">
        {about.title.toUpperCase()}
      </h2>
      <p className="text-lg md:text-2xl mb-10">
        {about.icon_music} <strong>{about.producer_name}</strong>{' '}
        {about.tagline}
      </p>
      <p className="text-lg md:text-2xl mb-10">{about.description.intro}</p>
      <p className="text-lg md:text-2xl mb-10">
        {about.description.commitment}
      </p>
      <p className="text-lg md:text-2xl mb-10">
        <strong>{about.producer_name}</strong>: {about.description.summary}
      </p>
    </section>
  )
}
