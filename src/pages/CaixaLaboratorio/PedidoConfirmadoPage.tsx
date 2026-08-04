import { DaTecaWordmark } from "../../components/brand/DaTecaWordmark"
import { appRoutes } from "../../navigation/appRoutes"
import "./caixaLaboratorio.css"

type PedidoConfirmadoPageProps = {
  setScreen: (screen: string) => void
}

/**
 * Página externa pós-compra (configurável na Hotmart).
 * A abertura desta URL sozinha NÃO confirma pagamento.
 */
export function PedidoConfirmadoPage({ setScreen }: PedidoConfirmadoPageProps) {
  return (
    <article className="clx-confirm">
      <h1 className="clx-confirm__title">
        Sua Caixa Laboratório está a caminho de novas descobertas.
      </h1>
      <p className="clx-confirm__text">
        Seu pedido foi recebido. As informações da compra e do pagamento serão
        enviadas para o e-mail cadastrado na Hotmart.
      </p>
      <button
        type="button"
        className="clx-cta clx-cta--primary"
        onClick={() => setScreen(appRoutes.home)}
      >
        VOLTAR PARA A <DaTecaWordmark size="inherit" />
      </button>
    </article>
  )
}
