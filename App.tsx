
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Star, 
  PlayCircle,
  ChevronRight,
  Send,
  MessageCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import SimpleBar from 'simplebar-react';

const Logo = () => (
  <div className="flex items-center cursor-pointer">
    <img
      src="/img/ChatGPT%20Image%2014%20de%20jan.%20de%202026,%2017_22_03.png"
      alt="Logotipo Alessandra Reis Psicóloga"
      className="h-[7.5rem] w-auto"
    />
  </div>
);

const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#serviços' },
  { label: 'Para Empresas', href: '#empresas' },
  { label: 'Contatos', href: '#contatos' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          <div className="hidden md:flex space-x-6 items-center">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-xs font-medium text-gray-600 hover:text-[#D37554] transition-colors uppercase tracking-wider">
                {item.label}
              </a>
            ))}
            <button className="bg-[#D37554] text-white px-5 py-2 rounded text-xs font-bold hover:bg-[#b86143] transition-colors uppercase tracking-widest">
              Fale Conosco
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="block text-sm font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <button className="bg-[#D37554] w-full text-white py-3 rounded text-sm font-bold">
            Fale Conosco
          </button>
        </div>
      )}
    </nav>
  );
};

interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  ctaText: string;
  videoUrl?: string;
  type: 'process' | 'course' | 'company';
  link?: string;
  hidden?: boolean;
}

const SERVICES_DATA: Service[] = [
  {
    id: "op-primeira",
    title: "Orientação Profissional (Primeira Escolha)",
    description: "Ajuda o jovem a tomar uma decisão mais consciente sobre o futuro profissional.",
    longDescription: "A Orientação Profissional para a Primeira Escolha é um processo de facilitação da escolha profissional, que ajuda o jovem a tomar uma decisão mais consciente sobre o futuro profissional. Ao longo dos encontros, trabalhamos o autoconhecimento, identificando interesses, habilidades, valores e expectativas, além de refletir sobre dúvidas, inseguranças e pressões externas que costumam surgir nesse momento. Vai além da aplicação de testes ou de respostas prontas. A partir desse caminho, são levantadas e analisadas possibilidades de carreira que façam sentido para o perfil do jovem, permitindo que a escolha profissional seja construída com mais clareza, segurança e consciência.",
    ctaText: "Quero conversar sobre esse processo",
    type: 'process',
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_AQUI"
  },
  {
    id: "op-reescolha",
    title: "Orientação Profissional - Reescolha Profissional",
    description: "Voltado para quem já tem uma trajetória, mas não se sente mais realizado.",
    longDescription: "A Orientação Profissional para a Reescolha Profissional é um processo de facilitação da decisão, voltado para pessoas que já têm uma formação ou trajetória profissional, mas não se sentem mais realizadas com a escolha que fizeram. Ao longo dos encontros, trabalhamos o autoconhecimento, revisitando interesses, valores, habilidades e expectativas, além de compreender as insatisfações, dúvidas e conflitos que surgiram ao longo da experiência profissional. Esse processo vai além da ideia de começar do zero ou de encontrar uma resposta imediata. Ele permite refletir sobre possibilidades reais de mudança, transição ou redirecionamento, considerando a história, o momento de vida e as condições de cada pessoa. A partir disso, são levantadas e analisadas alternativas profissionais mais alinhadas com quem a pessoa se tornou, possibilitando decisões mais conscientes, seguras e sustentáveis.",
    ctaText: "Quero conversar sobre esse processo",
    type: 'process',
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_REESCOLHA"
  },
  {
    id: "carreira",
    title: "Orientação / Planejamento de Carreira",
    description: "Organização e direcionamento para quem já atua no mercado de trabalho.",
    longDescription: "A Orientação ou Planejamento de Carreira é um processo de organização e direcionamento profissional, voltado para pessoas que já atuam no mercado de trabalho, mas sentem dificuldade em planejar os próximos passos da carreira. Ao longo dos encontros, trabalhamos o autoconhecimento, identificando interesses, valores, habilidades e objetivos profissionais, além de compreender os desafios, limites e possibilidades do momento atual. O processo permite organizar metas, avaliar caminhos possíveis dentro da própria área ou em áreas correlatas e construir um plano de carreira mais claro, realista e alinhado com a vida da pessoa, sem decisões impulsivas ou desconectadas da sua realidade. A partir desse planejamento, o profissional passa a ter mais clareza sobre onde está, para onde quer ir e quais passos fazem sentido dar agora.",
    ctaText: "Quero conversar sobre esse processo",
    type: 'process',
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_CARREIRA"
  },
  {
    id: "recolocacao",
    title: "Programa Completo de Recolocação Profissional",
    description: "Preparação estruturada para buscar novas oportunidades de forma estratégica.",
    longDescription: "O Programa de Recolocação Profissional é um processo estruturado de preparação e direcionamento para o mercado de trabalho, voltado para pessoas que buscam uma nova oportunidade profissional ou desejam se recolocar de forma mais estratégica.\n\nAo longo do programa, o profissional recebe suporte individual para organizar sua trajetória, fortalecer seu posicionamento e se apresentar melhor ao mercado. O trabalho inclui a criação ou reformulação do currículo, a reestruturação do perfil no LinkedIn, acesso ao curso completo de LinkedIn, preparação para entrevistas de emprego, além de análise de mercado e consultoria individual comigo.\n\nMais do que atualizar documentos, o programa ajuda a compreender o momento profissional, identificar oportunidades possíveis e construir uma estratégia de busca de emprego mais consciente, coerente e alinhada com os objetivos da pessoa.\n\nA recolocação não é tratada como um processo automático ou rápido, mas como um caminho que exige clareza, preparo e direcionamento para aumentar as chances de uma transição mais segura e consistente.",
    ctaText: "Quero conversar sobre esse programa",
    type: 'process',
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_RECOLOCACAO"
  },
  {
    id: "curso-curriculo",
    title: "Curso de Currículo",
    description: "Curso online estratégico para construir um currículo alinhado ao mercado.",
    longDescription: "O Curso de Currículo é um curso online, com aulas gravadas, que ensina o passo a passo para construir um currículo estratégico e alinhado com as exigências do mercado de trabalho.\n\nAo longo das aulas, a pessoa aprende a organizar sua trajetória profissional, destacar experiências e competências relevantes e adaptar o currículo de forma mais direcionada para diferentes oportunidades — indo além de modelos prontos ou currículos genéricos.\n\nO curso pode ser feito no ritmo de cada pessoa, com acesso às aulas para assistir quando e quantas vezes quiser, com acesso de 1 ano, permitindo aplicar o conteúdo de forma prática e consciente na busca por oportunidades profissionais.",
    ctaText: "Quero acessar o curso de currículo",
    type: 'course',
    link: "https://hotmart.com",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_CURRICULO"
  },
  {
    id: "curso-linkedin",
    title: "Curso de LinkedIn",
    description: "Aprenda a estruturar um perfil profissional e usar o LinkedIn de forma ativa.",
    longDescription: "O Curso de LinkedIn é um curso online, com aulas gravadas, voltado para quem deseja utilizar o LinkedIn de forma estratégica e alinhada aos seus objetivos profissionais. Ao longo das aulas, a pessoa aprende a estruturar um perfil mais claro e profissional, comunicar melhor sua trajetória, fortalecer o posicionamento no mercado e usar o LinkedIn como uma ferramenta ativa na busca por oportunidades — indo além de apenas “ter um perfil preenchido”. O curso é 100% online, com acesso às aulas para assistir quando e quantas vezes quiser, com acesso de 1 ano, permitindo que cada pessoa avance no seu ritmo e aplique o conteúdo de forma prática e gradual.",
    ctaText: "Quero acessar o curso de LinkedIn",
    type: 'course',
    link: "https://hotmart.com",
    hidden: true
  },
  {
    id: "curso-entrevista",
    title: "Curso de Preparação para Entrevistas de Emprego",
    description: "Sinta-se mais seguro, organizado e preparado para processos seletivos.",
    longDescription: "O Curso de Preparação para Entrevistas de Emprego é um curso online, com aulas gravadas, voltado para quem deseja se sentir mais seguro, organizado e preparado para processos seletivos. Ao longo das aulas, são trabalhadas as principais perguntas que costumam surgir nas entrevistas de emprego, além de técnicas para responder perguntas por competências, ajudando o candidato a comunicar experiências, habilidades e resultados de forma mais clara e estruturada. O curso também aborda postura, comunicação e preparação prévia, auxiliando no manejo da ansiedade e da insegurança que costumam aparecer nesse momento, para que o candidato consiga se posicionar com mais confiança e coerência com sua trajetória profissional. O acesso ao curso tem duração de 1 ano, permitindo que o conteúdo seja assistido e revisitado sempre que necessário, de acordo com os processos seletivos que surgirem ao longo do período.",
    ctaText: "Quero acessar o curso de preparação para entrevistas",
    type: 'course',
    link: "https://hotmart.com",
    hidden: true
  }
];

function getYouTubeId(url: string) {
  if (!url) return null;
  const re = /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
  const m = url.match(re);
  return m ? m[1] : null;
}

function withAutoplay(url: string) {
  if (!url) return url;
  return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
}

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setVideoPlaying(false);
    setVideoVisible(false);
  }, [selectedService]);

  return (
    <div className="min-h-screen font-['Inter']">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-4 hero-bg overflow-hidden">
        <div className="absolute inset-0 bg-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Um passo de cada vez, <br />
            na <span className="text-[#D37554]">direção certa.</span>
          </h1>
          <p className="text-white text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            Escolher uma carreira ou repensar o caminho profissional não precisa ser um processo solitário, apressado ou cheio de cobranças. Aqui, cada decisão é construída com cuidado, escuta e consciência.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button 
              onClick={() => scrollToSection('serviços')}
              className="bg-[#D37554] text-white px-10 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#b86143] transition-all shadow-xl hover:scale-105"
            >
              Conhecer os serviços <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contatos')}
              className="bg-white/10 backdrop-blur-md text-white border border-white/40 px-10 py-4 rounded-full text-sm font-bold hover:bg-white/20 transition-all shadow-xl hover:scale-105"
            >
              Conversar sobre minha necessidade
            </button>
          </div>
        </div>
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-white/50 rounded-full"></div>
            </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16">Você pode estar aqui porque:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              "Não sabe qual profissão escolher",
              "Sente que fez uma escolha que já não faz mais sentido",
              "Gosta do que faz, mas se sente estagnado(a)",
              "Precisa se recolocar no mercado, mas não sabe por onde começar"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-[#D37554]/10 p-2 rounded-lg">
                    <CheckCircle2 className="text-[#D37554]" size={24} />
                </div>
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-gray-500 italic text-xl max-w-2xl mx-auto leading-relaxed">
            Em comum, existe algo importante: a necessidade de clareza, segurança e direção para decidir o próximo passo.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#D37554]/10 p-2 rounded-xl text-[#D37554]">
                  <Star size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-widest">Sobre</h2>
              </div>
              <div className="text-sm md:text-lg text-gray-600 space-y-6 leading-relaxed">
                <p>Sou psicóloga clínica, especialista em orientação profissional e de carreira. Acompanho pessoas que estão em momentos de dúvida, transição ou redefinição de caminhos profissionais, quando a sensação de confusão, insegurança ou estagnação começa a pesar.</p>
                <p>Acredito que escolher não é apenas decidir entre opções. É compreender quem você é hoje, o que deseja construir e o que é possível sustentar ao longo do tempo. Decisões profissionais importantes não deveriam ser tomadas com pressa, culpa ou medo, mas, ainda assim, é assim que muitas pessoas acabam escolhendo.</p>
                <p>Meu trabalho não é oferecer respostas prontas ou testes isolados. É conduzir processos de orientação profissional e de carreira que respeitam a história, os limites e os desejos de cada pessoa, para que as escolhas sejam conscientes, seguras e façam sentido de verdade.</p>
                <div className="bg-[#D37554]/5 border-l-4 border-[#D37554] p-6 rounded-r-2xl">
                    <p className="font-bold text-gray-800 italic text-xl">
                        "O meu propósito é ajudar pessoas a encontrarem sentido em suas vidas profissionais, por meio de um trabalho ético, comprometido e cuidadoso."
                    </p>
                    <p className="text-sm text-[#D37554] mt-2 font-bold uppercase tracking-wider">Alessandra Reis</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative group">
                <img
                  src="/img/WhatsApp%20Image%202026-01-14%20at%2013.02.29.jpeg"
                  alt="Alessandra Reis"
                  className="w-80 h-[28rem] object-cover rounded-3xl shadow-2xl z-10 relative group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-[#D37554]/20 rounded-3xl -z-0"></div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#D37554]/5 rounded-full -z-0 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-16">
            <div className="bg-[#D37554]/10 p-2 rounded-xl text-[#D37554]">
              <PlayCircle size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-widest">Serviços</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.filter(s => !s.hidden).map((s) => (
              <div key={s.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full group">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#D37554] transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed flex-grow">{s.description}</p>
                <button 
                  onClick={() => setSelectedService(s)}
                  className="bg-[#D37554]/10 text-[#D37554] px-6 py-4 rounded-xl text-xs font-bold hover:bg-[#D37554] hover:text-white transition-all uppercase tracking-widest flex items-center justify-center gap-2 group-hover:translate-x-1"
                >
                  Conhecer Processo <ChevronRight size={14} />
                </button>
              </div>
            ))}
            
            {/* Business/Company Card */}
            <div id="empresas" className="bg-[#1E293B] p-10 rounded-2xl shadow-2xl flex flex-col text-white h-full relative overflow-hidden group border border-slate-700">
              <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                 <ExternalLink size={200} />
              </div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Para Empresas</h3>
              <p className="text-xs text-[#D37554] mb-4 relative z-10 font-bold uppercase tracking-widest">Escolher Consultoria de Carreiras</p>
              <p className="text-sm text-slate-300 mb-10 leading-relaxed relative z-10 flex-grow">
                Para empresas que buscam soluções estratégicas na área de pessoas, o atendimento corporativo é realizado por meio da Escolher Consultoria de Carreiras.
              </p>
              <a 
                href="https://escolherconsultoria.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all uppercase tracking-widest flex items-center justify-center gap-3 relative z-10 shadow-lg"
              >
                Conhecer soluções corporativas <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D37554]/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">Vamos conversar sobre o seu momento profissional</h2>
          <p className="text-gray-600 mb-12 text-xl leading-relaxed">
            Este é um espaço para você contar, com calma, o que está vivendo no momento. <br />
            A partir dessa conversa inicial, avaliamos juntos se e como posso te ajudar.
          </p>
          <a 
            href="https://wa.me/5581999138227" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex bg-[#25D366] text-white px-10 py-4 rounded-2xl font-bold text-lg items-center gap-4 shadow-2xl hover:bg-[#1eb956] transition-all transform hover:-translate-y-2 active:scale-95"
          >
            <MessageCircle size={28} /> Vamos conversar
          </a>
        </div>
      </section>

      {/* Detailed Contact / Form Section */}
      <section id="contatos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D37554] bg-[#D37554]/10 px-4 py-2 rounded-full font-bold mb-8 inline-block">Fale Conosco</span>
              <h2 className="text-5xl font-bold text-gray-900 mb-10 leading-tight">
                Envie uma <br />
                <span className="text-[#D37554]">Mensagem</span>
              </h2>
              <div className="space-y-10 mt-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#D37554] border border-gray-100 group-hover:bg-[#D37554] group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">E-mail</p>
                    <p className="text-lg font-bold text-gray-800">falecom@psialessandrareis.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#D37554] border border-gray-100 group-hover:bg-[#D37554] group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Localização</p>
                    <p className="text-lg font-bold text-gray-800">Recife, PE (Atendimento Online)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white rounded-3xl border border-gray-100 shadow-2xl p-10 md:p-14">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Nome *</label>
                    <input type="text" placeholder="Seu nome completo" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-sm outline-none focus:border-[#D37554] focus:ring-4 focus:ring-[#D37554]/5 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">E-mail *</label>
                    <input type="email" placeholder="seu@email.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-sm outline-none focus:border-[#D37554] focus:ring-4 focus:ring-[#D37554]/5 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Serviço de interesse</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-sm outline-none cursor-pointer focus:border-[#D37554] transition-all">
                    <option>Selecione um serviço</option>
                    {SERVICES_DATA.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Mensagem *</label>
                  <textarea rows={5} placeholder="Conte-nos sobre sua necessidade..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#D37554] focus:ring-4 focus:ring-[#D37554]/5 transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="bg-[#D37554] w-full text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#b86143] transition-all shadow-xl shadow-[#D37554]/20 text-lg">
                  Enviar Mensagem <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
          <Logo />
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            {NAV_ITEMS.map(item => <a key={item.label} href={item.href} className="hover:text-[#D37554] transition-colors">{item.label}</a>)}
          </div>
          <div className="text-right flex flex-col items-center md:items-end gap-2">
            <p className="text-[11px] text-gray-400 font-medium">© 2024 Alessandra Reis. Psicóloga CRP 02/XXXXX.</p>
            <p className="text-[9px] text-gray-300 font-medium uppercase tracking-widest">Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Service Details Modal */}
      {selectedService && (
        <div data-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedService(null)}></div>
          <div className="bg-white rounded-[2.5rem] w-full max-w-3xl max-h-[90vh] relative shadow-2xl animate-in zoom-in duration-300 border border-gray-100">
            <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-20 bg-white/50 backdrop-blur-sm rounded-full p-2">
              <X size={28} />
            </button>
            <SimpleBar autoHide={false} style={{ maxHeight: '90vh' }}>
            <div className="p-10 md:p-16 text-center">
              <div className="inline-block bg-[#D37554]/10 p-4 rounded-2xl text-[#D37554] mb-8">
                 <PlayCircle size={40} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">{selectedService.title}</h3>
              <p className="text-[#D37554] font-bold text-[11px] uppercase tracking-[0.3em] mb-10">Como Funciona o Processo</p>
              
              <div className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 text-justify bg-gray-50 p-8 rounded-3xl border border-gray-100">
                {selectedService.longDescription}
              </div>

              {/* Video CTA removed from modal as requested */}

              <div className="flex flex-col items-center gap-6">
                {selectedService.type === 'course' ? (
                  <a 
                    href={selectedService.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#D37554] text-white px-10 py-4 rounded-2xl font-bold text-base w-full max-w-sm hover:bg-[#b86143] text-center shadow-xl shadow-[#D37554]/30 transform transition-all hover:scale-105"
                  >
                    {selectedService.ctaText}
                  </a>
                ) : (
                  <button 
                    onClick={() => {
                      setSelectedService(null);
                      scrollToSection('contatos');
                    }}
                    className="bg-[#D37554] text-white px-10 py-4 rounded-2xl font-bold text-base w-full max-w-sm hover:bg-[#b86143] shadow-xl shadow-[#D37554]/30 transform transition-all hover:scale-105"
                  >
                    {selectedService.ctaText}
                  </button>
                )}
                <button onClick={() => setSelectedService(null)} className="text-gray-400 font-bold uppercase text-[10px] tracking-widest hover:text-gray-600 transition-colors">Voltar</button>
              </div>
            </div>
            </SimpleBar>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
