import Header from "@/componets/header/header";
import Head from "next/head";
import Link from "next/link";

const Page = () => {
  return (
        <div>
        <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header href={href}>
        
      </Header>
  <div>
          <Link href="/"><div>home</div>
          </Link>
          <Link href="/user"><div>Users</div>
          </Link>
  </div>
Main
  </div>
  );
}
export default Page;