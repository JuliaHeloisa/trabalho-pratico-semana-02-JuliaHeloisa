import React from 'react';

function App() {
  return (
    <div className="cv-container">
      {/* Cabeçalho básico */}
      <header style={{textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0'}}>
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces"
          alt="Foto de Perfil"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '3px solid white'
          }}
        />
        <h1 style={{color: '#333', marginTop: '10px'}}>Júlia Heloísa</h1>
        <p style={{color: '#666'}}>Estagiária SAP</p>
      </header>

      {/* Informações de Contato */}
      <section style={{
        backgroundColor: 'white',
        padding: '20px',
        margin: '20px',
        border: '1px solid #ddd'
      }}>
        <h2 style={{borderBottom: '2px solid #333', paddingBottom: '5px'}}>
          Informações de Contato
        </h2>
        <ul style={{listStyle: 'none', padding: '0'}}>
          <li>📍 Belo Horizonte, Brasil</li>
          <li>📧 julia1234@gmail.com</li>
          <li>📱 +55 31 99999-9999</li>
        </ul>
      </section>

      {/* Sobre Mim */}
      <section style={{
        backgroundColor: 'white',
        padding: '20px',
        margin: '20px',
        border: '1px solid #ddd'
      }}>
        <h2 style={{borderBottom: '2px solid #333', paddingBottom: '5px'}}>
          Sobre Mim
        </h2>
        <p style={{lineHeight: '1.6'}}>
          Sou estudante de Sistemas de Informação, no 2º semestre, com foco em
          soluções empresariais e tecnologia. Tenho interesse em SAP e busco uma
          oportunidade de estágio para aplicar meus conhecimentos em projetos práticos.
        </p>
      </section>

      {/* Experiência */}
      <section style={{
        backgroundColor: 'white',
        padding: '20px',
        margin: '20px',
        border: '1px solid #ddd'
      }}>
        <h2 style={{borderBottom: '2px solid #333', paddingBottom: '5px'}}>
          Experiência
        </h2>
        <div style={{marginBottom: '15px'}}>
          <h3 style={{color: '#444'}}>Estagiária SAP</h3>
          <p style={{color: '#666'}}>SAFRA • 2025 - Presente</p>
          <ul>
            <li>Atendimento a incidentes</li>
            <li>Gestão de rotina e entregas utilizando metodologias ágeis</li>
            <li>Apurar e realizar análises críticas dos indicadores mensais</li>
          </ul>
        </div>
        <div>
          <h3 style={{color: '#444'}}>Atendente</h3>
          <p style={{color: '#666'}}>JL Banca • 2018 - 2024</p>
          <ul>
            <li>Atendimento a clientes e fornecedores</li>
            <li>Controle de mercadorias e notas</li>
            <li>Procedimentos bancários</li>
          </ul>
        </div>
      </section>

      {/* Educação */}
      <section style={{
        backgroundColor: 'white',
        padding: '20px',
        margin: '20px',
        border: '1px solid #ddd'
      }}>
        <h2 style={{borderBottom: '2px solid #333', paddingBottom: '5px'}}>
          Educação
        </h2>
        <h3 style={{color: '#444'}}>Sistema de informação</h3>
        <p style={{color: '#666'}}>Pontifícia Universidade Católica de Minas Gerais</p>
        <p>2024 - 2028</p>
      </section>

      {/* Habilidades */}
      <section style={{
        backgroundColor: 'white',
        padding: '20px',
        margin: '20px',
        border: '1px solid #ddd'
      }}>
        <h2 style={{borderBottom: '2px solid #333', paddingBottom: '5px'}}>
          Habilidades
        </h2>
        <ul style={{
          listStyle: 'none',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <li>• Sistema SAP</li>
          <li>• Metodologia ágeis</li>
          <li>• Inglês intermediário</li>
          <li>• Habilitação B</li>
          <li>• Power BI básico</li>
        </ul>
      </section>

      {/* Links */}
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        marginTop: '20px'
      }}>
        <a href="https://github.com" style={{
          color: '#333',
          textDecoration: 'none',
          margin: '0 10px'
        }}>GitHub</a>
        <a href="https://linkedin.com" style={{
          color: '#333',
          textDecoration: 'none',
          margin: '0 10px'
        }}>LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;