export default function BlogPage({ params }) {
  console.log(params);
  const { id } = params;
  return <h1>Detail Page - Post {id}</h1>;
}
