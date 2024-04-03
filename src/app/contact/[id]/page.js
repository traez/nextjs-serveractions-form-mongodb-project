import HeadingText from "@/components/HeadingText";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { getContact } from "@/lib/data";
import { updateContact } from "@/lib/action";

const SingleContact = async ({ params }) => {
  const { id } = params;
  const contact = await getContact(id);
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-stretch">
      <HeadingText
        title="Single Contact"
        description="View & Update Contact Below"
      />
      <Navbar />
      <div className="flex flex-col justify-center items-center w-[30rem] m-auto">
        <form
          action={updateContact}
          className="bg-gray-100 items-center p-2 rounded w-full"
        >
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <input type="text" name="id" hidden defaultValue={contact.id} />
              <label className="text-gray-700">FirstName</label>
              <Input
                type="text"
                placeholder={contact.firstName}
                name="firstName"
              />
            </div>
            <div className="w-1/2 pr-2 flex flex-col">
              <label className="text-gray-700">isNigerian</label>
              <select name="isNigerian">
                <option value="true">Nigerian</option>
                <option value="false">Not Nigerian</option>
              </select>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="text-gray-700">Email</label>
              <Input type="text" placeholder={contact.email} name="email" />
            </div>
            <div className="w-1/2 pr-2">
              <label className="text-gray-700">Contact Number</label>
              <Input type="number" placeholder={contact.phone} name="phone" />
            </div>
          </div>
          <button className="btn btn-wide bg-orange-400" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </section>
  );
};

export default SingleContact;
