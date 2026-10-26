const photos = [
  {id: 2, title: 'Жұмысқа дайындық', text: 'Шеберханадағы жұмыс орны және электроникамен танысу.', alt: 'Қорғаныш көзілдірігін киген оқушы жұмыс үстелінде'},
  {id: 3, title: 'Электрониканы құрастыру', text: 'Құрылғы бөлшектерімен және электрондық макетпен жұмыс.', alt: 'Оқушы электрондық бөлшектерді дәнекерлеп отыр'},
  {id: 4, title: 'Бағдарламалау және баптау', text: 'Ноутбук пен құрылғы макетін қатар пайдалану.', alt: 'Оқушы ноутбук пен сымдар жалғанған макетпен жұмыс істеп отыр'},
  {id: 1, title: 'Сайтты бірге тексеру', text: 'Отыруды бақылау интерфейсімен танысу және оны талқылау.', alt: 'Оқушы мен жетекші ноутбуктегі бақылау интерфейсін қарап отыр'},
];
export default function ProjectWork() {
  return <section className="page-section project-work">
    <div className="page-title"><div className="eyebrow plain">ARKASAFE ЖОБАСЫ</div><h1>Жұмыс барысы</h1><p>Құрастырудан сайтты тексеруге дейінгі жұмыс сәттері.</p></div>
    <div className="work-gallery">{photos.map((photo, i) => <figure className="panel work-photo" key={photo.id}>
      <a href={`/work/project-${photo.id}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`${photo.title}: фотоны толық ашу`}><img src={`/work/project-${photo.id}.jpg`} alt={photo.alt} width={960} height={1280} loading="lazy"/></a>
      <figcaption><span className="eyebrow plain">0{i+1}</span><h2>{photo.title}</h2><p className="muted">{photo.text}</p></figcaption>
    </figure>)}</div>
    <section className="panel work-certificate" aria-labelledby="certificate-title"><div><div className="eyebrow plain">БІЛІМ ЖӘНЕ ДАЙЫНДЫҚ</div><h2 id="certificate-title">Arduino негіздері</h2><p className="muted">Аманбай Мансурдың S7 Robotics білім беру орталығында «Arduino негіздері» курсын аяқтағанын растайтын сертификат.</p><p className="small-note">30 тамыз 2026 жыл · Сертификат № 506</p><a className="text-btn" href="/work/project-5.jpg" target="_blank" rel="noopener noreferrer">Сертификатты толық ашу ↗</a></div><a href="/work/project-5.jpg" target="_blank" rel="noopener noreferrer" aria-label="Сертификаттың толық суретін ашу"><img src="/work/project-5.jpg" alt="Аманбай Мансурдың Arduino негіздері курсын аяқтау сертификаты" width={1280} height={917} loading="lazy"/></a></section>
  </section>;
}
