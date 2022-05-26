import { Radio, RadioUnActive } from 'assets/svg';
import React from 'react';
import './FilterItem.scss';

interface FilterProps {
    filter: { name: string; id: number };
    active: boolean;
    setFilter: (indx: number) => void;
}

const FilterItem = ({ filter, active, setFilter }: FilterProps) => {
    return (
        <div className="filter-item">
            <span>{filter.name}</span>
            <div className="filter-item__btn" onClick={() => setFilter(filter.id)}>
                {active ? <Radio /> : <RadioUnActive />}
            </div>
        </div>
    );
};

export default FilterItem;
