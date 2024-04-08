import type {Metadata} from 'next'
import {Open_Sans} from 'next/font/google'

import './globals.css'

import Header from '#/Global/Header/Header'
import Footer from '#/Global/Footer'
import Analytics from '#/Analytics'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const website = {
  title: 'Dr. Spiller',
  description: 'Сохранить здоровье и молодость - главная задача для Dr. Spiller! Профессиональная уходовая косметика премиального уровня из Германии, известная во всём мире. ТОО "WEC GROUP" является официальным дистрибьютором косметики Dr. Spiller в Казахстане и Кыргызстанe',
  keywords: 'dr spiller, доктор шпиллер, доктор шпиллер казахстан, косметика казахстан, косметика кыргыстан, немецкая косметика, профессиональная немецкая косметика, уходовая косметика, натуральная косметика, дерматологическая косметика, увлажняющий крем, антивозрастная косметика, органическая косметика, лечение акне, уход за кожей, косметика для лица',

  url: 'https://dr-spiller.kz',
  generator: 'nextjs, react, landing page',
}

export const metadata: Metadata = {
  title: {
    default: website.title,
    template: `%s — ${website.title}`,
  },

  description: website.description,
  keywords: website.keywords,

  metadataBase: new URL(website.url),
  generator: website.generator,

  openGraph: {
    type: 'website',
    url: website.url,
    title: website.title,
    description: website.description,
    siteName: website.title,
    images: `${website.url}/og.png`,
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="h-full scroll-smooth">
      <Analytics />
      <body className={`h-full text-custom-grey ${openSans.className}`}>
        <section className="flex flex-col min-h-full">
          <Header />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  )
}
