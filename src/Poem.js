import * as React from 'react';
import { Typography } from '@mui/material';
import DenseAppBar from './menu_bar';
import Helmet from 'react-helmet';
import './App.css';

export default function Poem() {
  const [poems, setPoems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const apiUrl = 'https://poetrydb.org/title/love';

  React.useEffect(() => {
    if (poems.length === 0) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const rand = Math.floor(Math.random() * data.length);
          setPoems(data[rand]);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching love poems:', error);
          setLoading(false);
        });
    }
  }, [poems, apiUrl]);

  return (
    <div style={{ backgroundColor: '#FFF9C4', position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
      <DenseAppBar />
      <Helmet bodyAttributes={{style: 'background-color : #FFF9C4'}}/>
      {loading ? (
        <Typography variant="h5" style={{ marginTop: '20px' }}>Loading...</Typography>
      ) : (
        <div>
          <Typography variant="h4" style={{ margin: '20px 0' }}>{poems.title}</Typography>
          <div className="poem-lines">
            {poems.lines.map((line, index) => (
              <Typography key={index} style={{ fontStyle: 'italic', margin: '8px 0', fontSize: '1.2em' }}>
                {line}
              </Typography>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
