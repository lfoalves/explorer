import { Container } from './styles'

import { ContainerContent } from "../../components/ContainerContent";

export function Contact() {

  return (
    <ContainerContent>
      <Container>
        <h1>CONTATO</h1>
        <div className="contact">
          <p><a href="http://www.linkedin.com/in/lfoalves" target={'_blank'} title={'LinkedIn'}>LinkedIn</a></p>
          <p><a href="http://www.github.com/lfoalves" target={'_blank'} title={'GitHub'}>GitHub</a></p>
          <p><a href="http://www.instagram.com/lfoalves" target={'_blank'} title={'Instagram'}>Instagram</a></p>
          <p><a href="https://wa.me/5595991378328?text=Ol%C3%A1!" target={'_blank'} title={'WhatsApp'}>WhatsApp</a></p>
        </div>  
            
      </Container>      
    </ContainerContent>
  );
}