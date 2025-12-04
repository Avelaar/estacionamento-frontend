import { useEffect, useState } from "react";
import api from "../services/api";

export function ListaVeiculos() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    api.listarVeiculos().then((data) => {
      setVeiculos(data);
    });
  }, []);

  return (
    <div>
      <h2>Veículos cadastrados</h2>

      <ul>
        {veiculos.map((v: any) => (
          <li key={v.id}>
            {v.placa} — {v.modelo} — {v.cor}
          </li>
        ))}
      </ul>
    </div>
  );
}
