import styled from 'styled-components';
import { transparentize } from 'polished';


export const Container = styled.div`
  background: #3CB371;
  padding: 30px;

  header {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-weight: 500;
    }

    nav {
      a {
        color: ${transparentize(0.30, '#fff')};
        text-decoration: none;
        font-size: 22px;
        transition: opacity 0.2s;
        padding-bottom: 2px;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  p {
    color: #fff;
  }

  @media (max-width: 575px) {
    p {
      display: none;
    }

    header {
      justify-content: center;

      nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
    }
  }
`;
