// src/app/(frontend)/[slug]/fetchPage.ts
export async function fetchPage(slug: string) {
    const res = await fetch(`/api/pages/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch page');
    return res.json();
  }
  