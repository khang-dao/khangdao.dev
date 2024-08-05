function FormItem({
  children,
  id,
  name,
  type,
  className,
}: {
  children: React.ReactNode;
  id: string;
  name: string;
  type: string;
  className: string;
}) {
  return (
    <div>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={children as string}
          className={`${className} w-full resize-none rounded-lg border-[3px] border-[#DAEBFF] p-2 font-spartan text-[#ACACAC]`}
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={children as string}
          className={`${className} w-full rounded-lg border-[3px] border-[#DAEBFF] p-2 font-spartan text-[#ACACAC]`}
          required
        />
      )}
    </div>
  );
}

export default FormItem;
