import React from 'react';

export function Publication({ title, authors, venue, year, links }) {
  return (
    <div className="publication-item">
      <h3 className="publication-title">{title}</h3>
      <div className="publication-authors">{authors}</div>
      <div className="publication-venue">{venue} {year}</div>
      {links && links.length > 0 && (
        <div className="publication-links" style={{ display: "flex", gap: "12px" }}>
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export const publications = [
  {
    title: 'Fast KV Compaction via Attention Matching',
      authors: (
        <>
          <strong>Adam Zweiger</strong>, Xinghong Fu, Han Guo, Yoon Kim
        </>
      ),
      venue: 'ICML',
      year: '2026',
      links: [
        { label: 'Paper', href: 'https://arxiv.org/abs/2602.16284' },
        { label: 'Code', href: 'https://github.com/adamzweiger/compaction' },
      ]
    },
    {
      title: 'Self-Adapting Language Models',
      authors: (
        <>
          <strong>Adam Zweiger*</strong>, Jyothish Pari*, Han Guo, Ekin Akyürek, Yoon Kim, Pulkit Agrawal
        </>
      ),
      venue: 'NeurIPS',
      year: '2025',
      links: [
        { label: 'Paper', href: 'https://arxiv.org/abs/2506.10943' },
        { label: 'Website', href: 'https://jyopari.github.io/posts/seal' },
        { label: 'Code', href: 'https://github.com/Continual-Intelligence/SEAL' },
      ]
    },
    {
      title: 'The Surprising Effectiveness of Test-Time Training for Few-Shot Learning',
      authors: (
        <>
          Ekin Akyürek, Mehul Damani*, <strong>Adam Zweiger*</strong>, Linlu Qiu, Han Guo, Jyothish Pari, Yoon Kim, Jacob Andreas
        </>
      ),
      venue: 'ICML',
      year: '2025',
      links: [
        { label: 'Paper', href: 'https://arxiv.org/abs/2411.07279' },
        { label: 'Poster', href: 'https://x.com/AdamZweiger/status/1944886019117211667'},
        { label: 'Code 1', href: 'https://github.com/ekinakyurek/marc' },
        { label: 'Code 2', href: 'https://github.com/adamzweiger/Fewshot-TTT' }
      ]
    }
  ];

function Research() {
  return (
    <div className="research">
      <h2>Research</h2>
      <div className="publication-list">
        {publications.map((pub, index) => (
          <Publication key={index} {...pub} />
        ))}
      </div>
    </div>
  );
}

export default Research;


