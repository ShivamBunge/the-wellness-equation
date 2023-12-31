'use client';

import { useRef } from 'react';

import Paginate from '@/components/paginate';
import PostCard from '@/components/posts/post-card';
import usePosts from '@/hooks/use-posts';
import { Post } from '@/types/post';

export default function PostsGrid({ allPosts }: { allPosts: Post[] }) {
  const { posts, totalPages } = usePosts(allPosts);
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={rootRef}
      className="flex scroll-mt-12 flex-col items-center space-y-16"
    >
      {posts.length ? (
        <ul
          id="posts-grid"
          className="grid w-full grid-cols-1 gap-x-10 gap-y-18 md:grid-cols-2"
        >
          {posts.map((post) => (
            <li className='' key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-center text-lg">No matching posts found</p>
      )}
      <Paginate totalPages={totalPages} elementToScroll={rootRef.current} />
    </section>
  );
}
