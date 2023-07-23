const header = {
  Início: "Inicio",
  Equipe: "Equipo",
  Contato: "Contacto",
  Casos: "Casos",
  "Pré-diagnóstico": "Pre-diagnóstico",
  "NOVO!": "¡NUEVO!",
  "EM BREVE!": "¡PRÓXIMAMENTE!",
};

const footer = {
  "Vamos marcar uma conversa?": "¿Vamos a marcar una conversación?",
  "Entre em contato para discutir conosco suas necessidades!":
    "¡Contáctanos para discutir tus necesidades! Podemos programar una reunión informal en línea para pensar en cómo podemos ayudarle.",
  "Fale com a gente": "Contáctanos",
  "Siga a Jataí": "Sigue a Jataí",
};

const home = {
  "Construindo organizações públicas para o mundo <b>digital</b> e <b>sustentável</b>":
    "Construyendo organizaciones públicas para el mundo <b>digital</b> y <b>sostenible</b>",
  "Somos uma organização sem fins lucrativos criada com a missão de apoiar organizações públicas a se tornarem mais ágeis para se adaptarem ao mundo digital e sustentável.":
    "Somos una organización sin fines de lucro creada con la misión de ayudar a las organizaciones públicas a volverse más ágiles para adaptarse al mundo digital y sostenible.",
  "Fale conosco": "Contáctanos",
  "Confira o edital para apoio a <b>contratação de sistema de gestão escolar</b>":
    "Revisa el anuncio para apoyo en la contratación de un sistema de gestión escolar",
  "Qualquer secretaria, consórcio ou organização do terceiro setor que trabalhe com educação pode participar. Não deixe de conferir!":
    "Cualquier secretaría, consorcio u organización del tercer sector que trabaje con educación puede participar. ¡No te lo pierdas!",
  "Inscrever-se agora": "Inscríbete ahora",
  "Saiba mais": "Aprende más",
  "O que fazemos": "Lo que hacemos",
  "Ajudamos você que é gestor público a enfrentar os desafios da inovação e digitalização no setor público. Construímos com você soluções para desafios de equipe, governança, recursos e contratações.":
    "Te ayudamos, como gestor público, a enfrentar los desafíos de la innovación y la digitalización en el sector público. Construimos contigo soluciones para los desafíos del equipo, la gobernanza, los recursos y las contrataciones.",
  "Construir equipes de tecnologia": "Construir equipos de tecnología",
  "Apoiamos a criação de equipe interna e contratação de equipes.":
    "Apoyamos la creación de un equipo interno y la contratación de equipos.",
  "<b>Por quê?</b> Sem equipes de tecnologia adequadas e qualificadas, iniciativas de uso de tecnologias não prosperam. Por isso, é importante garantir uma equipe com capacidade para transformar sua organização com uso de tecnologia.":
    "<b>¿Por qué?</b> Sin equipos de tecnología adecuados y calificados, las iniciativas de uso de tecnologías no prosperan. Por eso, es importante garantizar un equipo con la capacidad para transformar tu organización con el uso de tecnología.",
  "<b>O que fazemos?</b> Apoiamos na definição de perfis necessários, da estrutura organizacional e na contratação de equipes multidisciplinares em modelo de Ateliê de software, para superar as dificuldades com as antigas contratações de fábrica de software":
    "<b>¿Qué hacemos?</b> Apoyamos en la definición de perfiles necesarios, la estructura organizacional y en la contratación de equipos multidisciplinarios en modelo de Atelier de software, para superar las dificultades con las antiguas contrataciones de fábrica de software",
  "<b>Resultados esperados:</b> Equipe estruturada e com capacidade de entrega de produtos digitais de qualidade mais rapidamente":
    "<b>Resultados esperados:</b> Equipo estructurado y con capacidad de entrega de productos digitales de alta calidad más rápidamente",
  "Digitalizar gestão com uso de tecnologias abertas":
    "Digitalizar la gestión con el uso de tecnologías abiertas",
  "Apoiamos a escolha de tecnologias abertas que gerem impacto, eficiência e autonomia.":
    "Apoyamos la elección de tecnologías abiertas que generen impacto, eficiencia y autonomía.",
  "<b>Por quê?</b> Tecnologias abertas oferecem soluções comuns para necessidades compartilhadas entre diferentes organizações públicas. Mas além de entregarem resultados, geram mais eficiência nos gastos com tecnologias, garantem independência com relação aos fornecedores e permitem mais flexibilidade na entrega do serviço público.":
    "<b>¿Por qué?</b> Las tecnologías abiertas ofrecen soluciones comunes para necesidades compartidas entre diferentes organizaciones públicas. Pero además de ofrecer resultados, generan más eficiencia en el gasto en tecnología, garantizan independencia de los proveedores y permiten más flexibilidad en la entrega del servicio público.",
  "<b>O que fazemos?</b> Apoiamos na busca de software em código-aberto que resolvam problemas de gestão pública, no levantamento do mercado de fornecedores para essas soluções e na contratação para implantação e fornecimento e suporte dessas soluções para a organização pública.":
    "<b>¿Qué hacemos?</b> Apoyamos en la búsqueda de software de código abierto que resuelva problemas de gestión pública, en el análisis del mercado de proveedores para estas soluciones y en la contratación para la implementación y suministro y soporte de estas soluciones para la organización pública.",
  "<b>Resultados esperados:</b> Tecnologia aberta contratada e implantada, gerando resultados para a organização pública.":
    "<b>Resultados esperados:</b> Tecnología abierta contratada e implementada, generando resultados para la organización pública.",
  "Contratar soluções para problemas públicos":
    "Contratar soluciones para problemas públicos",
  "Apoiamos na definição de problemas públicos e chamada de soluções para o ecossistema de inovação.":
    "Apoyamos en la definición de problemas públicos y la convocatoria de soluciones para el ecosistema de innovación.",
  "<b>Por quê?</b> Nem sempre a melhor solução para os problemas públicos sai de dentro das nossas organizações. Abrir problemas do governo para o ecossistema de inovação, permitindo o teste de soluções e sua contratação tem grande potencial para a resolução desses problemas de forma criativa.":
    "<b>¿Por qué?</b> No siempre la mejor solución para los problemas públicos proviene de nuestras organizaciones. Abrir los problemas del gobierno al ecosistema de innovación, permitiendo la prueba de soluciones y su contratación tiene un gran potencial para resolver estos problemas de forma creativa.",
  "<b>O que fazemos?</b> Apoiamos na definição de problemas públicos e na realização da chamada de soluções para o ecossistema de inovação. Estruturamos a chamada tendo como base a licitação prevista no Marco Legal de Startups e Empreendedorismo, o que permite o pagamento dos testes pela organização pública, assim como sua contratação caso esses testes sejam bem sucedidos.":
    "<b>¿Qué hacemos?</b> Apoyamos en la definición de problemas públicos y en la realización de la convocatoria de soluciones para el ecosistema de innovación. Estructuramos la llamada basándonos en la licitación prevista en el Marco Legal de Startups y Emprendimiento, lo que permite el pago de las pruebas por la organización pública, así como su contratación en caso de que estas pruebas sean exitosas.",
  "<b>Resultados esperados:</b> Teste de soluções e contratação para a resolução do problema apresentado.":
    "<b>Resultados esperados:</b> Prueba de soluciones y contratación para la resolución del problema presentado.",
  "Parceiros, Beneficiários e Clientes": "Socios, Beneficiarios y Clientes",
};

const team = {
  "Equipe Jataí": "Equipo Jataí",
  "Diretor executivo": "Director Ejecutivo",
  "Doutorando em Política Científica e Tecnológica - Unicamp":
    "Doctorando en Política Científica y Tecnológica - Unicamp",
  "Msc. Administração Pública - Columbia Graduado em Direito - USP":
    "Msc. Administración Pública - Columbia Graduado en Derecho - USP",
  "Gestora de projetos": "Gestora de proyectos",
  "Mestrado em Ciência Política - IESP-UERJ":
    "Máster en Ciencia Política - IESP-UERJ",
  "Graduada em Relações Internacionais - UnB":
    "Graduada en Relaciones Internacionales - UnB",
  "Pesquisador e Analista júnior": "Investigador y Analista junior",
  "Mestrando em Política Científica Tecnológica – Unicamp":
    "Maestrando en Política Científica Tecnológica – Unicamp",
  "Graduado em Direito - UFRJ": "Graduado en Derecho - UFRJ",
  "Especialista em clima": "Especialista en clima",
  "Mestrado em Políticas Públicas - Oxford":
    "Máster en Políticas Públicas - Oxford",
  "Graduada em Engenharia Ambiental - Unesp":
    "Graduada en Ingeniería Ambiental - Unesp",
  "Especialista em tecnologia": "Especialista en tecnología",
  "Graduada em Engenharia de Software - UnB":
    "Graduada en Ingeniería de Software - UnB",
};

const contact = {
  Contato: "Contacto",
  "Envie um e-mail pra gente": "Envíanos un correo electrónico",
  "Marque uma conversa no nosso Calendly":
    "Programa una charla en nuestro Calendly",
  "Entre em contato para discutir conosco suas necessidades!":
    "¡Ponte en contacto para discutir tus necesidades con nosotros!",
  "Fale com a gente": "Habla con nosotros",
};

export default { ...header, ...footer, ...home, ...team, ...contact };
