import logo from './logo.svg';
import './App.css';

const TableList = (props) => {
  const { title, createdAt } = props;

  const catatans_bacabuku = {
    Eksplorasi_Sejarah_Dunia: [
      "Membaca Pandangan Baru tentang Sejarah Dunia membuka mata saya terhadap sudut pandang baru tentang peristiwa sejarah.",
    ],
    Petualangan_Fantasi_Di_The_Lost_Kingdom: [
      "Menceritakan seorang pahlawan mengatasi tantangan magis dan mengungkap misteri di kerajaan yang hilang.",
    ],
    Pemahaman_Mendalam_Tentang_Ekologi: [
      "Membaca buku ekologi memberi saya wawasan mendalam tentang keterkaitan makhluk hidup dan lingkungan.",
    ],
    Menjelajahi_Pemikiran_Filosofis: [
      "Membaca buku menjelajahi pemikiran filosofi yang memberikan saya wawasan filosofis yang mendalam.",
    ],
    };

  const catatan_bacabuku = catatans_bacabuku[title] || [];

  return (
    <div className="col-sm-4 mb-5">
      <div className="card">
        <p className="card-header bg-primary"></p>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          {catatan_bacabuku.map((content, index) => (
            <p className="card-text" key={index}>
              {content}
            </p>
          ))}
        </div>
        <div className="card-footer text-white text-center text-bg-primary">CreatedAt: {createdAt}</div>
      </div>
    </div>
  );
};
function App() {
  const app = "Catatan App Baca Buku";
  const listBuku = [
    "Eksplorasi_Sejarah_Dunia",
    "Petualangan_Fantasi_Di_The_Lost_Kingdom",
    "Pemahaman_Mendalam_Tentang_Ekologi",
    "Menjelajahi_Pemikiran_Filosofis",
  ];
  const listTime = [
    "01-12-2023 12:00 WIB",
    "02-12-2023 12:00 WIB",
    "03-12-2023 16:00 WIB",
    "04-12-2023 09:00 WIB",
  ];
  return (
    <div className="App">
      <h2>{app}</h2>
      {
        <div className="container mt-5">
          <div className="row">
            {listBuku.map((title, index) => (
              <TableList key={index} title={title} createdAt={listTime[index]} />
            ))}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
