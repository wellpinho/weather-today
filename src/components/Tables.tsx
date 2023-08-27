interface IProps {
  data: string;
  hora: string;
  cidade: string;
  chuva: number;
  humidade: number;
  vento: string;
  temperatura: number;
  descricao: string;
}

interface IDays {
  date: string;
  weekday: string;
  max: number;
  min: number;
  rain: number;
  probability: number;
  wind_speedy: string;
  description: string;
}

type Days = {
  days: IDays[];
};

const Tables = ({ ...data }) => {
  const { results } = data.data;
  console.log(results);

  return (
    <table className="table-auto text-white mt-24">
      <thead>
        <tr>
          <th>
            {results?.city} - {results?.date} {results?.time}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Condição: {results?.forecast[0].description}</td>
        </tr>
        <tr>
          <td>Volume: {results?.forecast[0].rain}%</td>
        </tr>
        <tr>
          <td>Humidade: {results?.humidity}%</td>
        </tr>
        <tr>
          <td>Ventos: {results?.wind_speedy}</td>
        </tr>
        <tr>
          <td>Temperatura: {results?.temp}</td>
        </tr>
        <tr>
          <td>{results?.description}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tables;
