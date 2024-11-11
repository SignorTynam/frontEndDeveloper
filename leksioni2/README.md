# Leksioni 2: Të punojmë me tekstet

Ky kapitull prezanton elementët që keni për të zgjedhur për të modifikuar përmbajtjen e tekstit. Ndoshta nuk ka aq shumë sa mund të mendoni, dhe në të vërtetë vetëm disa janë elementët që do t'i përdorni rregullisht. Megjithatë, ky kapitull është i madh dhe mbulon shumë terren.

Ndërsa fillojmë turneun tonë të elementëve, dua të ritheksoj sa e rëndësishme është të zgjidhni elementët në mënyrë semantike, domethënë, në një mënyrë që përshkruan më saktë kuptimin e përmbajtjes. 

Një dokument i formatuar semantikisht siguron që përmbajtja juaj të jetë e disponueshme dhe e qasshme në gamën më të gjerë të mjediseve të browser-ave, nga kompjuterët desktop dhe pajisjet mobile deri te lexuesit ndihmës të ekranit. Gjithashtu lejon lexuesit jo-njerëzorë, si programet e indeksimit të motorëve të kërkimit, të analizojnë saktë përmbajtjen tuaj dhe të marrin vendime për rëndësinë relative të elementëve në faqe.


## Çfarë do të trajtojmë në këtë leksion?

Në këtë leksion, do të mësojmë për elementët bazë të HTML që përdoren për të modifikuar dhe strukturuar tekstin në një faqe web. Do të trajtojmë temat e mëposhtme:

1. **Paragrafët**: Si të krijojmë dhe të përdorim elementin `<p>` për të shfaqur blloqe teksti.
2. **Titujt**: Si të përdorim elementët `h1` deri `h6` për të krijuar tituj të hierarkive të ndryshme.
3. **Vija horizontale**: Si të përdorim elementin `<hr>` për të ndarë seksione të ndryshme të përmbajtjes.
4. **Grupet e titujve**: Si të përdorim elementin `<hgroup>` për të grupuar tituj dhe nën-tituj.
5. **Teksti i trashë dhe i pjerrët**: Si të përdorim elementët `<b>` dhe `<i>` për të bërë tekstin të duket **bold** dhe **italic**.
6. **Superscript dhe Subscript**: Si të përdorim elementët `<sup>` dhe `<sub>` për të shfaqur karaktere si **superscript** dhe **subscript**.
7. **Ndarja e rreshtave**: Si të përdorim elementin `<br>` për të shtuar një ndarje rreshti brenda një paragrafi.
8. **Strong dhe Emphasis**: Si të përdorim elementët `<strong>` dhe `<em>` për të treguar rëndësi dhe theks në tekst.
9. **Citate**: Si të përdorim elementët `<blockquote>` dhe `<q>` për të shënuar citate të gjata dhe të shkurtra.
10. **Shkurtesa dhe Akronime**: Si të përdorim elementin `<abbr>` për të treguar versionin e plotë të një shkurtesë ose akronimi.
11. **Teksti i paraformatuar**: Si të përdorim elementin `<pre>` për të shfaqur përmbajtjen saktësisht ashtu siç është shkruar.
12. **Citate dhe Përcaktimi i Terminologjisë**: Si të përdorim elementët `<cite>`, `<dfn>`, `<ins>`, `<del>`, `<s>`, `<mark>`, `<code>`, `<var>`, `<samp>`, dhe `<kbd>` për të shënuar citate, terma, ndryshime, dhe shembuj të kodit.

Ky leksion do t'ju ndihmojë të kuptoni dhe të përdorni këto elementë për të krijuar përmbajtje të strukturuar dhe të qartë në faqet tuaja web.

## Paragrafët
```html
<p>...</p>
```

Një element paragrafi përfaqëson një bllok teksti. Paragrafët janë elementët më themelorë të një dokumenti teksti. Ju mund të përcaktoni një paragraf duke përdorur elementin `<p>` duke vendosur një tag hapës `<p>` në fillim të paragrafit dhe një tag mbyllës `</p>` në fund të tij, siç tregohet në këtë shembull.

**Shiko skedarin [paragraphs.html](paragraphs.html)**

```html
<p>Shkronjat serif kanë zgjatime të vogla në fund të shkronjave. Në përgjithësi, shkronjat serif bëjnë që sasi të mëdha teksti të jenë më të lehta për t’u lexuar.</p>

<p>Shkronjat sans-serif nuk kanë zgjatime të tilla; Helvetica dhe Arial janë shembuj të shkronjave sans-serif. Në përgjithësi, shkronjat sans-serif duken më të hijshme dhe më moderne.</p>
```

> **SHËNIM**: Të gjitha pjesët e tekstit në një dokument duhet të jenë të përfshira brenda një elementi. Nëse teksti nuk përfshihet brenda etiketave, quhet tekst "i zhveshur" ose "anonim", dhe do të bëjë që dokumenti të mos jetë valid.

Browser-it zakonisht shfaqin paragrafe në rreshta të rinj, duke vendosur pak hapësirë midis tyre si parazgjedhje. Paragrafët mund të përmbajnë tekst, imazhe dhe elementë të tjerë, por nuk mund të përmbajnë tituj, lista apo ndonjë element që shfaqet si bllok nga parazgjedhja.

Në HTML, është e mundur që të mos e vendosni tagun mbyllës `</p>`. Browser-i supozon automatikisht se paragrafi është mbyllur kur has një element të ri bllok. Megjithatë, shumë zhvillues, përfshirë edhe mua, preferojnë t’i mbyllin paragrafët dhe të gjitha elementët, madje edhe në HTML, për hir të qëndrueshmërisë dhe qartësisë. Unë ju rekomandoj juve, që sapo po mësoni HTML, të bëni të njëjtën gjë.

## Titujt
```html
<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>
```

### **Elementët e titullit**

Në leksionin e kaluar, përdorëm elementët `h1` dhe `h2` për të treguar titujt e faqes. Në fakt, ekzistojnë gjashtë nivele të titujve, nga `h1` deri te `h6`. Kur shtoni tituj në përmbajtje, browser-i i përdor ato për të krijuar një kontur dokumenti për faqen. Pajisjet për lexim ndihmës, si lexuesit e ekranit, e përdorin këtë kontur për të ndihmuar përdoruesit të skanojnë dhe të navigojnë shpejt nëpër një faqe. 

Për më tepër, motorët e kërkimit i marrin parasysh nivelet e titujve si pjesë e algoritmeve të tyre (informacioni në nivelet më të larta të titujve mund të ketë më shumë peshë). Për këto arsye, është praktikë e mirë të fillohet me titullin e Nivelit 1 (`h1`) dhe të vazhdohet sipas radhës numerike, duke krijuar një strukturë logjike dhe një kontur për dokumentin.

Ky shembull tregon sintaksën për katër nivele titujsh. Nivelet shtesë të titujve do të shtoheshin në të njëjtën mënyrë.

**Shiko skedarin [headings.html](headings.html)**

```html
<h1>Dizajni i Shkronjave</h1>
<h2>Shkronjat Serif</h2>
<p>Shkronjat serif kanë zgjatime të vogla në fund të shkronjave. Në përgjithësi, shkronjat serif bëjnë që sasi të mëdha teksti të jenë më të lehta për t’u lexuar.</p>

<h3>Baskerville</h3>
<h4>Përshkrimi</h4>
<p>Description of the Baskerville typeface.</p>

<h4>Historia</h4>
<p>The history of the Baskerville typeface.</p>

<h3>Georgia</h3>
<p>Description and history of the Georgia typeface.</p>

<h2>Shkronjat Sans-serif</h2>
<p>Sans-serif typefaces do not have slabs at the ends of strokes.</p>
```

Kjo strukturë e ndihmon faqen tuaj të jetë më e lexueshme, më e qartë dhe më e aksesueshme për përdoruesit dhe motorët e kërkimit.

### Struktura e dokumentit

Markup-i në këtë shembull do të krijonte strukturën e mëposhtme të dokumentit:

1. Dizajni i Shkronjave
    1. Shkronjat Serif
        - paragraf teksti
        1. Baskerville
            1. Përshkrimi
                - paragraf teksti
            2. Historia
                - paragraf teksti
        2. Georgia
            - paragraf teksti
    2. Shkronjat Sans-serif
        - paragraf teksti

Si parazgjedhje, titujt në shembullin tonë do të shfaqen me tekst të trashë, duke filluar me madhësi shumë të madhe për `h1`, me secilin nivel pasues në tekst më të vogël. Ju mund të përdorni një fletë stili për të ndryshuar pamjen e tyre.

## Shift in Themes
```html
<hr>
```

### Një vijë horizontale

Nëse dëshironi të tregoni se një temë apo mendim ka përfunduar dhe një tjetër po fillon, mund të përdorni një "ndarës tematik në nivel paragrafi" duke përdorur elementin `<hr>`. Ky element shërben si një ndarës logjik midis seksioneve të faqes ose paragrafëve të tekstit pa prezantuar një nivel të ri titulli.

Në versionet e mëparshme të HTML, `<hr>` përkufizohej si një "rregull horizontale" sepse vendoste një vijë horizontale në faqe. Browser-at vazhdojnë ta shfaqin `<hr>` si një vijë horizontale me një hije 3D, të vendosur në një rresht më vete me pak hapësirë sipër dhe poshtë si parazgjedhje. Megjithatë, tani ka një funksion semantik të ri. Nëse keni nevojë vetëm për një vijë dekorative, është më mirë të krijoni një vijë përmes një bordure të personalizuar me CSS përpara ose pas një elementi.

`<hr>` është një element bosh—thjesht e vendosni në vendin ku dëshironi që ndarja tematike të ndodhë, siç tregohet në këtë shembull:

```html
<h3>Times</h3>
<p>Përshkrimi dhe historia e shkronjës Times.</p>
<hr>
<h3>Georgia</h3>
<p>Përshkrimi dhe historia e shkronjës Georgia.</p>
```

## Grupet e Titujve
```html
<hgroup>...</hgroup>
```

### Një grup titujsh të vendosur një mbi një

Shpesh, titujt kanë nën-tituj ose shpjegime sqaruese. Për shembull, titulli i leksionit për sot është: "Të punojmë me tekset". Në të kaluarën, për t’i grupuar titujt dhe nën-titujt, ishte paksa problematike. Linja e parë, "Creating a Simple Page," është një `h1`, por nëse e bëni rreshtin e dytë një `h2`, kjo mund të sjellë një nivel të padëshiruar në strukturën e dokumentit. Alternativa më e mirë ishte ta trajtonit si paragraf, por kjo nuk ka kuptim semantik.

Për këtë arsye, HTML5 përfshin elementin `<hgroup>` për të identifikuar një grup titujsh si një grup. Browser-at që mbështesin `<hgroup>` e njohin vetëm titullin e nivelit më të lartë në strukturë dhe injorojnë të tjerët. Ja si mund të përdoret elementi `<hgroup>` për të shënuar titullin. Me këtë shënim, vetëm `h1`, "Creating a Simple Page," do të përfaqësohet në strukturën e dokumentit.

**Shiko skedarin [hgroups.html](hgroups.html)**

```html
<hgroup>
  <h1>Creating a Simple Page</h1>
  <h2>(HTML Overview)</h2>
</hgroup>
```

Kjo strukturë e bën dokumentin më të organizuar dhe të kuptueshëm për përdoruesit dhe për motorët e kërkimit.

## Bold dhe Italic
```html
<b>...</b> dhe <i>...</i>
```

Për të bërë tekstin të duket **bold**, vendosim fjalët brenda tag-eve `<b>` dhe `</b>`. Kjo mund të jetë e dobishme për të theksuar veçori kryesore, si në shembullin më poshtë:

```html
<p>Kjo është mënyra se si bëjmë një fjalë të duket <b>bold</b>.</p>
<p>Brenda një përshkrimi mund të shihni disa <b>karakteristika kryesore</b> të theksuara.</p>
```

Elementi `<b>` gjithashtu mund të përdoret për të treguar tekst që duhet të paraqitet ndryshe nga pjesa tjetër e përmbajtjes, si për fjalë kyçe, megjithëse nuk shton ndonjë kuptim shtesë.

Për tekstin **italic**, vendosim fjalët brenda tag-eve `<i>` dhe `</i>`. Ky element përdoret shpesh për terma teknikë, fjalë të huaja, mendime apo terma që zakonisht shkruhen në **italic**.

```html
<p>Kjo është mënyra se si bëjmë një fjalë të duket <i>italic</i>.</p>
<p>Është një <i>Solanum tuberosum</i>.</p>
<p>Kapiteni Cook lundroi drejt Australisë në <i>Endeavour</i>.</p>
```

## Superscript dhe Subscript
```html
<sup>...</sup> dhe <sub>...</sub>
```

Elementi `<sup>` përdoret për karaktere që duhet të shfaqen si **superscript**, si në fundoret e datave ose koncepte matematikore. Ndërsa elementi `<sub>` përdoret për karaktere që duhet të shfaqen si **subscript**, zakonisht për formula kimike ose shënime në fund.

```html
<p>Më 4<sup>të</sup> të shtatorit do të mësoni për E=MC<sup>2</sup>.</p>
<p>Sasia e CO<sub>2</sub> në atmosferë u rrit me 2 ppm në 2009<sub>1</sub>.</p>
```

### Hapësira e Bardhë
Për të bërë kodin më të lehtë për t’u lexuar, autorët shpesh shtojnë hapësira ose vendosin elemente në rreshta të rinj. Browser-i kur ndeshet me dy ose më shumë hapësira rresht, e paraqet vetëm si një hapësirë të vetme. Në mënyrë të ngjashme, një ndarje rreshti trajtohet gjithashtu si një hapësirë e vetme, një efekt i njohur si **kolapsi i hapësirës së bardhë**.

## Breaking lines
```html
<br />
```

Siç kemi parë, browser-i automatikisht vendos paragrafët dhe titujt në një rresht të ri. Por, për të shtuar një ndarje rreshti brenda një paragrafi, përdorim tag-un `<br />`.

```html
<p>Rrëshira që bie nga hapësira e bën Tokën<br />më të rëndë me njëqind ton çdo ditë.</p>
```

Ky tag është i dobishëm kur dëshironi të kontrolloni ndarjen e rreshtave brenda përmbajtjes së një paragrafi.

## Strong dhe Emphasis

### Strong
```html
<strong>...</strong>
```

Përdorimi i elementit `<strong>` tregon se përmbajtja e tij ka një rëndësi të madhe dhe mund të shprehet me një theks të fortë në të folur. Browser-at zakonisht e shfaqin përmbajtjen e këtij elementi në **bold**. Përdoret shpesh për mesazhe paralajmëruese apo për të theksuar përmbajtje të rëndësishme në dokument.

```html
<p><strong>Kujdes:</strong> Ka xhepistë që veprojnë në këtë zonë.</p>
<p>Kjo lodër përmban shumë pjesë të vogla dhe <strong>nuk është e përshtatshme për fëmijët nën pesë vjeç.</strong></p>
```

### Emphasis
```html
<em>...</em>
```

Elementi `<em>` përdoret për të treguar një theks më të lehtë që ndryshon në mënyrë të përshtatshme kuptimin e fjalisë. Browser-at e shfaqin zakonisht këtë element në **italic**, duke sugjeruar një ndryshim në ton ose përmbajtje.

```html
<p>Unë <em>mendoj</em> se Ivy ishte e para.</p>
<p>Mendoj se <em>Ivy</em> ishte e para.</p>
<p>Mendoj se Ivy ishte e para <em>e para</em>.</p>
```

**Shiko skedarin [formatime.html](formatime.html)**


## Citate
### Citate të Gjatë
```html
<blockquote>...</blockquote>
```

Kur keni një citat të gjatë, dëshminë e dikujt, ose një pjesë nga një burim tjetër, duhet ta shënoni me elementin `<blockquote>`. Praktika e mirë është që përmbajtja brenda `<blockquote>` të jetë e strukturuar me elemente të tjera, si paragrafë ose lista.

```html
<p>Dizajneri i njohur i tipografisë, Matthew Carter, ka thënë për profesionin e tij:</p>
<blockquote>
  <p>Alfabeti ynë nuk ka ndryshuar prej shumë kohësh; nuk ka shumë liri në atë që një dizajner mund të bëjë me shkronjat individuale.</p>
  <p>Sikurse një pjesë muzikore klasike, partituri është e shkruar – nuk është diçka që ndryshohet – megjithatë, çdo dirigjent e interpreton partituren ndryshe. Ka një tension në interpretim.</p>
</blockquote>
```

### Citate të Shkurtra
```html
<q>...</q>
```

Elementi `<q>` përdoret për citate të shkurtra që janë brenda një paragrafi. Shumica e browser-ave e rrethojnë këtë element me thonjëza.

```html
<p>Siç thotë John: <q>Çdo moment është një shans për të ndryshuar gjithçka.</q></p>
```

**Shiko skedarin [citate.html](citate.html)**

## Shkurtesa dhe Akronime
```html
<abbr title="...">...</abbr>
```

Kur përdorni një shkurtesë ose një akronim, elementi `<abbr>` mund të përdoret për të treguar versionin e tij të plotë nëpërmjet atributit `title`. Në HTML5, elementi `<abbr>` përdoret si për shkurtesa ashtu edhe për akronime.

```html
<p><abbr title="Profesor">Prof</abbr> Stephen Hawking është një fizikant teorik dhe kozmolog.</p>
<p><abbr title="Administrata Kombëtare për Aeronautikë dhe Hapësirë">NASA</abbr> realizon disa projekte mbresëlënëse në hapësirë.</p>
```

Në HTML, **atributi** është një pjesë e informacionit shtesë që përdoret për të specifikuar cilësi të veçanta ose të dhëna për një element të caktuar. Çdo atribut është një **çift emër-vlerë** që i shtohet një elementi për të përcaktuar më mirë sjelljen, stilin ose funksionalitetin e tij.

### Si përdoret një atribut?
Atributet shkruhen gjithmonë brenda etiketës hapëse të një elementi HTML dhe zakonisht ndjekin këtë strukturë:

```html
<tag emri_atributit="vlera">Përmbajtja e elementit</tag>
```

### Shembull i përdorimit të një atributi

Le të shohim një shembull të thjeshtë me një element `abbr` për të shtuar një shkurtesë. Ky element përdor atributin: `title`. Një element mund të ketë disa atribute.

```html
<p><abbr title="Administrata Kombëtare për Aeronautikë dhe Hapësirë">NASA</abbr> realizon disa projekte mbresëlënëse në hapësirë.</p>
```

### Roli i atributeve në HTML

Atributet janë shumë të rëndësishme sepse:
1. **Personalizojnë sjelljen dhe funksionalitetin e elementit** – duke e bërë secilin element HTML të kryejë një funksion specifik.
2. **Përcaktojnë pamjen dhe stilin** – disa atribute ndikojnë në mënyrën se si shfaqet përmbajtja. Atributi `style`, për shembull, mund të përdoret për të aplikuar stile specifike mbi një element të vetëm.

   ```html
   <p style="color:blue;">Ky tekst është blu</p>
   ```

3. **Shtojnë informacion ndihmës për përmbajtjen** – atribute si `title` mund të shërbejnë për të dhënë më shumë informacion në formë tooltip kur kaloni mbi elementin.

   ```html
   <button title="Shto një produkt të ri">Shto produkt</button>
   ```

4. **Përmirësojnë aksesueshmërinë dhe përvojën e përdoruesit** – atribute të tilla si `alt` te imazhet dhe `aria-label` në HTML5 përmirësojnë aksesin për njerëzit me aftësi të kufizuara.


## Teksti i Paraformatuar
```html
<pre>...</pre>
```

Përmbajtja e elementit `<pre>` shfaqet saktësisht ashtu siç është shkruar, duke përfshirë të gjitha hapësirat dhe ndarjet e linjave. Ky element është veçanërisht i dobishëm për shembuj kodi ose poezi, ku hapësirat kanë rëndësi për kuptimin e përmbajtjes.

```html
<pre>
Ky është
  një shembull
    tekst me hapësira të çuditshme.
</pre>
```

Kjo përmbajtje do të shfaqet në një font me gjerësi konstante, duke ruajtur të gjitha hapësirat dhe rreshtat për të ruajtur strukturën.

## Citatet dhe Përcaktimi i Terminologjisë

### 1. **`<cite>`**
**Përdorimi:** Përdoret për të shënuar tituj të veprave si libra, artikuj, ose filma. Ky tag është një mënyrë për të identifikuar një burim të caktuar.

**Shembull:**
```html
<p><cite>Harry Potter and the Sorcerer's Stone</cite> është një libër shumë i njohur nga J.K. Rowling.</p>
```

**Shpjegim:** Ky tag përdoret për të theksuar një titull të një vepre të njohur. Përdorimi i tag-ut `<cite>` ndihmon që të tregon se ky është titulli i një vepre letrare, dhe zakonisht shfaqet në format italik.

### 2. **`<dfn>`**
**Përdorimi:** Përdoret për të shënuar një term ose koncept që po përcaktohet për herë të parë në një tekst.

**Shembull:**
```html
<p>Një <dfn>robot</dfn> është një makinë që mund të kryejë detyra automatike.</p>
```

**Shpjegim:** Ky tag tregon se "robot" është një term i ri që po shpjegohet në këtë moment. Disa browser mund ta shfaqin këtë term në italik për të theksuar që është një term i ri.

### 3. **`<ins>` dhe `<del>`**
**Përdorimi:** Përdoren për të shënuar ndryshimet që janë bërë në një dokument, si shtimi (`<ins>`) ose fshirja (`<del>`) e pjesëve të caktuara të tij.

**Shembull:**
```html
<p>Çmimi për <del>telefonin e vjetër</del> <ins>modelin e ri</ins> është më i lartë.</p>
```

**Shpjegim:** Ky tag përdoret për të shënuar ndryshime në një tekst. Teksti i fshirë shfaqet me vijë të kaluar mbi të, ndërsa teksti i shtuar shfaqet zakonisht nënvizuar. Ky është përdorur shpesh për të treguar modifikime në përmbajtjen e një faqeje.

### 4. **`<s>`**
**Përdorimi:** Përdoret për të treguar një tekst që ka humbur kuptimin ose është tashmë i pavlefshëm, por që ende do të shfaqet në dokument.

**Shembull:**
```html
<p>Laptopi që ne po shesim është <s>Ishte 1000$</s> tani vetëm 750$.</p>
```

**Shpjegim:** Ky tag tregon që një informacion është më i vjetër ose tashmë i pavlefshëm. Përdorimi i tij mund të jetë i dobishëm kur tregon informacion të vjetër në një kontekst të ndryshuar.

### 5. **`<mark>`**
**Përdorimi:** Përdoret për të theksuar një pjesë të tekstit që është e rëndësishme ose që është gjetur në një kërkim.

**Shembull:**
```html
<p>Shikoni seksionin për <mark>SEO</mark> për të mësuar më shumë rreth optimizimit të motorëve të kërkimit.</p>
```

**Shpjegim:** Ky tag përdoret për të theksuar një pjesë të tekstit. Në shumicën e browser-ave, ky tekst shfaqet me një sfond ngjyrë të verdhë, duke e bërë të dukshme për përdoruesin.

### 6. **`<code>`**
**Përdorimi:** Përdoret për të shënuar pjesë të kodit të programimit që është i ndarë nga përmbajtja e zakonshme e faqeve HTML.

**Shembull:**
```html
<p>Për të krijuar një funksion në Java, mund të përdorni këtë kod: <code>public void helloWorld()</code>.</p>
```

**Shpjegim:** Ky tag përdoret për të shënuar se diçka është kod dhe do të shfaqet në një font monospace (si Courier), duke ndihmuar që kodi të dallohet nga përmbajtja e zakonshme tekstuale.

### 7. **`<var>`**
**Përdorimi:** Përdoret për të shënuar një variabël që mund të përdoret në kontekstin e një kodi ose matematike.

**Shembull:**
```html
<p>Formula e zonës së një rrethi është <var>A = πr^2</var>, ku A është zona dhe r është rrezja.</p>
```

**Shpjegim:** Ky tag përdoret për të theksuar një variabël. Shpesh është i dobishëm kur po diskutoni formula matematike ose variabla të përdorura në një kontekst teknologjik.

### 8. **`<samp>`**
**Përdorimi:** Përdoret për të shënuar një shembull të output-it të një programi ose një aplikacioni.

**Shembull:**
```html
<p>Pas ekzekutimit të programit, mund të shihni këtë rezultat: <samp>Hello, World!</samp></p>
```

**Shpjegim:** Ky tag tregon një rezultat të mundshëm që mund të shfaqet nga një program ose aplikacion. Output-i është i shfaqur në një font të veçantë, që ndihmon përdoruesit të kuptojnë se është rezultat i një komande të ekzekutuar.

### 9. **`<kbd>`**
**Përdorimi:** Përdoret për të shënuar hyrjen që bëhet nga përdoruesi me tastierë.

**Shembull:**
```html
<p>Për të kopjuar tekstin, përdorni <kbd>Ctrl</kbd> + <kbd>C</kbd>.</p>
```

**Shpjegim:** Ky tag përdoret për të treguar një komandë ose një veprim që duhet të bëjë përdoruesi me tastierën. Në shumicën e rasteve, ky tekst shfaqet me një font monospace dhe është i lidhur me përdorimin e tastierës.

## Tag-et e reja që trajtuam

| Tagu          |                                  Përshkrimi                                                        |                                            Shembull                                          |
|-------------- |----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| `<p>`      | Përdoret për të krijuar paragrafë të thjeshtë dhe të veçuar teksti.                                   | `<p>Kjo është një paragraf.</p>`                                                             |
| `<h1>`-`<h6>` | Përdoren për të shfaqur tituj të hierarkive të ndryshme.                                           | `<h1>Titulli Kryesor</h1>`                                                                   |
| `<hr>`     | Përdoret për të krijuar një vijë horizontale që ndan seksione të ndryshme të përmbajtjes.             | `<hr>`                                                                                       |
| `<hgroup>` | Përdoret për të grupuar një grup titujsh si një grup.                                                 | `<hgroup><h1>Titulli</h1><h2>Nën-titulli</h2></hgroup>`                                      |
| `<b>`      | Përdoret për të bërë tekstin të duket **bold**.                                                       | `<b>Tekst i trashë</b>`                                                                      |
| `<i>`      | Përdoret për të bërë tekstin të duket **italic**.                                                     | `<i>Tekst i pjerrët</i>`                                                                     |
| `<sup>`    | Përdoret për karaktere që duhet të shfaqen si **superscript**.                                        | `E=MC<sup>2</sup>`                                                                           |
| `<sub>`    | Përdoret për karaktere që duhet të shfaqen si **subscript**.                                          | `CO<sub>2</sub>`                                                                             |
| `<br>`     | Përdoret për të shtuar një ndarje rreshti brenda një paragrafi.                                       | `Rrëshira që bie nga hapësira e bën Tokën<br />më të rëndë me njëqind ton çdo ditë.`         |
| `<strong>` | Përdoret për të treguar se përmbajtja ka një rëndësi të madhe dhe zakonisht shfaqet në **bold**.      | `<strong>Kujdes:</strong> Ka xhepistë që veprojnë në këtë zonë.`                             |
| `<em>`     | Përdoret për të treguar një theks më të lehtë që ndryshon kuptimin e fjalisë dhe zakonisht shfaqet në **italic**. | `<em>mendoj</em>`                                                                |
| `<blockquote>` | Përdoret për citate të gjata.                                                                     | `<blockquote><p>Citat i gjatë.</p></blockquote>`                                             |
| `<q>`      | Përdoret për citate të shkurtra brenda një paragrafi.                                                 | `<q>Çdo moment është një shans për të ndryshuar gjithçka.</q>`                               |
| `<abbr>`   | Përdoret për të treguar versionin e plotë të një shkurtesë ose akronimi nëpërmjet atributit `title`.  | `<abbr title="Profesor">Prof</abbr>`                                                         |
| `<pre>`    | Përdoret për të shfaqur përmbajtjen saktësisht ashtu siç është shkruar, duke përfshirë të gjitha hapësirat dhe ndarjet e linjave. | `<pre>Tekst i paraformatuar<pre>`                                |
| `<cite>`   | Përdoret për të shënuar tituj të veprave si libra, artikuj, ose filma.                                | `<cite>Harry Potter and the Sorcerer's Stone</cite>`                                         |
| `<dfn>`    | Përdoret për të shënuar një term ose koncept që po përcaktohet për herë të parë në një tekst.         | `<dfn>robot</dfn>`                                                                           |
| `<ins>`    | Përdoret për të shënuar pjesë të shtuara në një dokument.                                             | `<ins>modelin e ri</ins>`                                                                    |
| `<del>`    | Përdoret për të shënuar pjesë të fshira nga një dokument.                                             | `<del>telefonin e vjetër</del>`                                                              |
| `<s>`      | Përdoret për të treguar një tekst që ka humbur kuptimin ose është tashmë i pavlefshëm.                | `<s>Ishte 1000$</s>`                                                                         |
| `<mark>`   | Përdoret për të theksuar një pjesë të tekstit që është e rëndësishme ose që është gjetur në një kërkim. | `<mark>SEO</mark>`                                                                         |
| `<code>`   | Përdoret për të shënuar pjesë të kodit të programimit.                                                | `<code>public void helloWorld()</code>`                                                      |
| `<var>`    | Përdoret për të shënuar një variabël që mund të përdoret në kontekstin e një kodi ose matematike.     | `<var>A = πr^2</var>`                                                                        |
| `<samp>`   | Përdoret për të shënuar një shembull të output-it të një programi ose një aplikacioni.                | `<samp>Hello, World!</samp>`                                                                 |
| `<kbd>`    | Përdoret për të shënuar hyrjen që bëhet nga përdoruesi me tastierë.                                   | `<kbd>Ctrl</kbd> + <kbd>C</kbd>`                                                             |


## Ushtrime Praktike

### Ushtrimi 1: Krijo një Paragraf dhe një Titull
Krijo një dokument HTML që përmban një titull të nivelit 1 dhe një paragraf që përshkruan një libër të preferuar.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ushtrimi 1</title>
</head>
<body>
  <h1>Titulli i Librit</h1>
  <p>Kjo është një përshkrim i shkurtër i librit tim të preferuar.</p>
</body>
</html>
```

### Ushtrimi 2: Përdorimi i Elementit `<strong>` dhe `<em>`
Krijo një paragraf që përmban një fjali ku disa fjalë janë të theksuara me `<strong>` dhe disa të tjera me `<em>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ushtrimi 2</title>
</head>
<body>
  <p>Kjo është një fjali me disa <strong>fjalë të rëndësishme</strong> dhe disa <em>fjalë të theksuara</em>.</p>
</body>
</html>
```

### Ushtrimi 3: Krijo një Citat të Gjatë
Përdor elementin `<blockquote>` për të krijuar një citat të gjatë nga një person i famshëm.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ushtrimi 3</title>
</head>
<body>
  <blockquote>
    <p>"Suksesi nuk është përfundimtar, dështimi nuk është fatal: guximi për të vazhduar është ajo që ka rëndësi." - Winston Churchill</p>
  </blockquote>
</body>
</html>
```

### Ushtrimi 4: Përdorimi i Elementit `<abbr>`
Krijo një paragraf që përmban një shkurtesë të shpjeguar me elementin `<abbr>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ushtrimi 4</title>
</head>
<body>
  <p><abbr title="HyperText Markup Language">HTML</abbr> është gjuha standarde për krijimin e faqeve web.</p>
</body>
</html>
```

### Ushtrimi 5: Krijo një Listë me Tituj dhe Paragrafe
Krijo një dokument HTML që përmban një titull të nivelit 2 dhe disa nën-tituj të nivelit 3, secili me një paragraf përkatës.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ushtrimi 5</title>
</head>
<body>
  <h2>Temat Kryesore</h2>
  <h3>Temë 1</h3>
  <p>Kjo është përshkrimi i temës së parë.</p>
  <h3>Temë 2</h3>
  <p>Kjo është përshkrimi i temës së dytë.</p>
  <h3>Temë 3</h3>
  <p>Kjo është përshkrimi i temës së tretë.</p>
</body>
</html>
```

### Ushtrimi 6: Përdorimi i Elementit `<pre>`
Krijo një dokument HTML që përmban një shembull të kodit të paraformatuar duke përdorur elementin `<pre>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ushtrimi 6</title>
</head>
<body>
  <pre>
function helloWorld() {
  console.log("Hello, World!");
}
  </pre>
</body>
</html>
```

### Ushtrimi 7: Përdorimi i Elementit `<mark>`
Krijo një paragraf që përmban një fjalë të theksuar me elementin `<mark>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ushtrimi 7</title>
</head>
<body>
  <p>Ky paragraf përmban një fjalë të <mark>theksuar</mark> për të treguar rëndësinë e saj.</p>
</body>
</html>
```

### Ushtrimi 8: Përdorimi i Elementit `<code>`
Krijo një paragraf që përmban një pjesë të kodit të programimit duke përdorur elementin `<code>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ushtrimi 8</title>
</head>
<body>
  <p>Për të krijuar një funksion në JavaScript, mund të përdorni këtë kod: <code>function myFunction() { return true; }</code>.</p>
</body>
</html>
```

### Ushtrimi 9: Përdorimi i Elementit `<sup>` dhe `<sub>`
Krijo një paragraf që përmban karaktere të shfaqura si **superscript** dhe **subscript**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ushtrimi 9</title>
</head>
<body>
  <p>Formula e famshme e Einstein-it është E=MC<sup>2</sup>.</p>
  <p>Formula kimike e ujit është H<sub>2</sub>O.</p>
</body>
</html>
```

### Ushtrimi 10: Përdorimi i Elementit `<kbd>`
Krijo një paragraf që përmban një komandë të tastierës duke përdorur elementin `<kbd>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ushtrimi 10</title>
</head>
<body>
  <p>Për të kopjuar tekstin, përdorni <kbd>Ctrl</kbd> + <kbd>C</kbd>.</p>
</body>
</html>
```