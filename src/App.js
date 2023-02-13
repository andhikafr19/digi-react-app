import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container mx-auto bg-gray-200 rounded-xl shadow'>

      <div className='grid grid-cols-3 gap-4 px-5 py-5'>
        <p className='text-3xl text-orange-500 font-bold mb-5'>
          Tambah Data Kwitansi
        </p>
        <label className='block'>
          <span>
            No. KWT
          </span>
          <input type="text" className="form-input rounded-md mx-5 border-gray-300"></input>
        </label>
        <label className='block'>
          <span>
            Tgl
          </span>
          <input type="date" className="form-input rounded-md mx-5 border-gray-300"></input>
        </label>
      </div>
      <div className='grid grid-cols-3 gap-4 px-5 py-5'>
        <label className='block'>
          <span>
            NO SPD
          </span>
          <input type="text" className="form-input rounded-md mx-5 border-gray-300"></input>
        </label>
        <label className='block'>
          <span>
            NIK
          </span>
          <input type="text" className="form-input rounded-md mx-5 border-gray-300"></input>
        </label>
      </div>
      <div className='grid grid-cols-3 gap-4 px-5 py-5'>
        <label className='block'>
          <span>
            NO SPT
          </span>
          <input type="text" className="form-input rounded-md mx-5 border-gray-300"></input>
        </label>
        <label className='block'>
          <span>
            NAMA
          </span>
          <input type="text" className="form-input rounded-md mx-5 border-gray-300"></input>
        </label>
      </div>
      <div className='grid grid-cols-3 gap-4 px-5 py-5'>
        <label className='block'>
          <span>
            TUJUAN
          </span>
          <input type="text" className="form-input col-span-2 rounded-md mx-5 border-gray-300"></input>
        </label>
      </div>
      <div className='grid grid-cols-3 gap-4 px-5 py-5'>
        <label className='block'>
          <span>
            TGL BERANGKAT
          </span>
          <input type="date" className="form-input rounded-md mx-5 border-gray-300"></input>
        </label>
        <label className='block'>
          <span>
            TGL MULAI
          </span>
          <input type="date" className="form-input rounded-md mx-5 border-gray-300"></input>
        </label>
        <label className='block'>
          <span>
            TGL PULANG
          </span>
          <input type="date" className="form-input rounded-md mx-5 border-gray-300"></input>
        </label>
      </div>

      <div className='grid grid-cols-3 gap-4 py-5 bg-orange-500 rounded'>
        <span className='text-white text-center'>
          Uraian
        </span>
        <span className='text-white text-center'>
          Nilai Riil
        </span>
        <span className='text-white text-center'>
          Nilai Disetujui
        </span>
      </div>
      <div className='block grid grid-cols-3 gap-5 py-5 px-5'>
        <span>
          Uang Harian
        </span>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
      </div>
      <div className='block grid grid-cols-3 gap-5 py-5 px-5'>
        <span>
          Transportasi
        </span>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
      </div>
      <div className='block grid grid-cols-3 gap-5 py-5 px-5'>
        <span>
          Penginapan
        </span>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
      </div>
      <div className='block grid grid-cols-3 gap-5 py-5 px-5'>
        <span>
          Biaya Pengeluaran Rill
        </span>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
      </div>
      <div className='block grid grid-cols-3 gap-5 py-5 px-5'>
        <span>
          Uang Reprensentatif
        </span>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
      </div>
      <div className='block grid grid-cols-3 gap-5 py-5 px-5'>
        <span>
          Lain - Lain
        </span>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
      </div>
      <div className='block grid grid-cols-3 gap-5 py-5 px-5'>
        <span>
          Lain - Lain
        </span>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
      </div>
      <div className='block grid grid-cols-3 gap-5 py-5 px-5'>
        <span>
          Lain - Lain
        </span>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
      </div>
      <div className='block grid grid-cols-3 gap-5 py-5 px-5'>
        <span>
          Lain - Lain
        </span>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
        <input type="text" className="form-input ml-4 px-4 rounded-md border-gray-300"></input>
      </div>
      <div className='block grid grid-cols-3 gap-5 py-5 px-5'>
        <span>
          Uraian Kwt
        </span>
        <input type="text" className="form-input col-span-2 ml-4 px-4 rounded-md border-gray-300"></input>
      </div>

      <div className='grid grid-cols-4 gap-4 py-5 bg-orange-500 rounded'>
        <span className='text-white text-center'>
          Kegiatan
        </span>
        <span className='text-white text-center'>
          Sub Kegiatan
        </span>
        <span className='text-white text-center'>
          Kode Rekening
        </span>
        <span className='text-white text-center'>
          Bidang
        </span>
      </div>
      <div className='grid grid-cols-4 gap-5 py-5 px-5'>
        <select className="form-input px-4 py-3 rounded-md border-gray-300">
          <option>Services</option>
          <option>Sales</option>
        </select>
        <select className="form-input px-4 py-3 rounded-md border-gray-300">
          <option>Maintenance</option>
        </select>
        <select className="form-input px-4 py-3 rounded-md border-gray-300">
          <option>029231</option>
        </select>
        <select className="form-input px-4 py-3 rounded-md border-gray-300">
          <option>Instalasi</option>
        </select>
      </div>

      <div className=" px-4 py-3 text-right sm:px-6">
        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2">Simpan</button>
      </div>

    </div>
  );
}

export default App;
