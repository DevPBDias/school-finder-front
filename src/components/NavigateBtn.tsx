import { useNavigate } from "react-router-dom";

type INavBtn = {
  route: string,
  text: string,
}

function NavigateBtn({ route, text }: INavBtn) {
  const navigate = useNavigate();

  return (
    <button
      type='button'
      onClick={() => navigate(`/${route}`)}
    >
      {text}
    </button>
  )
}

export default NavigateBtn