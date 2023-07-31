// src/components/BrowseGenres.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchBrowseGenres } from '../actions/browseGenresActions';
import { RootState } from '../store';

// Redux-thunk kullandığım için burda ThunkDispatch türünü kullandım. Kullanma sebebim özellikle reduxdaki asenkron işlemleri
// yönetmek için kullandım. 
//Yapılarak üç parametre alıyor.
//RootState: redux store'daki tüm durumları gösterir.
//void: Eylemler tarafından döndürülen değer türleri
// AnyAction: Redux'ta tanımlanan herhangi bir eylem

const BrowseGenres: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const { loading, genres, error } = useSelector(
    (state: RootState) => state.browseGenres
  );

  useEffect(() => {
    dispatch(fetchBrowseGenres());
  }, [dispatch]);

  // servis loading durumunda ise bu if alanı gösterilicek buraya loading efekti koyardım.
  
  if (loading) {
    return <div>Loading...</div>;
  }

   // Eger servisden hata alırsam bu alanı gösteririm. Burda react-bootsrap eklenip bir alert popup çıktısı verilebilir. 
   // Bunu da state de tutup error olduğunda o setState true yapıp alert fırlatırım ara yüze.

  if (error) {
    return <div>{error}</div>;
  }

  // loading ve error yoksa ekrana çıktı olarak bu alanı yansıtırım. 
  return (
    <div>
      <h2>Browse Genres</h2>
      {genres.map((genre: any) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </div>
  );
};

export default BrowseGenres;