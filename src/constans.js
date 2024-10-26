export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.391297',
    bl_lng: '25.698739',
    tr_lat: '43.25524',
    tr_lng: '44.693651',
    limit: '300'
  },
  headers: {
    'x-rapidapi-key': '3ba2ecae4emsh4f020f8364bd975p145ccajsn9ba5f2a08ea8',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
  }
};

  export const detailOpt = {
    
      method: 'GET',
      url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
      params: {flight: '362d291c'},
      headers: {
        'x-rapidapi-key': '3ba2ecae4emsh4f020f8364bd975p145ccajsn9ba5f2a08ea8',
        'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
      }
    };