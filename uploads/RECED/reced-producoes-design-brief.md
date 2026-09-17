# RECED Produções — Design Brief
*Documento de trabalho — consolidação das decisões até o momento*

---

## 1. Sobre o cliente

**RECED Produções** é uma produtora audiovisual cristã. O nome vem da palavra bíblica *hesed* — o amor leal, misericordioso e constante de Deus.

- Canal YouTube: [@RECEDPRODUÇÕES](https://www.youtube.com/@RECEDPRODU%C3%87%C3%95ES)
- Instagram: [@recedproducoes](https://www.instagram.com/recedproducoes/)
- Conteúdo atual: músicas cristãs autorais, covers, louvor ao vivo, conteúdo de adoração/fé.

**Escopo real de serviços** (confirmado pelo cliente, mais amplo do que o canal sugere):
- Música / Clipes autorais
- Cobertura de eventos ao vivo
- Conteúdo institucional / redes sociais
- Mixagem e Masterização (serviço técnico de pós-produção de áudio)

---

## 2. Objetivo do site

**Tipo:** Portfólio/vitrine institucional (quem somos, vídeos, contato).
**Stack:** HTML / CSS / JS puro (vanilla), sem framework.
**Formato:** Single-page com scroll, nav fixo no topo.

---

## 3. Identidade visual existente (logo)

Cliente já possui logo pronta (arquivos fornecidos: `logo_png_branco`, `logo_png_com_sombra`, `logo_png_de_lado`, `logo_png`, `Reced.png`).

**Leitura da logo:**
- Tipografia geométrica sans-serif, condensada, com cortes retos (ex: barras interrompidas no "E"/"C").
- Ícone: mashup de microfone + onda sonora + rolo de filme/câmera — comunica identidade de produtora multimídia (áudio + vídeo), não só canal de clipes.
- Logo é monocromática (P&B) — não amarra a paleta a nenhuma cor específica, mas também não carrega calor/religiosidade por si só; isso precisa vir da paleta, tipografia de apoio e imagens.
- **Pendência:** confirmar qual arquivo é a versão "oficial" para uso no site, e se será necessário adaptar contraste da logo branca para fundo escuro.

**Implicação de direção:** a rota tipográfica de título deve ser geométrica/técnica (ex: Space Grotesk, General Sans, Archivo), não serifada/clássica — a serifa contrastaria com a logo.

---

## 4. Direção estética geral

Definida: **escura, cinematográfica, dramática** (estúdio/palco), não clean/minimalista claro, não quente-orgânico.

Motivo: o produto (clipes, gravações ao vivo, ambiente de palco/estúdio) precisa ser o protagonista visual. Fundo escuro evita competir com o vídeo e foge do clichê "site de igreja" (fundo branco, pôr do sol, fonte script).

**Referências visuais fornecidas pelo cliente:**
1. *Resonate* (template de estúdio) — preto quente + acento âmbar/dourado, textura de estúdio.
2. Foto de waveform em neon multicolor — usada como referência de textura/vibração, não como sistema de cor (multicolor quebraria a disciplina de acento único).
3. *Kastelo* (site de DJ/artista) — preto absoluto, tipografia grande em branco, acento vermelho usado com extrema economia.

**Princípio de paleta fixado:** um único acento de cor; variação vem de opacidade/luminosidade do próprio acento, nunca de introduzir novas cores.

---

## 5. Estrutura do site (fechada)

Site single-page, 7 seções, navegação por scroll com nav fixo:

1. **Hero** — logo, nome, frase de posicionamento curta, CTA de scroll.
2. **Sobre** — missão resumida (hesed), 2-3 frases.
3. **Serviços** — 4 cards:
   - Música / Clipes autorais
   - Cobertura de eventos ao vivo
   - Institucional / Redes sociais
   - Mixagem e Masterização (sem link para portfólio nesta seção; CTA próprio de orçamento)
4. **Portfólio** — grade filtrável em JS vanilla, 3 categorias com conteúdo visual: Todos / Música / Eventos / Institucional. (Mixagem/Masterização fica de fora da grade na V1 — poderá ganhar seção própria de "antes/depois" em áudio no futuro.)
5. **Prova social** — depoimentos/números, se houver material do cliente.
6. **Contato** — CTA grande para WhatsApp (não formulário). Duplicado no nav fixo e na seção de fechamento antes do footer.
7. **Footer** — logo, redes sociais, copyright.

---

## 6. Design tokens — proposta de sistema

### Tipografia
| Token | Valor proposto |
|---|---|
| `--font-display` | Space Grotesk ou General Sans, peso 600–700 |
| `--font-body` | Inter ou General Sans, peso 400–500 |
| `--tracking-display` | 0.02em (títulos normais) |
| `--tracking-label` | 0.15–0.2em em maiúsculas (ecoa o "P R O D U Ç Õ E S" espaçado da logo) |
| `--scale-h1` | clamp(2.5rem, 5vw, 4.5rem) |
| `--scale-h2` | clamp(1.75rem, 3vw, 2.75rem) |
| `--scale-body` | 1rem / line-height 1.6 |

### Espaçamento
Escala base 8: `4, 8, 16, 24, 32, 48, 64, 96, 128`.
Padding vertical entre seções: 96–128px (respiro cinematográfico, acima do padrão corporativo de 48px).

### Bordas e elevação
Sem `box-shadow` tradicional (não funciona em fundo escuro). Elevação via luminosidade: `--bg-elevated` mais claro que `--bg-base`.

### Componente: filtro de Portfólio
| Estado | Visual |
|---|---|
| Inativo | `border: 1px solid --border-subtle`, `color: --text-secondary`, fundo transparente |
| Ativo | `background: --accent`, `color: --bg-base` |
| Hover (inativo) | `border-color: --accent` |

---

## 7. Opções de paleta em avaliação

Sete esquemas gerados para comparação visual (arquivos: `paletas-reced.html` e `paletas-reced-2.html`). Nenhuma decisão final ainda.

| Esquema | Direção | BG | Accent | Observação |
|---|---|---|---|---|
| **A** | Âmbar / Estúdio | `#0D0C0B` | `#C9A227` | Mais próximo do Resonate. Calor/tradição, mas é o mais comum no nicho gospel. |
| **B** | Vermelho cirúrgico | `#0A0A0A` | `#C1272D` | Rota Kastelo. Maior diferenciação de marca; exige disciplina de uso (pouco, não espalhado). |
| **C** | Índigo noturno | `#0A0E12` | `#3D5A99` | Contemplativo, foge do clichê "luz quente = espiritual". Mais frio, menor impacto imediato. |
| **D** | Teal / Ciano | `#08100F` | `#2E9E8C` | Puxado do waveform de referência. Mais "estúdio técnico" que espiritual. |
| **E** | Violeta elétrico | `#0B0810` | `#7C4DBE` | Puxado do waveform. **Não recomendado** — é o clichê mais explorado no nicho gospel/worship. |
| **F** | Cobre / Laranja queimado | `#0F0A08` | `#C0602E` | Prima mais energética do âmbar (A). Bom equilíbrio calor/diferenciação. |
| **G** | Monocromático puro | `#0A0A0A` | `#E8E8E8` (sem matiz) | Sem cor — acento vem de peso tipográfico/contraste. Atemporal, deixa o vídeo ser a única cor da página. |

**Recomendação do consultor (ainda não decidida pelo cliente):** B (vermelho cirúrgico) para diferenciação, ou G (monocromático) para solidez atemporal e coerência com "produtora audiovisual" no sentido literal.

---

## 8. Pendências em aberto

- [ ] Decisão final de paleta (entre A–G ou variação).
- [ ] Confirmar arquivo de logo "oficial" e necessidade de versão adaptada para fundo escuro.
- [ ] Levantar material de prova social (depoimentos, números) — se existir.
- [ ] Confirmar textos definitivos de Hero e Sobre (frase de posicionamento, resumo da missão).
- [ ] Levantar conteúdo de portfólio por categoria (vídeos/thumbnails para Música, Eventos, Institucional).

---

*Última atualização: consolidação após discussão de estrutura, tipografia e paletas de cor.*
