import { Link } from "react-router-dom";

export function NotFound() {
  return(
    <>
    <h1>Página não encontrada! 404</h1>
    <Link to={'/'}>
      Ir par o início
    </Link>
    </>
  );
}