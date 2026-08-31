export default function FarmaciaPopular() {
  return (
    <section id="farmacia-popular" className="pharmacy-sec">
      <div className="wrap pharmacy-card reveal">
        <div className="pharmacy-mark" aria-hidden="true">+</div>
        <div>
          <span className="eyebrow">Acesso a insumos</span>
          <h2>Farmácia Popular pode fornecer fraldas geriátricas gratuitamente</h2>
          <p>Pessoas com 60 anos ou mais, ou pessoas com deficiência, podem ter acesso conforme as regras do programa. Procure uma unidade com o selo <strong>“Aqui Tem Farmácia Popular”</strong>.</p>
          <ol><li>Separe documento oficial com foto e CPF.</li><li>Leve receita dentro da validade.</li><li>Para fraldas, leve também prescrição, laudo ou atestado que comprove a necessidade.</li></ol>
          <div className="pharmacy-actions"><a className="btn btn-primary" href="https://www.gov.br/saude/pt-br/composicao/sectics/farmacia-popular" target="_blank" rel="noopener noreferrer">Ver regras oficiais ↗</a><a className="btn btn-ghost" href="https://farmaciapopular-portal.saude.gov.br/farmaciapopular-portal/consultaPublica" target="_blank" rel="noopener noreferrer">Consultar farmácias ↗</a></div>
          <small>Condições e documentos podem mudar. Confirme sempre no portal do Ministério da Saúde ou pelo Disque Saúde 136.</small>
        </div>
      </div>
    </section>
  );
}
