// Research Focus node popup data
const NODE_DATA = {
  hpc: {
    title: 'High Performance Computing',
    desc: 'I build and optimize parallel algorithms on multi-node HPC clusters using Chapel, MPI, and Arkouda — achieving orders-of-magnitude speedups on billion-edge graphs.',
    links: [
      { label: 'Arkouda-NJIT GitHub', icon: 'fab fa-github', url: 'https://github.com/Bears-R-Us/arkouda-njit/tree/cm' }
    ]
  },
  'parallel-graph': {
    title: 'Parallel Graph Algorithms',
    desc: 'My published work introduces HiPerMotif — a hybrid-parallel subgraph isomorphism algorithm validated on a 147M-edge human cortex connectome with 3–10× improvements over state-of-the-art.',
    links: [
      { label: 'HiPerMotif Paper — IEEE HPEC 2025', icon: 'fas fa-file-alt', url: 'https://arxiv.org/abs/2507.04130' },
      { label: 'GitHub Branch', icon: 'fab fa-github', url: 'https://github.com/Bears-R-Us/arkouda-njit/tree/HiPerMotif-Paper' }
    ]
  },
  'large-scale': {
    title: 'Large-Scale Graph Analytics',
    desc: 'I contribute to Arachne — a graph analytics framework built on Arkouda — designing algorithms and data structures for billion-edge analysis on distributed HPC systems.',
    links: [
      { label: 'Arkouda-NJIT GitHub', icon: 'fab fa-github', url: 'https://github.com/Bears-R-Us/arkouda-njit/tree/cm' }
    ]
  },
  distributed: {
    title: 'Distributed Programming',
    desc: 'I implemented a distributed aggregation framework prototype in Chapel with HPE, achieving a 76× speedup — and presented the results as a talk at ChapelCon 2025.',
    links: [
      { label: 'Arkouda-NJIT GitHub (cm branch)', icon: 'fab fa-github', url: 'https://github.com/Bears-R-Us/arkouda-njit/tree/cm' },
      { label: 'Chapel CopyAggregation Module', icon: 'fab fa-github', url: 'https://github.com/chapel-lang/chapel/blob/main/modules/packages/CopyAggregation.chpl' },
      { label: 'Aggregation Framework PDF', icon: 'fas fa-file-pdf', url: 'slides/Toward_A_General_Aggregation_Framework_In_Chapel.pdf' }
    ]
  },
  algorithm: {
    title: 'Algorithm Design',
    desc: 'I design scalable algorithms for real-world graph datasets — from community detection on neural connectomes to fraud detection in large-scale blockchain transaction graphs.',
    links: [
      { label: 'Arkouda-NJIT GitHub (Cluster_Analysis)', icon: 'fab fa-github', url: 'https://github.com/Bears-R-Us/arkouda-njit/tree/Cluster_Analysis' },
      { label: 'CAM Project Slides', icon: 'fas fa-file-powerpoint', url: 'slides/CAM Project Presentation.pptx' }
    ]
  },
  ml: {
    title: 'Machine Learning & AI',
    desc: 'I apply ML and AI to graph analytics and anomaly detection — from GNNs for fraud detection to LangGraph multi-agent pipelines and a full-cycle prediction app deployed on AWS.',
    links: [
      { label: 'ML Project GitHub', icon: 'fab fa-github', url: 'https://github.com/bartoszbryg/machine-learning-project' }
    ]
  },
  community: {
    title: 'Network Community Detection',
    desc: 'I developed optimized parallel WCC algorithms scaling to 2B+ edge graphs in under 10 minutes on 128 cores — with two co-authored research papers from this work.',
    links: [
      { label: 'WCC Optimization Paper', icon: 'fas fa-file-alt', url: 'https://arxiv.org/abs/2509.02590' },
      { label: 'WCC Extreme Scale Paper', icon: 'fas fa-file-alt', url: 'https://doi.org/10.21203/rs.3.rs-8991284/v1' },
      { label: 'IKC Presentation', icon: 'fas fa-file-powerpoint', url: 'slides/IKC Presentation.pptx' }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Inject last-updated date (written by pre-commit hook into index.html)
  const el = document.getElementById('last-updated-date');
  if (el && !el.textContent.trim()) {
    // Fallback: use browser's document.lastModified if no date was injected
    const d = new Date(document.lastModified);
    el.textContent = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  // Node popup logic
  const modal = document.getElementById('node-modal');
  const mTitle = document.getElementById('node-modal-title');
  const mDesc = document.getElementById('node-modal-desc');
  const mMyWork = document.getElementById('node-modal-mywork');
  const mLearn = document.getElementById('node-modal-learnmore');
  const mClose = document.querySelector('.node-modal-close');

  const linksContainer = document.getElementById('node-modal-links');

  document.querySelectorAll('.node[data-node]').forEach(node => {
    node.addEventListener('click', () => {
      const data = NODE_DATA[node.dataset.node];
      if (!data) return;
      mTitle.textContent = data.title;
      mDesc.textContent = data.desc;
      linksContainer.innerHTML = '';

      data.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = 'node-btn node-btn--primary';
        a.innerHTML = `<i class="${link.icon}"></i><span>${link.label}</span>`;
        linksContainer.appendChild(a);
      });
      modal.classList.add('active');
    });
  });

  const closeModal = () => modal.classList.remove('active');
  mClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { 
    if (e.target === modal) 
      closeModal(); 
    });
  document.addEventListener('keydown', e => { 
    if (e.key === 'Escape') closeModal(); 
  });

  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.course-card');
      const type = btn.getAttribute('data-type');
      const section = card.querySelector(`.${type}`);
      const isVisible = getComputedStyle(section).display === 'block';

      section.style.display = isVisible ? 'none' : 'block';

      if (type === 'description') {
        btn.textContent = isVisible ? '▼ Show Description' : '▲ Hide Description';
      } else if (type === 'course-projects') {
        btn.textContent = isVisible ? '▼ Show Projects' : '▲ Hide Projects';
      }
    });
  });
});