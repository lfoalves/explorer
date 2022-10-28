import { Container } from "./styles";

export function CardFlip({ data, ...rest}) {

  return (
    <Container {...rest} className={'card'} role={'button'} >
      <div className="face front">
          {
            data.name ? (<span>{data.name}</span>) : ''
          }
        <div>
          <a href={data.deploy_url} target={'_blank'} title={'Projeto'}>Projeto</a>
          <a href={data.codigo_url} target={'_blank'} title={'Code'}>Code</a>
        </div>
      </div>
      <div className="face back"></div>
    </Container>
  );
}