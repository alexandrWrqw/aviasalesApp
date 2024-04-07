import AmtTransfersInput from '../AmtTransfersInput/AmtTransfersInput';
import './FilterTransfers.scss';

function FilterTransfers() {
  const transfersLabels = [
    'Все',
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
  ];

  return (
    <div className="filter-transfers">
      <h2 className="title">Количество пересадок</h2>
      {transfersLabels.map((label) => (
        <AmtTransfersInput label={label} />
      ))}
    </div>
  );
}

export default FilterTransfers;
