import ListBoys from "./ListBoys";
import ListGirls from "./ListGirls";

function List() {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="grid grid-cols-2">
        <ListGirls />
        <ListBoys />
      </div>
    </div>
  );
}

export default List;
