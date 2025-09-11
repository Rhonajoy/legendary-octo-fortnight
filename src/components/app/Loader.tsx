import type { JSX } from "react";

export default function Loader(): JSX.Element {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-500"></div>
    </div>
  );
}
