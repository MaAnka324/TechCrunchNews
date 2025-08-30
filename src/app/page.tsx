import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';

export default function Home() {
  return (
  <div className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <SearchBar />
      <CategoryFilter />
      <NewsList />
    </div>
  );
}
