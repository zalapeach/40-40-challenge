import React from 'react';

const SelectStatus = (selectStatus) =>{

return(
<select className='custom-select' id='inputGroupSelect02'>
                <option selected> {selectStatus + ' '} cambiar</option>
                <option defaultValue='1' className='High'> Completado</option>
                <option defaultValue='2' className='Medium'>Revisión</option>
                <option defaultValue='3' className='Low'> Detenido por cliente</option>
                <option defaultValue='4' > Pruebas</option>
            </select>
)

}
export default SelectStatus