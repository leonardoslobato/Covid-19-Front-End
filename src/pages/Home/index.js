import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { formatDistance, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import Header from '../../components/Header';
import ComponentSkeleton from '../../components/Skeleton';

import { Container, TableContainer, Updated } from './styles';
import apiCases from '../../services/apiCases';
import api from '../../services/api';

const Home = () => {
  const [cases, setCases] = useState([]);
  const [setCasesDB] = useState([]);
  const [lastUpdate, setLastUpdate] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiCases.get().then(response => {
      const casesData = response.data.infectedByRegion;
      const hourUpdate = parseISO(response.data.lastUpdatedAtApify);

      const distance = formatDistance(hourUpdate, new Date(), { locale: pt });

      setLastUpdate(distance);

      setCases(casesData);
      setLoading(false);
    });
    api.get('/cases').then(response => {
      const casesData = response.data;

      setCasesDB(casesData);
    });

    Modal.setAppElement('body');
  });
  return (
    <>
      <Header />
      <Container>
        <Updated>
          <p>Última atualização do APIFY foi a {lastUpdate}</p>
        </Updated>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Estado</th>
                <th>Casos confirmados</th>
              </tr>
            </thead>
            {loading ? (
              <ComponentSkeleton qtdItems={4} />
            ) : (
                <tbody>
                  {cases.map(caseIndex => (
                    <tr key={caseIndex.state}>
                      <td>{caseIndex.state}</td>
                      <td>{caseIndex.count}</td>

                    </tr>
                  ))}
                </tbody>
              )}
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Home;
