"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.action";
import { useRouter } from "next/navigation";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const document = await createDocument({ userId, email });
      router.push(`/documents/${document.id}`);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };
  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md rounded-xl"
    >
      <Image src="/assets/icons/add.svg" alt="add" width={24} height={24} />
      <p className="hidden sm:block capitalize">Start a blank document</p>
    </Button>
  );
};

export default AddDocumentBtn;
