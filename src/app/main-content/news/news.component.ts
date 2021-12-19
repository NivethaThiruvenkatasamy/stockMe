import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: any;
  @Input() isShowAll:boolean = false;
  limit: number =3;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    if(this.router.getCurrentNavigation().extras.state!= undefined){
      if(this.isShowAll || this.router.getCurrentNavigation().extras.state.isShowAll === 'true'){
        this.limit = 100;
      }
      else{
        this.limit = 3;
      }
    }
   
    of({"status":"ok","totalResults":256,"articles":[{"source":{"id":"reuters","name":"Reuters"},"author":null,"title":"Mexico to impose visa requirements on Venezuelans - Reuters","description":"Mexico will impose visa requirements on Venezuelan visitors, the interior ministry said on Friday, as the country attempts to stem a jump in the number of people from the South American nation trying to enter the United States illegally.","url":"https://www.reuters.com/world/americas/mexico-impose-visa-requirements-venezuelans-2021-12-17/","urlToImage":"https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=66","publishedAt":"2021-12-17T21:17:00Z","content":"MEXICO CITY, Dec 17 (Reuters) - Mexico will impose visa requirements on Venezuelan visitors, the interior ministry said on Friday, as the country attempts to stem a jump in the number of people from … [+881 chars]"},{"source":{"id":"reuters","name":"Reuters"},"author":null,"title":"Deloitte tech pro heads to global immigration law firm Fragomen - Reuters","description":"Fragomen, Del Rey, Bernsen & Loewy has plucked an executive who managed Deloitte's IT strategy to fill a newly-created top technology-focused role at the immigration law firm.","url":"https://www.reuters.com/legal/legalindustry/deloitte-tech-pro-heads-global-immigration-law-firm-fragomen-2021-12-17/","urlToImage":"https://www.reuters.com/resizer/FHjXlsiRrY59yh2wU1RZ8XJqlTc=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5ZYRTG2T4NPOFPMH3TSWOJF25E.jpg","publishedAt":"2021-12-17T18:30:00Z","content":"(Reuters) - Fragomen, Del Rey, Bernsen &amp; Loewy has plucked an executive who managed Deloitte's IT strategy to fill a newly-created top technology-focused role at the immigration law firm.\r\nNew Yo… [+1640 chars]"},{"source":{"id":"vice-news","name":"Vice News"},"author":"Willem Patrick Marx, Matthew Champion","title":"How a Tiny Island in Europe Sold Its Soul to Online Gaming","description":"Malta, the EU’s smallest member state, is home to one of the world’s greatest gambling booms since Las Vegas in the 1960s.","url":"https://www.vice.com/en/article/z3nmx3/how-malta-became-a-global-online-gaming-giant","urlToImage":"https://video-images.vice.com/articles/61bb1731528aa2009b8cb395/lede/1639671275419-casinomalta.png?image-resize-opts=Y3JvcD0xeHc6MXhoO2NlbnRlcixjZW50ZXImcmVzaXplPTEyMDA6KiZyZXNpemU9MTIwMDoq","publishedAt":"2021-12-17T09:33:19Z","content":"SLIEMA, Malta – It’s a Friday night at one of Malta’s larger upscale hotels in a fishing village turned sprawling town called St. Julian’s, and in the ballroom on the lower ground floor a woman in a … [+24954 chars]"},{"source":{"id":"spiegel-online","name":"Spiegel Online"},"author":"DER SPIEGEL","title":"TikTok Deutschland behindert offenbar Betriebsratswahl","description":"Seit Monaten bemüht sich die deutsche Belegschaft von TikTok um die Gründung eines Betriebsrats. Bisher aber tut das Unternehmen alles, um das zu verhindern. Manche Mitarbeiter klagen über ein »Klima der Angst«.","url":"https://www.spiegel.de/wirtschaft/unternehmen/tiktok-deutschland-behindert-offenbar-betriebsratswahl-a-40d1fd96-4fd1-40c0-9039-376789280799","urlToImage":"https://cdn.prod.www.spiegel.de/images/92eef8fa-a979-40a0-a01d-3a2cf980da33_w1280_r1.77_fpx26.3_fpy55.jpg","publishedAt":"2021-12-17T12:39:42Z","content":"In Deutschland tätige Mitarbeiter und Mitarbeiterinnen der chinesischen Videoplattform TikTok werden offenbar beim Versuch einer Betriebsratswahl behindert. Bei einer ersten Versammlung wählten sich … [+2383 chars]"},{"source":{"id":null,"name":"Journal du geek"},"author":"Redac JDGe","title":"Boursorama : la banque offre un cadeau irrésistible à ses clients","description":"Du vendredi 17 au lundi 20 décembre, Boursorama Banque offre une prime de 130 euros à tous ses nouveaux clients. Il faudra seulement opter pour la formule Ultim, qui est la plus populaire de sa gamme. Elle est gratuite et sans condition.\nBoursorama : la banqu…","url":"https://www.journaldugeek.com/2021/12/17/boursorama-la-banque-offre-un-cadeau-irresistible-a-ses-clients/","urlToImage":"https://www.journaldugeek.com/content/uploads/2021/05/brs-pdw.jpg","publishedAt":"2021-12-17T06:22:12Z","content":"Du vendredi 17 au lundi 20 décembre, Boursorama Banque offre une prime de 130 euros à tous ses nouveaux clients. Il faudra seulement opter pour la formule Ultim, qui est la plus populaire de sa gamme… [+5057 chars]"},{"source":{"id":null,"name":"MakeUseOf"},"author":"Tamal Das","title":"How to Pay With Crypto on Amazon","description":"Ever wanted to use your cryptocurrency holdings on Amazon? Here, we'll look at multiple ways to buy Amazon products using Bitcoin, Ethereum, and more.","url":"https://www.makeuseof.com/how-to-pay-with-crypto-on-amazon/","urlToImage":"https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/12/Crypto-on-Amazon-Featured-Image.jpeg","publishedAt":"2021-12-17T15:00:23Z","content":"Do you want to use your cryptocurrency holdings to pay for goods? It's your lucky day!\r\nCryptocurrencies have existed for over a decade now, but most countries don't accept crypto as legal tender.\r\nT… [+7215 chars]"},{"source":{"id":null,"name":"Presse-citron"},"author":"Romain Pomian-Bonnemaison","title":"Gare à l’arnaque au “billet magique” autour des distributeurs automatiques","description":"Une nouvelle arnaque dite du \"billet magique\" vise les personnes âgées qui retirent de l'argent dans les distributeurs de billets.","url":"https://www.presse-citron.net/gare-a-larnaque-au-billet-magique-autour-des-distributeurs-automatiques/","urlToImage":"https://www.presse-citron.net/app/uploads/2021/12/arnaque-distributeur-billets.jpg","publishedAt":"2021-12-17T06:30:50Z","content":"Le récit de ce nouveau type d’arnaques nous parvient grâce aux colonnes du Parisien. Dans la capitale, un nouveau type d’arnaque visant surtout les personnes âgées se développe aux abords des distrib… [+4815 chars]"},{"source":{"id":null,"name":"Presse-citron"},"author":"Presse-citron","title":"Boursorama : pour ce Pink Week-end, la banque booste sa prime d’accueil","description":"Boursorama Banque organise son dernier Pink Week-end de l'année. Si vous voulez profiter d'une prime boosté à 130 euros pour ouvrir un compte, c'est le moment d'en profiter. Elue \"banque la moins chère\" en France hier pour la quatorzième fois, c'est un choix …","url":"https://www.presse-citron.net/boursorama-pour-ce-pink-week-end-la-banque-booste-sa-prime-daccueil/","urlToImage":"https://www.presse-citron.net/app/uploads/2021/03/boursoramaultimmetal.jpg","publishedAt":"2021-12-17T09:33:02Z","content":"Après avoir été élue banque la moins chère en 2021 hier, Boursorama Banque relance son opération séduction “Pink Week-end” pour doper ses volumes de souscription. Pendant 96 heures, vous allez pouvoi… [+4271 chars]"},{"source":{"id":"techcrunch","name":"TechCrunch"},"author":"Engadget Japanese","title":"忘れ物トラッカーTile内蔵クレジットカード「三井住友カードTile」登場、Bluetoothでスマホと接続しアプリで紛失位置確認","description":"忘れ物トラッカー「Tile」機能を搭載したVisaカード「三井住友カードTile」が登場しました。\r\n\r\n「三井住友カード Tile」は、Bluetoothでスマートフォンと繋がるクレジットカードです。Tile機能を搭載しており、スマートフォンとカードの接続が切れた位置（＝紛失位置）をTileアプリで確認可能。また、同カードを財布に入れておけば、財布を落とした時もTile機能を使って財布ごと見つけられます。<img class=\"aligncenter size-full wp-image-463441\" src…","url":"https://jp.techcrunch.com/2021/12/17/tile-mistui-sumitomo-card/","urlToImage":"https://jp.techcrunch.com/wp-content/uploads/2021/12/2021-12-17-001-index.jpg?w=1024","publishedAt":"2021-12-17T01:19:59Z","content":"TileVisaTile\r\n TileBluetoothTileTileTile\r\nTile\r\nTile\r\n0.76mm1000\r\nEMV\r\n Tile1216150011500\r\nSourceC&amp;SEngadget"},{"source":{"id":null,"name":"Frandroid"},"author":"Guillaume Sonnet","title":"130 € offerts à l’arrivée de Noel, ça vous dit ? C’est chez Boursorama Banque que ça se passe","description":"À l'occasion des fêtes de fin d'année, Boursorama Banque relance son opération Pink Week-End jusqu'au 20 décembre avec jusqu'à 130 euros offerts pour toute ouverture de compte avec une carte bancaire. La banque en ligne Boursorama Banque relance une nouvelle …","url":"https://www.frandroid.com/bons-plans/1160985_130-e-offerts-a-larrivee-de-noel-ca-vous-dit-cest-chez-boursorama-banque-que-ca-se-passe","urlToImage":"https://images.frandroid.com/wp-content/uploads/2021/12/pink-week-end-decembre-2021.jpg","publishedAt":"2021-12-17T07:30:13Z","content":"À l'occasion des fêtes de fin d'année, Boursorama Banque relance son opération Pink Week-End jusqu'au 20 décembre avec jusqu'à 130 euros offerts pour toute ouverture de compte avec une carte bancaire… [+4220 chars]"},{"source":{"id":"lenta","name":"Lenta"},"author":"Валентина Процкова","title":"Россияне смогут оплачивать «взглядом» обеды в поездах","description":"В РЖД в тестовом режиме запустили сервис по оплате услуг «взглядом» (FacePay) в вагонах-бистро поездов «Сапсан». «Чтобы воспользоваться сервисом, пассажир может установить приложение OVISION на смартфон (для iOS или Android) и зарегистрироваться», — отметил п…","url":"https://lenta.ru/news/2021/12/17/poezd/","urlToImage":"https://icdn.lenta.ru/images/2021/12/17/12/20211217125345326/share_05b064762ac901365f594588dd5d7d9d.jpg","publishedAt":"2021-12-17T12:28:17Z","content":"(, «» « » ) FacePay  - «». «» .\r\n« \"\" Visa - \"\",  -,    , », , FacePay 2021 .\r\n , . « , OVISION ( iOS  Android) », , , .\r\n , Visa 20 .\r\n, 44 . .  - , ."},{"source":{"id":null,"name":"Highsnobiety"},"author":"Christopher Morency","title":"Enter the World of SLAWN and Soldier","description":"This week’s FRONTPAGE, from HIGHArt, a print magazine by Highsnobiety, available from retailers around the world and our online store, we dive into the defining art-bromance of our time: SLAWN and Soldier. September 3, 2021 Okay, so where do I even start? Let…","url":"https://www.highsnobiety.com/p/slawn-soldier-interview/","urlToImage":"https://www.highsnobiety.com/static-assets/thumbor/dH0JmW2Sk377l_K1H6bYrqNKpWs=/1200x720/www.highsnobiety.com/static-assets/wp-content/uploads/2021/12/17124044/slawn-soldier-feat.jpg","publishedAt":"2021-12-17T15:50:01Z","content":"This week's FRONTPAGE, from HIGHArt, a print magazine by Highsnobiety, available from retailers around the world and our online store, we dive into the defining art-bromance of our time: SLAWN and So… [+6646 chars]"},{"source":{"id":"al-jazeera-english","name":"Al Jazeera English"},"author":"David McElhinney","title":"‘Japan basically betrayed me’: adrift Japanophiles sour on muse","description":"Japan's strict border controls have locked out foreign academics and challenged the country's soft power push.","url":"https://www.aljazeera.com/economy/2021/12/17/japan-basically-betrayed-me-japanophiles-sour-pandemic-isolati","urlToImage":"https://www.aljazeera.com/wp-content/uploads/2021/09/AP21271311508265.jpg?resize=1200%2C630","publishedAt":"2021-12-17T03:16:24Z","content":"When Kaitlyn Ugoretz, a digital anthropologist specialising in Japanese religions, secured a prestigious fellowship with the Japan Foundation, it seemed like a dream come true. Ugoretz, a 27-year-old… [+5941 chars]"},{"source":{"id":"liberation","name":"Libération"},"author":"Margot Davier","title":"Assassinat de JFK : la CIA déclassifie des documents sur les liens entre Oswald et le KGB","description":"Soupçonné d’avoir tué le président américain en 1963, Lee Harvey Oswald s’est rendu à l’ambassade d’URSS au Mexique quelques jours avant l’assassinat de Dallas, selon des notes publiées mercredi.","url":"https://www.liberation.fr/international/amerique/assassinat-de-jfk-la-cia-declassifie-des-documents-sur-les-liens-entre-oswald-et-le-kgb-20211217_L72SDWRWD5HXVHUKPYN6MFG3DM/","urlToImage":"https://www.liberation.fr/resizer/X4DzMRCP834oAd79-1UeiHf0MqI=/1200x630/filters:format(jpg):quality(70):focal(2565x1669:2575x1679)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/AMMS7IEMJBCZJGD55NGTHUV3LI.jpg","publishedAt":"2021-12-17T07:01:00Z","content":"Près de 1 491 pages de documents relatifs à lassassinat de John Fitzgerald Kennedy le 22 novembre 1963 à Dallas au Texas, ont été rendus publics mercredi. Cest le deuxième lot le plus conséquent publ… [+3337 chars]"},{"source":{"id":null,"name":"Uol.com.br"},"author":"Rayane Moura","title":"Netflix lança loja virtual com produtos inspirados em filmes e séries","description":"O e-commerce estreia primeiro nos EUA, e, nos próximos meses, também deve começar em outros países\nThe post Netflix lança loja virtual com produtos inspirados em filmes e séries appeared first on Gizmodo Brasil.","url":"https://gizmodo.uol.com.br/netflix-lanca-loja-virtual-com-produtos-inspirados-em-filmes-e-series/","urlToImage":"https://i2.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/11/round-6-boneca-bizarra-aterrorizante-foto-reproducao-netflix_widelg.jpg?fit=800%2C450&ssl=1","publishedAt":"2021-12-17T21:53:45Z","content":"Após dar seus primeiros passos como hub de games, a Netflix agora lançou uma loja online para reunir produtos exclusivos inspirados em seus filmes e séries. A Netflix.shop vai estrear nos Estados Uni… [+1167 chars]"},{"source":{"id":null,"name":"Corriere.it"},"author":"Sergio Bocconi","title":"Paytech, il dominio Usa e la scalata di Nexi: la classifica internazionale di Mediobanca","description":"La prima edizione del rapporto dell’Area Studi Mediobanca sulle prime 25 Paytech internazionali, cioè le società che utilizzano la tecnologia digitale per i pagamenti e i trasferimenti di denaro cashless","url":"https://www.corriere.it/economia/finanza/cards/paytech-dominio-usa-scalata-nexi-classifica-internazionale-mediobanca/da-amex-visa-leadership-colossi-usa_principale.shtml","urlToImage":"https://images2.corriereobjects.it/methode_image/socialshare/2021/12/16/355a07da-5e92-11ec-bd4c-ff71c0b97a67.jpg","publishedAt":"2021-12-17T10:13:22Z","content":"Da Amex a Visa, la leadership dei colossi Usa \r\nFatturano 140 miliardi le prime 25 Paytech internazionali, cioè le società che utilizzano la tecnologia digitale per i pagamenti e i trasferimenti di d… [+454 chars]"},{"source":{"id":null,"name":"Livedoor.jp"},"author":"news23vip","title":"お前らってクレカどこのん持ってるん？グレードも教えてや","description":"1 名前：名無しさん＠おーぷん[] 投稿日：21/12/15(水)10:16:07 ID:PeUt\n街のちょっとした店で楽天カード出すの恥ずかしすぎる\n\n2 名前：名無しさん＠おーぷん[] 投稿日：21/12/15(水)10:16:25 ID:tNR8\n楽天\nトヨタ\nDカード\n\n3 名前：名無しさん＠おーぷん[] 投稿日：21/12...","url":"http://blog.livedoor.jp/news23vip/archives/5872705.html","urlToImage":"https://livedoor.blogimg.jp/news23vip/imgs/a/3/a3ca73cc.png","publishedAt":"2021-12-17T13:00:01Z","content":"8 [] 21/12/15()10:22:37 ID:r6tq12 [] 21/12/15()10:25:37 ID:bq5f\r\n15 [] 21/12/15()10:28:24 ID:hpNW\r\n16 [] 21/12/15()10:30:24 ID:F5Dw\r\n20 [] 21/12/15()10:32:24 ID:rfJW\r\nVISA\r\n21 [] 21/12/15()10:33:00 I… [+1047 chars]"},{"source":{"id":null,"name":"Stylebyemilyhenderson.com"},"author":"Jess Bunge","title":"The Feel-Good Modern Romantic Bedroom Makeover Jess Did For Her Dear Friend (All Thanks To The Company Store)","description":"Franchesca and I go back many years. Technically we were a part of the same sorority in college but she dropped out right before I joined. I don’t disclose to people I was in a sorority unless I know them ...\nThe post The Feel-Good Modern Romantic Bedroom Mak…","url":"http://stylebyemilyhenderson.com/blog/romantic-bedroom-makeover-the-company-store","urlToImage":"https://stylebyemilyhenderson.com/wp-content/uploads/2021/12/EHDxTheCompanyStore_2-1.jpg","publishedAt":"2021-12-17T09:10:19Z","content":"Franchesca and I go back many years. Technically we were a part of the same sorority in college but she dropped out right before I joined. I don’t disclose to people I was in a sorority unless I know… [+16324 chars]"},{"source":{"id":null,"name":"Forbes"},"author":"Andy J. Semotiuk, Contributor, \n Andy J. Semotiuk, Contributor\n https://www.forbes.com/sites/andyjsemotiuk/","title":"Strike 3 For Democrats In The Senate Hopes Dim For Immigration Reform","description":"Proposed legislative changes to U.S. immigration were rejected in the Senate recently. What are some ways to move the reform agenda forward? What is being done?","url":"https://www.forbes.com/sites/andyjsemotiuk/2021/12/17/strike-3-for-democrats-in-the-senate-hopes-dim-for-immigration-reform/","urlToImage":"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61bcc691abe23bc52fa82403%2F0x0.jpg","publishedAt":"2021-12-17T17:47:58Z","content":"Reforms to U.S. Immigration law were stalled in the Senate recently\r\ngetty\r\nDespite their control of the Presidency, the House and the Senate, Democrats have struck out in the Senate on their efforts… [+5969 chars]"},{"source":{"id":null,"name":"Skift"},"author":"Skift","title":"Digital Nomads, NFTs and One Man’s Quest to Build an Island Oasis for Remote Work","description":"It was only a matter of time before tourism caught up with the hype over non-fungible tokens, or NFTs, and join the worlds of art and sport. And digital nomads will be at the heart of it all. Just ask Olumide Gbenro.\n-Matthew Parsons","url":"https://skift.com/2021/12/17/digital-nomads-nfts-and-one-mans-quest-to-build-an-island-oasis-for-remote-work/","urlToImage":"https://skift.com/wp-content/uploads/2021/03/future-of-work-logo-1024x683-1-1.png","publishedAt":"2021-12-17T07:30:00Z","content":"An entrepreneur is picking himself back up after miscalculating the investment, and interest, needed to build an eco-lodge on a remote island in Indonesia.\r\nOlumide Gbenro originally planned to sell … [+9143 chars]"}]}).subscribe(news=>{
    //this.http.get("https://newsapi.org/v2/everything?q=visa&from=2021-12-17&to=2021-12-17&sortBy=popularity&apiKey=812f2012ef4c442ebe31ae8db24403e1").subscribe(news=>{
      console.log("news"+JSON.stringify(news['articles'][0].title));
      this.news = news['articles'];
   })
  }
}
