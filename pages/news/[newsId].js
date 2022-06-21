import {useRouter} from 'next/router';
// domain.com/news/something

const DetailPage = () => {
  const router = useRouter();
  console.log(router.query.newsId); // router.query.[]안에 적었던 식별자를 쓰면 매개변수 추출가능
  return <h1>The Detail Page</h1>;
};
export default DetailPage;
