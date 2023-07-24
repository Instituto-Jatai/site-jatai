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
  "Edital para apoio a contratação de sistema de gestão escolar":
    "Anuncio para apoyo en la contratación de un sistema de gestión escolar",
  "Este edital é focado para inscrições de secretarias de educação, consórcios públicos compostos por secretarias deeducação ou outras organizações sem fins lucrativos que apoiem secretarias de educação, interessadas em aprimorarpolíticas educacionais com uso de procedimentos de compras inovadoras. A atuação do Instituto Jataí nesta cooperação é total ou parcialmente financiada por apoio institucional recebido da Aliança entre Fundação Lemann e Imaginable Futures.":
    "Este anuncio se centra en las solicitudes de los departamentos de educación, consorcios públicos compuestos por departamentos de educación u otras organizaciones sin fines de lucro que apoyan a los departamentos de educación, interesados en mejorar las políticas educativas con el uso de procedimientos de adquisiciones innovadores. La participación del Instituto Jataí en esta cooperación es totalmente o parcialmente financiada por el apoyo institucional recibido de la Alianza entre la Fundación Lemann y Imaginable Futures.",
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

const prediagnostic = {
  "Pré-diagnóstico": "Pre-diagnóstico",
  "O que é o Pré-diagnóstico?": "¿Qué es el Pre-diagnóstico?",
  "O pré-diagnóstico é uma ferramenta para redes de ensino que não possuem sistemas de gestão ou querem aprimorar seu uso. A partir das respostas, podemos identificar soluções compatíveis com o cenário em que sua secretaria se encontra e propor soluções conjuntas.":
    "El pre-diagnóstico es una herramienta para redes educativas que no tienen sistemas de gestión o quieren mejorar su uso. A partir de las respuestas, podemos identificar soluciones compatibles con el escenario en el que se encuentra tu secretaría y proponer soluciones conjuntas.",
  "Acesse:": "Accede:",
  "Iniciar preenchimento": "Comenzar a llenar",
};

const cases = {
  Casos: "Casos",
  "Tem dúvidas sobre como as compras públicas podem promover inovação e potencializar governos mais digitais e sustentáveis? Nós reunimos aqui casos diversos, com o objetivo de disseminar práticas inovadoras, promovendo o conhecimento, oportunidades de conexão e fortalecimento de redes.":
    "¿Tiene dudas sobre cómo las compras públicas pueden promover la innovación y potenciar gobiernos más digitales y sostenibles? Hemos reunido aquí varios casos, con el objetivo de difundir prácticas innovadoras, promoviendo el conocimiento, oportunidades de conexión y fortalecimiento de redes.",
  "Como contratar tecnologias educacionais em escala?":
    "¿Cómo contratar tecnologías educativas a gran escala?",
  "Casos da Ata de Registro de Preços na Secretaria Estadual de Educação do Rio Grande do Sul":
    "Casos de la Acta de Registro de Precios en la Secretaría de Educación del Estado de Rio Grande do Sul",
  "A Secretaria de Educação do Rio Grande do Sul, em parceria com a Secretaria de Gestão, realizou a contratação de tecnologias para apoiar professores na diversificação das suas práticas pedagógicas em português e matemática. Este material tem como objetivo compartilhar principalmente os desafios e aprendizados das secretarias que realizaram pregão eletrônico de uma Ata de Registro de Preços para compra de recursos educacionais digitais, abrindo oportunidade para que não somente a rede estadual, mas também as redes municipais interessadas, pudessem contratar esses recursos.":
    "La Secretaría de Educación de Rio Grande do Sul, en colaboración con la Secretaría de Gestión, realizó la contratación de tecnologías para apoyar a los profesores en la diversificación de sus prácticas pedagógicas en portugués y matemáticas. Este material tiene como objetivo compartir principalmente los desafíos y aprendizajes de las secretarías que realizaron una subasta electrónica de un Acta de Registro de Precios para la compra de recursos educativos digitales, abriendo oportunidades para que no sólo la red estatal, sino también las redes municipales interesadas, pudieran contratar estos recursos.",
  "Como melhorar resultados educacionais, otimizar recursos e gerenciar as rotinas da Secretaria de Educação?":
    "¿Cómo mejorar los resultados educativos, optimizar los recursos y gestionar las rutinas de la Secretaría de Educación?",
  "O caso da secretaria de educação de Monte Alegre, no Rio Grande do Norte":
    "El caso de la Secretaría de Educación de Monte Alegre, en Rio Grande do Norte",
  "A Secretaria Municipal de Educação de Monte Alegre, no Rio Grande do Norte, realizou a contratação de serviço de suporte para o uso do sistema i-Educar. Como o sistema tem licenciamento livre e está disponível para todos, a rede realizou a instalação por conta própria em 2014. Ao perceber a necessidade de aprofundamento do uso, decidiu pela contratação de um serviço de suporte ao sistema, com oferta de hospedagem, manutenção corretiva, suporte técnico e desenvolvimento de módulos específicos.":
    "La Secretaría Municipal de Educación de Monte Alegre, en Rio Grande do Norte, realizó la contratación de un servicio de soporte para el uso del sistema i-Educar. Como el sistema tiene licencia libre y está disponible para todos, la red realizó la instalación por su cuenta en 2014. Al percibir la necesidad de profundizar el uso, decidió contratar un servicio de soporte para el sistema, con oferta de alojamiento, mantenimiento correctivo, soporte técnico y desarrollo de módulos específicos.",
  "Como contratar recursos educacionais digitais (edtechs) para educação pública? Casos de uso do Marco Legal de Startups no programa impulsiONar":
    "¿Cómo contratar recursos educativos digitales (edtechs) para la educación pública? Casos de uso del Marco Legal de Startups en el programa impulsiONar",
  "O Programa ImpulsiONar tem como objetivo apoiar Secretarias Municipais de Educação no desenvolvimento de estratégias de prevenção e redução de defasagens em Língua Portuguesa e Matemática de estudantes do 6º ao 9º ano de sua rede de escolas públicas. A intervenção do programa nas Secretarias parte de um modelo pedagógico, que é colocado em prática nas redes por meio do apoio de organizações educacionais que oferecem serviços de implementação e formação de professores, além de ter a tecnologia (edtechs) como um recurso didático chave. Para fomentar o uso de tecnologia, o impulsiONar também apoia as Secretarias com os procedimentos jurídicos, financeiros e de gestão para testar a utilização de edtechs (recursos educacionais digitais). Três Secretarias Municipais de Educação realizaram, por meio do Marco Legal de Startups, a contratação de recursos educacionais digitais (edtechs) para apoiar professores e estudantes na evolução da aprendizagem de Matemática e Língua Portuguesa.":
    "El Programa ImpulsiONar tiene como objetivo apoyar a las Secretarías Municipales de Educación en el desarrollo de estrategias de prevención y reducción de rezagos en Lengua Portuguesa y Matemáticas de los estudiantes del 6º al 9º grado de su red de escuelas públicas. La intervención del programa en las Secretarías parte de un modelo pedagógico, que se pone en práctica en las redes a través del apoyo de organizaciones educativas que ofrecen servicios de implementación y formación de profesores, además de tener la tecnología (edtechs) como un recurso didáctico clave. Para fomentar el uso de la tecnología, ImpulsiONar también apoya a las Secretarías con los procedimientos jurídicos, financieros y de gestión para probar el uso de edtechs (recursos educativos digitales). Tres Secretarías Municipales de Educación llevaron a cabo, a través del Marco Legal de Startups, la contratación de recursos educativos digitales (edtechs) para apoyar a los profesores y estudiantes en el progreso del aprendizaje de Matemáticas y Lengua Portuguesa.",
  "Saiba mais": "Saber más",
};

const caseRS = {
  "A INOVAÇÃO": "LA INNOVACIÓN",
  "Utilização de Ata de Registro de Preço": "Uso de Acta de Registro de Precio",
  "Ata de Registro de Preço permite experimentar soluções e escalar de forma ágil sua implementação e traz eficiência aos processos de licitação pois permite que outros órgãos possam colaborar contratando conjuntamente a solução ou, dentro de limitações jurídicas, contratar a tecnologia cujo preço foi registrado em ata":
    "El Acta de Registro de Precio permite experimentar soluciones y escalar de manera ágil su implementación y trae eficiencia a los procesos de licitación ya que permite que otros órganos puedan colaborar contratando conjuntamente la solución o, dentro de las limitaciones legales, contratar la tecnología cuyo precio fue registrado en acta.",
  "Órgãos públicos que participaram": "Órganos públicos que participaron",
  "Secretaria Estadual de Educação (Seduc) do Rio Grande do Sul":
    "Secretaría Estatal de Educación (Seduc) de Rio Grande do Sul",
  "Secretaria de Planejamento, Governança e Gestão (SPGG) do Rio Grande do Sul":
    "Secretaría de Planificación, Gobernanza y Gestión (SPGG) de Rio Grande do Sul",
  "Principais desafios": "Principales desafíos",
  "A emergência trazida pela pandemia fez com o que o processo tivesse que ser realizado em tempo recorde.":
    "La emergencia provocada por la pandemia hizo que el proceso tuviera que realizarse en tiempo récord.",
  "Comprar algo pronto, sem a necessidade de desenvolvimento do produto.":
    "Comprar algo listo, sin la necesidad de desarrollo del producto.",
  "Principais aprendizados": "Principales aprendizajes",
  "Modelo de licenciamento poderia ser aprimorado para prever pagamento por licenças em uso e/ou também faixas de preço para se beneficiar dos ganhos de escala no fornecimento da tecnologia":
    "El modelo de licenciamiento podría ser mejorado para prever el pago por licencias en uso y/o también rangos de precio para beneficiarse de las ganancias de escala en la provisión de la tecnología.",
  "Realização de Prova de Conceito é importante para garantir que a solução vencedora na etapa de lances por menor preço do pregão esteja de acordo com as necessidades especificadas":
    "La realización de Prueba de Concepto es importante para garantizar que la solución ganadora en la etapa de ofertas por el menor precio de la licitación cumpla con las necesidades especificadas.",
  "Principais Resultados": "Principales Resultados",
};

const caseMonteAlegre = {
  "Como melhorar resultados educacionais, otimizar recursos e gerenciar as rotinas da Secretaria de Educação? O caso da secretaria de educação de Monte Alegre, no Rio Grande do Norte":
    "¿Cómo mejorar los resultados educativos, optimizar los recursos y gestionar las rutinas de la Secretaría de Educación? El caso de la secretaría de educación de Monte Alegre, en Rio Grande do Norte",
  "A Secretaria Municipal de Educação de Monte Alegre, no Rio Grande do Norte, realizou a contratação de serviço de suporte para o uso do sistema i-Educar. Como o sistema tem licenciamento livre e está disponível para todos, a rede realizou a instalação por conta própria em 2014. Ao perceber a necessidade de aprofundamento do uso, decidiu pela contratação de um serviço de suporte ao sistema, com oferta de hospedagem, manutenção corretiva, suporte técnico e desenvolvimento de módulos específicos.":
    "La Secretaría Municipal de Educación de Monte Alegre, en Rio Grande do Norte, realizó la contratación de un servicio de soporte para el uso del sistema i-Educar. Como el sistema tiene licencia libre y está disponible para todos, la red realizó la instalación por cuenta propia en 2014. Al percibir la necesidad de profundizar el uso, decidió contratar un servicio de soporte al sistema, con oferta de alojamiento, mantenimiento correctivo, soporte técnico y desarrollo de módulos específicos.",
  "A INOVAÇÃO": "LA INNOVACIÓN",
  "Utilização de sistema de código aberto com contratação de serviço de suporte":
    "Uso de sistema de código abierto con contratación de servicio de soporte",
  "A implantação de sistema de código aberto, como o i-Educar, permite autonomia para a gestão municipal, uma vez que afasta a dependência de único fornecedor e garante que a estrutura e dados do sistema pertençam à Secretaria. A contratação do serviço de suporte, após a implementação inicial do sistema, foi uma inflexão importante na gestão, ao trazer para o órgão facilidade na manutenção do sistema e no suporte às escolas.":
    "La implementación de un sistema de código abierto, como i-Educar, permite autonomía para la gestión municipal, ya que elimina la dependencia de un único proveedor y garantiza que la estructura y los datos del sistema pertenezcan a la Secretaría. La contratación del servicio de soporte, después de la implementación inicial del sistema, fue un punto de inflexión importante en la gestión, al facilitar al órgano el mantenimiento del sistema y el soporte a las escuelas.",
  "Órgãos públicos que participaram": "Órganos públicos que participaron",
  "Secretaria Municipal de Educação": "Secretaría Municipal de Educación",
  "Secretaria Municipal de Finanças": "Secretaría Municipal de Finanzas",
  "Principais desafios": "Principales desafíos",
  "Um desafio foi a decisão pela contratação do serviço, uma vez que a rede havia iniciado a implementação com uso de recursos próprios, tendo sido preciso analisar prós e contras.":
    "Un desafío fue la decisión de contratar el servicio, dado que la red había iniciado la implementación con uso de recursos propios, habiendo sido necesario analizar pros y contras.",
  "Outro desafio central foi a implantação do projeto junto às escolas e professores, uma vez que representava mudança nas formas de trabalho.":
    "Otro desafío central fue la implementación del proyecto junto a las escuelas y profesores, ya que representaba un cambio en las formas de trabajo.",
  "Principais aprendizados": "Principales aprendizajes",
  "A contratação de serviço de suporte para o sistema de gestão escolar de código aberto otimiza as rotinas, uma vez que o serviço é especialista na temática, mas é essencial que o sistema seja estudado antes pela Secretaria e que se produzam decisões de uso pelo órgão que levem a seu uso efetivo. Isto é, o preenchimento de informações e a análise delas deve compor a rotina de trabalho das Secretarias para que o sistema alavanque bons resultados.":
    "La contratación de un servicio de soporte para el sistema de gestión escolar de código abierto optimiza las rutinas, ya que el servicio es especialista en la temática, pero es esencial que el sistema sea estudiado previamente por la Secretaría y que se tomen decisiones de uso por el órgano que conduzcan a su uso efectivo. Es decir, el llenado de información y su análisis debe formar parte de la rutina de trabajo de las Secretarías para que el sistema impulse buenos resultados.",
  "Principais Resultados": "Principales Resultados",
  "A melhoria da gestão educacional gerou economia de R$2,4 milhões por ano, segundo cálculos da Secretaria, a partir de ampliação da arrecadação do Fundeb em 8%, com a comprovação de alunos matriculados na rede, do aumento de 61% para 95% na ocupação das escolas, permitindo reduzir o número de professores contratado, e da economia de 15% da merenda escolar. A rede pode, então, alocar os recursos em outras necessidades elencadas.":
    "La mejora de la gestión educativa generó un ahorro de R$2,4 millones por año, según cálculos de la Secretaría, a partir de la ampliación de la recaudación del Fundeb en un 8%, con la comprobación de alumnos matriculados en la red, del aumento del 61% al 95% en la ocupación de las escuelas, permitiendo reducir el número de profesores contratados, y del ahorro del 15% de la comida escolar. La red puede entonces asignar los recursos a otras necesidades enumeradas.",
};

const caseImpulsionar = {
  "Como contratar recursos educacionais digitais (edtechs) para educação pública? Casos de uso do Marco Legal de Startups no programa impulsiONar":
    "¿Cómo contratar recursos educativos digitales (edtechs) para la educación pública? Casos de uso del Marco Legal de Startups en el programa impulsiONar",
  "O Programa ImpulsiONar tem como objetivo apoiar Secretarias Municipais de Educação no desenvolvimento de estratégias de prevenção e redução de defasagens em Língua Portuguesa e Matemática de estudantes do 6º ao 9º ano de sua rede de escolas públicas. A intervenção do programa nas Secretarias parte de um modelo pedagógico, que é colocado em prática nas redes por meio do apoio de organizações educacionais que oferecem serviços de implementação e formação de professores, além de ter a tecnologia (edtechs) como um recurso didático chave. Para fomentar o uso de tecnologia, o impulsiONar também apoia as Secretarias com os procedimentos jurídicos, financeiros e de gestão para testar a utilização de edtechs (recursos educacionais digitais). Três Secretarias Municipais de Educação realizaram, por meio do Marco Legal de Startups, a contratação de recursos educacionais digitais (edtechs) para apoiar professores e estudantes na evolução da aprendizagem de Matemática e Língua Portuguesa.":
    "El Programa ImpulsiONar tiene como objetivo apoyar a las Secretarías Municipales de Educación en el desarrollo de estrategias de prevención y reducción de retrasos en Portugués y Matemáticas para estudiantes de 6º a 9º grado de su red de escuelas públicas. La intervención del programa en las Secretarías se basa en un modelo pedagógico, que se pone en práctica en las redes con el apoyo de organizaciones educativas que ofrecen servicios de implementación y formación de profesores, además de tener la tecnología (edtechs) como un recurso didáctico clave. Para fomentar el uso de la tecnología, ImpulsiONar también apoya a las Secretarías con los procedimientos jurídicos, financieros y de gestión para probar el uso de edtechs (recursos educativos digitales). Tres Secretarías Municipales de Educación llevaron a cabo, a través del Marco Legal de Startups, la contratación de recursos educativos digitales (edtechs) para apoyar a profesores y estudiantes en la evolución del aprendizaje de Matemáticas y Portugués.",
  "A INOVAÇÃO": "LA INNOVACIÓN",
  "Uso do MLS no setor da educação para contratação de edtechs":
    "Uso del MLS en el sector de la educación para la contratación de edtechs",
  "A inovação do programa foi a realização do processo de inovação aberta para contratação de teste de edtechs pelo setor público (Secretarias Municipais de Educação), via Marco Legal das Startups (MLS). O arranjo permitiu o teste remunerado para edtechs nas Secretarias de Educação Municipal (ainda que sem transferência de recursos públicos e sim via terceiro setor) - e há a possibilidade de posterior contratação direta pela administração pública.":
    "La innovación del programa fue la realización del proceso de innovación abierta para la contratación de pruebas de edtechs por el sector público (Secretarías Municipales de Educación), a través del Marco Legal de Startups (MLS). El arreglo permitió la prueba remunerada para edtechs en las Secretarías de Educación Municipal (aunque sin transferencia de recursos públicos y sí a través del tercer sector) - y existe la posibilidad de contratación directa posterior por la administración pública.",
  "Órgãos públicos que participaram do programa e utilizaram o MLS":
    "Órganos públicos que participaron en el programa y utilizaron el MLS",
  "Secretaria Municipal de Educação de Igarassu (Pernambuco)":
    "Secretaría Municipal de Educación de Igarassu (Pernambuco)",
  "Secretaria Municipal de Educação de Guaramiranga (Ceará)":
    "Secretaría Municipal de Educación de Guaramiranga (Ceará)",
  "Secretaria Municipal de Educação de Domingos Mourão (Piauí)":
    "Secretaría Municipal de Educación de Domingos Mourão (Piauí)",
  "Principais desafios": "Desafíos principales",
  "Sendo a utilização do Marco Legal das Startups na área de educação algo inédito no Brasil, houve diversos desafios, aprendizados e boas práticas ao longo da jornada do programa":
    "Dado que el uso del Marco Legal de Startups en el área de educación es algo sin precedentes en Brasil, hubo varios desafíos, aprendizajes y buenas prácticas a lo largo del viaje del programa",
  "Principais aprendizados": "Aprendizajes principales",
  "A construção das metas configura-se como um risco a ser mapeado, uma vez que essas são desenhadas dentro de um cenário de incertezas característico do modelo de desafio. Por isso, essas devem ser feitas com base no maior número de evidências contextuais, mas sendo importante acompanhá-las ao longo do processo e calibrá-las sempre que possível e necessário.":
    "La construcción de las metas se configura como un riesgo a mapear, ya que se diseñan dentro de un escenario de incertidumbre característico del modelo de desafío. Por lo tanto, deben hacerse con base en la mayor cantidad de evidencias contextuales, pero es importante seguirlas a lo largo del proceso y calibrarlas siempre que sea posible y necesario.",
  "Ainda que a contratação trate de um desafio específico, é importante mapear situações correlatas ao desafio - como, no caso do Impulsionar, foi a situação da infraestrutura (conectividade e equipamentos), descrita no item abaixo.":
    "Aunque la contratación se refiera a un desafío específico, es importante mapear situaciones correlacionadas con el desafío - como, en el caso de Impulsar, fue la situación de la infraestructura (conectividad y equipos), descrita en el punto siguiente.",
  "Principais resultados": "Resultados principales",
  "Foram definidas 4 metas para o 1º período de teste das edtechs (de Abril à Dezembro de 2022), relacionadas a:":
    "Se definieron 4 metas para el primer periodo de prueba de las edtechs (de Abril a Diciembre de 2022), relacionadas con:",
  "Implementação nas escolas;": "Implementación en las escuelas;",
  "Formação dos usuários;": "Formación de los usuarios;",
  "Acesso e utilização dos estudantes;":
    "Acceso y utilización de los estudiantes;",
  "E satisfação dos professores e gestores.":
    "Y satisfacción de los profesores y gestores.",
  "Essa são as métricas para avaliar se o teste foi bem sucedido - e que então possibilitam a contratação das edtechs pelas Secretarias.":
    "Estas son las métricas para evaluar si la prueba fue exitosa - y que entonces permiten la contratación de las edtechs por las Secretarías.",
  "Os resultados obtidos foram (1) implementação em 100% das escolas, (2) formação de mais de 80% dos usuários e alta satisfação (> 80%) inicial dos gestores e professores. Porém, a meta (3) de acesso e utilização dos estudantes ficou bastante abaixo do esperado (entre 50-70% de utilização em média, a depender do mês e da rede, versus a meta que seria 80% dos estudantes utilizando 1 vez ao mês). Isso se deu devido a falta de infraestrutura (conectividade e equipamentos) que permitisse o amplo uso dos estudantes.":
    "Los resultados obtenidos fueron (1) implementación en el 100% de las escuelas, (2) formación de más del 80% de los usuarios y alta satisfacción inicial (> 80%) de los gestores y profesores. Sin embargo, la meta (3) de acceso y utilización de los estudiantes estuvo bastante por debajo de lo esperado (entre 50-70% de utilización en promedio, dependiendo del mes y de la red, frente a la meta que sería 80% de los estudiantes utilizando 1 vez al mes). Esto se debió a la falta de infraestructura (conectividad y equipos) que permitiera el amplio uso de los estudiantes.",
  "Dado então os desafios de tecnologia, o programa enviou equipamentos para as redes de ensino e período do piloto foi estendido, ofertando para as redes de ensino mais 6 meses (de jan-jun/23), para permitir o uso intensivo da solução - e os resultados concretos em termos de evolução da aprendizagem dos estudantes":
    "Dado entonces los desafíos tecnológicos, el programa envió equipos a las redes de enseñanza y el periodo piloto se extendió, ofreciendo a las redes de enseñanza 6 meses más (de ene-jun/23), para permitir el uso intensivo de la solución - y los resultados concretos en términos de evolución del aprendizaje de los estudiantes",
};

const modelDocs = {
  "Documentos modelo": "Documentos modelo",
  "Modelo ETP e TR": "Modelo ETP y TR",
  "Para contratação de sistema de gestão escolar":
    "Para la contratación de un sistema de gestión escolar",
  "Os modelos de Estudo Técnico Preliminar (ETP) e Termo de Referência (TR) para a contratação de i-Educar e i-Diário estão prontos para serem utilizados por qualquer Secretaria de Educação interessada em informatizar a gestão escolar. Esses sistemas são de código aberto e possuem licenciamento gratuito, o que significa que o foco da contratação está no serviço de sustentação do sistema, isto é, a implementação dos sistemas, a migração de dados, o treinamento dos servidores, além da hospedagem em nuvem, suporte técnico e manutenção corretiva e evolutiva. É importante ressaltar que os modelos foram desenvolvidos considerando o acesso público ao código-fonte, visando estimular a ampla concorrência e garantir transparência no processo. Os modelos são para contratação em formato pregão e, a fim de promover ainda mais a participação e a transparência, recomendamos a realização de uma consulta pública antes da contratação. Estamos à disposição caso precisem de ajuda nesse processo, é só agendar uma conversa aqui pelo site!":
    "Los modelos de Estudio Técnico Preliminar (ETP) y Término de Referencia (TR) para la contratación de i-Educar e i-Diário están listos para ser utilizados por cualquier Secretaría de Educación interesada en informatizar la gestión escolar. Estos sistemas son de código abierto y tienen licencia gratuita, lo que significa que el enfoque del contrato está en el servicio de soporte del sistema, es decir, la implementación de los sistemas, la migración de datos, la formación de servidores, además de alojamiento en la nube, soporte técnico y mantenimiento correctivo y evolutivo. Es importante destacar que los modelos se desarrollaron considerando el acceso público al código fuente, con el objetivo de estimular la amplia competencia y garantizar la transparencia en el proceso. Los modelos son para contratar en formato de licitación y, para promover aún más la participación y la transparencia, recomendamos realizar una consulta pública antes de la contratación. Estamos a disposición si necesitan ayuda en este proceso, ¡solo programen una conversación aquí en el sitio web!",
  "Para montar equipes de tecnologia": "Para formar equipos de tecnología",
  "Complete o formulário e faça o download gratuito do documentos modelo":
    "Complete el formulario y descargue los documentos modelo de forma gratuita",
  Nome: "Nombre",
  "E-mail": "Correo electrónico",
  "Orgão Público": "Organismo público",
  "Os documentos foram baixados com sucesso.":
    "Los documentos se descargaron con éxito.",
  "Por favor, verifique a pasta de downloads do seu computador para acessá-los.":
    "Por favor, revise la carpeta de descargas de su computadora para acceder a ellos.",
  "Os modelos de <b>Estudo Técnico Preliminar (ETP)</b> e <b>Termo de Referência (TR)</b> para contratação de Ateliê de Software estão prontos para serem utilizados por qualquer organização pública interessada em terceirização de equipes de tecnologia. A terceirização de equipes no modelo de Ateliê de Software foca na contratação de equipes multidisciplinares para desenvolvimento de produtos digitais utilizando métodos ágeis e design centrado no usuário.":
    "Los modelos de <b>Estudio Técnico Preliminar (ETP)</b> y <b>Términos de Referencia (TR)</b> para la contratación de Atelier de Software están listos para ser utilizados por cualquier organización pública interesada en la externalización de equipos de tecnología. La externalización de equipos en el modelo de Atelier de Software se centra en la contratación de equipos multidisciplinarios para el desarrollo de productos digitales utilizando métodos ágiles y diseño centrado en el usuario.",
};

export default {
  ...header,
  ...footer,
  ...home,
  ...team,
  ...contact,
  ...prediagnostic,
  ...cases,
  ...caseRS,
  ...caseMonteAlegre,
  ...caseImpulsionar,
  ...modelDocs,
};
