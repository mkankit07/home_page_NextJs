import Head from "next/head";
import Image from "next/image";
export default function Main() {
  return (
    <>
      <div className="card my-2 ">
        <div className="media text-muted d-flex pt-3 justify-content mx-2">
          <svg
            className="bd-placeholder-img d-inline rounded-circle"
            width="40"
            height="40"
            xmlns="http://www.w3.org/1000/svg"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>
          <p className="media-body pb-3 mb-0 small lh-125  ">
            <strong className="d-block text-gray-dark">
              @username. <a href="#"> Follow</a>
            </strong>
            Donec id elit non mi portas, tellus ac cursuentum massa justo sit
            amet risus.
          </p>
        </div>
        <div className="card">
          <Image
            src="/Images/mk.jpg"
            width={500}
            height={400}
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div className="my-1 d-flex justify-content-between">
          <div className="mx-4 d-flex justify-content-around">
            <div>
              <Image
                src="/Images/like.svg"
                width={35}
                height={35}
                className="img-fluid "
                alt="Responsive image"
              />
            </div>
            <div className="mx-3">
              <Image
                src="/Images/ichat.png"
                width={40}
                height={40}
                className="img-fluid ml-4"
                alt="Responsive image"
              />
            </div>
            <div className="mt-1 align-items-center">
              <Image
                src="/Images/send.png"
                width={32}
                height={32}
                className="img-fluid ml-1"
                alt="Responsive image"
              />
            </div>
          </div>
          <div className=" mx-3">
            <Image
              src="/Images/bookmark-regular.svg"
              width={35}
              height={35}
              className="img-fluid "
              alt="Responsive image"
            />
          </div>
        </div>
        <div> 
        <form className="d-flex">
            <input
              className="w-100 card border-bottom-0 form-control rounded-0 my-1 px-5"
              type="text"
              placeholder="Add a comment"
            //   aria-label="Sarch"
            />
            
          </form>
        </div>
      </div>
      <div className="card my-2 ">
        <div className="media text-muted d-flex pt-3 justify-content mx-2">
          <svg
            className="bd-placeholder-img d-inline rounded-circle"
            width="40"
            height="40"
            xmlns="http://www.w3.org/1000/svg"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>
          <p className="media-body pb-3 mb-0 small lh-125  ">
            <strong className="d-block text-gray-dark">
              @username. <a href="#"> Follow</a>
            </strong>
            Donec id elit non mi portas, tellus ac cursuentum massa justo sit
            amet risus.
          </p>
        </div>
        <div className="card">
          <Image
            src="/Images/mk.jpg"
            width={500}
            height={400}
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div className="my-1 d-flex justify-content-between">
          <div className="mx-4 d-flex justify-content-around">
            <div>
              <Image
                src="/Images/like.svg"
                width={35}
                height={35}
                className="img-fluid "
                alt="Responsive image"
              />
            </div>
            <div className="mx-3">
              <Image
                src="/Images/ichat.png"
                width={40}
                height={40}
                className="img-fluid ml-4"
                alt="Responsive image"
              />
            </div>
            <div className="mt-1 align-items-center">
              <Image
                src="/Images/send.png"
                width={32}
                height={32}
                className="img-fluid ml-1"
                alt="Responsive image"
              />
            </div>
          </div>
          <div className=" mx-3">
            <Image
              src="/Images/bookmark-regular.svg"
              width={35}
              height={35}
              className="img-fluid "
              alt="Responsive image"
            />
          </div>
        </div>
        <div> 
        <form className="d-flex">
            <input
              className="w-100 card border-bottom-0 form-control rounded-0 my-1 px-5"
              type="text"
              placeholder="Add a comment"
            //   aria-label="Sarch"
            />
            
          </form>
        </div>
      </div>
      <div className="card my-2 ">
        <div className="media text-muted d-flex pt-3 justify-content mx-2">
          <svg
            className="bd-placeholder-img d-inline rounded-circle"
            width="40"
            height="40"
            xmlns="http://www.w3.org/1000/svg"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>
          <p className="media-body pb-3 mb-0 small lh-125  ">
            <strong className="d-block text-gray-dark">
              @username. <a href="#"> Follow</a>
            </strong>
            Donec id elit non mi portas, tellus ac cursuentum massa justo sit
            amet risus.
          </p>
        </div>
        <div className="card">
          <Image
            src="/Images/mk.jpg"
            width={500}
            height={400}
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div className="my-1 d-flex justify-content-between">
          <div className="mx-4 d-flex justify-content-around">
            <div>
              <Image
                src="/Images/like.svg"
                width={35}
                height={35}
                className="img-fluid "
                alt="Responsive image"
              />
            </div>
            <div className="mx-3">
              <Image
                src="/Images/ichat.png"
                width={40}
                height={40}
                className="img-fluid ml-4"
                alt="Responsive image"
              />
            </div>
            <div className="mt-1 align-items-center">
              <Image
                src="/Images/send.png"
                width={32}
                height={32}
                className="img-fluid ml-1"
                alt="Responsive image"
              />
            </div>
          </div>
          <div className=" mx-3">
            <Image
              src="/Images/bookmark-regular.svg"
              width={35}
              height={35}
              className="img-fluid "
              alt="Responsive image"
            />
          </div>
        </div>
        <div> 
        <form className="d-flex">
            <input
              className="w-100 card border-bottom-0 form-control rounded-0 my-1 px-5"
              type="text"
              placeholder="Add a comment"
            //   aria-label="Sarch"
            />
            
          </form>
        </div>
      </div>
      <div className="card my-2 ">
        <div className="media text-muted d-flex pt-3 justify-content mx-2">
          <svg
            className="bd-placeholder-img d-inline rounded-circle"
            width="40"
            height="40"
            xmlns="http://www.w3.org/1000/svg"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>
          <p className="media-body pb-3 mb-0 small lh-125  ">
            <strong className="d-block text-gray-dark">
              @username. <a href="#"> Follow</a>
            </strong>
            Donec id elit non mi portas, tellus ac cursuentum massa justo sit
            amet risus.
          </p>
        </div>
        <div className="card">
          <Image
            src="/Images/mk.jpg"
            width={500}
            height={400}
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div className="my-1 d-flex justify-content-between">
          <div className="mx-4 d-flex justify-content-around">
            <div>
              <Image
                src="/Images/like.svg"
                width={35}
                height={35}
                className="img-fluid "
                alt="Responsive image"
              />
            </div>
            <div className="mx-3">
              <Image
                src="/Images/ichat.png"
                width={40}
                height={40}
                className="img-fluid ml-4"
                alt="Responsive image"
              />
            </div>
            <div className="mt-1 align-items-center">
              <Image
                src="/Images/send.png"
                width={32}
                height={32}
                className="img-fluid ml-1"
                alt="Responsive image"
              />
            </div>
          </div>
          <div className=" mx-3">
            <Image
              src="/Images/bookmark-regular.svg"
              width={35}
              height={35}
              className="img-fluid "
              alt="Responsive image"
            />
          </div>
        </div>
        <div> 
        <form className="d-flex">
            <input
              className="w-100 card border-bottom-0 form-control rounded-0 my-1 px-5"
              type="text"
              placeholder="Add a comment"
            //   aria-label="Sarch"
            />
            
          </form>
        </div>
      </div>

      
    </>
  );
}
