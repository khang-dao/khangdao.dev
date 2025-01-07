export default function FormItem({
  children,
  id,
  name,
  type,
  className,
  value,
  onChange,
}: {
  children: string;
  id: string;
  name: string;
  type: string;
  className: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={children}
          value={value}
          onChange={onChange}
          className={`w-full resize-none rounded-lg border-[3px] border-blue-dark-accent p-2 font-spartan text-black ${className}`}
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={children}
          value={value}
          onChange={onChange}
          className={`w-full rounded-lg border-[3px] border-blue-dark-accent p-2 font-spartan text-black ${className}`}
          required
        />
      )}
    </div>
  );
}
