import Head from "next/head";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-dark position-fixed bg-dark ">
        <div className="container-fluid   ">
          <a className="navbar-brand d-flex justify-content-start align-items-center text-align-center col-xl-2">
            <Image
              src="/Images/fire.jpg"
              alt="Picture of the author"
              className="img-fluid rounded-circle "
              width={50}
              height={50}
            />
            <h2 >Postara</h2>
          </a>
          <form className="d-flex col-xl-5">
            <input
              className="form-control px-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* <div className="d-flex justify-content-end cal-xl-5">
          <Image
              src="/Images/NN.png"
              alt="Picture of the author"
              className="img-fluid rounded-circle p-1  "
              width={40}
              height={40}
            />
            <Image
              src="/Images/chat.png"
              alt="Picture of the author"
              className="img-fluid rounded-circle p-1 ml-1 "
              width={40}
              height={40}
            /><Image
            src="/Images/user.png"
            alt="Picture of the author"
            className="img-fluid rounded-circle p-1 "
            width={40}
            height={40}
          />
          </div> */}
        </div>
      </nav>
    </>
  );
}
