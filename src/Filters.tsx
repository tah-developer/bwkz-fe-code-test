import React, { FC } from 'react';
import styled from 'styled-components';

import { IFilters } from './App';

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  label {
    font-size: 12px;
    margin-right: 16px;
    text-transform: uppercase;
  }
  input {
    width: 50px;
    margin-left: 8px;
  }
`;

interface IProps {
  min: number;
  max: number;
  onFilterChange: (newFilter: IFilters) => void;
}

const Filters: FC<IProps> = ({ min, max, onFilterChange }): JSX.Element => (
  <FiltersWrapper>
    <label>
      Min
      <input
        type="number"
        value={min || 0}
        onChange={(e) =>
          onFilterChange({ max, min: parseInt(e.target.value) || 0 })
        }
      />
    </label>
    <label>
      Max
      <input
        type="number"
        value={max || 0}
        onChange={(e) =>
          onFilterChange({ min, max: parseInt(e.target.value) || 0 })
        }
      />
    </label>
  </FiltersWrapper>
);

export default Filters;
