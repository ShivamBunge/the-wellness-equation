'use client';

import Image from 'next/image';
import Link from 'next/link';

import CategoryList from '@/components/category-list';
import { Post } from '@/types/post';

export default function PostCard({
  post: { slug, title, date, cover, categories },
}: {
  post: Post;
}) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="mx-auto flex flex-col">
        <div className="relative h-80 transition-all duration-300 hover:scale-[1.05]">
          <Image
            className='rounded-lg'
            src={cover}
            alt="cover image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex h-48 flex-col p-4">
          <CategoryList categories={categories} />
          <h3 className="line-clamp-2 h-12 font-serif text-customBlue-base hover:text-primary whitespace-nowrap py-2 text-lg font-medium transition-all duration-300">{title}</h3>
          <time className="mb-4 text-sm text-gray-400">{date}</time>
        </div>
      </article>
    </Link>

  );
}
