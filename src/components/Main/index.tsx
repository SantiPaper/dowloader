import { FormEvent, useRef, useState } from "react";
import { StyledMain } from "./style.ts";
import { youtube_parser } from "../../utils.ts";
import axios from "axios";

export const Main = () => {
  const inputUrlRef = useRef<HTMLInputElement>(null);
  const [urlResult, setUrlResult] = useState("");
  const [buscando, setBuscando] = useState("");

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current!.value);

    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeID,
      },
    };
    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => setBuscando(err));

    inputUrlRef.current!.value = "";
  };
  return (
    <StyledMain>
      <h1 className="main__title">Para la joyita</h1>

      <form onSubmit={handleSubmit} className="main__form">
        <label htmlFor="url">Url de youtube</label>
        <div className="main__form__container">
          <input
            ref={inputUrlRef}
            className="main__form__input"
            placeholder="https://www.youtube.com/watch?v=gF5upn0nTPg&ab_channel=VITALS"
            type="text"
            id="url"
          />
          <button
            className="main__form__button"
            onClick={() => setBuscando("Buscando...")}
          >
            Buscar
          </button>
        </div>

        {urlResult ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={urlResult}
            className="main__link"
          >
            Descargar beat
          </a>
        ) : (
          <p className="main__link">{buscando}</p>
        )}
      </form>
    </StyledMain>
  );
};
