export default function FormItem({
  children,
  id,
  name,
  type,
  className,
}: {
  children: string;
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
          placeholder={children}
          className={`w-full resize-none rounded-lg border-[3px] border-blue-dark-accent p-2 font-spartan text-black ${className}`}
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={children}
          className={`w-full rounded-lg border-[3px] border-blue-dark-accent p-2 font-spartan text-black ${className}`}
          required
        />
      )}
    </div>
  );
}
