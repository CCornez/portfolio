import getData from '../../(data)';
import Card from '../(card)';
import { formatDate } from '../../../js/helpers';

const Content = async () => {
  /**
   * fetch data
   */

  const data = await getData();

  /**
   * return elements when data is available
   */

  if (data) {
    return (
      <>
        {data.map(({ Image, Title, Description, Date, Code_used }, i) => (
          <Card
            key={i}
            // TODO: fetch Image
            title={Title}
            description={Description}
            date={formatDate(Date.replace(/[a-z()]/gi, ''), '-')}
            code_used={Code_used}
            // TODO: fetch alt
          />
        ))}
      </>
    );
  } else {
    /**
     * return elements if data is NOT available
     */
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>no data</th>
          </tr>
        </thead>
      </table>
    );
  }
};

export default Content;
