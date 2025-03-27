import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { NextResponse } from 'next/server';

export async function GET() {
  const payload = await getPayload({ config: configPromise });
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 10,
    sort: '-createdAt',
  });

  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const payload = await getPayload({ config: configPromise });
  const body = await request.json();
  const post = await payload.create({
    collection: 'posts',
    data: body,
  });
  return NextResponse.json(post);
}

export async function DELETE(request: Request) {
  const payload = await getPayload({ config: configPromise });
  const { searchParams } = new URL(request.url);
  const ids = searchParams.get('ids')?.split(',');
  
  if (!ids) {
    return NextResponse.json({ error: 'No ids provided' }, { status: 400 });
  }

  const deletedPosts = await Promise.all(
    ids.map(id => 
      payload.delete({
        collection: 'posts',
        id,
      })
    )
  );

  return NextResponse.json(deletedPosts);
}