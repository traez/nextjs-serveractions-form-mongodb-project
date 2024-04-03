import CreateForm from "@/components/CreateForm";
import HeadingText from "@/components/HeadingText";
import { FiHome } from "react-icons/fi";
import Link from "next/link";

const CreatePage = () => {
  return (
    <section>
      <HeadingText title="Add Contact" description="Add Contacts Below" />
      <nav className="flex gap-6 justify-between items-center cursor-pointer px-4">
        <Link className="flex items-center gap-1" href={"/"}>
          <FiHome /> <span>Home</span>
        </Link>
      </nav>
      <div className="flex flex-col items-center justify-center">
        <CreateForm />
      </div>
    </section>
  );
};

export default CreatePage;
