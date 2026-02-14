import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Painel() {
  const [professores, setProfessores] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [busca, setBusca] = useState("");

  const nomesFamosos = [
    "Tony Stark",
    "Bruce Wayne",
    "Hermione Granger",
    "Darth Vader",
    "Michael Scott",
    "Elle Woods",
  ];

  const emailsFamosos = [
    "tony@starkindustries.com",
    "bruce@waynecorp.com",
    "hermione@hogwarts.edu",
    "vader@empire.gov",
    "mscott@dundermifflin.com",
    "elle@harvard.edu",
  ];

  const cidadesFamosas = [
    "Nova York",
    "Gotham City",
    "Londres",
    "Estrela da Morte",
    "Scranton",
    "Los Angeles",
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na rede");
        }
        return response.json();
      })
      .then((data) => {
        const personagens = data.map((user, index) => ({
          id: user.id,
          name: nomesFamosos[index] || user.name,
          email: emailsFamosos[index] || user.email,
          address: { city: cidadesFamosas[index] || user.address.city },
        }));
        setProfessores(personagens);
        setCarregando(false);
      })
      .catch(() => {
        setErro(true);
        setCarregando(false);
      });
  }, []);

  const professoresFiltrados = professores.filter((prof) =>
    prof.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <Header />
      <section className="section" style={{ minHeight: "70vh" }}>
        <h2 className="section-title">Corpo Docente</h2>

        <div
          style={{
            marginBottom: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link to="/" className="btn" style={{ textDecoration: "none" }}>
            Voltar para Home
          </Link>

          <input
            type="text"
            placeholder="Buscar pelo nome..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            style={{
              padding: "12px",
              width: "100%",
              maxWidth: "400px",
              borderRadius: "4px",
              border: "1px solid #ffc107",
              backgroundColor: "#222",
              color: "#fff",
              fontSize: "1rem",
            }}
          />
        </div>

        {carregando && (
          <h3 style={{ color: "#ffc107" }}>Carregando dados...</h3>
        )}

        {erro && (
          <h3 style={{ color: "#ff5252" }}>
            Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.
          </h3>
        )}

        {!carregando && !erro && (
          <div className="grid">
            {professoresFiltrados.length > 0 ? (
              professoresFiltrados
                .slice(0, 6)
                .map((prof) => (
                  <Card
                    key={prof.id}
                    showImage={false}
                    title={prof.name}
                    description={`E-mail: ${prof.email} | Cidade: ${prof.address.city}`}
                    buttonText="Ver Disciplinas"
                  />
                ))
            ) : (
              <p style={{ color: "#ccc" }}>
                Nenhum professor encontrado com esse nome.
              </p>
            )}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
