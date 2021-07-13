import { useState } from 'react';
import './App.css';

const INITIAL_STATE = [
  { id: 1, baslik: 'HTML Öğren', tamamlandi: true },
  { id: 2, baslik: 'CSS Öğren', tamamlandi: true },
  { id: 3, baslik: 'JavaScript Öğren', tamamlandi: true },
  { id: 4, baslik: 'React Öğren', tamamlandi: false },
];

function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState('');
  return (
    <div className='App'>
      <h1>Yapılacaklar Listesi</h1>
      <div className='ekleme_formu'>
        <input
          value={yeniBaslik}
          onChange={(e) => setYeniBaslik(e.target.value)}
          placeholder='Listeye Ekle'
        />
        <button
          onClick={() => {
            setListe([
              ...liste,
              { id: Date.now(), baslik: yeniBaslik, tamamlandi: false },
            ]);
            setYeniBaslik('');
          }}
        >
          Ekle
        </button>
      </div>
      <div className='liste'>
        {liste.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setListe(
                liste.map((el) =>
                  el.id === item.id ? { ...el, tamamlandi: !el.tamamlandi } : el
                )
              );
            }}
            className={item.tamamlandi ? 'yapildi' : ''}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button
        onClick={() => setListe(liste.filter((item) => !item.tamamlandi))}
        className='temizle'
      >
        Tamamlananları Temizle
      </button>
    </div>
  );
}

export default App;
