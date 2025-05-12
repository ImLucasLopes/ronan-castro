'use client'

import { useContent } from '../lib/ContentContext'

export default function Footer() {
  const { footer } = useContent()

  return (
    <section className="flex flex-col items-center bg-[#2E456A] pt-4 pb-2 md:pt-[4%] px-[4%] md:px-[8%]">
      <h4 className="text-center text-[#F5EFE7] font-extrabold text-4xl md:text-5xl mb-10 md:mb-20">
        {footer.title.toUpperCase()}
      </h4>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1100px] mb-10 md:mb-20">
        <div className="flex max-w-[400px]">
          <p className="text-[#F5EFE7] font-light">{footer.address}</p>
        </div>
        <div>
          <p className="text-[#F5EFE7] font-medium mt-4">{footer.fone}</p>
        </div>
      </div>

      <div className="pt-8">
        <p className="text-[#F5EFE7] font-light">{footer.pageCredits}</p>
      </div>
    </section>
  )
}
