# Website Institucional — Template Base & Portfolio

Template institucional moderno desenvolvido em React, focado em alta performance, responsividade e conversão direta via WhatsApp. Estruturado de forma modular para servir como base reutilizável para futuros projetos de landing pages e sites corporativos.

---

## 🛠️ Tecnologias Utilizadas

- **Framework Front-end:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Linguagem:** JavaScript (ES6+)
- **Estilização:** Tailwind CSS / CSS Modules
- **Ícones:** Lucide React / React Icons
- **Deploy:** Vercel / Cloudflare Pages

---

## 📁 Estrutura do Projeto

```text
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Imagens dos projetos, logos e mídias estáticas
│   │   ├── projects/
│   │   └── brand/
│   ├── components/          # Componentes visuais reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ContactSection.jsx
│   ├── data/                # Dados centralizados e mockados
│   │   └── projectsData.js   # Catálogo completo de serviços/projetos
│   ├── styles/              # Configurações globais de CSS
│   ├── App.jsx              # Composição principal das seções
│   └── main.jsx             # Ponto de entrada da aplicação
├── .env.example             # Exemplo de variáveis de ambiente
├── package.json
└── vite.config.js
```

---

## ⚙️ Configurações Principais

### 1. Atualização dos Projetos (`src/data/projectsData.js`)
Os projetos seguem um schema unificado:

```javascript
export const projectsData = [
  {
    id: 1,
    title: 'Nome do Projeto',
    category: 'Área de Atuação',
    image: projectImg,
    description: 'Resumo técnico detalhado da execução.',
    area: 'Sob consulta', // Ou metragem exata: '450m²'
    location: 'Cidade, UF'
  }
];
```

### 2. Integração WhatsApp
O link de conversão direta para o WhatsApp utiliza a API oficial com mensagem pré-definida:

```javascript
const phoneNumber = "5521999999999"; // DDI + DDD + Número sem espaços/traços
const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para serviços técnicos.");
const whatsappUrl = `[https://wa.me/$](https://wa.me/$){phoneNumber}?text=${message}`;
```

---

## 🚀 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```

---

## 📋 Checklist de Manutenção Periódica

- [ ] Verificar integridade e resolução das fotos em `src/assets`.
- [ ] Testar links de redirecionamento do WhatsApp em dispositivos desktop e mobile.
- [ ] Checar renovação do domínio e validade do certificado SSL.
- [ ] Executar `npm audit` para corrigir dependências vulneráveis.
- [ ] Analisar métricas de velocidade no Google PageSpeed Insights.