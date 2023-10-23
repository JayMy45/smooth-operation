import Image from 'next/image'
import ProductsPage from './products/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ProductsPage />
    </main>
  )
}
