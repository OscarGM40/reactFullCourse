import { finishLoading, removeError, setError, startLoading 
} from "../../actions/uiActions"
import { types } from "../../types/types";


describe('Pruebas en el uiActions.js', () => {

  test('should work all actions', () => {
     const setErrorAction = setError('ERROR!!!')
     
       expect(setErrorAction).toEqual({
         type: types.uiSetError,
         payload: 'ERROR!!!'
       }); 

     const removeErrorAction = removeError()
     
       expect(removeErrorAction).toEqual({
         type: types.uiRemoveError,
       }); 

     const startLoadingAction = startLoading()
     
       expect(startLoadingAction).toEqual({
         type: types.uiStartLoading,
       }); 

     const finishLoadingAction = finishLoading()

       expect(finishLoadingAction).toEqual({
         type: types.uiFinishLoading,
       }); 
     })

})
