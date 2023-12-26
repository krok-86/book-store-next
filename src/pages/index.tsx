import Link from "next/link";

 const Page = () => {
  return (
      
  <div>
          <Link href="/"><div>Main page</div>
          </Link>
          <Link href="/user"><div>Users</div>
          </Link>
  </div>
  );
}
export default Page;