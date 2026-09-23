# 🌐 MEMÓRIA DO PROJETO — FLOWPDV SITE OFICIAL

> **Documentação Técnica, Arquitetura e Histórico de Versões da Landing Page Comercial**  
> *Última atualização:* 28 de Agosto de 2026  
> *Versão Oficial Atual:* **v1.9.1**  
> *Desenvolvedor:* Douglas Batista / batistadev  
> *URL Oficial:* [https://www.flowpdv.com.br](https://www.flowpdv.com.br)  
> *WhatsApp Oficial:* [https://wa.me/5519989632127](https://wa.me/5519989632127) ((19) 98963-2127)

---

## 📌 1. Visão Geral do Site
A landing page oficial do **FlowPDV** foi desenvolvida em **HTML5 Semântico, CSS3 Moderno (Vanilla com Design System Master Admin) e JavaScript Puro**, priorizando:
- **Alta Conversão:** Botões de chamada para ação direta com Douglas Batista no WhatsApp integrados com mensagens pré-configuradas.
- **Design Ultra-Premium:** Estética *Dark Slate (#0f172a)* com detalhes em *Ciano Neon (#38bdf8)*, *Indigo/Roxo (#6366f1)* e *Esmeralda (#10b981)*, Glassmorphism e tipografia Google Fonts (*Plus Jakarta Sans* e *JetBrains Mono*).
- **100% Responsivo & Mobile-First:** Experiência suave em smartphones (iOS e Android), tablets e monitores desktop com escalonamento de tela OS (125%/150%).
- **Proteção Anti-Zoom no Celular:** Desativação de zoom por duplo clique e gestos de pinça com `touch-action: manipulation` e listeners preventivos.

---

## 🚀 2. Recursos e Seções do Site

1. **Hero Section de Alto Impacto:**
   - Badge com a versão oficial (**v1.9.1**).
   - Headline magnética focada em velocidade (0ms de latência), estabilidade offline e acompanhamento móvel.
   - Showcase com prints reais em alta resolução do sistema FlowPDV (Frente de Caixa [F1], Curva ABC, Estoque e Auditoria) com alternância dinâmica em carrossel horizontal de chips.

2. **Benefícios & Recursos:**
   - Cards com ícones de vidro e gradiente para Frente de Caixa Ágil, Controle de Estoque, Curva ABC, Caderneta de Fiado com WhatsApp, Multi-Terminais e Backup em Nuvem.

3. **Seção "Gestão Mobile" (Central do Dono):**
   - Apresentação visual do companion app PWA (`cliente.flowpdv.com.br`) com mockup de smartphone AMOLED e lista de indicadores ao vivo (vendas do dia, saldo da gaveta, alertas de reposição e auditoria).

4. **Tabela Comparativa com Coluna Fixa (Sticky):**
   - Comparativo detalhado entre o FlowPDV e os sistemas tradicionais lentos do mercado.
   - No celular, conta com selo de deslize e fixação da primeira coluna para navegação intuitiva.

5. **Planos & Preços:**
   - Card Mensal, Semestral e Anual (Destaque Popular com 2 meses grátis).
   - Botões de contratação direta direcionados para o WhatsApp oficial com o plano desejado no texto.

6. **Perguntas Frequentes (FAQ):**
   - Sanfona interativa com as principais dúvidas dos comerciantes (impressoras térmicas, leitores, funcionamento offline, importação Excel).

7. **Menu Hambúrguer com Gaveta Lateral (Drawer):**
   - Navegação lateral fluida para celulares com fundo translúcido e links de rolagem suave com alinhamento rente aos títulos de seção.

---

## 📋 3. Histórico de Versões & Atualizações

- **v1.9.1 (28/08/2026):**
  - Padronização de todos os links de contato para **Douglas Batista (WhatsApp: 19 98963-2127)**.
  - Bloqueio completo de zoom duplo clique no celular.
- **v1.9.0 (28/08/2026):**
  - Atualização para alinhamento com a versão desktop v1.9.0.
- **v1.8.8 (28/08/2026):**
  - Reestruturação da versão mobile para padrão ultra-premium, carrossel de chips horizontais, sticky comparison table e alinhamento rente de rolagem.


## 23/09/2026 — Reconstrucao visual e publicacao autorizada
Nova camada reconstruction.css (Master em css/) com identidade clara, navegacao, superficies, formularios e responsividade. IDs e integracoes preservados. PRODUCT.md, DESIGN.md e .impeccable/design.json registram sistema. Usuario autorizou publicar todos os sites nesta noite, testes completos/otimizacao ficam para amanha. Previews locais sinteticas nao sao dados reais nem homologacao funcional. Publicacao e URLs devem ser confirmadas no registro final.

## 23/09/2026 — Hero com cena de balcão e tela real
- Pedido: substituir a abertura com aparência genérica; direção delegada pelo usuário ("segue o melhor").
- index.html: hero assimétrica, texto direto, CTA de demonstração e legenda que identifica o ambiente ilustrativo. A captura existente do PDV abre no diálogo de ampliação.
- hero-counter.css: estilos restritos à hero, composição em duas colunas no desktop e empilhamento no celular; demais seções preservadas.
- assets/hero-balcao-v2.jpg: cena ilustrativa, JPEG de 200.458 bytes. Prompt e procedência em assets/hero-balcao-v2.provenance.md. Higgsfield recusou geração por exigir plano Basic; imagem gerada com ferramenta nativa, sem contratação de plano.
- DESIGN.md, .impeccable/design.json e .impeccable/surface-brief.md: decisões e tokens atualizados.
- Verificação local: capturas desktop/celular, imagens decodificadas, ausência de overflow horizontal, abrir/fechar ampliação e sintaxe de site.js. Revisão Impeccable restrita à hero sem correções materiais; não equivale a teste funcional completo do ecossistema.
- Publicação: envio para main autorizado pela instrução persistente do usuário; confirmação HTTPS será registrada no acompanhamento central após implantação.

## 23/09/2026 — Valor comercial padronizado
Usuário definiu R$ 217,90 para os valores do plano no site. index.html: mensagem do botão Consultar condições corrigida de R$ 89,90 para R$ 217,90; preço visível já estava correto. Busca nos arquivos HTML/JS/JSON confirmou apenas essa divergência comercial. Valores de produtos das prévias ilustrativas não representam mensalidade.

## 23/09/2026 — Responsividade em telas e escalas
- responsive.css: margens fluidas/áreas seguras, cabeçalho consistente, menu rolável em landscape, hero compacta, preço que cabe em 320px, galeria móvel inteira, telefone sem inclinação em telas pequenas e rodapé adaptável.
- index.html: inclusão da folha final, versão de site.js e dimensões naturais da foto corrigidas.
- site.js: IntersectionObserver recolhe os atalhos flutuantes nas seções com contato direto, evitando sobreposição; foco mantido.
- DESIGN.md e .impeccable: regras de adaptação documentadas.
- Verificação: matriz de 16 viewports 320–2560px incluindo HD/FHD 125%/150%, tablet e celular nas duas orientações; confirmação específica da galeria, ações e rotação após correções. Sem overflow de página, cabeçalho sobreposto ou preço cortado nos cenários conferidos. Evidências no output/reconstrucao-web-20260923 do repositório central; não substituem teste físico em dispositivos/Safari.
