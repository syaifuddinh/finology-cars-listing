import CarTypesData from "../../store/CarTypes.json"

function CarType({ onChange }) {
  return (
    <div>
        <div className="label">
            Car Type
        </div>

        <div className="d-flex gap-8px">
            { CarTypesData.map(({ id, name }) => (
                <div key={id} className="d-flex gap-8px">
                        <input
                            type="radio"
                            name="carType"
                            value={id}
                            onChange={() => onChange(id)}
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

export default CarType;
