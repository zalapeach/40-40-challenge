import {uniqBy} from 'lodash';

export const Filter = (arrayObjs, word) =>{
    return uniqBy(arrayObjs, word)
}
