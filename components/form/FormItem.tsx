function FormItem({ children, id, name, type }) {
  return (
    <div>
      {
        type === "textarea"
        ? <textarea
            id={id}
            name={name}
            placeholder={children}
            className="resize-none p-2 font-lekton text-[#ACACAC] border border-[#DAEBFF] border-[3px] rounded-lg"
            required
          />
        : <input
            type={type}
            id={id}
            name={name}
            placeholder={children}
            className="p-2 font-lekton text-[#ACACAC] border border-[#DAEBFF] border-[3px] rounded-lg"
            required
          />
      }
    </div>
  );
}

export default FormItem;
