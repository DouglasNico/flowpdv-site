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
typography:
  headline-emphasis:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontWeight: 400
  display:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(52px, 6.2vw, 88px)"
    fontWeight: 500
  body:
    fontFamily: "DM Sans, sans-serif"
rounded:
  sm: "8px"
  md: "14px"
  lg: "16px"
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

**Key Characteristics:**
- Capturas reais do produto como evidência.
- Títulos editoriais com ênfases em serifada.
- Galeria grafite e chamadas laranja.

Extração estática de `reconstruction.css` e dos estilos-base existentes em 23/09/2026. A implementação está em reconstrução. Testes completos, revisão e otimização foram adiados pelo usuário; não houve validação renderizada nesta documentação. A expressão específica da rodada está em `.impeccable/surface-brief.md`.

## Colors

### Primary
Laranja queimado conduz a ação principal e conecta a interface aos logos existentes. Um laranja claro marca a captura selecionada na galeria grafite; o tom pálido acolhe a faixa de contato.

### Neutral
Marfim no fundo, branco nas superfícies, grafite para leitura e cinza quente para informação secundária. Divisórias delimitam grupos sem sombras permanentes.

**The Signal Rule.** A cor deve comunicar ação, seleção ou estado; não transformar cada dado em um bloco colorido.

## Typography

A família de corpo consta no frontmatter. Instrument Serif dá voz editorial às ênfases dos títulos; DM Sans compõe o restante dos títulos, a navegação, o texto e as ações.
O título principal usa o papel display. Rótulos permanecem menores e firmes. Valores comparáveis usam algarismos tabulares quando disponíveis.

## Layout

A largura máxima é de 1240px, com margens totais de 80px. O hero centraliza título, explicação, ação e captura do sistema; as demais seções alternam texto e evidência visual. A galeria usa fundo grafite e miniaturas com seleção evidente. Os ajustes de 1100px e 800px reduzem margens e intervalos. Até 680px, a margem lateral fica em 18px, os conteúdos se empilham e as miniaturas usam quatro colunas.

## Elevation & Depth

O corpo permanece majoritariamente plano. Sombras suaves destacam capturas do produto, telefone e diálogo ampliado. A galeria escura cria um plano distinto; a faixa de contato usa laranja pálido.

## Shapes

Cantos discretamente arredondados suavizam campos e superfícies. Bordas finas e agrupamento espacial definem a estrutura. Os raios reutilizados estão no frontmatter; não aplicar o maior raio a todos os elementos.

## Components

### Buttons
Ação principal em laranja com texto branco. Secundárias usam superfície neutra e borda. Links de texto mantêm indicação de interação sem parecer botões primários. Foco visível recebe contorno laranja com afastamento. Transições de estado são discretas e respeitam movimento reduzido.

### Navigation
Cabeçalho claro com links concisos e chamadas para demonstração. A navegação móvel conserva o menu existente. Na galeria, miniatura selecionada recebe borda laranja clara; controles permitem trocar a captura e abrir sua ampliação.

### Cards / Containers
Capturas reais são o principal material visual. Contêineres enquadram imagens, planos e conteúdo sem substituir a hierarquia editorial.

## Do's and Don'ts

### Do:
- **Do** preservar as marcas existentes e seus arquivos.
- **Do** tornar seleção, foco e ações primárias identificáveis.
- **Do** manter nomes, valores e estados vinculados aos dados reais.

### Don't:
- **Don't** alterar IDs, autenticação ou regras de negócio para obter um efeito visual.
- **Don't** usar verde como identidade dominante ou adicionar brilho decorativo.
- **Don't** considerar esta documentação evidência de validação renderizada.
