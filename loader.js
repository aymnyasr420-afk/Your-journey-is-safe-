
/* RideNow loader: شريط تحميل وعربية بتمشي. التقدم حقيقي: كل خطوة بتخلص بتحرّك العربية. */
(function(){
  var css = '.ld{position:fixed;inset:0;z-index:500;background:linear-gradient(180deg,#0f2a5c,#0b1d40);display:none;flex-direction:column;align-items:center;justify-content:center;padding:28px;color:#fff;text-align:center;font-family:Cairo,system-ui,sans-serif;direction:rtl}'
  + '.ld.show{display:flex}'
  + '.ld .lg{width:92px;height:92px;object-fit:contain;margin-bottom:6px}'
  + '.ld h3{font-size:26px;font-weight:800;margin-bottom:34px}'
  + '.ld .roadw{width:100%;max-width:440px;padding:0 34px}'
  + '.ld .road{position:relative;height:52px}'
  + '.ld .track{position:absolute;bottom:0;right:0;left:0;height:8px;border-radius:99px;background:#2d4a85;overflow:hidden}'
  + '.ld .track i{display:block;height:100%;width:0;border-radius:99px;background:linear-gradient(270deg,#1a6fe0,#2fd16f);transition:width .45s ease}'
  + '.ld .car{position:absolute;bottom:9px;right:0;width:68px;height:36px;transform:translateX(50%);transition:right .45s ease}'
  + '.ld .wh{transform-box:fill-box;transform-origin:center;animation:ldw .45s linear infinite}'
  + '.ld .pc{font-size:30px;font-weight:800;margin-top:18px}'
  + '.ld .lb2{font-size:14px;color:#b9c6e4;margin-top:6px;min-height:22px}'
  + '@keyframes ldw{to{transform:rotate(-360deg)}}';
  var CAR = '<svg class="car" viewBox="0 0 64 36" aria-hidden="true">'
  + '<path d="M3 25V19q0-2.500 3-3l9-2 7-7.500h21l8 7.500 7 1.500q3 .8 3 3.500V25z" fill="#f5c400"/>'
  + '<path d="M23 8.500h8V14H18.500zM34 8.500h8.500l6 5.500H34z" fill="#cfe6ff"/>'
  + '<rect x="28" y="4" width="10" height="3.500" rx="1" fill="#f5c400" stroke="#b58f00" stroke-width=".6"/>'
  + '<rect x="3" y="21.500" width="4" height="2.500" rx="1" fill="#fff6c2"/>'
  + '<g><circle cx="16" cy="26.500" r="5.500" fill="#1b2433"/><g class="wh"><circle cx="16" cy="26.500" r="2.200" fill="#9aa7bd"/><path d="M16 24.300v4.400" stroke="#1b2433" stroke-width="1"/></g></g>'
  + '<g><circle cx="47" cy="26.500" r="5.500" fill="#1b2433"/><g class="wh"><circle cx="47" cy="26.500" r="2.200" fill="#9aa7bd"/><path d="M47 24.300v4.400" stroke="#1b2433" stroke-width="1"/></g></g>'
  + '</svg>';
  var el = null;
  function build(){
    if (el) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    el = document.createElement('div'); el.className = 'ld';
    el.innerHTML = '<img class="lg" src="logo.png" alt=""><h3>RideNow</h3>'
      + '<div class="roadw"><div class="road">' + CAR + '<div class="track"><i></i></div></div></div>'
      + '<p class="pc">0%</p><p class="lb2"></p>';
    document.body.appendChild(el);
  }
  window.LD = {
    show: function(t){ build(); this.set(0, t || ''); el.classList.add('show'); },
    set: function(p, label){
      build();
      var r = Math.max(0, Math.min(100, Math.round(p * 100)));
      el.querySelector('.car').style.right = r + '%';
      el.querySelector('.track i').style.width = r + '%';
      el.querySelector('.pc').textContent = r + '%';
      if (label != null) el.querySelector('.lb2').textContent = label;
    },
    hide: function(){ if (el) el.classList.remove('show'); }
  };
})();
