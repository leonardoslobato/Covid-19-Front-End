import React from 'react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import { Container } from './styles';

const Header = () => {
  const now = new Date();
  const dateFormarred = format(now, 'dd/MM/yyyy');
  const dayWeekFormarred = format(now, 'EEEE', { locale: pt });

  return (
    <Container>
      <header>
        <p>
          <strong>Casos</strong>
        </p>
        <p>
          <strong> {dateFormarred} </strong>-
          <strong> {dayWeekFormarred} </strong>
        </p>
      </header>
    </Container>
  );
};

export default Header;
