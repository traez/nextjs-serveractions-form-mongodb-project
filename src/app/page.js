import Link from "next/link";
import HeadingText from "@/components/HeadingText";
import Navbar from "@/components/Navbar";
import { deleteContact } from "@/lib/action";
import { getContacts, upload } from "@/lib/data";
import { FiTrash, FiEdit } from "react-icons/fi";

export default async function Home() {
  const contacts = await getContacts();

  return (
    <main>
      <HeadingText title="Techamaka Contact Book" description="All Contacts Below" />
      <Navbar />
      <div className="flex flex-col px-4 py-4">
        <div>
          <table className="table-auto w-full text-center whitespace-nowrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-tl rounded-bl">
                  FirstName
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">
                  isNigerian ?
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">
                  Contact #
                </th>
                <th className="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.firstName}
                  </td>
                  {contact.isNigerian ? (
                    <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                      True
                    </td>
                  ) : (
                    <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                      False
                    </td>
                  )}
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.email}
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {contact.phone}
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3 flex items-center gap-1">
                    <Link href={`contact/${contact.id}`}>
                      <FiEdit />
                    </Link>
                    <form action={deleteContact}>
                      <input hidden name="id" defaultValue={contact.id} />
                      <button type="submit" className="mt-2">
                        <FiTrash style={{ color: "red" }} />
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <article className="flex flex-col px-4 py-4 border-2 border-orange-800 border-solid">
        <h2 className="border-2 border-orange-800 border-solid font-bold">React Server Component Upload, Attempt only in Dev Mode</h2>
        <form action={upload} className="flex flex-col px-4 py-4 border-2 border-orange-800 border-solid">
          <input type="file" name="file"/>
          <button type="submit" className="mt-2 text-white font-bold hover:text-black bg-orange-400 w-96">
            Upload
          </button>
        </form>
      </article>
    </main>
  );
}
