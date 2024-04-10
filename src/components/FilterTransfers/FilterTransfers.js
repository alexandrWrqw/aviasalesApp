import classes from './FilterTransfers.module.scss';

import FilterTransfersInput from '../FilterTransfersInput/FilterTransfersInput';

function FilterTransfers() {
  const transfersLabels = [
    'Все',
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
  ];

  return (
    <div className={classes['filter-transfers']}>
      <h2 className={classes.title}>Количество пересадок</h2>
      {transfersLabels.map((label) => (
        <FilterTransfersInput
          key={label}
          label={label}
          allFiltersTransfers={transfersLabels}
        />
      ))}
    </div>
  );
}

export default FilterTransfers;
