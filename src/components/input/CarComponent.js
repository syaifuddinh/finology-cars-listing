import { useState, useEffect } from "react";
import CarComponentsData from "../../store/CarComponents.json"

function CarComponent({ carType, className, onChange }) {
    const [usedComponents, setUsedComponents] = useState([]);

    const onDataChange = carComponentId => {

        const willChange = usedComponents.map(data => {
            let isChecked = data.isChecked;
            if(data.id === carComponentId) isChecked = !isChecked;

            return { ...data, isChecked }
        })

        setUsedComponents(() => willChange)

        if(!onChange) return;
        const output = willChange.filter( ({ isChecked }) => isChecked === true ).map(({ id }) => id)
        onChange(output)
    }

    useEffect(() => {
        setUsedComponents(
            () =>   CarComponentsData.filter(data => data.carType === carType).map(data => {
                return {...data, isChecked: false}
            })
        )
    }, [carType]);

  return (
    <div className={className}>
        <div className="label">
            Car Component
        </div>

        <div className="d-flex gap-8px">
            { usedComponents.map(({ id, name, isChecked }) => (
                <div key={id} className="d-flex gap-8px">
                        <input
                            type="checkbox"
                            name="carComponent"
                            value={id}
                            checked={isChecked}
                            onChange={() => onDataChange(id)}
                        />
                        <span>
                            { name }
                        </span>
                </div>
            )) }
        </div>
    </div>
  );
}

export default CarComponent;
