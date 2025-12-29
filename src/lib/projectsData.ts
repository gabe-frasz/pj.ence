export interface ProjectDetail {
  id: string;
  name: string;
  tagline: string;
  year: string;
  service: string;
  description: string;
  designStrategy: string;
  images: string[];
}

export const projectsData: Record<string, ProjectDetail> = {
  "astrofarma": {
    id: "astrofarma",
    name: "Astrofarma",
    tagline: "Inovação farmacêutica com propósito.",
    year: "2023",
    service: "Identidade Visual",
    description: "A Astrofarma busca revolucionar o acesso a medicamentos com uma abordagem humanizada e tecnológica.",
    designStrategy: "Cores sóbrias combinadas com elementos dinâmicos que transmitem confiança e agilidade.",
    images: [
      "/assets/projects/astrofarma/Capa.png",
      "/assets/projects/astrofarma/01-logoideia.png",
      "/assets/projects/astrofarma/02-logoapply.png",
      "/assets/projects/astrofarma/03-icons.png",
      "/assets/projects/astrofarma/04-colors.png",
      "/assets/projects/astrofarma/05-tipograpy.png",
      "/assets/projects/astrofarma/06-logoversions.png",
      "/assets/projects/astrofarma/07-case.png",
      "/assets/projects/astrofarma/08-card.png",
      "/assets/projects/astrofarma/09-outdoorsp.png",
      "/assets/projects/astrofarma/10-crachá.png",
      "/assets/projects/astrofarma/11-megaoutdoor.png",
      "/assets/projects/astrofarma/12-basefachada.png",
      "/assets/projects/astrofarma/13-website.png",
      "/assets/projects/astrofarma/14-fachada.png",
      "/assets/projects/astrofarma/15-case.png",
      "/assets/projects/astrofarma/16-fachada.png"
    ]
  },
  "zoeira-cooking": {
    id: "zoeira-cooking",
    name: "Zoeira Cooking",
    tagline: "Pessoas, batata frita e muita zueira.",
    year: "2023",
    service: "Identidade Visual",
    description: "Inspirada pela descontração das redes sociais, a marca Zoeira Cooking traz uma linguagem visual vibrante e lúdica.",
    designStrategy: "Um olhar divertido sobre a culinária, onde o riso é o ingrediente principal.",
    images: [
      "/assets/projects/zoeiracooking/Capa.png",
      "/assets/projects/zoeiracooking/01-CASE.png",
      "/assets/projects/zoeiracooking/02-LOGOVERSIONS.png",
      "/assets/projects/zoeiracooking/03-LOGO.png",
      "/assets/projects/zoeiracooking/04-FONT.png",
      "/assets/projects/zoeiracooking/05-COLORS.png",
      "/assets/projects/zoeiracooking/06-CASE.png",
      "/assets/projects/zoeiracooking/07-ICONS.png",
      "/assets/projects/zoeiracooking/08-SOCIAL.png",
      "/assets/projects/zoeiracooking/09-MOKUPS.png",
      "/assets/projects/zoeiracooking/10-KEYVISUAL.png",
      "/assets/projects/zoeiracooking/11-STORY.png",
      "/assets/projects/zoeiracooking/12-MOCKUP.png",
      "/assets/projects/zoeiracooking/13-CASE.png",
      "/assets/projects/zoeiracooking/14-KEYBOARD.png",
      "/assets/projects/zoeiracooking/15-MOCKUP.png"
    ]
  },
  "inova-alpin": {
    id: "inova-alpin",
    name: "Inova Alpin",
    tagline: "Tecnologia de ponta em ambientes extremos.",
    year: "2024",
    service: "Product Design",
    description: "Inova Alpin foca em soluções de engenharia para condições climáticas adversas.",
    designStrategy: "Estética industrial e funcionalidade extrema guiam a identidade visual.",
    images: [
      "/assets/projects/inovaalpin/Capa.png",
      "/assets/projects/inovaalpin/01-grid.png",
      "/assets/projects/inovaalpin/02-grid.png",
      "/assets/projects/inovaalpin/03-grid.png",
      "/assets/projects/inovaalpin/04-logoaply.png",
      "/assets/projects/inovaalpin/05-colors.png",
      "/assets/projects/inovaalpin/06-case.png",
      "/assets/projects/inovaalpin/07-composition.png",
      "/assets/projects/inovaalpin/08-card.png",
      "/assets/projects/inovaalpin/09-evelope.png",
      "/assets/projects/inovaalpin/10-services.png",
      "/assets/projects/inovaalpin/11-website.png",
      "/assets/projects/inovaalpin/12-website.png",
      "/assets/projects/inovaalpin/13-qebsite.png",
      "/assets/projects/inovaalpin/14-crachá.png",
      "/assets/projects/inovaalpin/14-outdoor.png",
      "/assets/projects/inovaalpin/15-outdoor.png",
      "/assets/projects/inovaalpin/16-service.png",
      "/assets/projects/inovaalpin/17-outdoor.png",
      "/assets/projects/inovaalpin/18-social.png",
      "/assets/projects/inovaalpin/19-social.png",
      "/assets/projects/inovaalpin/20-posts.png"
    ]
  },
  "conceito": {
    id: "conceito",
    name: "Conceito",
    tagline: "A essência do design em cada detalhe.",
    year: "2023",
    service: "Branding",
    description: "Conceito é um estúdio de arquitetura que preza pelo minimalismo e sustentabilidade.",
    designStrategy: "Uso de espaços em branco e tipografia elegante para destacar a pureza das formas.",
    images: [
      "/assets/projects/conceito/capa.png",
      "/assets/projects/conceito/01-preview.png",
      "/assets/projects/conceito/02-logogrid.png",
      "/assets/projects/conceito/03-case.png",
      "/assets/projects/conceito/04-beforeafter.png",
      "/assets/projects/conceito/05-colors.png",
      "/assets/projects/conceito/06-fonts.png",
      "/assets/projects/conceito/07-case.png",
      "/assets/projects/conceito/08-outdoor.png",
      "/assets/projects/conceito/09-outdoorcard.png",
      "/assets/projects/conceito/10-envelope.png",
      "/assets/projects/conceito/11-paineis.png",
      "/assets/projects/conceito/12-revista.png",
      "/assets/projects/conceito/13-outdoor.png",
      "/assets/projects/conceito/14-composição.png"
    ]
  },
  "petlovers": {
    id: "petlovers",
    name: "Petlovers",
    tagline: "Amor e cuidado para quem mais importa.",
    year: "2024",
    service: "Eco-Branding",
    description: "Petlovers é uma plataforma de services sustentáveis para animais de estimação.",
    designStrategy: "Paleta de cores orgânica e ilustrações acolhedoras.",
    images: [
      "/assets/projects/petlovers/capa.png",
      "/assets/projects/petlovers/01-case.png",
      "/assets/projects/petlovers/02-logoaply.png",
      "/assets/projects/petlovers/03-LOGOMOCKUP.png",
      "/assets/projects/petlovers/04-font.png",
      "/assets/projects/petlovers/05-IMAGENS.png",
      "/assets/projects/petlovers/06-WEBSITE.png",
      "/assets/projects/petlovers/07-WEBSITE.png",
      "/assets/projects/petlovers/08-POST.png",
      "/assets/projects/petlovers/09-OUTDOOR.png",
      "/assets/projects/petlovers/10-OUTDOOR.png"
    ]
  },
  "trambit": {
    id: "trambit",
    name: "Trambit",
    tagline: "Conectando o world digital ao real.",
    year: "2023",
    service: "Web Design",
    description: "Trambit facilita a transição de empresas físicas para o e-commerce de alto impacto.",
    designStrategy: "Interfaces limpas com foco total na conversão e experiênicia do usuário.",
    images: [
      "/assets/projects/trambit/Capa.png",
      "/assets/projects/trambit/01-LOGO.png",
      "/assets/projects/trambit/02-LOGOAPPLY.png",
      "/assets/projects/trambit/03-LOGOVERSIONS.png",
      "/assets/projects/trambit/04-FONT.png",
      "/assets/projects/trambit/05-COLORS.png",
      "/assets/projects/trambit/06-KEYVISUALS.png",
      "/assets/projects/trambit/07-POST.png",
      "/assets/projects/trambit/08-BASEAI.png",
      "/assets/projects/trambit/09-AIIMAGES.png",
      "/assets/projects/trambit/10-AIIMAGE.png"
    ]
  }
};
