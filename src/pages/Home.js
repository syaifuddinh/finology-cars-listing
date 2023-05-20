import { useState } from "react"
import CarTypeInput from "../components/input/CarType"
import CarComponentInput from "../components/input/CarComponent"
import CarTable from "../components/table/Car"
import PrimaryButton from "../components/button/Primary"

function Home() {
    const [formData, setFormData] = useState({
        carType: "",
        carComponents: []
    });
    const [isShowingTable, setIsShowingTable] = useState(false)

    const onCarTypeChange = value => {
        setFormData({ ...formData, carType: value, carComponents: [] });
        setIsShowingTable(false)
    }
    
    const onCarComponentChange = value => {
        setFormData({ ...formData,  carComponents: value });
        setIsShowingTable(false)
    }

  return (
    <div>
        <h1>Get your car</h1>

        <CarTypeInput
            onChange={onCarTypeChange}
        />

        {
            formData.carType && (
                <CarComponentInput
                    carType={formData.carType}
                    className="mt-16px"
                    onChange={onCarComponentChange}
                />
            )
        }

        <PrimaryButton
            className="mt-16px"
            disabled={!formData.carType}
            onClick={() => setIsShowingTable(true)}
        >
            Get car
        </PrimaryButton>

        {  isShowingTable === true && (
            <CarTable
                carType={formData.carType}
                carComponents={formData.carComponents}
                className="mt-16px"
            />
        ) }
    </div>
  );
}

export default Home;
