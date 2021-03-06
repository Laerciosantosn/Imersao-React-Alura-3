import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(data) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os videos');
    });
}

export default {
  create,
};
