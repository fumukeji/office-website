<script lang='ts'>
  import Banner from '$comp/hero/Banner.svelte';
</script>

<svelte:head>
  <title>重庆浮木科技有限公司 - FuMu</title>
  <meta name='Keywords' content='浮木科技, FuMu' />
  <meta name='Description' content='让科技不止僵硬和冷漠：浮木致力于将前沿技术与人文关怀融合在一起，为客户提供优质服务。' />
</svelte:head>



<Banner />

<div class='container mx-auto py-20 px-8'>
  <p class='text-2xl max-w-xl'>浮木可以为您提供<s>企业品牌形象设计、</s>软件架构开发、网站设计、互联网产品开发<s>、网络安全渗透测试、开源情报收集、网络推广</s>等专业服务。</p>
</div>


<style>
  p>s {opacity: 0.3;}
</style>