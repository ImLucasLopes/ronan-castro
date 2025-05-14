import ContactForm from '../components/ContactForm'

export default function Footer() {
  const getYearFooter = () => {
    if (typeof Date !== 'undefined') {
      return '© ' + new Date().getFullYear()
    } else {
      return ' '
    }
  }
  getYearFooter()

  return (
    <footer className="flex flex-col items-center bg-[#2E456A] pt-4 pb-2 md:pt-[4%] px-[4%] md:px-[8%]">
      <h4 className="text-center text-[#F5EFE7] font-extrabold text-4xl md:text-5xl mb-10 md:mb-20">
        {footer.title.toUpperCase()}
      </h4>

      <ContactForm />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1100px] mb-5 md:mb-10">
        <div className="flex max-w-[400px]">
          <p className="text-[#F5EFE7] font-light">{footer.address}</p>
        </div>
        <div className="text-[#F5EFE7] font-medium mt-4">
          <a href="tel:+5562995772953">{footer.fone}</a>
        </div>
      </div>
      <div className="pt-8">
        <p className="text-[#F5EFE7] font-light">
          {getYearFooter()}
          {footer.pageCredits}
        </p>
      </div>
    </footer>
  )
}
