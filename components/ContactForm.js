import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const phoneNumber = '5562995772953'
    const formattedMessage = `Olá, meu nome é ${name}. ${message}`
    const encodedMessage = encodeURIComponent(formattedMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')

    // Limpar formulário após envio
    setName('')
    setMessage('')
  }

  return (
    <div className="max-w-[500px] mx-auto text-center text-white mb-20 md:mb-20">
      <h3 className="text-2xl font-bold mb-2">Entre em Contato</h3>
      <p className="text-gray-300 mb-6">
        Envie uma mensagem diretamente pelo WhatsApp!
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          required
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Sua mensagem"
          required
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 resize-y min-h-[100px]"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition-colors"
        >
          Enviar via WhatsApp
        </button>
      </form>
    </div>
  )
}
