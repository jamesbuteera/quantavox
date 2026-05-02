export default function Home() {
  return (
    <main style={{background:'#0a0a0f',minHeight:'100vh',fontFamily:'system-ui,sans-serif'}}>
      
      {/* Navigation */}
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 32px',borderBottom:'0.5px solid rgba(255,255,255,0.08)'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <div style={{width:'28px',height:'28px',borderRadius:'6px',background:'linear-gradient(135deg,#7F77DD,#1D9E75)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px',color:'#fff',fontWeight:'600'}}>Q</div>
          <div>
            <div style={{fontSize:'14px',fontWeight:'500',color:'#fff',letterSpacing:'0.04em'}}>QUANTAVOX</div>
            <div style={{fontSize:'11px',color:'rgba(255,255,255,0.4)',letterSpacing:'0.06em'}}>VERAVOXA</div>
          </div>
        </div>
        <div style={{display:'flex',gap:'24px'}}>
         {[['Research','/research'],['Data','/data'],['Writing','/writing'],['About','/about']].map(([link,href]) => (
  <a key={link} href={href} style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',cursor:'pointer',textDecoration:'none'}}>{link}</a>
))}
        </div>
        <div style={{fontSize:'12px',color:'#7F77DD',border:'0.5px solid #534AB7',padding:'6px 14px',borderRadius:'6px',cursor:'pointer'}}>Connect</div>
      </nav>

      {/* Hero */}
      <section style={{padding:'64px 32px 52px'}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'rgba(127,119,221,0.12)',border:'0.5px solid rgba(127,119,221,0.3)',borderRadius:'20px',padding:'4px 12px',marginBottom:'24px'}}>
          <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#7F77DD'}}></div>
          <span style={{fontSize:'11px',color:'#AFA9EC',letterSpacing:'0.06em'}}>ECONOMICS · DATA · INNOVATION</span>
        </div>
        <h1 style={{fontSize:'42px',fontWeight:'500',lineHeight:'1.18',color:'#fff',maxWidth:'560px',marginBottom:'18px'}}>
          Where data becomes<br/><span style={{color:'#7F77DD'}}>a point of view.</span>
        </h1>
        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.5)',lineHeight:'1.7',maxWidth:'460px',marginBottom:'36px'}}>
          Applied economics research, quantitative analysis, and long-form writing on banking, patents, energy, and the institutions that shape our world. By James Buteera.
        </p>
        <div style={{display:'flex',gap:'12px'}}>
        <a href="/research" style={{background:'#534AB7',color:'#fff',border:'none',padding:'11px 22px',borderRadius:'8px',fontSize:'13px',fontWeight:'500',cursor:'pointer',textDecoration:'none'}}>Read the research</a>
<a href="https://www.youtube.com/@QuantavoxVeravoxa" target="_blank" style={{background:'transparent',color:'rgba(255,255,255,0.6)',border:'0.5px solid rgba(255,255,255,0.15)',padding:'11px 22px',borderRadius:'8px',fontSize:'13px',cursor:'pointer',textDecoration:'none'}}>Watch on YouTube</a>
        </div>
      </section>

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',borderTop:'0.5px solid rgba(255,255,255,0.06)',borderBottom:'0.5px solid rgba(255,255,255,0.06)'}}>
        {[['12+','Published analyses'],['3','Active research projects'],['MA \'27','Applied Economics, CUA']].map(([num,label]) => (
          <div key={label} style={{padding:'22px 32px',borderRight:'0.5px solid rgba(255,255,255,0.06)'}}>
            <div style={{fontSize:'22px',fontWeight:'500',color:'#fff',marginBottom:'4px'}}>{num}</div>
            <div style={{fontSize:'12px',color:'rgba(255,255,255,0.4)'}}>{label}</div>
          </div>
        ))}
      </div>

      {/* Research Cards */}
      <section style={{padding:'40px 32px'}}>
        <div style={{fontSize:'11px',color:'rgba(255,255,255,0.3)',letterSpacing:'0.1em',marginBottom:'20px'}}>LATEST RESEARCH</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px'}}>
          {[
            {tag:'BANKING · INNOVATION',color:'#7F77DD',bg:'rgba(127,119,221,0.1)',title:'Do bank failures suppress patent filings? A Python-based longitudinal study',meta:'In progress · 2025–2026'},
            {tag:'MACRO · POVERTY',color:'#1D9E75',bg:'rgba(29,158,117,0.1)',title:'Human capital, institutions, and poverty outcomes across 11 countries',meta:'Published · Dec 2025'},
            {tag:'ENERGY · POLICY',color:'#EF9F27',bg:'rgba(239,159,39,0.1)',title:'The economic fallout of the US-Israel-Iran conflict on oil markets',meta:'Published · Apr 2026'},
            {tag:'AI · MARKETS',color:'#7F77DD',bg:'rgba(127,119,221,0.1)',title:'Artificial intelligence and its measurable influence on the Dow Jones',meta:'Published · 2025'},
          ].map(({tag,color,bg,title,meta}) => (
            <div key={title} style={{background:'#111118',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'10px',padding:'20px',cursor:'pointer'}}>
              <div style={{display:'inline-block',fontSize:'10px',color,background:bg,borderRadius:'4px',padding:'3px 8px',marginBottom:'12px',letterSpacing:'0.05em'}}>{tag}</div>
              <div style={{fontSize:'14px',fontWeight:'500',color:'rgba(255,255,255,0.85)',lineHeight:'1.4',marginBottom:'8px'}}>{title}</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.3)'}}>{meta}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Strip */}
      <div style={{margin:'0 32px 32px',background:'rgba(127,119,221,0.06)',border:'0.5px solid rgba(127,119,221,0.2)',borderRadius:'10px',padding:'20px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:'14px'}}>
          <div style={{width:'36px',height:'36px',borderRadius:'8px',background:'rgba(127,119,221,0.15)',display:'flex',alignItems:'center',justifyContent:'center',color:'#AFA9EC',fontSize:'16px'}}>◈</div>
          <div>
            <div style={{fontSize:'13px',fontWeight:'500',color:'rgba(255,255,255,0.85)',marginBottom:'3px'}}>Ask the Quantavox AI</div>
            <div style={{fontSize:'12px',color:'rgba(255,255,255,0.35)'}}>Trained on James's research, articles, and datasets — ask it anything.</div>
          </div>
        </div>
        <div style={{fontSize:'12px',color:'#AFA9EC',border:'0.5px solid rgba(127,119,221,0.3)',padding:'7px 14px',borderRadius:'6px',cursor:'pointer',whiteSpace:'nowrap'}}>Try it →</div>
      </div>

      {/* Footer */}
      <footer style={{padding:'16px 32px',borderTop:'0.5px solid rgba(255,255,255,0.05)',display:'flex',justifyContent:'space-between'}}>
        <span style={{fontSize:'11px',color:'rgba(255,255,255,0.2)'}}>© 2026 Quantavox Veravoxa</span>
        <span style={{fontSize:'11px',color:'rgba(255,255,255,0.2)'}}>Washington, DC · Uganda · The world</span>
      </footer>

    </main>
  );
}