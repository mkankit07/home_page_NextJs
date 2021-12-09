import Head from "next/head";
import Image from "next/image";
export default function Sidebar() {
  return (
    <>
      
        <ul className="nav nav-pills position-fixed flex-column mb-auto">
          <li className="nav-item menu  ">
            <a href="#" className="nav-link active d-flex text-align-center align-items-center"  aria-current="page">
              <Image
                src="/Images/house.png"
                alt="Picture of the author"
                width={25}
                height={25}
              />
              <h6 className="mx-2 mt-2 ">Home</h6>
            </a>
          </li>
          <li className="nav-item menu  ">
            <a href="#" className="nav-link link-dark d-flex text-align-center align-items-center"  aria-current="page">
              <Image
                src="/Images/n.png"
                alt="Picture of the author"
                width={25}
                height={25}
              />
              <h6 className="mx-2 mt-2 ">Notifications</h6>
            </a>
          </li>
          <li className="nav-item menu  ">
            <a href="#" className="nav-link link-dark d-flex text-align-center  align-items-center"  aria-current="page">
              <Image
                src="/Images/B.svg"
                alt="Picture of the author"
                width={25}
                height={25}
              />
              <h6 className="mx-2 mt-2 ">Save</h6>
            </a>
          </li>
  
          <li className="nav-item menu  ">
            <a href="#" className="nav-link link-dark d-flex text-align-center align-items-center"  aria-current="page">
              <Image
                src="/Images/F.png"
                alt="Picture of the author"
                width={25}
                height={25}
              />
              <h6 className="mx-2 mt-2 ">Files</h6>
            </a>
          </li>
          <li className="nav-item menu  ">
            <a href="#" className="nav-link link-dark d-flex text-align-center align-items-center"  aria-current="page">
              <Image
                src="/Images/C.png"
                alt="Picture of the author"
                width={25}
                height={25}
              />
              <h6 className="mx-2 mt-2 ">Add Card</h6>
            </a>
          </li>
          <li className="nav-item menu  ">
            <a href="#" className="nav-link link-dark d-flex text-align-center align-items-center"  aria-current="page">
              <Image
                src="/Images/U.png"
                alt="Picture of the author"
                width={25}
                height={25}
              />
              <h6 className="mx-2 mt-2 ">User</h6>
            </a>
          </li>
          <li className="nav-item menu  ">
            <a href="#" className="nav-link link-dark d-flex text-align-center align-items-center"  aria-current="page">
              <Image
                src="/Images/M.png"
                alt="Picture of the author"
                width={25}
                height={25}
              />
              <h6 className="mx-2 mt-2 ">More</h6>
            </a>
          </li>
        </ul>
     
    </>
  );
}