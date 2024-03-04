import React, { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom"; // Importando BrowserRouter e outras dependências
import AppRoutes from "./routes";
import { checkServerStatus } from "./utils/checkServerStatus";

const App: React.FC = () => {
  const [isServerOnline, setIsServerOnline] = useState<boolean | null>(null);

  useEffect(() => {
    async function fetchServerStatus() {
      const status = await checkServerStatus();
      setIsServerOnline(status);
    }

    fetchServerStatus();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/send-data">enviar dados</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="server-status">
          <div>
            {isServerOnline === null && (
              <p>Verificando o status do servidor...</p>
            )}
            {isServerOnline === true && <p>O servidor está online!</p>}
            {isServerOnline === false && <p>O servidor está offline.</p>}
          </div>
        </div>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
