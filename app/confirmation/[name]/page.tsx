import ConfitmationAlert from "@/components/ConfitmationAlert";
import React from "react";

export default function page({
  params: { name },
}: {
  params: { name: string };
}) {
  return (
    <div className="grid place-items-center h-[100vh] bg-light-grey">
      <ConfitmationAlert name={name.toUpperCase()} />
    </div>
  );
}
