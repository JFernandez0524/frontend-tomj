import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div
      className='row d-flex justify-content-center align-items-center'
      style={{ height: '100vh' }}
    >
      <div className='col-6 w-100 text-center p-2 '>
        <h1>OOOPS....Page Not Found!</h1>
        <h2>It looks like the page you're looking for doest not exist</h2>
        <p>
          Go back to the <Link href='/'>Home Page</Link>
        </p>
      </div>
    </div>
  );
}
