# 🖼️ Adição Rápida das Imagens Infográficas

## O que mudou?

O componente `Tip.tsx` agora suporta imagens PNG em vez de apenas SVG. Dois balões de dica estão prontos para receber as imagens:

1. **Mudança de Posição** (Etapa 7) - Para o sinal "Prevenir úlceras e aspiração"
2. **Rotina Visual do Dia** (Etapa 7) - Para o sinal "Vocabulário muito limitado ou ausente"

## Como adicionar as imagens?

### Passo 1: Preparar os arquivos PNG

Você tem as duas imagens infográficas. Certifique-se de que estão em formato PNG.

### Passo 2: Copiar para o diretório correto

Coloque os arquivos PNG aqui:
- `public/images/mudanca-posicao.png`
- `public/images/rotina-visual.png`

### Passo 3: Fazer commit e push

```bash
cd /caminho/para/FASTcare
git add public/images/mudanca-posicao.png
git add public/images/rotina-visual.png
git commit -m "Adiciona imagens infográficas educativas nos balões de dica"
git push -u origin claude/educational-tooltips-scales-i51mhk
```

## Verificar se funcionou

1. Execute `npm run dev`
2. Acesse http://localhost:5173
3. Vá até a Etapa 7 (Demência grave)
4. Clique nos balões de "Mudança de posição" e "Rotina visual do dia"
5. As imagens PNG aparecerão em alta resolução

## Atualmente

- ✅ SVG placeholders estão no lugar (para visualização de teste)
- ✅ Componente está pronto para carregar PNG
- ✅ Build está configurado
- ⏳ Aguardando as imagens PNG serem adicionadas

## Resultado Final

Quando as imagens PNG forem adicionadas:
- Os balões mostrarão infográficos reais em alta qualidade
- O fallback SVG só aparecerá se houver problema ao carregar o PNG
- Todo o resto do site continua igual
