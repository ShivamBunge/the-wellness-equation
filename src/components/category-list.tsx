export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="h-10 flex space-x-2">
      {categories.map((category) => (
        <span
          key={category}
          className="text-blue-600 uppercase pr-4 py-2 text-sm"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
