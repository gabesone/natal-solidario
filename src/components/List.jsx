import { useState } from "react";
import { useEffect } from "react";

import ListBoys from "./ListBoys";
import ListGirls from "./ListGirls";
import { fetchData } from "../api/db";
import Modal from "./Modal";
import Form from "./Form";

function List() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      const result = await fetchData();
      setData(result);
    }

    getData();
  }, []);

  console.log(data);

  return (
    <div className="container mx-auto my-8 px-4">
      {data.user_list?.map((a) => (
        <p key={a.id}>{a.name}</p>
      ))}
      <div className="grid grid-cols-2">
        <ListGirls />
        <ListBoys />
      </div>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-72 px-2">
          <Form />
        </div>
      </Modal>
    </div>
  );
}

export default List;
