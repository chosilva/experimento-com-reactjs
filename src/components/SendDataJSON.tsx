import React, { useState } from "react";
import { BASE_URL } from "../utils/apiConfig";

interface FormData {
  name: string;
  msg: string;
}

export function SendDataJSON() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    msg: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(BASE_URL + "/send-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso!");
      } else {
        console.error("Erro ao enviar os dados");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Mensagem:
        <input
          type="text"
          name="msg"
          value={formData.msg}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default SendDataJSON;
