import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #151516;
  min-height: 100vh;
  .main {
    &__title {
      font-size: 8rem;
      letter-spacing: 0.3;
      text-transform: uppercase;
      margin-bottom: 5rem;
    }
    &__form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;

      label {
        font-size: 1.3rem;
      }

      &__container {
        display: flex;
        gap: 1.5rem;
      }
      &__input {
        width: 60rem;
        height: 5rem;
        padding-left: 1rem;
        font-size: 2rem;
        font-family: inherit;
      }
      &__input::placeholder {
        color: black;
        opacity: 0.2;
      }
      &__button {
        font-family: inherit;
        background-color: white;
        color: black;
        height: 5rem;
        padding: 0.5rem 0.5rem;
        font-size: 2rem;
        border: 1px solid white;
        cursor: pointer;
        border-radius: 0.6rem;
      }
    }
    &__link {
      margin-top: 3rem;
      font-size: 2rem;
      color: white;
    }
  }

  @media (max-width: 800px) {
    .main {
      &__title {
        font-size: 4rem;

        margin-bottom: 5rem;
      }
      &__form {
        &__container {
          gap: 1rem;
        }
        &__input {
          width: 25rem;
          height: 5rem;
          padding-left: 0.3rem;
          font-size: 2rem;
          font-family: inherit;
        }
        &__input::placeholder {
          color: black;
          opacity: 0.2;
        }
        &__button {
          font-family: inherit;
          background-color: white;
          color: black;
          height: 5rem;
          padding: 0.5rem 0.5rem;
          font-size: 2rem;
          border: 1px solid white;
          cursor: pointer;
          border-radius: 0.6rem;
        }
      }
      &__link {
        margin-top: 3rem;
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
