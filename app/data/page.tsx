export default function Data() {
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
          <span style={{fontSize:'11px',color:'#AFA9EC',letterSpacing:'0.06em'}}>DATASETS & VISUALIZATIONS</span>
        </div>

        <h1 style={{fontSize:'38px',fontWeight:'500',lineHeight:'1.18',color:'#fff',marginBottom:'12px'}}>
          The data behind<br/><span style={{color:'#7F77DD'}}>the research.</span>
        </h1>
        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.4)',lineHeight:'1.7',marginBottom:'48px',maxWidth:'500px'}}>
          Real datasets, regression outputs, and visualizations from active and published research. Open for collaboration.
        </p>

        {[
          {
            title:'National Bridge Inventory — Agriculture & Infrastructure',
            description:'1.4GB federal dataset from the FHWA measuring bridge quality across the United States. Used to analyze the economic impact of infrastructure deterioration on agricultural supply chains.',
            source:'Federal Highway Administration (FHWA)',
            size:'1.4 GB',
            format:'TXT',
            status:'ACTIVE',
            statusColor:'#EF9F27',
            statusBg:'rgba(239,159,39,0.1)',
            tag:'INFRASTRUCTURE',
          },
          {
            title:'Uganda Energy Panel Dataset',
            description:'Custom-built panel dataset on energy access, consumption, and economic indicators across Uganda. Built to study the relationship between energy infrastructure and development outcomes.',
            source:'World Bank · Uganda Bureau of Statistics',
            size:'Small',
            format:'CSV',
            status:'ACTIVE',
            statusColor:'#EF9F27',
            statusBg:'rgba(239,159,39,0.1)',
            tag:'ENERGY · DEVELOPMENT',
          },
          {
            title:'Uganda Difference-in-Differences Dataset',
            description:'Panel dataset constructed for a difference-in-differences estimation strategy studying policy intervention effects on economic outcomes in Uganda.',
            source:'Custom built',
            size:'Small',
            format:'CSV',
            status:'ACTIVE',
            statusColor:'#EF9F27',
            statusBg:'rgba(239,159,39,0.1)',
            tag:'ECONOMETRICS',
          },
          {
            title:'World Bank Human Capital & Poverty Panel',
            description:'Unbalanced panel dataset covering 11 countries from 2000–2018. Variables include education, health, institutional quality, and poverty measures. Used for fixed-effects regression analysis.',
            source:'World Bank Open Data',
            size:'Medium',
            format:'CSV · Stata',
            status:'PUBLISHED',
            statusColor:'#1D9E75',
            statusBg:'rgba(29,158,117,0.1)',
            tag:'MACRO · POVERTY',
          },
          {
            title:'GDP Time Series & Life Expectancy Cross-Country Analysis',
            description:'Cross-country dataset linking GDP per capita time series with life expectancy data. Includes scatter plots and time series visualizations across OECD and developing economies.',
            source:'World Bank · OECD',
            size:'Small',
            format:'CSV · PNG',
            status:'PUBLISHED',
            statusColor:'#1D9E75',
            statusBg:'rgba(29,158,117,0.1)',
            tag:'DEVELOPMENT',
          },
          {
            title:'FDIC Bank Failures × USPTO Patents — Longitudinal Dataset',
            description:'Currently being built in Python. Links FDIC bank failure records with USPTO patent filing data across time periods and geographic regions to study the innovation impact of bank failures.',
            source:'FDIC · USPTO · Federal Reserve',
            size:'Large (in progress)',
            format:'Python · CSV',
            status:'IN PROGRESS',
            statusColor:'#7F77DD',
            statusBg:'rgba(127,119,221,0.1)',
            tag:'BANKING · INNOVATION',
          },
        ].map(({title,description,source,size,format,status,statusColor,statusBg,tag}) => (
          <div key={title} style={{background:'#111118',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'28px',marginBottom:'16px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'16px',flexWrap:'wrap'}}>
              <div style={{fontSize:'10px',color:statusColor,background:statusBg,borderRadius:'4px',padding:'3px 8px',letterSpacing:'0.05em'}}>{status}</div>
              <div style={{fontSize:'10px',color:'#7F77DD',background:'rgba(127,119,221,0.1)',borderRadius:'4px',padding:'3px 8px',letterSpacing:'0.05em'}}>{tag}</div>
            </div>
            <h3 style={{fontSize:'17px',fontWeight:'500',color:'rgba(255,255,255,0.9)',marginBottom:'10px',lineHeight:'1.4'}}>{title}</h3>
            <p style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',lineHeight:'1.7',marginBottom:'16px'}}>{description}</p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px'}}>
              <div style={{background:'rgba(255,255,255,0.03)',borderRadius:'6px',padding:'10px'}}>
                <div style={{fontSize:'10px',color:'rgba(255,255,255,0.25)',marginBottom:'4px'}}>SOURCE</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)'}}>{source}</div>
              </div>
              <div style={{background:'rgba(255,255,255,0.03)',borderRadius:'6px',padding:'10px'}}>
                <div style={{fontSize:'10px',color:'rgba(255,255,255,0.25)',marginBottom:'4px'}}>SIZE</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)'}}>{size}</div>
              </div>
              <div style={{background:'rgba(255,255,255,0.03)',borderRadius:'6px',padding:'10px'}}>
                <div style={{fontSize:'10px',color:'rgba(255,255,255,0.25)',marginBottom:'4px'}}>FORMAT</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)'}}>{format}</div>
              </div>
            </div>
          </div>
        ))}

        <div style={{marginTop:'40px',background:'rgba(29,158,117,0.06)',border:'0.5px solid rgba(29,158,117,0.2)',borderRadius:'12px',padding:'28px'}}>
          <div style={{fontSize:'14px',fontWeight:'500',color:'rgba(255,255,255,0.85)',marginBottom:'8px'}}>Interested in collaborating?</div>
          <div style={{fontSize:'13px',color:'rgba(255,255,255,0.4)',marginBottom:'16px',lineHeight:'1.7'}}>If you're a researcher, journalist, or institution interested in accessing or collaborating on any of these datasets, reach out directly.</div>
          <a href="mailto:jamesbuteera97@gmail.com" style={{fontSize:'12px',color:'#1D9E75',textDecoration:'none'}}>jamesbuteera97@gmail.com →</a>
        </div>
      </section>

    </main>
  );
}