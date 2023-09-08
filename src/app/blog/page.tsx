import CategoryFilter from '@/components/filter/category-filter';
import SearchBar from '@/components/filter/search-bar';
import PostsGrid from '@/components/posts/posts-grid';
import { getAllPostsFromNotion } from '@/services/posts';
import { toUniqueArray } from '@/utils/to-unique-array';
import Container from '@/components/container';


export const metadata = {
  title: 'Blog',
  description: 'All posts are created by notion ai.',
};

export default async function BlogPage() {
  const allPosts = await getAllPostsFromNotion();

  const allCategories = toUniqueArray(
    allPosts
      .filter((post) => post.published)
      .map((post) => post.categories)
      .flat()
  ).sort();

  return (
    <Container>
      <section className="mb-16 space-y-8 mt-24">
        <SearchBar />
        <CategoryFilter allCategories={allCategories} />
      </section>
      <PostsGrid allPosts={allPosts} />
    </Container>
  );
}
