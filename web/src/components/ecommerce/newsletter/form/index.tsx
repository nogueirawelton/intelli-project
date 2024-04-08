"use client";

interface FormProps {
  placeholder: string;
  submit: string;
}

export function Form({ placeholder, submit }: FormProps) {
  return (
    <form className="mt-12 flex flex-col items-center justify-center gap-2 lg:flex-row">
      <input
        type="text"
        placeholder={placeholder}
        className="h-12 w-full max-w-[425px] border-2 border-zinc-800 px-4 text-zinc-800 placeholder:text-zinc-700"
      />
      <button className="h-12 w-full max-w-[425px] bg-zinc-800 px-4 font-medium uppercase text-white transition-colors duration-500 hover:bg-zinc-600 lg:w-fit">
        {submit}
      </button>
    </form>
  );
}
