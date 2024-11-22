import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import InputForm from "./InputForm";
import DatePicker from "react-datepicker";

function Form() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form action="submit" className="flex flex-col space-y-2 py-8">
      <InputForm type="text" placeholder="Nome" required={true} />
      <InputForm type="text" placeholder="Comunidade" required={true} />
      <InputForm type="text" placeholder="Idade" required={false} />

      <div className="flex flex-col gap-2">
        <div className="space-x-2">
          <input type="radio" id="masculino" name="sexo" value="Masculino" />
          <label htmlFor="masculino">Masculino</label>
        </div>
        <div className="space-x-2">
          <input type="radio" id="feminino" name="sexo" value="Feminino" />
          <label htmlFor="feminino">Feminino</label>
        </div>
      </div>

      <button className="rounded bg-[#d13d4c] py-1 font-bold text-red-50 transition-colors duration-300 hover:bg-[#ec4959]">
        Salvar
      </button>
    </form>
  );
}

export default Form;
