import Image from 'next/image'

export default function ClientShowcase({ clientShowcase }) {
  return (
    <section className="flex flex-col items-center bg-[#F5EFE7] py-4 md:py-[4%] px-[4%] md:px-[8%]">
      <h3 className="text-center text-[#000]] font-extrabold text-4xl md:text-5xl mb-3">
        {clientShowcase.title.toUpperCase()}
      </h3>
      <h4 className="text-center text-[#B7BCBD] font-extrabold text-2xl md:text-3xl mb-20">
        {clientShowcase.subtitle.toUpperCase()}
      </h4>

      <div className="flex flex-col md:flex-row">
        {clientShowcase.cards.map((card, id) => (
          <div
            key={clientShowcase.cards[id].id}
            className="flex flex-col items-center m-4 max-w-[300px] md:max-w-[400px]"
          >
            <Image
              className="rounded-lg shadow-lg"
              src={clientShowcase.cards[id].image}
              alt={clientShowcase.cards[id].alt}
              width={300}
              height={300}
            />
            <div>
              <h3 className="flex font-semibold text-[#000] md:text-lg mt-3">
                {card.cardTitle}
              </h3>
              <p className="flex font-semibold text-[#B7BCBD] md:text-lg">
                {card.cardDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
