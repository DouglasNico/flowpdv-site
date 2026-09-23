---
name: "FlowPDV site"
description: "Caderno de produto: clareza, estrutura e identidade FlowPDV."
colors:
  primary: "#b94b1b"
  paper: "#f5f4ef"
  surface: "#ffffff"
  ink: "#222923"
  muted: "#60665f"
  line: "#dedfd6"
  tint: "#f0dac7"
  gallery-accent: "#f5a779"
  hero-photo-backdrop: "#e3d3bd"
  hero-screen-backdrop: "#f5f6f7"
typography:
  headline-emphasis:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontWeight: 400
  display:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(38px, 4.2vw, 62px)"
    fontWeight: 600
  body:
    fontFamily: "DM Sans, sans-serif"
rounded:
  sm: "8px"
  md: "14px"
  lg: "16px"
  hero-scene: "12px"
  hero-scene-mobile: "9px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
---

# Design System: FlowPDV site

## Overview

**Creative North Star: "Caderno de produto"**

Um caderno editorial de produto: títulos amplos, intervalos generosos e capturas reais demonstram o sistema. Marfim e grafite estruturam a leitura; laranja conecta marca, ênfases e chamadas para demonstração. A expressividade tipográfica convive com informação comercial precisa.

Publicação autorizada pelo usuário; atualização do hero em preparação, ainda sem confirmação de publicação. A revisão desta rodada se limita ao hero; testes funcionais completos e revisão ampla permanecem adiados para amanhã.

**Key Characteristics:**
- Capturas reais do produto como evidência.
- Hero em sans-serif; ênfases editoriais em serifada nas demais seções.
- Galeria grafite e chamadas laranja.

Sistema extraído de `reconstruction.css`, `hero-counter.css` e dos estilos-base. A rodada de hero recebeu parecer de liberação limitado ao código e às capturas desktop/mobile; decodificação da imagem, ausência de overflow e ampliação foram verificadas pela equipe. Isso não equivale a uma revisão de todo o site. Evidências e limitações constam em `.impeccable/surface-brief.md`.

## Colors

### Primary
Laranja queimado conduz a ação principal e conecta a interface aos logos existentes. Um laranja claro marca a captura selecionada na galeria grafite; o tom pálido acolhe a faixa de contato.

### Neutral
Marfim no fundo, branco nas superfícies, grafite para leitura e cinza quente para informação secundária. Divisórias delimitam grupos sem sombras permanentes.

Os fundos hero-photo-backdrop e hero-screen-backdrop pertencem apenas à cena de balcão e ao enquadramento da captura; não ampliam a paleta padrão dos demais componentes.

**The Signal Rule.** A cor deve comunicar ação, seleção ou estado; não transformar cada dado em um bloco colorido.

## Typography

A família de corpo consta no frontmatter. Instrument Serif dá voz editorial às ênfases dos títulos; DM Sans compõe o restante dos títulos, a navegação, o texto e as ações.
O título principal usa o papel display em sans-serif, sem ênfase serifada. Acima de 1500px chega a 64px; até 1000px usa 43px e até 700px usa clamp(37px, 10vw, 48px). A combinação tipográfica das demais seções permanece intacta. Rótulos permanecem menores e firmes. Valores comparáveis usam algarismos tabulares quando disponíveis.

## Layout

A largura máxima é de 1240px, com margens laterais fluidas de 18px a 40px e respeito às áreas seguras do aparelho. O hero usa composição assimétrica: texto alinhado à esquerda e cena de balcão à direita, em proporções .78fr/1.22fr. A cena não gira; uma captura real do PDV ocupa o monitor e abre a ampliação existente. Até 1000px, as proporções passam a .9fr/1.1fr; até 700px, texto e cena se empilham. A faixa de capacidades usa duas colunas no celular.

As demais seções preservam a composição existente. A galeria usa fundo grafite e miniaturas com seleção evidente. Os ajustes gerais de 1100px e 800px reduzem margens e intervalos. Até 680px, a margem lateral fica em 18px, os conteúdos se empilham e as miniaturas usam quatro colunas.

## Elevation & Depth

O corpo permanece majoritariamente plano. Sombras suaves destacam capturas do produto, telefone e diálogo ampliado. A galeria escura cria um plano distinto; a faixa de contato usa laranja pálido.

## Shapes

Cantos discretamente arredondados suavizam campos e superfícies. Bordas finas e agrupamento espacial definem a estrutura. Os raios reutilizados estão no frontmatter; não aplicar o maior raio a todos os elementos.

A cena do hero usa seus raios locais hero-scene e hero-scene-mobile; essa exceção não altera os raios do sistema. O recorte da captura acompanha a tela do monitor, sem rotação da fotografia.

## Components

### Buttons
Ação principal em laranja com texto branco. Secundárias usam superfície neutra e borda. Links de texto mantêm indicação de interação sem parecer botões primários. Foco visível recebe contorno laranja com afastamento. Transições de estado são discretas e respeitam movimento reduzido.

### Navigation
Cabeçalho claro com links concisos e chamadas para demonstração. A navegação móvel conserva o menu existente. Na galeria, miniatura selecionada recebe borda laranja clara; controles permitem trocar a captura e abrir sua ampliação.

### Cards / Containers
Capturas reais são o principal material visual. Contêineres enquadram imagens, planos e conteúdo sem substituir a hierarquia editorial.

### Hero counter
A cena de comércio é uma ilustração fotográfica gerada, identificada como tal; não representa um cliente real. A interface dentro do monitor é a captura existente do produto, aplicada em HTML/CSS. O controle de ampliação preserva a captura original e usa foco interno laranja. A procedência e o prompt exato ficam em `assets/hero-balcao-v2.provenance.md`.

## Do's and Don'ts

### Do:
- **Do** preservar as marcas existentes e seus arquivos.
- **Do** tornar seleção, foco e ações primárias identificáveis.
- **Do** manter nomes, valores e estados vinculados aos dados reais.

### Don't:
- **Don't** alterar IDs, autenticação ou regras de negócio para obter um efeito visual.
- **Don't** usar verde como identidade dominante ou adicionar brilho decorativo.
- **Don't** extrapolar a verificação do hero para uma validação completa do site.

## Adaptação de telas — 23/09/2026

`responsive.css` é a camada final de adaptação por espaço disponível em CSS pixels. Cabeçalho de 88px no desktop, 76px até 1100px, 68px nas janelas compactas e 60px no celular deitado. Menu começa no fim do cabeçalho, limita altura pela viewport dinâmica e permite rolagem interna. A hero reduz tipografia e espaçamento em janelas baixas; no celular deitado mantém texto e cena lado a lado. Telas largas preservam o limite de 1240px.

Preço tem tipografia fluida e quebra de linha disponível; conteúdo e mensalidade R$ 217,90 são preservados. Galeria no celular dispõe imagem e indicação de ampliação verticalmente. Telefone ilustrativo fica alinhado sem rotação nas larguras pequenas. Botões flutuantes cedem espaço às seções de planos/contato/rodapé e ao menu aberto; o foco por teclado permanece visível.

Verificação: matriz Chromium de 320px a 2560px, tablets nas duas orientações, áreas úteis equivalentes a notebooks HD/FHD com escala 125% e 150%, e mudança de orientação. Simulação não equivale a teste físico de Windows/iOS/Android ou Safari. Evidência central em `../flowpdv-sistema/output/reconstrucao-web-20260923/responsive-*`.

## Galeria e estados — 23/09/2026
Cabeçalho tem apenas um link Área do cliente dentro da navegação compartilhada. Links dos três recursos terminam na mesma linha quando em colunas. Hover da ação laranja usa #9f3e15 e branco; ações grafite usam #304031. Links recebem sublinhado; FAQ e miniaturas não deslocam ao passar o mouse. Telas novas estão mapeadas em assets/screenshots-20260923.md. Mockup do Gestor usa interface atual com dados ilustrativos identificados.

O visualizador mantém diálogo acessível e uma moldura interna elegível para Fullscreen API. No celular usa a viewport inteira como base e tenta tela cheia nativa a partir do toque. Rotação natural acompanha o aparelho; botão Horizontal tenta lock apenas por ação explícita, com mensagem alternativa se recusado. Ao fechar, libera somente a orientação/tela cheia que o visualizador adquiriu. Não há promessa de acesso à trava de rotação do sistema.
