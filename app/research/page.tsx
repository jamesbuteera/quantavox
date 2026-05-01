export default function Research() {
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
          <span style={{fontSize:'11px',color:'#AFA9EC',letterSpacing:'0.06em'}}>RESEARCH & PROJECTS</span>
        </div>

        <h1 style={{fontSize:'38px',fontWeight:'500',lineHeight:'1.18',color:'#fff',marginBottom:'12px'}}>
          The work behind<br/><span style={{color:'#7F77DD'}}>the numbers.</span>
        </h1>
        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.4)',lineHeight:'1.7',marginBottom:'48px',maxWidth:'500px'}}>
          Empirical research at the intersection of banking, innovation, energy, and institutional economics.
        </p>

        {[
          {
            status:'IN PROGRESS',
            statusColor:'#EF9F27',
            statusBg:'rgba(239,159,39,0.1)',
            tag:'BANKING · INNOVATION',
            title:'Do bank failures suppress patent filings?',
            description:'Building a Python-based longitudinal dataset to study correlations between bank failures and future patent filings across local, small, and large-scale banks. Uses Andrew Metrick\'s analysis of SVB as a modern case study.',
            tools:'Python · Big Data · FDIC datasets · USPTO patent data',
            year:'2025–2026',
          },
          {
            status:'PUBLISHED',
            statusColor:'#1D9E75',
            statusBg:'rgba(29,158,117,0.1)',
            tag:'MACRO · POVERTY',
            title:'Human capital, institutions, and poverty outcomes',
            description:'Panel regression study analyzing how education, health, and institutional quality influence poverty outcomes across 11 countries from 2000–2018. Built using World Bank data with fixed effects and robustness checks.',
            tools:'Stata · R · World Bank panel data · Fixed effects models',
            year:'Dec 2025',
            link:'https://medium.com/@butera1983/what-human-capital-really-changes-and-what-it-doesnt-852879f733ec',
          },
          {
            status:'PUBLISHED',
            statusColor:'#1D9E75',
            statusBg:'rgba(29,158,117,0.1)',
            tag:'ENERGY · POLICY',
            title:'The economic fallout of the US-Israel-Iran conflict on oil markets',
            description:'Collaborative analysis of how Operation Epic Fury and the 15-point plan impacted global oil prices and Middle East economic tensions. Co-authored with Duke Ochichi.',
            tools:'Trading Economics · IEA data · Oxford Economics',
            year:'Apr 2026',
            link:'https://lnkd.in/eQJM93qa',
          },
          {
            status:'PUBLISHED',
            statusColor:'#1D9E75',
            statusBg:'rgba(29,158,117,0.1)',
            tag:'BANKING · INNOVATION',
            title:'A correlation between bank failures and patents',
            description:'Preliminary analysis exploring the relationship between banking system health and patent activity. Uses SVB collapse as a modern case study for how financial distress affects corporate innovation.',
            tools:'R · SPSS · Federal Reserve data',
            year:'Feb 2026',
            link:'https://medium.com/@butera1983',
          },
          {
            status:'PUBLISHED',
            statusColor:'#1D9E75',
            statusBg:'rgba(29,158,117,0.1)',
            tag:'AGRICULTURE · INFRASTRUCTURE',
            title:'How crumbling infrastructure affects American farmers',
            description:'Analysis using National Bridge Inventory federal dataset to quantify the economic impact of infrastructure quality on agricultural supply chains and farmer productivity.',
            tools:'Python · National Bridge Inventory (1.4GB federal dataset) · Stata',
            year:'2026',
            link:'https://medium.com/@butera1983',
          },
        ].map(({status,statusColor,statusBg,tag,title,description,tools,year,link}) => (
          <div key={title} style={{background:'#111118',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'28px',marginBottom:'16px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'16px'}}>
              <div style={{fontSize:'10px',color:statusColor,background:statusBg,borderRadius:'4px',padding:'3px 8px',letterSpacing:'0.05em'}}>{status}</div>
              <div style={{fontSize:'10px',color:'#7F77DD',background:'rgba(127,119,221,0.1)',borderRadius:'4px',padding:'3px 8px',letterSpacing:'0.05em'}}>{tag}</div>
              <div style={{marginLeft:'auto',fontSize:'12px',color:'rgba(255,255,255,0.25)'}}>{year}</div>
            </div>
            <h3 style={{fontSize:'17px',fontWeight:'500',color:'rgba(255,255,255,0.9)',marginBottom:'10px',lineHeight:'1.4'}}>{title}</h3>
            <p style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',lineHeight:'1.7',marginBottom:'14px'}}>{description}</p>
            <div style={{fontSize:'12px',color:'rgba(255,255,255,0.25)',marginBottom: link ? '16px' : '0'}}>Tools: {tools}</div>
            {link && (
              <a href={link} target="_blank" style={{fontSize:'12px',color:'#7F77DD',textDecoration:'none'}}>Read the paper →</a>
            )}
          </div>
        ))}
      </section>

    </main>
  );
}