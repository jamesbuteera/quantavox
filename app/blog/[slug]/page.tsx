import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  const paragraphs = content.split('\n').filter(line => line.trim() !== '');

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

      <article style={{padding:'64px 32px',maxWidth:'680px'}}>
        <a href="/blog" style={{fontSize:'12px',color:'rgba(255,255,255,0.3)',textDecoration:'none',display:'block',marginBottom:'32px'}}>← Back to writing</a>

        <div style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'rgba(127,119,221,0.12)',border:'0.5px solid rgba(127,119,221,0.3)',borderRadius:'20px',padding:'4px 12px',marginBottom:'24px'}}>
          <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#7F77DD'}}></div>
          <span style={{fontSize:'11px',color:'#AFA9EC',letterSpacing:'0.06em'}}>{data.tag?.toUpperCase()}</span>
        </div>

        <h1 style={{fontSize:'36px',fontWeight:'500',lineHeight:'1.2',color:'#fff',marginBottom:'16px'}}>{data.title}</h1>

        <div style={{fontSize:'13px',color:'rgba(255,255,255,0.3)',marginBottom:'48px'}}>
          {new Date(data.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}
        </div>

        <div>
          {paragraphs.map((para, i) => {
            if (para.startsWith('## ')) {
              return <h2 key={i} style={{fontSize:'22px',fontWeight:'500',color:'#fff',margin:'40px 0 16px'}}>{para.replace('## ','')}</h2>;
            }
            if (para.startsWith('# ')) {
              return <h1 key={i} style={{fontSize:'28px',fontWeight:'500',color:'#fff',margin:'40px 0 16px'}}>{para.replace('# ','')}</h1>;
            }
            if (para.startsWith('- ')) {
              return <li key={i} style={{fontSize:'16px',color:'rgba(255,255,255,0.6)',lineHeight:'1.8',marginLeft:'20px',marginBottom:'8px'}}>{para.replace('- ','')}</li>;
            }
            return <p key={i} style={{fontSize:'16px',color:'rgba(255,255,255,0.6)',lineHeight:'1.8',marginBottom:'24px'}}>{para}</p>;
          })}
        </div>

        <div style={{marginTop:'64px',paddingTop:'32px',borderTop:'0.5px solid rgba(255,255,255,0.08)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontSize:'13px',color:'rgba(255,255,255,0.3)'}}>Written by James Buteera</div>
          <a href="/blog" style={{fontSize:'12px',color:'#7F77DD',textDecoration:'none'}}>More writing →</a>
        </div>
      </article>
    </main>
  );
}