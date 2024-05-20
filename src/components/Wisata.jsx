import GigiHiu from "../assets/GigiHiu.png";
import Lanakila from "../assets/LanakilaLake.webp";
import Lembah from "../assets/LembahBatu.jpeg";
import Pisang from "../assets/PulauPisang.jpg";
import Temiangan from "../assets/Temiangan hill.jpg";
import Minang from "../assets/minangrua.jpg";
import Teca from "../assets/tebing cepa.jpg"
import Pahawang from "../assets/pantai pahawang.jpg"
import Karang from "../assets/pantai karang bebai.jpg"
import Gunung from "../assets/gunungKra.jpg"
import Baka from "../assets/Bakauheni.jpg"
import Suoh from "../assets/DanauSuoh.jpg"
import Karet from "../assets/KebunKaretTrikora.jpg"
import Siger from "../assets/MenaraSiger.jpg"
import DewiMandapa from "../assets/PantaiDewiMandapa.jpg"
import Ringgung from "../assets/PantaiSariRinggung.png"
import Teluk from "../assets/PantaiTelukKiluan.jpg"
import Balak from "../assets/PulauBalak.jpg"
import Kambas from "../assets/WayKambas.webp"
import Sumpuk from "../assets/WaySumpuk.jpg"

const Wisata = [
    {
        id: 1,
        name: "Gigi Hiu",
        imgURL: GigiHiu,
        lng: "105.05765",
        lat: "-5.75581",
        deskripsi: "Wisata Gigi Hiu di Lampung menawarkan pengalaman yang mendebarkan bagi para pengunjung yang mencintai petualangan bawah laut. Dengan kandang observasi yang terendam di bawah permukaan air, pengunjung dapat melihat ikan hiu dalam habitat alaminya tanpa harus melakukan penyelaman yang ekstrem. Kesempatan untuk melihat ikan hiu secara langsung memberikan pengalaman yang tak terlupakan dan mendalam tentang keindahan serta keberagaman kehidupan laut di perairan Lampung."
    },
    {
        id: 2,
        name: "Lanakila Lake",
        imgURL: Lanakila,
        lng: "104.90939",
        lat: "-5.34201",
        deskripsi: "Lanakila Lake, sebuah perairan indah yang terletak di Lampung, menawarkan pengalaman alam yang menakjubkan bagi pengunjungnya. Dikelilingi oleh pegunungan yang hijau dan pepohonan yang rindang, danau ini memancarkan ketenangan dan keindahan yang luar biasa. Aktivitas seperti memancing, berkemah, atau sekadar menikmati piknik di tepi danau menjadi pilihan yang menyenangkan bagi para wisatawan yang ingin menyatu dengan alam. Suasana damai dan panorama alam yang memukau membuat Lanakila Lake menjadi destinasi liburan yang sempurna untuk relaksasi dan petualangan alam."
    },
    {
        id: 3,
        name: "Lembah Batu",
        imgURL: Lembah,
        lng: "105.23653",
        lat: "-5.40945",
        deskripsi: "Lembah Batu, terletak di Lampung, adalah sebuah destinasi alam yang memikat dengan keindahan alamnya yang menakjubkan. Terletak di antara pegunungan yang hijau dan lembah yang dalam, tempat ini menawarkan pemandangan yang memukau bagi para pengunjungnya. Dikelilingi oleh hutan-hutan yang rimbun dan sungai yang mengalir tenang, Lembah Batu menawarkan suasana yang damai dan menenangkan bagi siapa pun yang mengunjunginya. Selain keindahan alamnya, Lembah Batu juga memiliki nilai sejarah dan budaya yang kaya, tercermin dari situs-situs arkeologis yang tersebar di sekitarnya."
    },
    {
        id: 4,
        name: "Pulau Pisang",
        imgURL: Pisang,
        lng: "103.84700",
        lat: "-5.11936",
        deskripsi: "Pulau Pisang, terletak di Provinsi Lampung, menawarkan pesona alam tropis yang memesona bagi para pengunjungnya. Dikelilingi oleh air biru laut yang jernih dan pasir putih yang lembut, pulau ini menjadi destinasi yang sempurna untuk bersantai dan menikmati keindahan pantai. Selain itu, kegiatan seperti snorkeling dan menyelam dapat dinikmati untuk menjelajahi kehidupan bawah laut yang beragam dan menawan. Dengan udara segar yang menyejukkan dan panorama alam yang memukau, Pulau Pisang menjadi tempat liburan yang tak terlupakan bagi siapa pun yang mengunjunginya."
    },
    {
        id: 5,
        name: "Temiangan Hill",
        imgURL: Temiangan,
        lng: "104.43995",
        lat: "-5.12235",
        deskripsi: "Temiangan Hill adalah sebuah perbukitan yang mempesona, terletak di tengah-tengah keindahan alam Borneo. Dikelilingi oleh hutan hujan yang lebat dan sungai-sungai yang mengalir dengan gemericik air, Temiangan Hill menawarkan pemandangan yang menakjubkan serta kesempatan untuk menjelajahi keanekaragaman hayati yang kaya di sekitarnya. Dengan udara segar yang menyejukkan dan suasana yang tenang, tempat ini merupakan destinasi ideal bagi para petualang yang mencari ketenangan dan keindahan alam yang belum tersentuh."
    },
    {
        id: 6,
        name: "Minang Rua",
        imgURL: Minang,
        lng: "105.71481",
        lat: "-5.85670",
        deskripsi: "Pantai Minang Rua di Lampung adalah destinasi yang menawarkan pemandangan yang memukau dengan hamparan pasir putih yang lembut dan air laut yang jernih berwarna biru kehijauan. Pengunjung dapat merasakan ketenangan saat berjalan di tepi pantai, menikmati semilir angin laut yang sejuk, atau bersantai di bawah rindangnya pohon kelapa yang tersebar di sepanjang pantai. Selain itu, Pantai Minangrua juga menjadi tempat yang sempurna untuk berbagai aktivitas luar ruang seperti berenang, snorkeling, atau sekedar menikmati panorama sunset yang mempesona."
    },
    {
        id: 7,
        name: "Way Tembing Cepa",
        imgURL: Teca,
        lng: "105.65646",
        lat: "-5.74503",
        deskripsi: "Way Tebing Cepa di Lampung adalah sebuah destinasi wisata alam yang menawarkan keunikan berupa tebing-tebing batu dengan sungai yang jernih mengalir di antaranya. Lokasi ini menarik bagi para petualang dan pecinta alam, menawarkan pemandangan yang dramatis dan kesempatan untuk melakukan kegiatan luar ruangan seperti arung jeram dan trekking di sepanjang jalur yang memadukan tantangan dan keindahan alam. Air sungai Way Tebing Cepa yang dingin dan segar sangat cocok untuk menyegarkan diri setelah beraktivitas."
    },
    {
        id: 8,
        name: "Pantai Pahawang",
        imgURL: Pahawang,
        lng: "105.22216",
        lat: "-5.67481",
        deskripsi: "Pantai Pahawang di Lampung adalah surga tersembunyi yang menakjubkan bagi para pencinta alam dan penggemar aktivitas air. Terletak di ujung selatan Pulau Sumatra, pantai ini menawarkan keindahan alam yang memukau, dengan air laut yang jernih, pasir putih yang lembut, dan hamparan terumbu karang yang berwarna-warni. Pemandangan bawah lautnya begitu memesona dengan keberagaman hayati yang luar biasa, membuatnya menjadi destinasi snorkeling dan diving yang populer."
    },

    {
        id: 9,
        name: "Pantai Karang Bebai",
        imgURL: Karang,
        lng: "104.90515",
        lat: "-5.67550",
        deskripsi: "Pantai Karang Bebai adalah sebuah destinasi pantai yang indah di Lampung, Indonesia. Terletak di sebelah barat laut kota Bandar Lampung, pantai ini terkenal dengan keindahan panorama alamnya yang menakjubkan. Karang-karang besar dan unik menghiasi pantai ini, menciptakan pemandangan yang memukau. Selain itu, airnya yang jernih dan pasir putihnya menambah pesona Pantai Karang Bebai sebagai tempat ideal untuk berlibur dan menikmati keindahan alam Lampung."
    },

    {
        id: 10,
        name: "Gunung Anak Krakatau",
        imgURL: Gunung,
        lng: "105.42673",
        lat: "-6.10060",
        deskripsi: "Gunung Anak Krakatau adalah sebuah gunung berapi yang terletak di Selat Sunda, di lepas pantai Lampung, Indonesia. Gunung ini terbentuk dari aktivitas vulkanik setelah letusan dahsyat Gunung Krakatau pada tahun 1883. Dengan ketinggian sekitar 300 meter di atas permukaan laut, Gunung Anak Krakatau menjadi daya tarik bagi para pendaki dan pengunjung yang tertarik dengan keindahan alam dan fenomena geologi. Selain menawarkan pemandangan yang spektakuler."
    },

    {
        id: 11,
        name: "Way Kambas",
        imgURL: Kambas,
        lng: "105.77684",
        lat: "-4.92740",
        deskripsi: 'Way Kambas adalah sebuah taman nasional yang terkenal dengan pusat pelatihan gajah di Indonesia. Terletak di Lampung Timur, taman ini menawarkan pengalaman unik bagi para pengunjung untuk melihat dan berinteraksi langsung dengan gajah-gajah yang dilatih di sana. Selain gajah, Way Kambas juga menjadi rumah bagi berbagai satwa liar lainnya seperti harimau sumatra dan badak sumatra yang sangat langka. Dengan luas lebih dari 1.300 km², Way Kambas menyediakan berbagai kegiatan ekowisata yang menarik, termasuk safari hutan dan penjelajahan alam yang menakjubkan.'
    },
    {
        id: 12,
        name: "Pantai Dewi Mandapa",
        imgURL: DewiMandapa,
        lng: "105.24366",
        lat: "-5.57238",
        deskripsi: "Pantai Dewi Mandapa adalah destinasi wisata pantai yang memukau di Pesawaran, Lampung. Pantai ini dikenal dengan keindahan pasir putihnya dan air laut yang jernih, menawarkan pemandangan alam yang memesona serta suasana yang tenang dan nyaman. Di sekitar pantai, terdapat berbagai spot foto yang Instagramable, seperti dermaga kayu dan gazebo apung yang menambah daya tarik tempat ini. Pengunjung bisa menikmati berbagai aktivitas rekreasi seperti berenang, snorkeling, atau sekadar bersantai menikmati keindahan alam."
    },
    {
        id: 13,
        name: "Pulau Balak",
        imgURL: Balak,
        lng: "105.18027",
        lat: "-5.75446",
        deskripsi: "Pulau Balak adalah salah satu pulau kecil yang eksotis di perairan Teluk Lampung. Pulau ini menawarkan keindahan alam yang memukau dengan pantai berpasir putih dan air laut yang bening, sangat cocok untuk snorkeling dan diving. Terumbu karang yang indah serta beragam biota laut menjadikan Pulau Balak destinasi favorit bagi pecinta alam bawah laut. Selain itu, suasana yang tenang dan alami menjadikan pulau ini tempat yang sempurna untuk beristirahat sejenak dari hiruk-pikuk kehidupan kota."
    },
    {
        id: 14,
        name: "Danau Suoh",
        imgURL: Suoh,
        lng: "104.27336",
        lat: "-5.23504",
        deskripsi: "Danau Suoh adalah sebuah danau vulkanik yang terletak di Lampung Barat, menawarkan pemandangan alam yang luar biasa dengan tiga danau berbeda warna dalam satu kawasan. Danau ini dikelilingi oleh pegunungan dan hutan yang masih alami, menciptakan suasana yang sejuk dan segar. Selain menikmati keindahan danau, pengunjung juga bisa melihat fenomena geothermal seperti mata air panas dan semburan gas yang menarik. Danau Suoh menjadi destinasi yang sempurna bagi mereka yang ingin menikmati keindahan alam yang unik dan menenangkan."
    },
    {
        id: 15,
        name: "Kebun Karet Trikora",
        imgURL: Karet,
        lng: "105.29812",
        lat: "-5.27113",
        deskripsi: "Kebun Karet Trikora di Lampung Tengah menawarkan wisata edukasi yang menarik tentang proses produksi karet dari pohon hingga menjadi bahan baku industri. Di sini, pengunjung bisa melihat langsung cara penyadapan getah karet dan berbagai tahap pengolahannya. Kebun ini juga memiliki pemandangan yang indah dengan deretan pohon karet yang tertata rapi, menciptakan suasana yang tenang dan nyaman untuk berjalan-jalan. Tempat ini cocok untuk wisata keluarga yang ingin belajar sekaligus menikmati keindahan alam."
    },
    {
        id: 16,
        name: "Way Sumpuk",
        imgURL: Sumpuk,
        lng: "104.75162",
        lat: "-5.40405",
        deskripsi: "Way Sumpuk adalah sebuah destinasi wisata alam yang terletak di Lampung Barat, menawarkan pemandangan air terjun yang menakjubkan dengan air jernih yang mengalir deras. Lokasi yang tersembunyi di tengah hutan membuat tempat ini terasa eksklusif dan alami. Pengunjung bisa menikmati keindahan air terjun, berenang di kolam alami yang terbentuk di bawahnya, atau sekadar bersantai menikmati suasana yang damai dan sejuk. Way Sumpuk adalah tempat yang sempurna bagi mereka yang mencari ketenangan di alam terbuka."
    },
    
    {
        id: 17,
        name: "Pantai Sari Ringgung",
        imgURL: Ringgung,
        lng: "105.25217",
        lat: "-5.55754",
        deskripsi: "Pantai Sari Ringgung terletak di Kabupaten Pesawaran, menawarkan kombinasi sempurna antara keindahan alam dan fasilitas wisata yang lengkap. Pantai ini memiliki pasir putih yang halus dan air laut yang biru jernih, sangat cocok untuk berenang dan berbagai olahraga air. Salah satu daya tarik utamanya adalah pasir timbul yang muncul saat air laut surut, menciptakan spot foto yang sangat menarik. Selain itu, pengunjung bisa menyewa perahu untuk menjelajahi keindahan sekitar pantai atau menikmati kuliner laut yang segar di restoran-restoran pinggir pantai."
    },

    {
        id: 18,
        name: "Bukit Kumbang",
        imgURL: Baka,
        lng: "105.72653",
        lat: "-5.87032",
        deskripsi: "Bukit Kumbang adalah destinasi wisata di Lampung yang menawarkan pemandangan panorama alam yang luar biasa dari ketinggian. Terletak di Pesawaran, bukit ini memberikan pemandangan luas Teluk Lampung dan sekitarnya, terutama saat matahari terbit dan terbenam. Pengunjung bisa mendaki bukit melalui jalur yang menantang tetapi sepadan dengan pemandangan yang didapatkan di puncaknya. Selain itu, Bukit Kumbang juga dikenal dengan keberadaan berbagai flora dan fauna, menjadikannya tempat yang ideal untuk pecinta alam dan fotografi."
    },

    {
        id: 19,
        name: "Teluk Kiluan",
        imgURL: Teluk,
        lng: "105.09332",
        lat: "-5.78140",
        deskripsi: "Menara Siger adalah ikon pariwisata Lampung yang terletak di Bakauheni, dekaTeluk Kiluan terkenal sebagai salah satu tempat terbaik di Indonesia untuk menyaksikan lumba-lumba di habitat aslinya. Terletak di Tanggamus, Lampung, teluk ini menawarkan pengalaman wisata yang tak terlupakan dengan berlayar di pagi hari untuk melihat lumba-lumba melompat dan berenang di sekitar perahu. Selain itu, Teluk Kiluan juga memiliki pantai yang indah dan air laut yang jernih, ideal untuk berenang, snorkeling, dan diving."
    },

    {
        id: 20,
        name: "Menara Siger",
        imgURL: Siger,
        lng: "105.74974",
        lat: "-5.86550",
        deskripsi: "Menara Siger adalah ikon pariwisata Lampung yang terletak di Bakauheni, dekat dengan pelabuhan utama. Menara setinggi 32 meter ini memiliki arsitektur yang unik dengan bentuk siger, mahkota adat Lampung, yang megah dan mencolok. Dari atas menara, pengunjung dapat menikmati pemandangan indah Selat Sunda dan sekitarnya. Menara Siger juga berfungsi sebagai pusat informasi pariwisata dan sering dijadikan tempat penyelenggaraan berbagai acara budaya. Tempat ini menjadi simbol kebanggaan masyarakat Lampung"
    },


];

export default Wisata;
