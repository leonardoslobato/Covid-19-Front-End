import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Updated = styled.div`
  color: #696969;
  text-align: center;
`;

export const TableContainer = styled.section`
  margin-top: 64px;
  max-width: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color:	#696969;
      font-weight: normal;
      padding: 20px 32px;
      text-align: center;
      font-size: 20px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #696969;
      text-align: center;

      button {
        margin-left: auto;
        background: transparent;
        border: 0;

        svg {
          color: #999591;
          width: 20px;
          height: 20px;
        }
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
