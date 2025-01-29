import getData from '../../(data)';
import Card from '../(card)';
import { formatDate } from '../../../js/helpers';

const Content = async () => {
  /**
   * fetch data
   */

  const { headers, rows, error } = await getData();
  console.log(headers, rows, error);

  if (error) {
    return (
      <div className='error-message'>
        <h2>Error</h2>
        <p>{error}</p>
        <p>Please contact support or try again later.</p>
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>No data available</th>
          </tr>
        </thead>
      </table>
    );
  }

  /**
   * return elements when data is available
   */

  return (
    <>
      {rows.map((row, i) => {
        const rowData = headers.reduce((acc, header, index) => {
          const formattedHeader = header.replace(/\s+/g, '_'); // Replace spaces with underscores
          acc[formattedHeader] = row[index] || ''; // Safely handle missing values
          return acc;
        }, {});

        console.log('rowData', rowData);

        const { Image, Title, Description, Date, Code_used } = rowData;
        const formattedDate = Date
          ? Date
          : // formatDate(Date.replace(/[a-z()]/gi, ''), '-')
            'Unknown Date';

        return (
          <Card
            key={i}
            // TODO: fetch Image
            title={Title}
            description={Description}
            date={formattedDate}
            code_used={Code_used}
            imageAlt={Title ? `Image for ${Title}` : 'Project Image'}
          />
        );
      })}
    </>
  );
};

export default Content;
