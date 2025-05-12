import fs from 'fs/promises'
import path from 'path'
import { ContentProvider } from '../lib/ContentContext'
import Hero from '../components/Hero'
import About from '../components/About'
import ClientShowcase from '../components/ClientShowcase'
import Footer from '../components/Footer'

async function getContent() {
  const filePath = path.join(process.cwd(), 'data', 'content.json')
  const jsonData = await fs.readFile(filePath, 'utf8')
  return JSON.parse(jsonData)
}

export default async function Home() {
  const content = await getContent()

  return (
    <ContentProvider content={content}>
      <Hero />
      <About />
      <ClientShowcase />
      <Footer />
    </ContentProvider>
  )
}

export const revalidate = 604800
