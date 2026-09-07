# Guia: Adicionar Imagens Infográficas nos Balões de Dica

## Status Atual

O componente `Tip.tsx` foi atualizado para suportar imagens PNG dos infográficos educativos. Atualmente, existem placeholders SVG que serão exibidos enquanto as imagens reais não forem adicionadas.

## Próximos Passos

### 1. Preparar as Imagens PNG

Você tem duas imagens infográficas que devem ser convertidas para PNG se ainda não estiverem nesse formato:

1. **mudanca-posicao.png** - Infográfico sobre posições de repouso e exercícios passivos
   - Usar para o balão: "Mudança de posição"
   - Etapa: 7 (Demência grave)
   - Sinal relacionado: "Prevenir úlceras e aspiração"

2. **rotina-visual.png** - Infográfico da rotina visual do dia (4+ cartões com atividades)
   - Usar para o balão: "Rotina visual do dia"
   - Etapa: 7 (Demência grave)
   - Sinal relacionado: "Vocabulário muito limitado ou ausente"

### 2. Adicionar as Imagens ao Projeto

1. Coloque as duas imagens PNG no diretório:
   ```
   public/images/mudanca-posicao.png
   public/images/rotina-visual.png
   ```

2. Verifique que as imagens têm proporção aproximada de **320×150px** ou similar (o componente fará object-fit cover)

### 3. Testar Localmente

Execute o servidor de desenvolvimento:
```bash
npm run dev
```

Navegue até a etapa 7 ("Demência grave") e clique nos balões de dica para verificar se as imagens aparecem corretamente.

### 4. Fazer Build e Enviar

Após adicionar as imagens PNG:

```bash
# Fazer build do projeto
npm run build

# Adicionar arquivos ao git
git add public/images/mudanca-posicao.png
git add public/images/rotina-visual.png

# Fazer commit
git commit -m "Adiciona imagens infográficas nos balões de dica educativos"

# Enviar para GitHub
git push -u origin claude/educational-tooltips-scales-i51mhk
```

## Detalhes Técnicos

- **Formato suportado**: PNG (primário) e SVG (fallback)
- **Responsividade**: As imagens são renderizadas com `object-fit: cover` para manter proporção
- **Acessibilidade**: Alt text vazio (`alt=""`) pois são decorativas/ilustrativas
- **Caminho público**: Vite serve automaticamente arquivos do diretório `public/`

## Resultado Esperado

Quando as imagens PNG forem adicionadas:
- Os balões de dica "Mudança de posição" e "Rotina visual do dia" exibirão as imagens reais em vez dos placeholders SVG
- As imagens aparecerão no topo do conteúdo textual de cada balão
- Todos os outros balões continuarão com suas ilustrações SVG originais

## Nota de Desenvolvimento

O componente atualmente usa:
- `<picture>` HTML5 para compatibilidade com múltiplos formatos
- Fallback automático para SVG se PNG não for encontrado
- CSS `object-fit: cover` para manter proporção e preencher o espaço disponível
