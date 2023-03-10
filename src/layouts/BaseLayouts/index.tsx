import Navbar from '../../components/Navbar/Navbar';
import { Container, Content } from './styles';

export type BaseLayoutProps = {
    children: React.ReactNode,
}

function BaseLayout({children}: BaseLayoutProps) {

  return (
    <Container>
        <Navbar />
        <Content>
            {children}
        </Content>
    </Container>
  )
}

export default BaseLayout