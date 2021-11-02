import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Head from "next/head";
import Header from "../components/Header";
import { getSession, useSession } from "next-auth/client";
import Image from "next/image";
import ImgTemplate1 from "../images/Google Docs.png";
import ImgTemplate2 from "../images/Google Docs (1).png";
import Login from "../components/Login";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { useState } from "react";

export default function Home() {
  const [session] = useSession();
  const [showModal, setShowModal] = useState(false);

  if (!session) return <Login />;

  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalBody>
        <input
          type="text"
          value={input}
          onChange={() => setInput(e.target.value)}
          className="outline-none w-full"
          placeholder="Enter name of document..."
          onKeyDown=""
        />
      </ModalBody>
    </Modal>
  );

  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700">Start a new document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              rounded={true}
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
          <div className="flex flex-grow">
            <div className="mr-5">
              <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
                <Image src="https://links.papareact.com/pju" layout="fill" />
              </div>
              <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
                Blank
              </p>
            </div>
            <div className="mr-5">
              <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
                <Image src={ImgTemplate1} layout="fill" />
              </div>
              <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
                Project proposal
              </p>
            </div>
            <div>
              <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
                <Image src={ImgTemplate2} layout="fill" />
              </div>
              <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
                Brochure
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow"> Recent documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
