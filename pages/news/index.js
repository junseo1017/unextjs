// domain.com/news/
import Link from 'next/link';
const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/great'>NextJs is Great</Link>
        </li>
        <li>NextJs is Awesome</li>
      </ul>
    </>
  );
};
export default NewsPage;
