import Head from "next/head";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
// import Status from "../components/status";
import Status from "../components/statusBar"
import Suggetion from "../components/suggesion";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <title>myapp</title>
      </Head>
      <div className="container-fluid">
        <div className="row ">
          <Header  />
        </div>
        <div className="main d-flex">
          <div className="col-xl-2  bg-light">
            <Sidebar className="" />
          </div>
          <div className="col-xl-8 mx-1">
            <div className="card bg-light">
            <Status />
            </div>
           
            <Main />
          </div>
          <div className="col-xl-2 bg-light">
            <Suggetion />
          </div>
        </div>
      </div>
    </>
  );
}
