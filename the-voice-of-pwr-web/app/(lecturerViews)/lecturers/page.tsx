"use client";
import { useState } from "react";
import OpinionForm from "@/components/OpinionForm";
import { Card, CardHeader } from "@/components/ui/card";

export default function Lecturer() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <main>
      <button onClick={toggleForm}>{isFormVisible ? "Cofnij" : "Dodaj"}</button>
      {isFormVisible && <OpinionForm />}
    </main>
  );
}
