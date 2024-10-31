import { useLocation } from 'react-router-dom'
import './StoryPage.css'
import Header from './Header';

const StoryPage = () => {
  const location = useLocation();
  console.log(location)
  const storyData = location.state.currentStory;
  console.log(storyData)
  return (
    <>
    <Header></Header>
     <main>
    <h1 className='story-title'>Story Title</h1>
    <div className='story-author-details-container'>
        <img className='story-author-image' src= {storyData.image}></img>
      <div className='story-author-account-info-container'>
        <p className='story-author-name'>Author Name</p>
        <p className='story-author-published'>Published in The Hub Publication</p>
      </div>
    </div>
    <div className='story-coverpage-container'>
    <img className='story-coverpage' src= {storyData.image}></img>
    </div>
    <div className='story-content-container'>
        <p className='story-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus possimus adipisci eius praesentium. Modi deleniti ipsam nihil hic? Exercitationem nemo nostrum quas deserunt qui corporis consequuntur excepturi fuga laudantium neque?
        Pariatur ipsa doloribus numquam eos sunt mollitia, in impedit quis saepe quos sequi, est, expedita aut deserunt? Voluptatibus laborum similique culpa provident ullam corporis, reiciendis minima harum necessitatibus quam nulla.
        Neque qui eum rem placeat ab! Numquam excepturi corrupti tempora, minima voluptatibus alias dignissimos quis saepe debitis deserunt voluptate fugiat consectetur et obcaecati dicta, illum voluptates ullam nam ad assumenda.
        Sapiente excepturi distinctio beatae suscipit non nesciunt quaerat corrupti rerum soluta ratione ad voluptatem sequi sunt eaque quia fugit explicabo culpa nihil, vel ab facere! Quisquam, culpa quae? Accusantium, exercitationem.
        Neque soluta repellat aperiam necessitatibus. Ipsum non ea ratione fugit, consequuntur expedita. Minus nemo nostrum quas, nihil incidunt rerum odio officia, accusamus fuga similique laboriosam praesentium dolores quo quos voluptatibus?
        Iure eligendi a nisi cumque quaerat. Temporibus nostrum repudiandae accusantium corrupti debitis velit corporis odit, mollitia assumenda sit quasi commodi sapiente nesciunt quae distinctio ipsum laudantium in quidem pariatur sed.
        Reprehenderit, sapiente. Id eius rem tempora natus, obcaecati suscipit et cum facere! Ullam voluptate, quibusdam earum aliquid assumenda quo ea similique repellendus blanditiis ratione! Nulla esse nemo voluptas earum est?
        Fuga assumenda a dolorem? Alias recusandae autem ipsam culpa eligendi aspernatur, praesentium voluptates ad suscipit minus sequi eius cum nobis possimus blanditiis necessitatibus, molestias, sint nihil vitae quidem! Dolorum, repellendus!
        Error dolor ab nisi debitis ad vero at nemo qui nam, necessitatibus corporis voluptas reiciendis autem veniam amet facilis doloribus nesciunt in dolore exercitationem? Consequatur eveniet voluptatem officia temporibus odit.
        Dignissimos, illo? Consequuntur, magni culpa illo, velit nemo blanditiis ab quas, voluptatibus corporis voluptas at corrupti? Mollitia a, facilis consequuntur voluptatum quae sapiente corrupti facere porro error earum quasi blanditiis.
        Earum quidem accusantium eos facilis maiores rem voluptatibus assumenda ipsa doloribus itaque possimus voluptatum voluptas, porro explicabo sint a minima? Quia, omnis? Accusamus tempora porro voluptates saepe consectetur, numquam pariatur!
        Eveniet nam consequatur, quo dolore dicta praesentium quae numquam, quia quidem autem harum excepturi magni! Magni, dicta. Obcaecati ea dolore placeat expedita id omnis alias. Libero animi dignissimos tempore ipsa.
        Veniam repellendus in dolorum provident dicta. Aspernatur, vitae at. Facere adipisci non eaque laudantium rem saepe consequatur vel quasi, molestiae mollitia illo sunt accusantium iure unde, dicta ullam quaerat? Minima?
        Quod non perferendis eum temporibus ab, aspernatur labore maxime! Necessitatibus voluptatum laborum rerum. Explicabo aperiam provident cum totam ex iusto voluptatum esse illum cumque iste, numquam tempore dignissimos quia eum?
        Reprehenderit placeat saepe debitis in ea inventore animi rerum possimus eius, repellat recusandae ratione error voluptatibus facilis aspernatur nobis aperiam blanditiis iste et ullam molestias excepturi labore! Non, assumenda nemo.
        Facere ex aperiam sed praesentium quam eos fuga facilis reiciendis, nam quisquam, maxime ullam sequi odit dolorum nesciunt iusto? Autem, cumque ut. Quaerat quos provident ad autem eum nihil sit.
        Excepturi rerum dolor vero a sapiente repellendus voluptate nesciunt! Unde nulla pariatur, natus optio, ratione architecto tempore cupiditate saepe ullam quidem, voluptates sed. Explicabo molestiae, ad nostrum quia eos delectus?
        Neque natus nostrum aut maiores, repellat facilis, eaque non cumque excepturi hic repellendus consequuntur temporibus dolores pariatur aperiam quos recusandae qui autem possimus rerum ex dicta deleniti eos. Dolor, placeat?
        Perferendis cumque nemo suscipit aut illum modi molestiae nobis et? Fuga cum pariatur totam necessitatibus quod eos numquam optio magni veniam ad! Veritatis quos voluptatibus molestias saepe sed. Libero, consectetur!
        Nesciunt quidem ut mollitia? Voluptatum voluptates doloribus autem reprehenderit repellendus, tenetur adipisci blanditiis eos aliquam impedit voluptatibus, voluptate iste atque unde quos fugit. Eaque ipsam incidunt culpa a sunt laborum?
        Voluptatem magnam necessitatibus minima possimus, cupiditate voluptate! Quisquam at, aliquid repellendus exercitationem, possimus facere natus fuga nulla explicabo cumque totam dolores enim vitae provident doloribus, eaque quod voluptatum nobis quia?
        Voluptatum temporibus assumenda repudiandae eaque adipisci itaque vero debitis molestiae eveniet! Commodi minus eaque sequi fuga labore adipisci maiores autem ad voluptas quas minima, modi explicabo facilis, placeat et tempora?
        Numquam nobis voluptatum vel obcaecati unde a molestias repellendus consequatur recusandae sint vero repellat neque aliquid, voluptate facilis odio temporibus delectus ea sit dicta alias error fuga? Consectetur, facere asperiores.
        Eos totam voluptas a repudiandae ex at atque vel possimus, mollitia iste, sed et eius beatae ab molestias dolor recusandae repellendus? Corrupti ad eos nulla reiciendis magnam recusandae consequuntur earum?
        Quaerat, tenetur dignissimos. Doloribus a cupiditate maiores dicta, amet non quisquam totam velit sint officiis accusantium ipsum accusamus at natus asperiores aliquid aperiam molestias maxime ipsa error facilis! Autem, quia.
        Sapiente explicabo, amet ullam culpa praesentium magnam fugit. Odit suscipit ipsa quos tempora necessitatibus! Atque ullam quidem at. Perspiciatis, error in. Obcaecati nemo eius consectetur voluptatum dolores sapiente, cupiditate nisi!
        In, quibusdam repellendus, maiores repudiandae deleniti cum porro tempora alias ab dolorem voluptas. Obcaecati ullam, quaerat, non ratione inventore suscipit minima consectetur quisquam, iusto magni sit perspiciatis nulla animi in!
        Ipsum adipisci doloribus iusto eos ipsa fugiat odit saepe modi nobis quaerat, optio asperiores harum! Optio eos, repellendus numquam, non animi possimus illo temporibus, iure delectus accusamus a cumque odit.
        Vel commodi saepe quam dolorem magni ratione aperiam nostrum amet tenetur necessitatibus ullam sit blanditiis voluptates inventore deleniti, ipsum consequatur laboriosam voluptatem quasi reiciendis corrupti odit. Nam, molestiae? Sint, libero.
        Laudantium, dolore. Harum ullam dolorem consectetur, rem, itaque ab possimus neque vero, tempora commodi quis? Eius nihil deserunt quidem illum eaque similique libero dicta sit, quos officiis distinctio, possimus consequuntur?
        Atque facere iste unde dignissimos dolorum sapiente dolore eveniet, minus quaerat autem ratione facilis possimus quia necessitatibus totam error aliquid voluptatum non pariatur doloribus animi assumenda. Expedita repellendus ad quas.
        Hic numquam aliquam, animi est modi odit rerum debitis, ipsa a iusto asperiores praesentium ducimus magni voluptatibus dolores blanditiis similique minus commodi pariatur repudiandae laudantium dolore laboriosam odio nam. Similique?
        Perspiciatis dolor eaque nesciunt similique, inventore cumque ullam exercitationem numquam fugit, voluptatum culpa soluta totam at sunt quod consequatur beatae est quos. Rem totam nostrum commodi dignissimos nisi suscipit voluptatum!
        A provident dolorum, numquam saepe delectus, aliquid, voluptas totam maiores quasi hic est quibusdam ratione consequuntur voluptates quisquam explicabo laboriosam cum dicta quam reiciendis culpa. Rem ex maiores ea provident!
        Hic enim amet voluptatem in corrupti distinctio nemo id, velit, aliquam ducimus mollitia, delectus blanditiis deserunt iure officia. Eaque id ab est voluptas doloribus sapiente exercitationem enim similique, consequatur tempora!
        Illo ipsum quam eius neque explicabo exercitationem veritatis id eveniet culpa quia expedita fugit eum alias aliquam ad doloremque, laborum modi ducimus? Nisi tempora debitis laborum quae ut id omnis.
        Accusamus unde soluta aspernatur officia sed quibusdam libero dolore ad voluptate hic, sit molestias maiores commodi voluptatum labore qui quo nostrum rerum beatae iste magnam nulla cum quam tenetur! Aliquid!
        Cum nisi aliquam sunt quaerat at provident dignissimos dolorum, architecto quae eveniet mollitia iure, ipsum blanditiis enim. Harum ipsam ab ullam architecto praesentium cupiditate, dolorem quisquam, unde odit doloremque veritatis?
        Reiciendis qui nobis, praesentium alias nostrum minus sunt sit quos! Laudantium repellat blanditiis delectus rerum, dolorum iusto ullam aliquam obcaecati reiciendis labore adipisci sunt aspernatur incidunt eveniet accusantium perspiciatis veniam.
        Expedita libero minima repudiandae explicabo aspernatur cum tempora neque cupiditate eaque vero quae, a, dicta blanditiis obcaecati commodi, nihil perferendis quidem architecto culpa molestias! Magni laboriosam tenetur voluptatum vitae inventore!
        Ut at odit in quis nostrum repellendus porro magnam amet sunt voluptatum? Deserunt, in alias molestias eius minus reprehenderit adipisci! Odio aspernatur, eveniet odit nemo labore itaque eos earum numquam!
        Dolor nesciunt asperiores, odio adipisci aspernatur odit et inventore. Alias, mollitia debitis ut quos unde pariatur temporibus, explicabo tempore, ea magni soluta consequuntur qui ipsam eveniet in suscipit voluptates aliquam?
        Fuga eaque voluptatum eum qui architecto modi est itaque quis eligendi vel odit, veniam rerum, tenetur et quo error! Placeat nemo culpa hic unde laudantium mollitia distinctio fuga enim sapiente.
        Ducimus veritatis dolorum id modi culpa corporis optio corrupti assumenda unde quisquam nulla nihil iste quas ut sequi ipsa debitis atque voluptates soluta sint esse, veniam recusandae fugiat. Cupiditate, reiciendis.
        Ipsa, doloremque veniam. Sunt unde voluptatem optio molestias laudantium fugiat iure, itaque natus! Suscipit sunt deleniti, dolore cum debitis quae commodi earum quas excepturi aspernatur, ipsam quasi? Ut, eius architecto.
        Voluptatem culpa perspiciatis asperiores harum quibusdam deleniti maxime sunt mollitia et rem cum doloremque dolor veritatis perferendis corporis possimus quam exercitationem quae, eum cumque vero molestias. Ipsam dolorum dolores error.
        Odit quia est esse! Eveniet incidunt tempore libero perspiciatis eligendi veniam eum soluta aperiam qui temporibus porro, repellendus, velit nobis animi dolorem labore iste ducimus quos perferendis repellat natus eos?
        Recusandae, incidunt! Delectus mollitia sunt earum temporibus nemo ab cupiditate expedita nostrum saepe consequuntur perferendis, error doloremque labore voluptates placeat alias. Nisi suscipit temporibus quod minima aliquam quos illum facere.
        Explicabo, deserunt esse nemo dolorem ipsam rerum dolores, ut quibusdam temporibus voluptate unde error nam exercitationem illo sapiente? Fuga in facere ullam dolorum dolore velit excepturi voluptas fugiat, dignissimos magni.
        Ab qui dolores nostrum voluptates cupiditate! In architecto mollitia, facilis, iusto possimus voluptate modi veniam porro quisquam pariatur ratione ullam natus dolores inventore ducimus, quasi quidem? Voluptas ullam ratione ut!
        Sunt eos eveniet sint odio a ex! Sunt dolor quisquam, dolorum ipsam quam modi, iure deleniti accusantium adipisci, doloremque temporibus quibusdam obcaecati et molestiae laboriosam ullam omnis nesciunt sit quis!
        Officiis autem, consequatur nobis perferendis ab aliquam, illum, repellendus laborum odit placeat vitae quas id veniam harum labore iusto blanditiis. Adipisci et voluptatibus tempore cum quisquam fugit incidunt autem inventore.
        Corrupti, non sed et reiciendis explicabo similique sequi tempora quod laborum consequuntur voluptates ipsa neque pariatur, sint nesciunt, aliquam nisi illum recusandae quis enim voluptas. Suscipit provident expedita id dignissimos!
        Distinctio voluptates deleniti dolore hic obcaecati iusto rerum assumenda earum tenetur corrupti mollitia nemo, officiis sint delectus omnis unde rem eveniet doloribus voluptas excepturi aut! Reprehenderit debitis nam error cum.
        Rerum autem odio, odit esse debitis neque repellendus, nesciunt sint molestias incidunt, porro rem culpa voluptas cum corporis aliquam. Deserunt molestiae at maiores earum sequi ipsa quibusdam sed reiciendis sapiente!
        Sapiente ipsa aperiam quia voluptatum quidem totam suscipit, pariatur reprehenderit unde. Nihil, doloremque porro laborum quasi officia alias quo voluptate necessitatibus vel eaque, minima recusandae. Est dicta officia pariatur repellendus.
        Officiis iure autem perferendis, deleniti deserunt quia dolore libero doloremque quas quod fuga incidunt aut eveniet esse veritatis fugit quisquam voluptate placeat. Libero porro fuga et, autem eligendi quia est.
        Qui commodi cum, voluptatem dignissimos, nisi earum laborum laboriosam officiis accusamus labore soluta iste. Soluta facere reprehenderit accusamus dicta nobis! Maiores, rem laboriosam! Sit, itaque. Natus, architecto? Suscipit, eum quod.
        Veritatis consectetur ullam ut laborum consequatur nostrum nobis, eum, facilis laboriosam repellendus aliquid aliquam porro autem aspernatur dicta eos necessitatibus recusandae dignissimos saepe animi accusamus voluptatem ea aut soluta. Nisi?
        Assumenda quod veritatis commodi, totam odio sapiente accusamus, vero, veniam inventore cumque nam! Doloremque placeat, architecto illum eligendi ipsam corporis natus, labore iusto blanditiis, nam distinctio? Velit quaerat fuga in!
        Ipsam, fugit ratione atque quidem laboriosam minus sunt laborum repellat. Expedita, dignissimos. Animi facilis modi mollitia in atque iste voluptatibus ipsa consequatur soluta, eaque sit aperiam libero fugiat placeat ullam.
        Doloremque praesentium quibusdam recusandae asperiores repudiandae repellendus dolorum exercitationem illo facilis repellat, alias ex incidunt dolores officia voluptatibus a nulla deleniti dignissimos, nobis corrupti? Architecto facere dicta officia. Possimus, sint.
        Libero, quisquam voluptas. Sed ducimus quas cupiditate laborum perspiciatis eum, culpa blanditiis officia ab molestias saepe facere voluptatum placeat eius consectetur voluptatibus nostrum recusandae, et dolorum nemo aliquid eaque repellendus?
        Architecto aliquam porro minus, facere suscipit, error aliquid voluptas tempore nobis dolorum molestiae amet perspiciatis. Suscipit ullam dolores nostrum quia fuga labore facilis iste. Sunt fugiat harum ullam minus asperiores.
        Amet laudantium officia possimus, animi, eum perspiciatis adipisci, maxime obcaecati itaque quaerat soluta nemo iusto nostrum reprehenderit earum voluptate doloremque minus. Sequi optio officiis at reiciendis quod aperiam iusto quisquam.
        Doloribus sit dolor esse, excepturi vero rerum quo repellat! A quisquam vitae molestias, assumenda ratione animi mollitia repellendus maiores similique sequi fugiat sed dolores deserunt totam cumque ab sapiente doloribus?
        Vero, mollitia aliquid voluptas commodi alias ipsa minus. Animi repudiandae repellendus ex ullam exercitationem, molestiae tempore consectetur nihil possimus neque deleniti reiciendis iste dolore reprehenderit inventore quas, expedita suscipit incidunt.
        Perspiciatis maxime ratione maiores eum repudiandae magni, nemo tempora? Necessitatibus velit voluptatibus culpa, esse quasi id quisquam iusto quas sapiente fugit, natus tempore inventore ducimus perferendis eaque enim similique dolorem.
        Minima, error quo. Facere aliquid accusantium, voluptate excepturi tempore nemo eligendi obcaecati ipsam dolores nostrum, deleniti possimus magnam temporibus maiores, ipsa in ab maxime similique iure quo saepe? Consequatur, ad!
        Laudantium totam dolorem nobis, earum inventore ut quos quo non corrupti quisquam eos veritatis et deleniti! Assumenda aperiam voluptatum nam, omnis repellendus cupiditate? Dolore, aperiam! Possimus quae molestiae ipsa veritatis.
        Sequi, facere. Consectetur, maxime voluptatibus! A assumenda perferendis minus quod. Quia corrupti adipisci minus nihil, ullam blanditiis excepturi expedita rem laborum unde. Quae voluptates dolore sequi dolor veniam corporis odio!
        Ullam necessitatibus enim consectetur nihil aspernatur deserunt tempora in vero nam nisi reprehenderit cum rerum laudantium tempore suscipit perspiciatis ea ipsa, architecto sapiente recusandae. Voluptate quam reprehenderit nisi illum dolores.
        Officia, nobis. Illo beatae numquam porro ipsa pariatur dicta dolor vitae. At ad, laudantium aperiam iusto blanditiis eligendi nam numquam. Dolor ad quis adipisci vero laudantium sequi maiores ratione dolore.
        Perspiciatis necessitatibus exercitationem ab alias aliquam repudiandae ipsa deserunt officia eos asperiores aut libero, soluta corporis consectetur earum quos ullam laudantium non, beatae id totam nihil esse. Cupiditate, reiciendis esse.
        Mollitia nam autem blanditiis, fuga obcaecati perspiciatis quaerat iusto delectus excepturi aliquam similique tempora ab debitis, sit ipsam voluptate in illum corrupti saepe dignissimos, magnam esse voluptatem vero? Consequatur, totam!
        Exercitationem cum repudiandae dolorem labore reprehenderit nobis inventore fugit optio est quod, obcaecati dignissimos ipsum et hic perferendis distinctio deserunt facere ut eligendi! Quaerat itaque sapiente aliquid blanditiis tempore architecto.
        Explicabo voluptas, expedita pariatur nostrum debitis quam necessitatibus tenetur illum soluta molestias saepe, recusandae, voluptate et! Sunt sequi sapiente quidem inventore eos fuga enim, voluptatum, veritatis eligendi laudantium, vero odio!
        Consequuntur molestiae provident vero aliquam dolores obcaecati explicabo exercitationem iure veniam eveniet. Inventore, corrupti quo ex repellat aperiam voluptate odit quas autem fuga. Distinctio quae perferendis fugiat asperiores dolorum voluptate!
        Vero, dolorum sunt eaque unde earum quos praesentium, autem perferendis repellendus neque voluptate blanditiis provident odit iure beatae minima asperiores quibusdam nisi quis perspiciatis porro ut. Ducimus est impedit doloribus.
        Maiores, qui totam maxime deserunt aliquam eum consequuntur voluptates aperiam quaerat fugit explicabo optio sunt. Aspernatur voluptas mollitia quo adipisci amet voluptates omnis culpa harum, ea, molestias deleniti quasi asperiores.
        Aliquid, nulla ipsa. Sit eos pariatur facere molestias tenetur, minima, esse atque similique possimus autem nihil? Doloremque corrupti, consequuntur reiciendis nihil velit eligendi quo. Cupiditate, debitis beatae. Ex, ratione sit?
        Dolores quaerat illum illo reiciendis, sit aperiam magni non blanditiis consectetur corporis sed quae voluptatibus molestiae. Nisi nobis quo error sequi, accusamus tempora perspiciatis ipsum ex tempore, corporis repellendus labore.
        Esse ducimus, ipsum perferendis quisquam reiciendis molestias consequatur nesciunt atque id hic rem, distinctio tenetur amet minima dicta voluptate officia tempora? Impedit harum architecto provident blanditiis ipsa asperiores culpa ullam!
        Doloribus iusto vitae minus itaque quos ullam error? Deleniti in explicabo dolore obcaecati. Et minus perspiciatis, nostrum nemo nulla facere! Deleniti nobis nulla sapiente atque beatae ratione commodi ab laborum!
        Repellendus dolore natus exercitationem non amet inventore ducimus odio, quos ipsa quo saepe eos iure tempore eligendi error quae assumenda. Reprehenderit sit maiores mollitia molestias laboriosam dolor harum porro veniam?
        Alias nobis accusantium, quo dolore voluptas totam accusamus ipsam nam, rerum omnis quae minus saepe inventore delectus? Libero, neque deserunt! Libero tenetur eius iste odio praesentium ab amet inventore molestiae?
        Ducimus, quod reprehenderit ut odit, quia explicabo earum error itaque velit saepe animi eveniet? Inventore laborum totam minima, animi saepe iste corrupti maiores fuga veniam error unde corporis aliquam praesentium?
        Facilis delectus aperiam id quae asperiores. Amet, eum excepturi! Explicabo amet, necessitatibus quis doloremque maxime dolores iure perspiciatis, quos enim quod tempore tempora ipsam rerum corporis velit nam placeat? Reiciendis.
        Culpa beatae, aut necessitatibus voluptatem eveniet praesentium quis asperiores commodi qui eaque saepe officiis fugit reprehenderit aperiam dicta vel repudiandae. Corporis asperiores voluptatem esse perferendis labore, sed voluptatibus molestiae unde.
        Fuga repellat atque non in saepe quisquam? Aliquid reprehenderit nostrum doloribus fugit, delectus facilis dolore quia cupiditate id perspiciatis, consectetur maiores architecto ducimus provident hic repellat voluptas voluptate, fugiat illum!
        Officiis tenetur cumque maiores perspiciatis, est possimus dignissimos eum iure culpa officia, quos quam facere ducimus! Harum doloremque aperiam eveniet! Doloribus cumque cupiditate eius dicta assumenda laborum molestias totam fugiat!
        Eligendi, molestiae, quo corrupti neque debitis dignissimos incidunt minus doloremque corporis nulla beatae nihil soluta dolore? Numquam, maiores et dolores ut dolorum natus assumenda, quisquam adipisci aperiam illum magni hic.
        Animi quidem molestias culpa repellendus velit maxime nam maiores! Dolor est neque temporibus voluptatibus reiciendis, minima voluptatem nobis repellendus quas error odit nulla eligendi, sequi, molestiae rerum quo officiis aperiam?
        Incidunt doloribus quia cumque voluptate nisi iure, ratione vero labore? Fugit odio a veniam temporibus excepturi officiis accusamus. Quisquam molestiae quaerat velit totam error quam iure quod quis ipsum unde.
        Ratione maxime dicta aspernatur ipsa aperiam nemo veritatis assumenda incidunt magnam ut enim, accusamus voluptatum blanditiis quia totam maiores ipsam suscipit necessitatibus? Ex quas exercitationem consequatur minima quaerat libero repellat?
        Blanditiis doloribus obcaecati incidunt! Molestias, eveniet voluptas culpa architecto odio atque fugit possimus aliquam quo quibusdam cum, quasi perferendis sunt nihil qui soluta perspiciatis quos, minima aspernatur in ipsa nulla.
        Tenetur iusto officiis, commodi, modi voluptatem iure delectus molestias quam pariatur, nemo culpa cum saepe blanditiis corporis quia nulla odit. Nisi impedit delectus libero quo doloremque illum eos, voluptas quis!
        Officiis cupiditate accusantium rem perferendis dolor blanditiis, est quidem asperiores optio veritatis explicabo nostrum? Similique laudantium dignissimos qui eveniet, possimus quaerat voluptate atque cupiditate officia aliquam officiis assumenda, dolore velit.
        Minus nihil, sapiente totam corporis sunt modi voluptates, saepe vero maiores illum ex mollitia reiciendis. Saepe, sequi eveniet dolore ratione consequuntur, voluptates inventore commodi, quos aliquid optio eum! Officia, modi.
        Molestiae itaque laborum velit blanditiis aperiam enim. Neque autem omnis excepturi quae possimus sapiente cum fugiat dolor tempore cumque amet, vitae corporis quo rem doloremque perspiciatis expedita, fugit repudiandae quas?</p>
    </div>
    </main>
    </>
  )
}

export default StoryPage
