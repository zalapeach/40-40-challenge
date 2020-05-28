import React from 'react';

const SelectStatus = (selectStatus) =>{

return(
<select className='custom-select' id='inputGroupSelect02'>
                <option selected> {selectStatus + ' '} cambiar</option>
                <option defaultValue='1' className='Complete'> Completado</option>
                <option defaultValue='2' className='Review'>Revisión</option>
                <option defaultValue='3' className='Stop'> Detenido por cliente</option>
                <option defaultValue='4' className='Testing'> Pruebas</option>
            </select>
)

}
export default SelectStatus