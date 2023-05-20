import { useState, useEffect } from "react";
import CarsData from "../../store/Cars.json"

function CarTable({ carType, carComponents, className, onChange }) {
    const [usedCars, setUsedCars] = useState(CarsData)

    useEffect(() => {
        if(!carType) return;
        let carComponentsData = carComponents ? carComponents : []
        setUsedCars(
            () => {
                let output = CarsData.filter(car => car.carType === carType);
                if(carComponentsData.length > 0) {
                    let i = 0;
                    for(i = 0;i < carComponentsData.length;i++) {
                        const selectedComponent = carComponentsData[i];
                        output = output.filter(
                            car => {
                                const currenctCarComponents = car.carComponent;
                                const result = currenctCarComponents.search(selectedComponent) > -1;
                                return result;
                            }
                        );
                    }
                }

                return output;
            }
        )
    }, [carType, carComponents])

  return (
    <div className={className}>
        <h2>List Car</h2>
        <table className="table" cellPadding={0} cellSpacing={0} >
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Car name
                    </th>
                    <th>
                        Year
                    </th>
                    <th>
                        Selling Price (Million USD)
                    </th>
                    <th>
                        Present Price (Million USD)
                    </th>
                    <th>
                        KM/s driven
                    </th>
                    <th>
                        Fuel Type
                    </th>
                    <th>
                        Seller Type
                    </th>
                    <th>
                        Transmission
                    </th>
                    <th>
                        Car Type
                    </th>
                    <th>
                        Car Components
                    </th>
                </tr>
            </thead>
            <tbody>
                { usedCars.map((car, index) => (
                    <tr key={index}>
                        <td>
                            { index + 1 }
                        </td>

                        <td className="text-capitalize">
                            { car.carName }
                        </td>


                        <td>
                            { car.year }
                        </td>

                        <td className="text-right">
                            { car.sellingPrice }
                        </td>

                        <td className="text-right">
                            { car.presentPrice }
                        </td>

                        <td className="text-right">
                            { car.kmsDriven }
                        </td>

                        <td>
                            { car.fuelType }
                        </td>

                        <td>
                            { car.sellerType }
                        </td>

                        <td>
                            { car.transmission }
                        </td>

                        <td>
                            { car.carType }
                        </td>

                        <td>
                            { car.carComponent }
                        </td>
                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  );
}

export default CarTable;
