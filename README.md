# BOGOTA - Documentazione della Strategia di Layout

## Panoramica del Progetto

BOGOTA è una landing page React per un prodotto premium, che presenta una strategia di layout sofisticata che combina posizionamento assoluto, flexbox e CSS Grid per creare un'esperienza seamless mobile-first. Il progetto utilizza Tailwind CSS per lo styling e DaisyUI come libreria di componenti.

## Architettura del Layout

### Principi Fondamentali del Layout

1. **Approccio Mobile-First**: Tutti i componenti sono progettati per dispositivi mobili per primi, con breakpoint responsive per schermi più grandi
2. **Strategia di Posizionamento Assoluto**: Gli elementi critici utilizzano posizionamento assoluto per un controllo preciso su layering e posizionamento
3. **Flexbox per la Distribuzione dei Contenuti**: Flexbox è utilizzato per l'allineamento e lo spacing dei contenuti all'interno dei componenti
4. **Gestione Z-Index**: Un attento layering z-index assicura una gerarchia visiva corretta
5. **Controllo Overflow**: Uso strategico di `overflow-hidden` previene la rottura del layout

## Analisi del Layout dei Componenti

### 1. Componente PromoBanner

**Strategia di Layout**: Posizionamento fisso con overlay di sfondo gradiente

```css
.promobanner {
  position: relative;
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
```

**Caratteristiche Principali**:
- **Altezza Fissa**: 36px assicura un'altezza banner consistente
- **Distribuzione Flexbox**: `justify-content: space-between` distribuisce testo promo e timer
- **Overlay Gradiente**: `.rectangle` fornisce lo sfondo gradiente dorato
- **Layering Z-Index**: Gli elementi di testo (z-index: 2) appaiono sopra il gradiente (z-index: 1)

**Logica di Posizionamento**:
- Il banner occupa tutta la larghezza con 20px di padding orizzontale
- Il contenuto è centrato verticalmente usando `align-items: center`
- Timer e testo promo sono posizionati agli estremi opposti

### 2. Componente Hero

**Strategia di Layout**: Sfondo full-screen con contenuto posizionato assolutamente

```jsx
<div className="w-full h-screen relative pt-5 pb-0 mb-0">
  <img className="w-full h-full object-cover z-3" />
  <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 z-2" />
  <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 z-4" />
</div>
```

**Caratteristiche Principali**:
- **Container Full-Screen**: `h-screen` assicura copertura completa del viewport
- **Immagine di Sfondo**: Applicata tramite stili inline per caricamento dinamico
- **Posizionamento Assoluto**: Elementi di testo posizionati precisamente usando `top`, `left` e `transform`
- **Gerarchia Z-Index**: 
  - Immagine di sfondo: z-3
  - Titolo principale: z-2  
  - Descrizione e pulsante: z-4

**Logica di Posizionamento**:
- L'immagine hero copre l'intero container con `object-cover`
- Il titolo posizionato a top-6 con centratura orizzontale
- La descrizione posizionata a 3/4 dell'altezza con pulsante annidato all'interno
- Tutti gli elementi di testo usano `transform -translate-x-1/2` per centratura perfetta

### 3. Componente Trailer

**Strategia di Layout**: Layout a blocchi semplice con contenuto centrato

```jsx
<div className="w-full mt-0 bg-black">
  <h4 className="text-white text-lg font-bold text-center" />
  <img className="mt-3 object-contain" />
</div>
```

**Caratteristiche Principali**:
- **Layout a Blocchi**: Stacking verticale semplice
- **Contenuto Centrato**: Testo e immagine centrati orizzontalmente
- **Immagine Responsive**: `object-contain` mantiene le proporzioni

### 4. Componente Fidati (Sezione Recensioni)

**Strategia di Layout**: Layout stratificato complesso con carousel e immagine di sfondo

```jsx
<div className="flex flex-col min-h-min max-h-min">
  <section className="relative mb-0 bg-black overflow-hidden flex flex-col py-0">
    <img className="-translate-y-1/8 right-0 w-full h-full object-cover" />
    <div className="carousel carousel-center -translate-y-12/8 rounded-box max-w-md space-x-5 gap-10 p-5">
```

**Caratteristiche Principali**:
- **Immagine di Sfondo**: Sfondo full-size con translate negativo per posizionamento
- **Layout Carousel**: Carousel DaisyUI con spacing personalizzato
- **Card Recensioni**: Dimensioni fisse (80vw x 220px) con padding generoso
- **Posizionamento Complesso**: Multiple transform translate per posizionamento preciso

**Struttura Card Recensione**:
```jsx
<div className="carousel-item bg-gradient-to-r from-[#169A54] to-[#169A54] opacity-90 
               rounded-4xl w-[80vw] h-[220px] p-8 flex flex-col shadow-lg">
  <div className="flex top-10 mx-auto relative gap-3 px-5 flex-col">
    <div className="flex text-white mx-auto items-center gap-3 relative text-3xl mb-1">
      {/* Stelle e Immagine Profilo */}
    </div>
    <div className="flex flex-col left-3 relative">
      {/* Titolo e Testo Recensione */}
    </div>
  </div>
</div>
```

**Logica di Posizionamento**:
- Le card usano `w-[80vw]` per larghezza responsive
- Il contenuto interno usa posizionamento `relative` con `top-10` e `left-3`
- Stelle e immagine profilo sono centrate orizzontalmente con `mx-auto`
- Il contenuto testuale è allineato a sinistra con spacing personalizzato

### 5. Componente Convinto (Galleria Look)

**Strategia di Layout**: Carousel di scroll orizzontale con effetti di sfondo personalizzati

```jsx
<div className="relative w-full py-6">
  <div className="absolute inset-0 bg-black">
    {/* Effetti di Sfondo */}
  </div>
  <div className="relative z-10 flex overflow-x-auto carosello-tipo gap-5 px-5 no-scrollbar">
```

**Caratteristiche Principali**:
- **Sfondo Stratificato**: Multiple elementi posizionati assolutamente creano profondità
- **Scroll Orizzontale**: `overflow-x-auto` abilita scroll fluido
- **Sfondo Personalizzato**: Classe CSS `carosello-tipo` applica immagine di sfondo
- **Effetto Linea Dorata**: Linea gradiente posizionata a `top-1/3`

**Struttura Container Immagine**:
```jsx
<div className="flex-shrink-0 justify-center items-center flex w-[100vw] p-5">
  <img className="h-[380px] object-cover rounded-xl shadow-lg" />
</div>
```

**Logica di Posizionamento**:
- Ogni container immagine occupa tutta la larghezza viewport (`w-[100vw]`)
- Le immagini hanno altezza fissa (380px) con `object-cover`
- `flex-shrink-0` previene la compressione delle immagini
- `p-5` fornisce padding consistente intorno alle immagini

## Classi CSS Personalizzate

### Effetti di Sfondo
```css
.carosello-tipo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/immagini/sfondocarosello.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

### Styling Pulsanti
```css
.btn-gold {
  background: linear-gradient(105.36deg, #5D3E06 6.09%, #EEB655 40.73%, #FFD387 60.52%, #A87F37 76.6%, #5D3E06 116.19%);
  box-shadow: 0px 0px 11.1845px #FCAD55, 0px 0px 6.39113px #FCAD55, 0px 0px 3.72816px #FCAD55, 0px 0px 1.86408px #FCAD55, 0px 0px 0.532594px #FCAD55, 0px 0px 0.266297px #FCAD55;
  border-radius: 29px;
  padding: 8px 15px;
}
```

## Strategia di Design Responsive

### Approccio Mobile-First
- Tutti i componenti progettati per viewport mobile per primi
- Classe `solo-mobile` nasconde elementi su schermi > 450px
- Unità viewport (`vw`, `vh`) usate per dimensionamento responsive
- Spacing e sizing touch-friendly

### Strategia Breakpoint
```css
@media screen and (min-width: 450px) {
  .solo-mobile {
    display: none;
  }
}
```

## Ottimizzazioni Performance

1. **Ottimizzazione Immagini**: `object-cover` e `object-contain` per display ottimale delle immagini
2. **Proprietà CSS Personalizzate**: Uso efficiente delle utility Tailwind
3. **Lazy Loading**: Immagini di sfondo caricate via CSS per performance migliore
4. **Scroll Fluido**: `scroll-behavior: smooth` per UX migliorata

## Considerazioni Accessibilità

1. **HTML Semantico**: Gerarchia heading appropriata e alt text
2. **Navigazione Tastiera**: Stati focus e interazioni keyboard-friendly
3. **Contrasto Colori**: Testo ad alto contrasto su sfondi scuri
4. **Supporto Screen Reader**: Alt text descrittivo e ARIA labels

## Stack Tecnologico

- **React 18**: Architettura basata su componenti
- **Tailwind CSS**: Styling utility-first
- **DaisyUI**: Libreria componenti per carousel e elementi UI
- **Vite**: Build tool veloce e development server
- **CSS Personalizzato**: Styling specializzato per layout complessi

## Linee Guida di Sviluppo

1. **Struttura Componenti**: Ogni componente dovrebbe essere self-contained con interfaccia props chiara
2. **Approccio Styling**: Preferire utility Tailwind, usare CSS personalizzato solo per effetti complessi
3. **Posizionamento**: Usare posizionamento assoluto con parsimonia, preferire flexbox per distribuzione contenuti
4. **Design Responsive**: Testare sempre su dispositivi mobili per primi
5. **Performance**: Ottimizzare immagini e minimizzare dimensione bundle CSS

Questa strategia di layout assicura un'esperienza utente coesa, performante e accessibile su tutti i dispositivi mantenendo l'estetica premium del brand BOGOTA.
