import { FormEvent, useRef, useState } from "react";
import { StyledMain } from "./style.ts";
import { youtube_parser } from "../../utils.ts";
import axios from "axios";

export const Main = () => {
  const inputUrlRef = useRef<HTMLInputElement>("");
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);

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
      .catch((err) => console.log(err));

    inputUrlRef.current.value = "";
    console.log(urlResult);
  };
  return (
    <StyledMain>
      <h1 className="main__title">Descargate el beat </h1>

      <form onSubmit={handleSubmit} className="main__form">
        <label htmlFor="url">Url de youtube</label>
        <div>
          <input
            ref={inputUrlRef}
            className="main__form__input"
            placeholder="https://www.youtube.com/watch?v=gF5upn0nTPg&ab_channel=VITALS"
            type="text"
            id="url"
          />
          <button>Buscar</button>
        </div>

        {urlResult ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={urlResult}
            className="download_btn"
          >
            Descargar beat
          </a>
        ) : (
          ""
        )}
      </form>
    </StyledMain>
  );
};
