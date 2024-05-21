import { useState } from "react";
import Accordion from "../../components/shared/Accordion";
import DataTable from "../../components/shared/DataTable";
import Header from "../../components/shared/Header";
import SideModal from "../../components/shared/SideModal";

const AllUsers = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-y-4">
      <Header
        title="All Users"
        addBtnText="Add new user"
        onClickBtn={() => setIsOpen(true)}
      />
      <Accordion title="Users">
        <DataTable
          cells={[
            "Full name",
            "Last name",
            "Username",
            "Email",
            "Phone",
            "EMP code",
            "User type",
            "User group",
            "Status",
            "Action",
          ]}
        />
        <SideModal
          isOpen={isOpen}
          title="Add Users"
          onClickClose={() => setIsOpen(false)}
          textBoxes={[
            "First Name",
            "Last Name",
            "Email",
            "Phone",
            "Password",
            "EMP Code",
          ]}
          radioBoxes={[
            {
              title: "Sex",
              items: [
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ],
            },
          ]}
          dropdowns={[
            {
              items: [
                { label: "1", value: "one" },
                { label: "2", value: "two" },
              ],
              title: "User groups",
            },
          ]}
          addBtnText="Add user"
        />
      </Accordion>
    </div>
  );
};
export default AllUsers;
