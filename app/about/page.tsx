export default function About() {
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

      <section style={{padding:'64px 32px',maxWidth:'720px'}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'rgba(127,119,221,0.12)',border:'0.5px solid rgba(127,119,221,0.3)',borderRadius:'20px',padding:'4px 12px',marginBottom:'24px'}}>
          <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#7F77DD'}}></div>
          <span style={{fontSize:'11px',color:'#AFA9EC',letterSpacing:'0.06em'}}>ABOUT JAMES BUTEERA</span>
        </div>

        <h1 style={{fontSize:'38px',fontWeight:'500',lineHeight:'1.18',color:'#fff',marginBottom:'24px'}}>
          Economist. Researcher.<br/><span style={{color:'#7F77DD'}}>Builder.</span>
        </h1>

        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.6)',lineHeight:'1.8',marginBottom:'20px'}}>
          My journey into economics began with a deep-seated curiosity about the "why" behind global trade — specifically how systems of comparative advantage allow disparate companies to thrive together. This interest led me to the University of California, Riverside for my Bachelor's in Business Economics and eventually to The Catholic University of America for my Master's in Applied Economics.
        </p>

        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.6)',lineHeight:'1.8',marginBottom:'20px'}}>
          Throughout my academic career, I've never been content just observing the market — I wanted to deconstruct it. At Catholic University, I've transitioned from student to researcher, using Stata and R to analyze how variables like technology access and the rule of law impact GDP in OECD countries.
        </p>

        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.6)',lineHeight:'1.8',marginBottom:'20px'}}>
          Beyond the classroom, I've spent over nine years in the high-stakes logistics environments of Amazon, Thibaut Design, and Saddle Creek Logistics. These roles taught me that data is only as good as the action it inspires.
        </p>

        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.6)',lineHeight:'1.8',marginBottom:'40px'}}>
          Today, my focus is on the intersection of banking and innovation. I am currently building a comprehensive dataset to study how bank failures impact future patents — a project that allows me to flex my skills in Python, R, SPSS, Stata, and SAS. My long-term goal is to work within a high-growth firm where I can push the boundaries of quantitative research.
        </p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px',marginBottom:'40px'}}>
          {[
            {label:'Education',value:'MA Applied Economics · CUA\nBA Business Economics · UC Riverside'},
            {label:'Skills',value:'Python · R · Stata · SQL · SAS · SPSS'},
            {label:'Focus',value:'Banking · Innovation · Development\nEnergy · Institutional Economics'},
            {label:'Location',value:'Washington, DC\nOpen to remote & hybrid'},
          ].map(({label,value}) => (
            <div key={label} style={{background:'#111118',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'10px',padding:'20px'}}>
              <div style={{fontSize:'11px',color:'rgba(255,255,255,0.3)',letterSpacing:'0.1em',marginBottom:'8px'}}>{label.toUpperCase()}</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.7)',lineHeight:'1.6',whiteSpace:'pre-line'}}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{display:'flex',gap:'12px'}}>
          <a href="https://www.linkedin.com/in/jamesbuteera/" target="_blank" style={{background:'#534AB7',color:'#fff',border:'none',padding:'11px 22px',borderRadius:'8px',fontSize:'13px',fontWeight:'500',cursor:'pointer',textDecoration:'none'}}>LinkedIn</a>
          <a href="https://medium.com/@butera1983" target="_blank" style={{background:'transparent',color:'rgba(255,255,255,0.6)',border:'0.5px solid rgba(255,255,255,0.15)',padding:'11px 22px',borderRadius:'8px',fontSize:'13px',cursor:'pointer',textDecoration:'none'}}>Medium</a>
          <a href="https://www.youtube.com/@QuantavoxVeravoxa" target="_blank" style={{background:'transparent',color:'rgba(255,255,255,0.6)',border:'0.5px solid rgba(255,255,255,0.15)',padding:'11px 22px',borderRadius:'8px',fontSize:'13px',cursor:'pointer',textDecoration:'none'}}>YouTube</a>
        </div>
      </section>

    </main>
  );
}