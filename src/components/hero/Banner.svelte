<script type='ts'>
  // Import Swiper Svelte components
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Pagination, EffectFade } from 'swiper';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';
  // Custom styles
  import './banner.css';
</script>


<Swiper
  modules={[Pagination, EffectFade]}
  loop={true}
  spaceBetween={0}
  slidesPerView={1}
  pagination={{ clickable: true }}
  effect='fade'
  class='w-full h-screen'
>
  <SwiperSlide>
    <img class='swiper-slide-image' src='/images/banner/tree.jpg' alt='banner' />
    <div class='swiper-slide-content'>
      <div class='swiper-slide-title'>FuMu Technology</div>
      <div class='swiper-slide-text'>让科技不止僵硬和冷漠：浮木致力于将前沿技术与人文关怀融合在一起，为客户提供优质服务。</div>

      <label for='coding-modal' class='mt-6 btn btn-outline btn-accent px-6'>了解更多</label>
    </div>
    <svg class='swiper-slide-wave absolute top-0 left-0' viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="hsla(var(--pf) / 0.4)" offset="0%"></stop><stop stop-color="hsl(var(--p))" offset="100%"></stop></linearGradient></defs>
      <path style="transform:translate(0, -20px); opacity:1" fill="url(#sw-gradient-0)" d="M0,343L80,318.5C160,294,320,245,480,212.3C640,180,800,163,960,138.8C1120,114,1280,82,1440,57.2C1600,33,1760,16,1920,81.7C2080,147,2240,294,2400,343C2560,392,2720,343,2880,318.5C3040,294,3200,294,3360,285.8C3520,278,3680,261,3840,277.7C4000,294,4160,343,4320,310.3C4480,278,4640,163,4800,122.5C4960,82,5120,114,5280,106.2C5440,98,5600,49,5760,40.8C5920,33,6080,65,6240,106.2C6400,147,6560,196,6720,220.5C6880,245,7040,245,7200,228.7C7360,212,7520,180,7680,212.3C7840,245,8000,343,8160,343C8320,343,8480,245,8640,196C8800,147,8960,147,9120,155.2C9280,163,9440,180,9600,187.8C9760,196,9920,196,10080,236.8C10240,278,10400,359,10560,351.2C10720,343,10880,245,11040,171.5C11200,98,11360,49,11440,24.5L11520,0L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"></path>
      <defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="hsl(var(--pf))" offset="0%"></stop><stop stop-color="hsl(var(--p))" offset="100%"></stop></linearGradient></defs>
      <path style="transform:translate(0, 30px); opacity:0.9" fill="url(#sw-gradient-1)" d="M0,441L80,408.3C160,376,320,310,480,302.2C640,294,800,343,960,302.2C1120,261,1280,131,1440,114.3C1600,98,1760,196,1920,212.3C2080,229,2240,163,2400,163.3C2560,163,2720,229,2880,253.2C3040,278,3200,261,3360,245C3520,229,3680,212,3840,196C4000,180,4160,163,4320,187.8C4480,212,4640,278,4800,310.3C4960,343,5120,343,5280,326.7C5440,310,5600,278,5760,245C5920,212,6080,180,6240,204.2C6400,229,6560,310,6720,326.7C6880,343,7040,294,7200,285.8C7360,278,7520,310,7680,334.8C7840,359,8000,376,8160,375.7C8320,376,8480,359,8640,351.2C8800,343,8960,343,9120,310.3C9280,278,9440,212,9600,228.7C9760,245,9920,343,10080,359.3C10240,376,10400,310,10560,236.8C10720,163,10880,82,11040,81.7C11200,82,11360,163,11440,204.2L11520,245L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"></path>
    </svg>
  </SwiperSlide>
  <SwiperSlide>
    <img class='swiper-slide-image' src='/images/banner/forest-growth.jpg' alt='banner' />
    <div class='swiper-slide-content'>
      <div class='swiper-slide-title'>浮木 · 科技</div>
      <div class='swiper-slide-text'>我们成员的绝大部分是由全栈资深专家所组成，拥有丰富的行业经验及实际开发经历，凭借创新精神使客户的产品在竞争激烈的市场中脱颖而出。</div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <img class='swiper-slide-image' src='/images/banner/kids.jpg' alt='banner' />
    <div class='swiper-slide-content'>
      <div class='swiper-slide-title'>浮木 · 人文</div>
      <div class='swiper-slide-text'>在浮木，我们坚信科技不是冰冷的数字，它还需要被注入大量的人情温暖。我们相信，只有将人文关怀与前沿技术结合起来，才能真正地为客户提供最优质的服务。</div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <img class='swiper-slide-image' src='/images/banner/starrysky.jpg' alt='banner' />
    <div class='swiper-slide-content'>
      <div class='swiper-slide-title'>浮木 · 未来</div>
      <div class='swiper-slide-text'>在未来，浮木科技将继续致力于成为全球技术领先的软件开发公司。我们将不断探索新的技术，并与业界同行共同分享知识和经验。</div>
    </div>
  </SwiperSlide>

</Swiper>


<input type="checkbox" id="coding-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Coding...</h3>
    <p class="py-4">网站正在建设中，敬请赐侯。</p>
    <div class="modal-action">
      <label for="coding-modal" class="btn">我知道了</label>
    </div>
  </div>
</div>