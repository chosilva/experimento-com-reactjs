import { BASE_URL } from "./apiConfig";

// serverStatus.ts
export async function checkServerStatus(): Promise<boolean> {
  try {
    const response = await fetch(BASE_URL + "/status-server"); // Rota no seu servidor para verificar o status
    console.log(response);
    return response.ok; // Retorna true se a resposta for OK (código 200), caso contrário retorna false
  } catch (error) {
    console.error("Erro ao verificar o status do servidor:", error);
    return false; // Retorna false em caso de erro
  }
}
