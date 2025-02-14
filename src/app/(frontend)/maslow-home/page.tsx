import { notFound } from 'next/navigation'
import { Page } from '@/payload-types'

import { fetchPage } from '@/app/(frontend)/[slug]/fetchPage'
import { RenderBlocks } from '@/src/blocks/RenderBlocks'

export default async function Page() {
  const page = await fetchPage('maslow-home')

  if (!page) {
    return notFound()
  }

  return (
    <main>
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}
