import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="hero">
        <h1>Plataforma Educacional LearnFlix</h1>
        <p>
          Unificando em um sistema integrado as necessidades de professores,
          alunos e gestores acadêmicos com foco em usabilidade.
        </p>
        <Link
          to="/painel"
          className="btn"
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          Acessar Painel Dinâmico
        </Link>
      </section>

      <section className="section">
        <h2 className="section-title">Perfis de Acesso</h2>
        <div className="grid">
          <Card
            showImage={true}
            title="Para Professores"
            description="Ferramentas para planejamento didático e acompanhamento individualizado de alunos."
            buttonText="Área do Docente"
          />
          <Card
            showImage={true}
            title="Para Alunos"
            description="Acesso a materiais didáticos, monitoramento de progresso e interação com a comunidade."
            buttonText="Área do Aluno"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
