function FormItem({ children, id, name, type, className }) {
  return (
    <div>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={children}
          className={`${className} resize-none rounded-lg border border-[3px] border-[#DAEBFF] p-2 font-lekton text-[#ACACAC] w-full`}
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={children}
          className={`${className} rounded-lg border border-[3px] border-[#DAEBFF] p-2 font-lekton text-[#ACACAC] w-full`}
          required
        />
      )}
    </div>
  );
}

export default FormItem;
