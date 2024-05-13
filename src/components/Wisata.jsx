import GigiHiu from "../assets/GigiHiu.png";
import Lanakila from "../assets/LanakilaLake.webp";
import Lembah from "../assets/LembahBatu.jpeg";
import Pisang from "../assets/PulauPisang.jpg";
import Temiangan from "../assets/Temiangan hill.jpg";
import Minang from "../assets/minangrua.jpg";
import Teca from "../assets/tebing cepa.jpg"
import Pahawang from "../assets/pantai pahawang.jpg"

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
        deskripsi: "Lembah Batu, terletak di Lampung, adalah sebuah destinasi alam yang memikat dengan keindahan alamnya yang menakjubkan. Terletak di antara pegunungan yang hijau dan lembah yang dalam, tempat ini menawarkan pemandangan yang memukau bagi para pengunjungnya. Dikelilingi oleh hutan-hutan yang rimbun dan sungai yang mengalir tenang, Lembah Batu menawarkan suasana yang damai dan menenangkan bagi siapa pun yang mengunjunginya. Selain keindahan alamnya, Lembah Batu juga memiliki nilai sejarah dan budaya yang kaya, tercermin dari situs-situs arkeologis yang tersebar di sekitarnya. Bagi para petualang dan pecinta alam, Lembah Batu menjadi destinasi yang sempurna untuk menikmati keajaiban alam dan menyelami kekayaan budaya Lampung."
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
        deskripsi: "Pantai Minang Rua di Lampung adalah destinasi yang menawarkan pemandangan yang memukau dengan hamparan pasir putih yang lembut dan air laut yang jernih berwarna biru kehijauan. Pengunjung dapat merasakan ketenangan saat berjalan di tepi pantai, menikmati semilir angin laut yang sejuk, atau bersantai di bawah rindangnya pohon kelapa yang tersebar di sepanjang pantai. Selain itu, Pantai Minangrua juga menjadi tempat yang sempurna untuk berbagai aktivitas luar ruang seperti berenang, snorkeling, atau sekedar menikmati panorama sunset yang mempesona. Keindahan alami dan suasana yang masih asri membuat pantai ini menjadi salah satu destinasi favorit bagi para pencinta alam dan mereka yang mencari kedamaian jauh dari hiruk pikuk kehidupan kota."
    },
    {
        id: 7,
        name: "Way Tembing Cepa",
        imgURL: Teca,
        lng: "105.65646",
        lat: "-5.74503",
        deskripsi: "Way Tebing Cepa di Lampung adalah sebuah destinasi wisata alam yang menawarkan keunikan berupa tebing-tebing batu dengan sungai yang jernih mengalir di antaranya. Lokasi ini menarik bagi para petualang dan pecinta alam, menawarkan pemandangan yang dramatis dan kesempatan untuk melakukan kegiatan luar ruangan seperti arung jeram dan trekking di sepanjang jalur yang memadukan tantangan dan keindahan alam. Air sungai Way Tebing Cepa yang dingin dan segar sangat cocok untuk menyegarkan diri setelah beraktivitas, sementara suara alam yang tenang memberikan suasana relaksasi yang mendalam."
    },
    {
        id: 8,
        name: "Pantai Pahawang",
        imgURL: Pahawang,
        lng: "105.22216",
        lat: "-5.67481",
        deskripsi: "Pantai Pahawang di Lampung adalah surga tersembunyi yang menakjubkan bagi para pencinta alam dan penggemar aktivitas air. Terletak di ujung selatan Pulau Sumatra, pantai ini menawarkan keindahan alam yang memukau, dengan air laut yang jernih, pasir putih yang lembut, dan hamparan terumbu karang yang berwarna-warni. Pemandangan bawah lautnya begitu memesona dengan keberagaman hayati yang luar biasa, membuatnya menjadi destinasi snorkeling dan diving yang populer."
    },

];

export default Wisata;
