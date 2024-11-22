function InputForm({ type, placeholder, required }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="rounded bg-white px-2 py-1 outline-none focus:outline-[#d13d4c]"
    />
  );
}

export default InputForm;
