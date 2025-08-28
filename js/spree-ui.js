// Pause marquee on hover/focus for accessibility
document.addEventListener('DOMContentLoaded', () => {
  const tracks = document.querySelectorAll('.logos-marquee .track');
  tracks.forEach(track => {
    const parent = track.closest('.logos-marquee');
    parent.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    parent.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
    parent.addEventListener('focusin',   () => track.style.animationPlayState = 'paused');
    parent.addEventListener('focusout',  () => track.style.animationPlayState = 'running');
  });
});

// Optional equal heights for .box rows (desktop only)
function equalizeFeatureHeights(){
  if (window.matchMedia('(max-width: 1024px)').matches) {
    document.querySelectorAll('.three-cols-photos-grid .box').forEach(b => b.style.height = 'auto');
    return;
  }
  document.querySelectorAll('.three-cols-photos-grid').forEach(grid=>{
    const boxes = Array.from(grid.querySelectorAll('.box'));
    boxes.forEach(b => b.style.height = 'auto');
    let rowTop = null, row = [];
    boxes.forEach(b=>{
      const top = b.getBoundingClientRect().top;
      if (rowTop === null) rowTop = top;
      if (Math.abs(top - rowTop) < 2) {
        row.push(b);
      } else {
        const h = Math.max(...row.map(x => x.offsetHeight));
        row.forEach(x => x.style.height = h + 'px');
        row = [b]; rowTop = top;
      }
    });
    if (row.length) {
      const h = Math.max(...row.map(x => x.offsetHeight));
      row.forEach(x => x.style.height = h + 'px');
    }
  });
}
window.addEventListener('load', equalizeFeatureHeights);
window.addEventListener('resize', () => { clearTimeout(window.__eqf); window.__eqf = setTimeout(equalizeFeatureHeights, 120); });
