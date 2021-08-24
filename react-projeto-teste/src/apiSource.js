const API_KEY = 'fde51a6eceae34a6515760179e4fb327';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const requis = await fetch(`${API_BASE}${endpoint}`);
  const json = await requis.json();
  return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        type: 'originals',
        title: 'Originais NETFLIX',
        items: await basicFetch(`/discover/`)
      },
      {
        type: 'trending topics',
        title: 'Em alta',
        items: []
      },
      {
        type: 'action',
        title: 'AÇÃO',
        items: []
      },
      {
        type: 'comedy',
        title: 'COMÉDIA',
        items: []
      },
    ]
  }
}