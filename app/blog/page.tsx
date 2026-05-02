import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Blog() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir);
  
  const posts = files
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8');
      const { data } = matter(raw);
      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date,
        tag: data.tag,
        excerpt: data.excerpt,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
          <span style={{fontSize:'11px',color:'#AFA9EC',letterSpacing:'0.06em'}}>PUBLISHED WRITING</span>
        </div>

        <h1 style={{fontSize:'38px',fontWeight:'500',lineHeight:'1.18',color:'#fff',marginBottom:'12px'}}>
          Articles &<br/><span style={{color:'#7F77DD'}}>analysis.</span>
        </h1>
        <p style={{fontSize:'15px',color:'rgba(255,255,255,0.4)',lineHeight:'1.7',marginBottom:'48px',maxWidth:'500px'}}>
          Original writing published directly on Quantavox. No algorithm. No paywall. Just the work.
        </p>

        {posts.map(({slug,title,date,tag,excerpt}) => (
          <Link key={slug} href={`/blog/${slug}`} style={{display:'block',textDecoration:'none',background:'#111118',border:'0.5px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'28px',marginBottom:'16px'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'12px'}}>
              <div style={{fontSize:'10px',color:'#7F77DD',background:'rgba(127,119,221,0.1)',borderRadius:'4px',padding:'3px 8px',letterSpacing:'0.05em'}}>{tag}</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.25)'}}>{new Date(date).toLocaleDateString('en-US',{month:'long',year:'numeric'})}</div>
            </div>
            <h3 style={{fontSize:'17px',fontWeight:'500',color:'rgba(255,255,255,0.9)',marginBottom:'10px',lineHeight:'1.4'}}>{title}</h3>
            <p style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',lineHeight:'1.7',marginBottom:'16px'}}>{excerpt}</p>
            <div style={{fontSize:'12px',color:'#7F77DD'}}>Read article →</div>
          </Link>
        ))}
      </section>
    </main>
  );
}