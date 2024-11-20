const testGirl = [
  { name: "Alexia Lastia Santos", idade: 2, status: "v" },
  { name: "Janet", idade: 5, status: "x" },
  { name: "Bia", idade: 6, status: "v" },
];

function ListGirls() {
  return (
    <div className="border-r">
      <h2 className="text-center text-xl font-medium lg:text-2xl">Meninas</h2>
      <div>
        <ul className="grid grid-cols-[0.2fr_1fr] text-sm text-gray-600">
          <li>I</li>
          <li>Nome</li>
        </ul>
        <ul>
          {testGirl.map((girl) => (
            <div key={girl.name} className="grid grid-cols-[0.2fr_1fr] text-sm">
              <li>{girl.idade}</li>
              <li className="truncate">{girl.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListGirls;
