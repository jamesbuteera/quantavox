export default function Writing() {
  return (
    <main style={{background:'#0a0a0f',minHeight:'100vh',fontFamily:'system-ui,sans-serif'}}>

      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 32px',borderBottom:'0.5px solid rgba(255,255,255,0.08)'}}>
        <a href="/" style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:'none'}}>
          <div style={{width:'28px',height:'28px',borderRadius:'6px',background:'linear-gradient(135deg,#7F77DD,#1D9E75)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px',color:'#fff',fontWeight:'600'}}>Q</div>
          <div>
            <div style={{fontSize:'14px',fontWeight:'500',color:'#fff',letterSpacing:'0.04em'}}>QUANTAVOX</div>
            <div style={{fontSize:'11px',color:'rgba(255,255,255,0.4)',letterSpacing:'0.06em'}}>VERAVOXA</div>
          </div>
        </a>
        <div style={{display:'flex',gap:'24px'}}>
          {[['Research','/research'],['Data','/data'],['Writing','/writing'],['About','/about']].map(([link,href]) => (
            <a key={link} href={href} style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',cursor:'pointer',textDecoration:'none'}}>{link}</a>
          ))}
        </div>
        <a href="mailto:jamesbuteera97@gmail.com" style={{fontSize:'12px',color:'#7F77DD',border:'0.5px solid #534AB7',padding:'6px 14px',borderRadius:'6px',cursor:'pointer',textDecoration:'none'}}>Connect</a>
      </nav>

      <section style={{padding:'64px 32px',maxWidth:'800px'}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'rgba(127,119,221,0.12)',border:'0.5px solid rgba(127,119,221,0.3)',borderRadius:'20px',padding:'4px 12px',marginBottom:'24px'}}>
          <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#7F77DD'}}></div>
          <span style={{fontSize:'11px',color:'#AFA9EC',letterSpacing:'0.06em'}}>WRITING & ANALYSIS</span>
        </div>

        <h1 style={{fontSize:'38px',fontWeight:'500',lineHeight:'1.18',color:'#fff',marginBottom:'12px'}}>
          Economics explained<br/><span style={{color:'#7F77DD'}}>for everyone.</span>
        </h1>
        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.4)',lineHeight:'1.7',marginBottom:'48px',maxWidth:'500px'}}>
          Long-form analysis on banking, AI, energy, trade, and the institutions that shape our world. Published on Medium and here.
        </p>

        {[
          {
            tag:'BANKING · INNOVATION',
            tagColor:'#7F77DD',
            tagBg:'rgba(127,119,221,0.1)',
            title:'A correlation between bank failures and patents',
            excerpt:'Banks serve a monumental purpose — when they fail, panic ensues. This piece explores whether bank failures suppress or accelerate patent activity across the economy.',
            date:'Feb 2026',
            link:'https://medium.com/@butera1983/a-correlation-between-bank-failures-and-patents',
          },
          {
            tag:'MACRO · POVERTY',
            tagColor:'#1D9E75',
            tagBg:'rgba(29,158,117,0.1)',
            title:'What human capital really changes — and what it doesn\'t',
            excerpt:'Growth alone is not enough. Investments in education, health, and institutions play a critical role in determining whether growth actually reduces poverty.',
            date:'Dec 2025',
            link:'https://medium.com/@butera1983/what-human-capital-really-changes-and-what-it-doesnt-852879f733ec',
          },
          {
            tag:'ENERGY · GEOPOLITICS',
            tagColor:'#EF9F27',
            tagBg:'rgba(239,159,39,0.1)',
            title:'The impact of the US-Israel-Iran war on the economy',
            excerpt:'How Operation Epic Fury and the 15-point plan contributed to easing tensions in the Middle East and alleviating pressure on the ongoing oil crisis.',
            date:'Apr 2026',
            link:'https://medium.com/@butera1983',
          },
          {
            tag:'AI · MARKETS',
            tagColor:'#7F77DD',
            tagBg:'rgba(127,119,221,0.1)',
            title:'Artificial intelligence and its influence on the Dow Jones',
            excerpt:'An empirical look at how AI announcements, deployments, and disruptions have measurably moved the Dow Jones Industrial Average over the past three years.',
            date:'2025',
            link:'https://medium.com/@butera1983',
          },
          {
            tag:'AGRICULTURE · INFRASTRUCTURE',
            tagColor:'#1D9E75',
            tagBg:'rgba(29,158,117,0.1)',
            title:'How crumbling infrastructure affects American farmers',
            excerpt:'Using the National Bridge Inventory dataset to quantify the hidden economic cost of deteriorating infrastructure on American agricultural supply chains.',
            date:'2026',
            link:'https://medium.com/@butera1983',
          },
        ].map(({tag,tagColor,tagBg,title,excerpt,date,link}) => (
          <a key={title} href={link} target="_blank" style={{display:'block',textDecoration:'none',background:'#111118',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'28px',marginBottom:'16px'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'12px'}}>
              <div style={{fontSize:'10px',color:tagColor,background:tagBg,borderRadius:'4px',padding:'3px 8px',letterSpacing:'0.05em'}}>{tag}</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.25)'}}>{date}</div>
            </div>
            <h3 style={{fontSize:'17px',fontWeight:'500',color:'rgba(255,255,255,0.9)',marginBottom:'10px',lineHeight:'1.4'}}>{title}</h3>
            <p style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',lineHeight:'1.7',marginBottom:'16px'}}>{excerpt}</p>
            <div style={{fontSize:'12px',color:'#7F77DD'}}>Read on Medium →</div>
          </a>
        ))}

        <div style={{marginTop:'40px',background:'rgba(127,119,221,0.06)',border:'0.5px solid rgba(127,119,221,0.2)',borderRadius:'12px',padding:'28px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div>
            <div style={{fontSize:'14px',fontWeight:'500',color:'rgba(255,255,255,0.85)',marginBottom:'4px'}}>Subscribe to the newsletter</div>
            <div style={{fontSize:'12px',color:'rgba(255,255,255,0.35)'}}>Monthly analysis on economics, data, and innovation.</div>
          </div>
          <a href="https://medium.com/@butera1983" target="_blank" style={{fontSize:'12px',color:'#AFA9EC',border:'0.5px solid rgba(127,119,221,0.3)',padding:'7px 14px',borderRadius:'6px',textDecoration:'none',whiteSpace:'nowrap'}}>Follow on Medium →</a>
        </div>
      </section>

    </main>
  );
}