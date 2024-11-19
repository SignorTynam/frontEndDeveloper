# Leksioni 4: Imazhet dhe Tabelat në HTML

## Imazhet në HTML

Para se të kalojmë te elementi `<img>`, është e rëndësishme të kuptoni se nuk mund të përdorni çdo imazh në një faqe interneti; imazhi duhet të jetë në një nga formatet e mbështetura nga web-i.  

### Formate të mbështetura  

- **Imazhe raster (bitmapped)**: Këto janë imazhe të përbëra nga pikselë (shihni shembullin në Figurën 1). Për t’i përdorur këto në një faqe interneti, ato duhet të ruhen në formate si:  
  - PNG  
  - JPEG  
  - GIF  
  - WebP  
  - JPEG-XR  
  Formate si WebP dhe JPEG-XR janë më të reja dhe më të optimizuara, duke fituar popullaritet gradualisht.  

- **Imazhe vektoriale**: Për ikona dhe ilustrime, përdoret formati **SVG**. SVG është shumë i fuqishëm dhe kemi një kapitull të dedikuar, por në këtë kapitull do të shohim si t’i shtojmë ato në dokumentet HTML.

![Figura 1](images/1.png)

*Figura 1 - Imazhet Bitmap vs Imazhet Vektoriale*

### Konvertimi i Formateve të tjera  

Nëse keni një imazh burimor në një format tjetër (p.sh., TIFF, BMP, ose EPS), duhet ta konvertoni atë në një format të mbështetur nga web-i. Në rastet kur formati origjinal duhet ruajtur, mund ta ofroni imazhin si një skedar të jashtëm përmes një lidhjeje, si në shembullin:  

```html
<a href="architecture.eps">Shkarkoni vizatimin</a>
```  

### Emërtimi dhe Konfigurimi i Serverit  

- Sigurohuni që skedarët e imazheve të kenë prapashtesa të duhura, si:  
  - `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`.  
- Serverët zakonisht janë të konfiguruar për formatet PNG, JPEG, dhe GIF, por për SVG ose formate të reja mund të kërkohet një konfigurim shtesë.

### Zgjedhja e Imazheve për Faqen Tuaj  

- **Përdorni imazhe cilësore**: Imazhet e mira mund ta bëjnë një faqe të duket më profesionale dhe tërheqëse.  
- **Bleni fotografi stoku**: Shmangni shkeljen e të drejtave të autorit duke përdorur imazhe nga burime të besueshme, si:  
  - [www.istockphoto.com](http://www.istockphoto.com)  
  - [www.gettyimages.com](http://www.gettyimages.com)  
  - [www.fotolia.com](http://www.fotolia.com)  
  - [www.unsplash.com](http://www.unsplash.com)

### Organizimi i Imazheve në Faqe  

- **Ruani imazhet në një dosje të dedikuar**: Kjo e bën menaxhimin e skedarëve më të lehtë ndërsa faqja juaj rritet. P.sh., mund të përdorni strukturën:  

  ```plaintext
  /images  
      /interface  
      /products  
      /news  
  ```  

Në platformat CMS, ka vegla që e bëjnë menaxhimin e imazheve më të lehtë dhe organizojnë skedarët automatikisht.  

### Elementi `<img>` në HTML  

Tani që dimë bazat, mund të kalojmë te elementi `<img>` dhe atributet e tij kryesore, të cilat do t’i eksplorojmë më thellë në këtë kapitull. Praktikisht, elementi `<img>` i thotë browser-it: *“Vendos një imazh këtu.”* Ky element është përdorur për të shtuar grafikë në faqe dhe mund të vendoset direkt në rrjedhën e tekstit.  

**Shembull:** Shiko skedarin [`imazhet.html`](code/imazhet.html)

```html
<p>Këtë verë, provoni të bëni pica <img src="pizza.png" alt=""> në zgarën tuaj.</p>
```

Kur browser-i has elementin `<img>`, ai dërgon një kërkesë në server për të marrë skedarin e imazhit dhe e shfaq atë në faqe. Në rrjete të shpejta, ky proces ndodh pothuajse menjëherë. Në rrjete të ngadalta, si ato mobile ose dial-up, ngarkimi i imazheve mund të zgjasë më shumë.  

### **Atributet e Duhura të `<img>`**  

1. **`src`**: Tregon vendndodhjen e imazhit (URL-në).  
2. **`alt`**: Jep tekst alternativ që shfaqet nëse imazhi nuk ngarkohet.  

#### **Shembull:**

```html
<img src="icon.gif" alt="Një ikonë e thjeshtë">
```

### **Karakteristikat e Elementit `<img>`**  

- **Element bosh**: Nuk ka përmbajtje brenda tij, vetëm atribute.  
- **Element inline**: Qëndron në të njëjtën linjë me tekstin, duke ndjekur rrjedhën e tij. Në dritare më të ngushta, rreshtat me imazhe përshtaten automatikisht me gjerësinë e re.  
- **Element i zëvendësuar**: Gjatë shfaqjes, zëvendësohet nga skedari i jashtëm (imazhi).  
- **Përdorimi i CSS**: Mund të ndryshoni shfaqjen e imazheve, t’i lundroni në të djathtë ose të majtë, të shtoni kufij, ose të rregulloni hapësirën rreth tyre.  

### **Vendndodhja e Imazhit me `src`**  

- Nëse imazhi është në të njëjtën dosje me dokumentin HTML:  

  ```html
  <img src="icon.gif" alt="Ikona">
  ```

- Nëse është në një nën-dosje:  

  ```html
  <img src="/images/arrow.gif" alt="Shigjeta">
  ```

- Nëse imazhi është nga një faqe tjetër (jo e rekomanduar):  

  ```html
  <img src="http://www.example.com/images/smile.gif" alt="Buzëqeshje">
  ```  

#### **Kujdes**  

- Sigurohuni që imazhet që përdorni të jenë pronë juaja, të keni leje për përdorim, ose të jenë në domenin publik.  
- **Mos përdorni hotlinking** (lidhjen direkte me një imazh nga një server tjetër) përveç rasteve kur keni leje eksplicite.  

### **Përdorimi i Cache për Shpejtësi**  

Kur një browser shkarkon një imazh, ai e ruan atë përkohësisht në disk (cache). Kjo shpejton shfaqjen e faqes herën tjetër dhe redukton trafikun në server.

- Përdorni të njëjtin URL për imazhet e përsëritura në një faqe për të përfituar nga cache.  

**Shembull:**

```html
<img src="logo.png" alt="Logoja e faqes">
<p><img src="logo.png" alt="Logo e njëjtë në një vend tjetër"></p>
```

Imazhi shkarkohet vetëm një herë dhe përdoret nga cache për thirrjet e tjera.

### **Teksti Alternativ me `alt`**  

Atributi `alt` në elementin `<img>` ofron një përshkrim tekstual të imazhit për përdoruesit që nuk mund ta shohin atë. Kjo përfshin përdoruesit e lexuesve të ekranit, motorët e kërkimit dhe ata që kanë çaktivizuar imazhet në browser-at e tyre.  

**Shembull:**

```html
<p>Nëse je <img src="happy.gif" alt="i lumtur"> dhe e di këtë, duartrokit!</p>
```

**Kur është i domosdoshëm atributi `alt`?**  

1. **Përmbajtje informuese:** Nëse imazhi jep informacion të vlefshëm, teksti alternativ duhet të përshkruajë funksionin ose përmbajtjen e tij.  

   ```html
   <a href="aplikim.pdf">Aplikim për shkollë të mesme</a> 
   <img src="images/pdflogo.png" alt="Skedar PDF">
   ```

2. **Funksioni si link:** Kur një imazh përdoret si lidhje, `alt` përshkruan destinacionin e linkut.  

   ```html
   <a href="http://learningwebdesign.com">
       <img src="/images/LWD_cover.png" alt="Faqja e Learning Web Design">
   </a>
   ```

3. **Dekorativ:** Nëse imazhi është thjesht dekorativ dhe nuk shton informacion të rëndësishëm, vlera e `alt` mund të lihet bosh.  

   ```html
   <img src="/images/dekor.png" alt="">
   ```

### **Këshilla për Përdorimin e `alt`**  

- **Evito përshkrime si “imazh i” ose “grafik i.”** Është e qartë që bëhet fjalë për një imazh.  
- **Përmbajtje specifike:** Nëse është e rëndësishme, përfshini llojin e imazhit, p.sh., “fotografi,” “diagram,” “vizatim.”  
- **Mos përdorni `alt` për të rishkruar informacionin që është tashmë i qartë në tekst.**  

### **Vendosja e Përmasave me `width` dhe `height`**  

Atributet `width` dhe `height` përcaktojnë gjerësinë dhe lartësinë e imazhit në pikselë.  

- Këto ndihmojnë browser-in të rezervojë hapësirën për imazhin gjatë ngarkimit të faqes, duke e bërë shfaqjen më të shpejtë.  

**Shembull:**

```html
<img src="logo.png" alt="Logo e faqes" width="150" height="50">
```

#### **Kujdes me përmasat**  

- Sigurohuni që përmasat e specifikuara përputhen me përmasat reale të imazhit.  
- Përndryshe, imazhi do të shtrihet ose tkurret dhe mund të duket i shtrembëruar ose i turbullt.

Në zhvillimin modern të web-it:  

- **Mos përdorni `width` dhe `height` për të ndryshuar përmasat.** Përdorni CSS ose një program për redaktimin e imazheve.  
- **Për imazhe responsive:** Përdorni teknika si `max-width` në CSS për të përshtatur madhësinë e imazhit sipas pajisjes.

Këto praktika ndihmojnë në ruajtjen e cilësisë së imazheve dhe përmirësojnë performancën e faqes.

## Rreshtimi i Imazheve në HTML

### Rreshtimi Horizontal (Kodi i Vjetër)

**Atributi `align`** më parë përdorej për të përcaktuar si do të rrjedhë teksti përreth një imazhi. Ky atribut është hequr në HTML5 dhe tani është e rekomanduar përdorimi i **CSS** për të rreshtuar imazhet. Megjithatë, është e dobishme të kuptoni se si përdorej në kodin më të vjetër pasi mund ta hasni ende në faqet ekzistuese ose në mjetet e redaktimit vizual.  

**Vlerat për rreshtimin horizontal:**

- **`left`**: Imazhi vendoset në të majtë dhe teksti rrjedh në anën e djathtë.  
- **`right`**: Imazhi vendoset në të djathtë dhe teksti rrjedh në anën e majtë.  

**Shembull:** Shiko skedarin [`align.html`](code/align.html)

```html
<p> <img src="images/bird.gif" alt="Bird" width="100" height="100" align="left" />
  Ka rreth 10,000 specie të shpendëve që jetojnë në ekosisteme të ndryshme, nga Arktiku deri në Antarktik. Shumë prej tyre kryejnë migrime të gjata vjetore, ndërsa të tjera bëjnë udhëtime më të shkurtra.</p>

<hr />

<p><img src="images/bird.gif" alt="Bird" width="100" height="100" align="right" />
  Ka rreth 10,000 specie të shpendëve që jetojnë në ekosisteme të ndryshme, nga Arktiku deri në Antarktik. Shumë prej tyre kryejnë migrime të gjata vjetore, ndërsa të tjera bëjnë udhëtime më të shkurtra.</p>
```

Këto rezultate duken më të rregullta krahasuar me vendosjen e një rreshti teksti ngjitur imazhit. Megjithatë, për një distancë më të mirë mes tekstit dhe imazhit, duhet të përdorni **CSS** me vetitë `margin` dhe `padding`.

#### Rreshtimi Vertikal (Kodi i Vjetër)

Atributi `align` gjithashtu përdorej për të rreshtuar një imazh vertikalisht krahas tekstit përreth. Edhe ky atribut është hequr në HTML5, dhe tani përdoret CSS për këtë qëllim.  

**Vlerat për rreshtimin vertikal:**

- **`top`**: Rreshti i parë i tekstit përafrohet me majën e imazhit.  
- **`middle`**: Rreshti i parë përafrohet me qendrën vertikale të imazhit.  
- **`bottom`**: Rreshti i parë përafrohet me fundin e imazhit.

**Shembull:**

```html
<p><img src="images/bird.gif" alt="Bird" width="100" height="100" align="top" />
  Ka rreth 10,000 specie të shpendëve që jetojnë në ekosisteme të ndryshme.</p>

<hr />

<p><img src="images/bird.gif" alt="Bird" width="100" height="100" align="middle" />
  Ka rreth 10,000 specie të shpendëve që jetojnë në ekosisteme të ndryshme.</p>

<hr />

<p><img src="images/bird.gif" alt="Bird" width="100" height="100" align="bottom" />
  Ka rreth 10,000 specie të shpendëve që jetojnë në ekosisteme të ndryshme.</p>
```

Për një qasje më moderne dhe fleksibël, rekomandohet përdorimi i CSS (vetitë si `vertical-align` dhe `float`).

## Çfarë duhet të dini më shumë?

### Rregulla për Përdorimin e Imazheve në Uebfaqe

1. **Ruani imazhet në formatin e duhur**  
   - JPEG, GIF, ose PNG janë formatet më të zakonshme.  
   - Formati i gabuar mund të ndikojë negativisht në cilësi dhe shpejtësi të ngarkimit.

2. **Ruani imazhet në madhësinë e duhur**  
   - Madhësia e imazhit duhet të përputhet me përmasat ku do të shfaqet.  

3. **Ruani imazhet me rezolucion të përshtatshëm**  
   - Rezolucioni për imazhet në ueb duhet të jetë 72 ppi për të shmangur skedarë të mëdhenj që ngarkohen ngadalë.

### Punimi me Imazhe Transparente

- **GIF Transparente**: Përshtatet për pjesë të drejta dhe plotësisht transparente.  
- **PNG Transparente**: Mbështet skaje diagonale, rrethoresh, dhe transparencë gjysmë të tejdukshme.  

### Punimi me **Animacione GIF**

**Animacionet GIF** përdorin një sekuencë kornizash për të krijuar animacione të thjeshta.  
Ato janë të dobishme për ilustrime të thjeshta, por jo ideale për fotografi për shkak të kufizimeve në ngjyrë dhe cilësi.

#### Si funksionojnë

1. Një **animacion GIF** përbëhet nga disa korniza që shfaqen njëra pas tjetrës.  
   - Shembull: Një pikë portokalli që rrotullohet rreth një rrethi.  
2. Çdo kornizë shton madhësinë e skedarit, duke ndikuar në kohën e shkarkimit të figurës.  
3. Mjetet si Adobe Photoshop ose faqe të tjera online mund të ndihmojnë për krijimin e tyre.

**Shembull përdorimi:**

- Përdorimi i animacioneve GIF duhet të jetë i matur për të shmangur efektin "amatore" që vjen nga përdorimi i tepruar.

![Figura 2](images/2.png)

*Figura 2 - Imazhet GIF*

### **Rezolucioni i Imazheve**

Rezolucioni i imazheve për uebfaqe zakonisht duhet të jetë **72 ppi (pixels per inch)**.  

- Kjo është rezolucioni maksimal që ekranet kompjuterike shfaqin për imazhet në ueb.  
- **Rezolucion më i lartë = Skedar më i madh** (ngarkim më i ngadalshëm i faqes).  

#### Dallimet mes rezolucioneve

- **300 dpi (dots per inch)**: Imazhe me cilësi të lartë për printime.  
- **72 ppi**: Rezolucion i optimizuar për ekranet digjitale.  

**Shembull krahasimi madhësish:**

- JPEG me **300 dpi**: 1.5 MB.  
- JPEG me **72 ppi**: 368 KB.  

Pra, për përdorim në ueb, gjithmonë duhet të ulni rezolucionin për të përmirësuar performancën e faqes suaj.

### **Imazhet Vektoriale**

**Imazhet vektoriale** krijohen nga pikë dhe linja mbi një rrjet.  

- **Avantazhi kryesor:** Mund të rrisni madhësinë e tyre pa humbur cilësinë.  
- Përdorime tipike: Logo, ilustrime, dhe diagrame.

#### Si përdoren në ueb

1. **Bitmap i eksportuar:** Deri vonë, imazhet vektoriale eksportoheshin si JPEG ose PNG për përdorim në ueb.  
2. **Formati SVG:** Formati i ri **Scalable Vector Graphics** lejon shfaqjen e vektorit direkt në uebfaqe.  
   - Mbështetja për SVG po rritet, por disa browser të vjetër ende kanë kufizime.

### **Cropping e Imazheve**

**Crop** është procesi i prerjes së një imazhi për t'i dhënë përmasat e duhura.  

- Kur e kryeni këtë proces, kini kujdes që të mos humbisni detaje të rëndësishme.

#### Shembuj të dobishëm

- **Portret:** Ilustrimi i një gjirafe është i përshtatshëm në pozicion portret. Nëse krojhet në një formë peizazhi, humbasim kokën ose këmbët e saj.  
- **Peizazh:** Ilustrimi i një elefanti përshtatet më mirë në pozicion peizazhi. Nëse krojhet në formë portreti, humbasim bishtin ose trungun.

![Figura 3](images/3.png)

*Figura 3 - Cropping*

**Këshillë:** Përdorni softuer të dedikuar për krojtje që ju lejon të ruani raportin origjinal të imazhit.

### Formate dhe Transparenca

#### GIF Transparente

- Përdoret kur pjesët transparente janë të drejta dhe 100% transparente.

#### PNG Transparente

- Mbështet skaje diagonale, rrethoresh, dhe transparencë gjysmë të tejdukshme.  
- Ka mbështetje më të mirë për efekte si hijet.  

## Imazhe Responsive në HTML

### Çfarë janë imazhet responsive?

Imazhet responsive janë mënyra për të ofruar variante të ndryshme të një imazhi për pajisje me madhësi dhe rezolucione të ndryshme ekrani. Browser-i zgjedh automatikisht versionin më të përshtatshëm të imazhit, bazuar në kushtet e shikimit si madhësia e ekranit, rezolucioni, shpejtësia e rrjetit dhe preferencat e përdoruesit.

Për shembull, një ekran me rezolucion të lartë (si një iPhone Retina) ka nevojë për një imazh më të detajuar se një ekran standard. Pa imazhe responsive, do të duhej të ngarkonit një imazh të madh për të gjithë, gjë që mund të ngadalësojë faqen dhe të rrisë kostot e të dhënave për përdoruesit në pajisje më të vogla.

Për të krijuar imazhe responsive përdorim atributet `srcset` dhe `sizes` në elementin `img`, ose elementin `picture`. Këto veçori janë pjesë e specifikimeve të **HTML5.1** dhe janë mbështetur nga shumica e browser-ave modernë.

![Figura 4](images/4.png)

*Figura 4*

#### Përdorimi i atributit `srcset`

Atributi `srcset` lejon të përcaktoni një listë burimesh të ndryshme imazhesh që browser-i mund të zgjedhë. Sintaksa është:

```html
<img src="imazh-standardi.jpg" 
     alt="Përshkrimi i imazhit" 
     srcset="imazh-200px.jpg 1x, imazh-400px.jpg 2x, imazh-600px.jpg 3x">
```

Në këtë shembull:

- `1x` përdoret për pajisje standarde.
- `2x` dhe `3x` janë për pajisje me rezolucione më të larta.

Browser-i zgjedh automatikisht versionin e duhur bazuar në rezolucionin e ekranit.

**Shiko skedarin [`responsive.html`](code/responsive.html)**

##### Përdorimi i `srcset` dhe `sizes` për gjerësi të ndryshueshme

Kur imazhi ndryshon madhësinë në varësi të gjerësisë së dritares (viewport-it), përdorim atributin `sizes` për të treguar se sa hapësirë do të zërë imazhi në faqe. Ja një shembull:

```html
<img src="imazh-standardi.jpg" 
     alt="Shportë me luleshtrydhe" 
     srcset="luleshtrydhe-480.jpg 480w, luleshtrydhe-960.jpg 960w, luleshtrydhe-1280.jpg 1280w" 
     sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw">
```

Shpjegim:

- `sizes` përcakton madhësinë relative të imazhit në faqe për gjerësi të ndryshme të viewport-it.
  - Në ekrane deri në **600px**, imazhi zë **100%** të gjerësisë së viewport-it.
  - Në ekrane deri në **1200px**, imazhi zë **50%**.
  - Për gjerësi më të mëdha, zë **33%**.

Browser-i përdor këto informacione për të zgjedhur versionin më të përshtatshëm nga lista në `srcset`.

#### Përdorimi i elementit `picture` për drejtim artistik

Kur përmbajtja e imazhit ndryshon bazuar në madhësinë e ekranit (p.sh., ndryshim në prerje ose orientim), përdorim elementin `picture`. Ja një shembull:

```html
<picture>
    <source media="(max-width: 600px)" srcset="imazh-portreti.jpg">
    <source media="(min-width: 601px)" srcset="imazh-landscape.jpg">
    <img src="imazh-standardi.jpg" alt="Përshkrimi i imazhit">
</picture>
```

Shpjegim:

- Përdorim elementin `source` për të përcaktuar burime të ndryshme të imazhit, bazuar në kushtet e ekranit.
- Elementi `img` shërben si opsion rezervë (fallback) për browser që nuk mbështesin `picture`.

## Imazhet SVG

### Çfarë është SVG?

- **SVG** (Scalable Vector Graphics) është një format imazhi vektorial që përdor forma, vija dhe tekste në vend të pikselëve. Imazhet përshkruhen duke përdorur gjuhën e shënimeve SVG, e cila lejon rritjen e cilësisë pa humbur detaje.
- Ndryshe nga imazhet raster (p.sh., JPG, PNG), imazhet SVG janë të pavarura nga rezolucioni dhe mund të zmadhohen pa humbur qartësinë, duke i bërë ato ideale për dizajne responsivë.

### Avantazhet e SVG

- **Performanca**: SVG-të zakonisht kanë një madhësi më të vogël të skedarëve krahasuar me imazhet raster, sepse ato ruajnë udhëzime dhe jo të dhëna pikseloze. Kjo çon në shkarkime më të shpejta.
- **Përshtatshmëria**: SVG-të mbajnë cilësi në çdo madhësi, gjë që është perfekte për layout-e responsivë.
- **Integrimi me tekstin**: SVG-të janë të bazuara në XML, prandaj mund të kompresohen, të stilizohen me CSS dhe të manipulohen me JavaScript.
- **Interaktiviteti**: JavaScript mund të përdoret për animimin ose ndërveprimin me elementët e SVG-së.

### Metodat për të përfshirë SVG-të

1. **Duke përdorur elementin `img`**:
   - **Markup**:  

     ```html
     <img src="images/circle.svg" alt="SVG Example">
     ```

   - **Avantazhet**: E thjeshtë për t'u përdorur dhe mbështetet nga të gjithë browser modernë.
   - **Kundërshtitë**: Ka mundësi të kufizuara për stilizim dhe ndërveprim. Nuk mund të aksesoni ose manipuloni elementët brenda SVG-së me JavaScript. Nuk mund të aplikoni CSS për elementët e brendshëm të SVG-së.
   - **Mbështetje në browser**: E mbështetur nga të gjithë browser-it modernë, por jo nga versionet e vjetra të Internet Explorer (8 dhe më të hershme) dhe disa browser të vjetër celularë.

2. **SVG Inline (brenda HTML-së)**:
   - **Markup**:  

     ```html
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
         <circle fill="#D4AB00" cx="36" cy="36" r="36"/>
         <!-- Elementë të tjerë SVG këtu -->
     </svg>
     ```

   - **Avantazhet**: Mundësia e përdorimit të të gjitha mundësive të SVG-së. Kur SVG-ja është brenda dokumentit HTML, të gjithë elementët janë pjesë e strukturës kryesore të DOM. Kjo do të thotë se mund të aksesoni dhe manipuloni objektet SVG me JavaScript, duke i bërë ato të reagojnë ndaj ndërveprimeve të përdoruesve. Gjithashtu, mund të stilizoni elementët brenda SVG-së me CSS.
   - **Kundërshtitë**: Kodi i imazheve SVG mund të bëhet i gjatë dhe i vështirë për t'u menaxhuar, duke çuar në dokumente HTML të fryra dhe të vështira për t'u lexuar. Ky opsion gjithashtu nuk mund të përdoret për imazhe të mëdha që përdoren në faqe të shumta, sepse ato nuk mund të ruhen veçmas nga dokumenti HTML.
   - **Mbështetje në browser**: E mbështetur nga browser modernë, me përjashtim të versioneve të vjetra të Internet Explorer (8 dhe më të hershme), Safari (5 dhe më të hershme), dhe browser mobilë Android dhe iOS të vjetër.

3. **Duke përdorur elementin `object`**:
   - **Markup**:

     ```html
     <object type="image/svg+xml" data="pizza.svg">
         <img src="pizza.png" alt="pizza">
     </object>
     ```

   - **Avantazhet**: SVG mund të ngarkohet si një skedar i veçantë dhe mund të përdoret për të aksesuar skedarë të jashtëm si CSS dhe JavaScript. Ky opsion gjithashtu ofron mundësinë për të përdorur përmbajtje rezervë në rast se SVG nuk mund të shfaqet.
   - **Kundërshtitë**: Nuk mund të përdorni CSS nga dokumenti i jashtëm për të stilizuar elementët brenda SVG-së. Ka mundësi për sjellje të çuditshme në disa browser, ndaj është e rëndësishme të testoni mirë.
   - **Mbështetje në browser**: Zakonisht mbështetet, por mund të ketë disa çështje me browser më të vjetër.

4. **SVG si Imazh Background në CSS**:
   - **Markup**:

     ```css
     header {
         background-image: url('images/decorative.svg');
     }
     ```

   - **Avantazhet**: Lehtë për t'u implementuar si një imazh dekorativ në sfond. SVG mund të rritet dhe të shkallëzohet me layout-in.
   - **Kundërshtitë**: E kufizuar për përdorim si sfond dhe nuk mund të manipulohen si SVG inline.

### Zgjidhje për browser-at më të vjetër

Nëse browser më të vjetër nuk mbështesin SVG-të, mund të përdorni teknika si elementi `<picture>` për të ofruar imazhe rezervë (p.sh., PNG):

```html
<picture>
  <source type="image/svg+xml" srcset="pizza.svg">
  <img srcset="pizza.png" alt="No SVG support">
</picture>
```

Kjo siguron që përdoruesit me browser që nuk mbështesin SVG-të do të shohin një imazh funksional.

### HTML5: `<figure>` dhe `<figcaption>`

Elementi `<figure>` përdoret për të grupuar një imazh (ose media të tjera) me përshkrimin e tij, që i lidh të dyja. Kjo ndihmon që përmbajtja të kuptohet më mirë nga motorët e kërkimit, lexuesit e ekranit dhe zhvilluesit, duke krijuar një lidhje të qartë midis imazhit dhe përshkrimit të tij.

#### Sintaksa

```html
<figure>
  <img src="images/otters.jpg" alt="Fotografi e dy uturakëve detarë që lundrojnë në ujë">
  <figcaption>Uturakët detarë mbajnë duar kur flenë për të mos u larguar nga njëri-tjetri.</figcaption>
</figure>
```

- Elementi `<figure>` grupon imazhin dhe përshkrimin e tij.
- Elementi `<img>` përdoret për të shfaqur imazhin.
- Elementi `<figcaption>` ofron përshkrimin (caption) për imazhin.

### Shpjegimi

- Elementi `<figure>` është i dobishëm kur dëshironi të gruponi një imazh dhe përshkrimin e tij së bashku, veçanërisht kur përshkrimi ofron kontekst për imazhin.
- Mund të keni më shumë se një imazh brenda elementit `<figure>`, përderisa të gjithë imazhet të kenë të njëjtin përshkrim.

### Shembuj

Ja se si mund ta përdorni elementin `<figure>` dhe `<figcaption>` në një kontekst më praktik:

```html
<figure>
  <img src="images/otters.jpg" alt="Fotografi e dy uturakëve detarë që lundrojnë në ujë">
  <figcaption>Uturakët detarë mbajnë duar kur flenë për të mos u larguar nga njëri-tjetri.</figcaption>
</figure>

<figure>
  <img src="images/sunset.jpg" alt="Fotografi e një perëndimi dielli mbi det">
  <figcaption>Një perëndim i bukur i kapur në bregun e detit.</figcaption>
</figure>
```

### Rezultati

- Kjo metodë bën të qartë që përshkrimi i shoqëron dhe e shpjegon imazhin, duke përmirësuar aksesueshmërinë dhe optimizimin për motorët e kërkimit (SEO).

### Kompatibiliteti me browser-at më të vjetër

- Browser më të vjetër që nuk kuptojnë elementet HTML5 si `<figure>` dhe `<figcaption>` do t'i injorojnë këto etiketë, por do të shfaqin ende përmbajtjen (si imazhin dhe përshkrimin).

### Përfitimet Kryesore

1. **HTML Semantik**: Përdorimi i etiketave `<figure>` dhe `<figcaption>` përmirëson strukturën e përmbajtjes, duke e bërë faqen më të lexueshme për njerëzit dhe makinat.
2. **Aksesueshmëria**: Elementi `<figcaption>` ndihmon përdoruesit që përdorin lexues ekrani të kuptojnë kontekstin e imazheve.
3. **SEO**: Motorët e kërkimit mund të lidhin më mirë përshkrimin me imazhin për një indeksim më të mirë të përmbajtjes.

Në përmbledhje, HTML5 ka prezantuar elementët `<figure>` dhe `<figcaption>` për të përmirësuar organizimin dhe aksesueshmërinë e imazheve dhe përshkrimeve të tyre, duke e bërë më të lehtë për zhvilluesit të strukturojnë përmbajtjen multimedia në një mënyrë logjike.
