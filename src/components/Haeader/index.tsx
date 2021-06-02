import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="hugomoney" />
                <button type="button" onClick={onOpenNewTransactionModal} >Nova Transasão</button>
            </Content>
        </Container>
    )
}