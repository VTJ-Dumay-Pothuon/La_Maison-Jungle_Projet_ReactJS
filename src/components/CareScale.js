import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faDroplet } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip'

const quantityLabel = ['','peu','modérément','beaucoup']

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ?
    <FontAwesomeIcon icon={faSun} /> :
    <FontAwesomeIcon icon={faDroplet} />

    return (
        <Tooltip content={`Cette plante requiert ${quantityLabel[scaleValue]}
        ${careType === 'light' ? ' de lumière' : ' d’arrosage'}`}><div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div></Tooltip>
    )
}

export default CareScale