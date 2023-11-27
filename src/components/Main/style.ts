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

      &__input {
        width: 60rem;
        height: 5rem;
        padding-left: 1rem;
        font-size: 2rem;
      }
      &__input::placeholder {
        color: black;
        opacity: 0.2;
      }
    }
  }
`;
