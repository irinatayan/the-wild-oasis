import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable.jsx";
import Button from "../ui/Button.jsx";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row type="horizontal">
        <CabinTable />
      </Row>
      <Row>
        <Button onClick={() => setShowForm((showForm) => !showForm)}>
          Add new
        </Button>
      </Row>
      {showForm && <CreateCabinForm />}
      <Row></Row>
    </>
  );
}

export default Cabins;
