// src/actions/browseGenresActions.ts
import { Dispatch } from 'redux';
import { getGenres } from '../spotifyAPI';
import { AppThunk } from '../store';

// redux-thunk kullandım çünkü asenkron işlem yaptığım için  redux store'a doğrudan erişebilir olduğu için ve bundan dolayı 
// asenkron işlemleri işlemek için uygun bir arayüz sağlar bana .
//asenkron işlem başladığında ve tamamlandığında, uygun durumlar için fonksyon tetiklenir ve bu fonk redux store'a gönderiyor.
// hookun bir özelliği olan useSelector gibi Redux'un bağlama fonksiyonları aracılığıyla bana verdiği çıktı ve güncel verilere göre yeniden render edilir.
// Ve bu şekilde bana arayüzü daha efektif ve kolay yönetmemi sağlar.


export const fetchBrowseGenres = (): AppThunk => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_BROWSE_GENRES_REQUEST' });
    getGenres()
      .then((data) => {
        dispatch({
          type: 'FETCH_BROWSE_GENRES_SUCCESS',
          payload: data.categories.items,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_BROWSE_GENRES_FAILURE',
          payload: 'Error fetching browse genres.',
        });
      });
  };
};


