import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({children}:any){
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <title>PokeNext</title>
            </Head>
            <Navbar />
                <main>{children}</main>
            <Footer />
        </>
    )
}