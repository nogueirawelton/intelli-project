"use client";

interface FormProps {
  placeholder: string;
  submit: string;
}

export function Form({ placeholder, submit }: FormProps) {
  return (
    <form className="flex justify-center flex-col lg:flex-row mt-12 items-center gap-2">
      <input
        type="text"
        placeholder={placeholder}
        className="h-12 border-2 text-zinc-800 border-zinc-800 max-w-[425px] w-full px-4 placeholder:text-zinc-700"
      />
      <button className="h-12 px-4 max-w-[425px] w-full lg:w-fit hover:bg-zinc-600 transition-colors duration-500 uppercase text-white bg-zinc-800 font-medium">
        {submit}
      </button>
    </form>
  );
}
